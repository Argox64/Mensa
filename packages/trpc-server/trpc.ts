import { initTRPC } from "@trpc/server";
import { createTRPCContext } from "./context";
import { isAuthed, errorHandler } from "./middleware";

export const t = initTRPC.context<typeof createTRPCContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      customField: "value",
    };
  },
});

export const router = t.router;

export const publicProcedure = t.procedure.use(errorHandler());
export const privateProcedure = t.procedure.use(isAuthed()).use(errorHandler());
