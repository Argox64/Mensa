import { VALIDATION_UUID_ERROR } from "@cook/errors";
import { z } from "./customs";
import { RecipeSchema } from "./recipe";

export const uuidParamSchema = z
  .cstring()
  .uuid({ message: VALIDATION_UUID_ERROR.localKey });

export const ErrorResponseSchema = z.object({
  error: z.cstring(),
});

export const RecipeResponseSchema = z.object({
  recipe: RecipeSchema,
});

export const APIResponseSchema = z.union([
  RecipeResponseSchema,
  ErrorResponseSchema,
]);
