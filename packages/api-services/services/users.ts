import { SignIn, SignUp, User, UserLite } from "@cook/validations";
import { IContext } from "../context";
import { dateToyyyyMMddFormat } from "../utils/date";
import { FORBIDDEN_ERROR, ForbiddenError, INTERNAL_ERROR, InternalError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";

export async function signUp({ input, ctx }: { input: SignUp, ctx: IContext }) {
    const supabase = await ctx.supabase();
    const {
        data: { session, user },
        error,
    } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
    }); //WARNING : If in supabase email verification is enabled, the return session is NULL

    if (error)
        throw new ForbiddenError(FORBIDDEN_ERROR);

    if (!user || !session)
        throw new InternalError(INTERNAL_ERROR);

    const u = await ctx.prisma.user.create({
        data: {
            id: user.id,
            username: input.name,
            dietaryPreferences: [],
        },
    });

    return session;
}

export async function signIn({ ctx, input }: { ctx: IContext, input: SignIn }) {
    const supabase = await ctx.supabase();
    const {
        data: { session },
        error,
    } = await supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
    });

    if (error || !session) {
        if (error?.code === "invalid_credentials")
            throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR);
        throw new ForbiddenError(FORBIDDEN_ERROR)
    }

    const u = await ctx.prisma.user.findFirst({
        where: {
            id: session.user.id,
        },
    });
    return session;
}

export async function signOut({ ctx }: { ctx: IContext }) {
    const supabase = await ctx.supabase();
    await supabase.auth.signOut();
}

export async function getProfile({ ctx }: { ctx: IContext }) {

    const user = ctx.user as UserLite;
    const u = await ctx.prisma.user.findUnique({
        where: { id: user.id },
    });

    if (!u) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR);

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

export async function patchProfile({ ctx, input }: { ctx: IContext, input: Partial<User> }) {
    const user = ctx.user as UserLite;
    const supabase = await ctx.supabase();

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
    if (error) throw new InternalError(INTERNAL_ERROR);
    return data;
}