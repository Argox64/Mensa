import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { authenticateToken } from "./utils/authenticateToken";
import { prisma } from "@cook/db";
import { openai } from "./openai";

export const createTRPCContext = async ({
  req,
  res,
}: CreateExpressContextOptions) => {


  //let user = req.headers["authorization"] ? 
  //await authenticateToken(req, res) : undefined;
  const user = req.cookies["token"] ? await authenticateToken(req, res) : undefined;

  return { req, res, user, prisma, openai };
};

export type ITRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;