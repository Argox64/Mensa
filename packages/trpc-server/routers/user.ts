import { privateProcedure, publicProcedure, router } from "../trpc";
import { SignInSchemaRequest, SignUpSchemaRequest, UserLite, UserSchema } from "@cook/validations";
import { setCookies, clearCookies, signUp, getProfile, patchProfile, signIn, signOut } from "@cook/api-services";

export const userRouter = router({
  patchUser: privateProcedure
    .input(UserSchema)
    .mutation(async ({ input, ctx }) => {
      return await patchProfile({ ctx, input });
    }),
  signUp: publicProcedure
    .input(SignUpSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      const session = await signUp({input, ctx});

      setCookies(ctx.res, session);
      return session.user;
    }),
  signIn: publicProcedure
    .input(SignInSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      const session = await signIn({ ctx, input });

      setCookies(ctx.res, session);

      return session.user;
    }),
  me: privateProcedure
    .query(async ({ ctx }) => {
      return ctx.user as UserLite;
    }),
  getProfile: privateProcedure
    .output(UserSchema)
    .query(async ({ ctx }) => {
      return await getProfile({ctx});
    }),
  signOut: privateProcedure
    .mutation(async ({ ctx }) => {
      await signOut({ ctx });
      clearCookies(ctx.res);
    })
});