import { INTERNAL_ERROR, InternalError } from "@cook/errors";
import { createClient } from "@cook/supabasejs";
import { ITRPCContext } from "../context";
import { SignUp, UserLite } from "@cook/validations";
import { TRPCError } from "@trpc/server";
import { dateToyyyyMMddFormat } from "../utils/date";

export async function signUp({ input, ctx }: { input: SignUp, ctx: ITRPCContext }) {
    const supabase = await createClient();
    const {
        data: { session, user },
        error,
    } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
    }); //WARNING : If in supabase email verification is enabled, the return session is NULL

    if (error)
        throw new TRPCError({
            message: "Email or password incorrect",
            code: "FORBIDDEN",
        });

    if (!user || !session)
        throw new InternalError(INTERNAL_ERROR, {});

    const u = await ctx.prisma.user.create({
        data: {
            id: user.id,
            username: input.name,
            dietaryPreferences: [],
        },
    });

    return session;
}

export async function getProfile({ ctx }: { ctx: ITRPCContext }) {

    const user = ctx.user as UserLite;
    const u = await ctx.prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!u) throw new TRPCError({ message: "User not found", code: "UNAUTHORIZED" });

    return {
      id: u.id,
      username: u.username,
      dietaryPreferences: u.dietaryPreferences,
      createdAt: dateToyyyyMMddFormat(u.createdAt),
      updatedAt: dateToyyyyMMddFormat(u.updatedAt),
      email: user.email,
      aud: user.aud,
      stripeCustomerId: u.stripeCustomerId,
    }
}