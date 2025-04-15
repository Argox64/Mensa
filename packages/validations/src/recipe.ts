import { z } from "./customs";

export const RecipeSchema = z.object({
  title: z.string(),
  ingredients: z.array(z.object({ name: z.string(), quantity: z.number() })),
  steps: z.array(z.string()),
  nutrition: z.object({
    calories: z.number(),
    proteins: z.number(),
    carbs: z.number(),
    fats: z.number(),
  }),
  notes: z.array(z.string()),
  tags: z.array(z.string()),
  preparationTime: z.number(),
  cookingTime: z.number(),
  timePerAdditionalPortion: z.number(),
});

export const RecipeSchemaRequest = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("generate"),
    userId: z.string().uuid(),
    tags: z.array(z.string()).optional(),
    maxPreparationAndCookingTime: z.number().optional(),
  }),
  z.object({
    action: z.literal("modify"),
    recipeId: z.string().uuid(),
    userId: z.string().uuid(),
    tags: z.array(z.string()).optional(),
    maxPreparationAndCookingTime: z.number().optional(),
  }),
]);
