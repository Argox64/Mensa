import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "@cook/validations";
import { createClient } from "@cook/supabasejs";
import { INVALID_TOKEN_ERROR, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { setCookies } from "./cookies";

export const authenticateToken = async (req: Request, res: Response) => {
  //const authHeader = req.headers["authorization"];
  //const token = authHeader && authHeader.split(" ")[1];

  const token = req.cookies["token"];
  const refresh_token = req.cookies["refresh-token"];

  if (!token) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error) {
    if (error?.code === "bad_jwt") {
      const { data, error } = await supabase.auth.refreshSession({ refresh_token: refresh_token });
      if (error) {
        res.clearCookie('token', {
          httpOnly: true,
          secure: true,
          path: '/',
        });
        res.clearCookie('refresh-token', {
          httpOnly: true,
          secure: true,
          path: '/',
        });
        throw new UnauthorizedError(INVALID_TOKEN_ERROR, {});
      }
      else {
        setCookies(res, data.session);
      }
    }
    throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});
  }

  if (!user)
    throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});


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
