import { createClient } from "@cook/supabasejs";
import { publicProcedure, router } from "../trpc";
import { SignUpRequest } from "@cook/validations";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
  /*signIn: publicProcedure
    .input(SignInRequest)
    .mutation(async ({ input, ctx }) => {
      const supabase = await createClient();
      const {
        data: { session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      });
      if (error)
        throw new TRPCError({
          message: "Email or password incorrect",
          code: "FORBIDDEN",
        });
      return {
        session: session,
      };
    }),*/
    signUp: publicProcedure
    .input(SignUpRequest)
    .mutation(async ({ input, ctx }) => {
      const supabase = await createClient();
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
      });
      if (error)
        throw new TRPCError({
          message: "Email or password incorrect",
          code: "FORBIDDEN",
        });
      return {
        session: session,
      };
    }),
    /*me: privateProcedure
    .query(async ({ ctx }) => {
      if(!ctx.user) throw new TRPCError({ message: "Unauthorized", code: "UNAUTHORIZED" });
      else return ctx.user;
    })*/
});
