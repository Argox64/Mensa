import { initTRPC } from "@trpc/server";
import { createTRPCContext } from "./context";
import { isAuthed } from "./middleware";
import { HttpError } from "@cook/errors";

export const t = initTRPC.context<typeof createTRPCContext>().create({
  errorFormatter({ shape, error }) {
    if (error.cause instanceof HttpError)
      return {
        ...shape,
        data: {
          errorCode: error.cause?.errorCode,
          code: error.code,
        }
      };
    return shape;
  },
});

export const router = t.router;

export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuthed());
