import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createContext } from "@cook/api-services";

export const createTRPCContext = async ({
  req,
  res,
}: CreateExpressContextOptions) => {
  return await createContext(req, res);
};

export type ITRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;