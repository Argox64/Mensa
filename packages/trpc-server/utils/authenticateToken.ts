import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../types/User";

export const authenticateToken = async (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

  return await verifyToken(token);
};

// Fonction pour vérifier le JWT
function verifyToken(token: string): Promise<User> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SUPABASE_JWT_SECRET!, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve(payload as User);
      }
    });
  });
}
