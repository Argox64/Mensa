import { z as zc } from "./customs";
import { z } from "zod";

export const UserLiteSchema = zc.object({
  id: zc.string(),
  email: zc.string().email(),
  aud: zc.string(),
});

export const UserSchema = UserLiteSchema.extend({
  username: zc.string(),
  dietaryPreferences: zc.string().array().optional(),
  createdAt: zc.string().date(),
  updatedAt: zc.string().date(),
});

export const SignUpSchemaRequest = zc.object({
    name: zc.string().min(1),
    email: zc.string().email(),
    password: zc.string().min(8),
});

export const SignInSchemaRequest = SignUpSchemaRequest.pick({ email: true, password: true });

export const PatchUserSchema = zc.object({
  userName: zc.string().optional(),
  dietaryPreferences: zc.string().optional(),
})

export type UserLite = z.infer<typeof UserLiteSchema>;
export type User = z.infer<typeof UserSchema>;
export type SignUp = z.infer<typeof SignUpSchemaRequest>;
export type SignIn = z.infer<typeof SignInSchemaRequest>;
export type PatchUser = z.infer<typeof PatchUserSchema>;

