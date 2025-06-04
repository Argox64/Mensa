import { TRPCError } from "@trpc/server";
import { t } from "./trpc";
import { UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";

export const isAuthed = () =>
  t.middleware(async ({ ctx, next }) => {
    if (!ctx.user || ctx.user.role !== "authenticated") {
      console.log("UNAUTHORIZED");
      throw new TRPCError({ code: "UNAUTHORIZED", cause: new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR) });
    }

    return next({
      ctx: {
        ...ctx,
        // infers that `user` is non-nullable to downstream resolvers
        user: ctx.user,
      },
    });
  });