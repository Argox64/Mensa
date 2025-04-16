import { z as zc } from "./customs";
import { z } from "zod";


export const UserSchema = zc.object({
  id: zc.string(),
  //name: zc.string(),
  email: zc.string().email().optional(),
  role: zc.string().optional(),
});

/*export const SignInRequest = z.object({
  email: z.string().email(),
  password: z.string(),
});*/

export const SignUpRequest = zc.object({
    name: zc.string().min(1),
    email: zc.string().email(),
    password: zc.string().min(8),
});

export type User = z.infer<typeof UserSchema>;