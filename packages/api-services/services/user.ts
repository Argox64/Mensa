import { FORBIDDEN_ERROR, ForbiddenError, INTERNAL_ERROR, InternalError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { createClient } from "@cook/supabasejs";
import { SignUp, UserLite } from "@cook/validations";
import { dateToyyyyMMddFormat } from "../utils/date";
import { prisma } from "@cook/db";

export async function signIn({ input }: { input: SignUp }) {
    const supabase = await createClient();
    const {
        data: { session, user },
        error,
    } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
    }); //WARNING : If in supabase email verification is enabled, the return session is NULL

    if (error)
        throw new ForbiddenError(FORBIDDEN_ERROR, {});

    if (!user || !session)
        throw new InternalError(INTERNAL_ERROR, {});

    const u = await prisma.user.create({
        data: {
            id: user.id,
            username: input.name,
            dietaryPreferences: [],
        },
    });

    return session;
}

export async function getProfile(user: UserLite) {
    const u = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!u) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

    return {
      id: u.id,
      username: u.username,
      dietaryPreferences: u.dietaryPreferences,
      createdAt: dateToyyyyMMddFormat(u.createdAt),
      updatedAt: dateToyyyyMMddFormat(u.updatedAt),
      email: user.email,
      aud: user.aud,
    }
}