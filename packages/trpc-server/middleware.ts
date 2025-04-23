import { TRPCError } from "@trpc/server";
import { t } from "./trpc";
import { HttpError, INTERNAL_ERROR } from "@cook/errors";
import { TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc";

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

export const errorHandler = () =>
  t.middleware(async ({ ctx, next }) => {
    try {
      return await next({
        ctx: {
          ...ctx,
        },
      });
    } catch (e) {
      const error = e as Error;
      if (e instanceof HttpError) {
        const err = e as HttpError;
        const errorCode = getErrorCode(err);
        throw new TRPCError({
          code: errorCode,
          cause: [
            {
              id: errorCode,
              message: error.message
            },
          ],
        })
      }
      else {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: [
            {
              id: INTERNAL_ERROR.code,
              message: error.message
            }
          ]
        })
      }
    }
  });

function getErrorCode(error: HttpError): TRPC_ERROR_CODE_KEY {
  switch (error.name) {
    case "BadRequest":
      return "BAD_REQUEST";
    case "Unauthorized":
      return "UNAUTHORIZED";
    case "NotAllowed":
      return "NOT_IMPLEMENTED";
    case "Forbidden":
      return "FORBIDDEN";
    case "NotFound":
      return "NOT_FOUND";
    case "Conflict":
      return "CONFLICT";
    case "Timeout":
      return "TIMEOUT";
    default:
      return "INTERNAL_SERVER_ERROR";
  }
}
