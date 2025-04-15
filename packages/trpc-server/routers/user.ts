import { publicProcedure, router } from "../trpc";
import { SignInRequest } from "@cook/validations";

export const userRouter = router({
  signIn: publicProcedure
    .input(SignInRequest)
    .mutation(async ({ input, ctx }) => {
        
    })
});