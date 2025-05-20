import { createClient } from "@cook/supabasejs";
import { privateProcedure, publicProcedure, router } from "../trpc";
import { SignInSchemaRequest, SignUpSchemaRequest, UserLite, UserSchema } from "@cook/validations";
import { TRPCError } from "@trpc/server";
import { INTERNAL_ERROR, InternalError } from "@cook/errors";
import { signIn, getProfile } from "../services/user";
import { setCookies } from "../utils/cookies";

export const userRouter = router({
  patchUser: privateProcedure
    .input(UserSchema)
    .mutation(async ({ input, ctx }) => {
      const user = ctx.user as UserLite;

      const supabase = await createClient();

      ctx.prisma.user.update({
        data: {
          username: input.username,
          dietaryPreferences: input.dietaryPreferences,
        },
        where: {
          id: user.id,
        }
      })
      const { data, error } = await supabase.auth.updateUser({
        data: {
          email: user.email,
        },
      });
      if (error) throw new TRPCError({ message: "Error updating user", code: "INTERNAL_SERVER_ERROR" });
      return data;
    }),
  signUp: publicProcedure
    .input(SignUpSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      const session = await signIn({input, ctx});

      setCookies(ctx.res, session);
      return {
        session: session,
      };
    }),
  signIn: publicProcedure
    .input(SignInSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      const supabase = await createClient();
      const {
        data: { session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      });

      if (!session)
        throw new InternalError(INTERNAL_ERROR, {});

      const u = await ctx.prisma.user.findFirst({
        where: {
          id: session.user.id,
        },
      });

      setCookies(ctx.res, session);

      if (error)
        throw new TRPCError({
          message: "Email or password incorrect",
          code: "FORBIDDEN",
        });
      return {
        session: session,
      };
    }),
  me: privateProcedure
    .query(async ({ ctx }) => {
      return ctx.user as UserLite;
    }),
  getProfile: privateProcedure
    .output(UserSchema)
    .query(async ({ ctx }) => {
      return await getProfile({ctx});
    })
});