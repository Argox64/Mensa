import { TRPCError } from "@trpc/server";
import { t } from "./trpc";

export const isAuthed = () =>
  t.middleware(async ({ ctx, next }) => {
    if (!ctx.user || ctx.user.role !== "authenticated") {
      console.log("UNAUTHORIZED");
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({
      ctx: {
        ...ctx,
        // infers that `user` is non-nullable to downstream resolvers
        user: ctx.user,
      },
    });
  });
