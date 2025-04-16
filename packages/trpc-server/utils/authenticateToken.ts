import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "@cook/validations";
import { createClient } from "@cook/supabasejs";

export const authenticateToken = async (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if(error || !user) throw new TRPCError({ code: "UNAUTHORIZED" });
  return user;
};

// This function is used to verify the JWT token and extract the user information from it. Only use in context of client side verification
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
