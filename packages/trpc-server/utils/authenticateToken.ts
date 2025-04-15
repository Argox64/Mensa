import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../types/User";
import { createServerSupabaseClient } from "@cook/supabase";

export const authenticateToken = async (req: Request, res: Response) => {
  //const authHeader = req.headers["authorization"];
  //const token = authHeader && authHeader.split(" ")[1];
  const supabase = await createServerSupabaseClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if(error || !user) throw new TRPCError({ code: "UNAUTHORIZED" });
  //if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

  //return await verifyToken(token);
  return user;
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
