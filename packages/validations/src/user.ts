import { z } from "./customs";

export const SignInRequest = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignUpRequest = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
});