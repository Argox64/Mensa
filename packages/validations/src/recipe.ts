import { z as zc } from "./customs";
import { z } from "zod";

export const RecipeSchema = zc.object({
  title: zc.string(),
  ingredients: zc.array(zc.object({ name: zc.string(), quantity: zc.number() })),
  steps: zc.array(zc.string()),
  nutrition: zc.object({
    calories: zc.number(),
    proteins: zc.number(),
    carbs: zc.number(),
    fats: zc.number(),
  }),
  notes: zc.array(zc.string()),
  tags: zc.array(zc.string()).optional(),
  preparationTime: zc.number(),
  cookingTime: zc.number(),
  timePerAdditionalPortion: zc.number(),
});

export const RecipeSchemaRequest = zc.discriminatedUnion("action", [
  zc.object({
    action: zc.literal("generate"),
    tags: zc.array(zc.string()).optional(),
    maxPreparationAndCookingTime: zc.number().optional(),
    description: zc.string().optional()
  }),
  zc.object({
    action: zc.literal("modify"),
    recipeId: zc.string().uuid(),
    userId: zc.string().uuid(),
    tags: zc.array(zc.string()).optional(),
    maxPreparationAndCookingTime: zc.number().optional(),
  }),
]);

export type Recipe = z.infer<typeof RecipeSchema>;