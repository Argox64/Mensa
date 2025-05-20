import { CommentSchema } from "./comment";
import { z as zc } from "./customs";
import { date, z } from "zod";

export const IngredientSchema = zc.object({ name: zc.string(), quantity: zc.number() })

export const RecipeListSchema = zc.string().array();

export const RecipeContentSchema = zc.object({
  title: zc.string(),
  description: zc.string(),
  ingredients: zc.array(IngredientSchema),
  steps: zc.array(zc.string()),
  preparationTime: zc.number(),
  cookingTime: zc.number(),
  nutrition: zc.object({
    calories: zc.number(),
    proteins: zc.number(),
    carbs: zc.number(),
    fats: zc.number(),
  }),
  difficulty: zc.number().min(1).max(4),
  notes: zc.array(zc.string()),
  timePerAdditionalPortion: zc.number(),
})

export const RecipeSchema = RecipeContentSchema.extend({
  id: zc.string().uuid(),
  tags: zc.array(zc.string()),
  imageUrl: zc.string().url().nullable(),
  createdAt: zc.string().date(),
  creatorId: zc.string().uuid(),
  comments: CommentSchema.array().optional(),
  likesCount: zc.number().default(0),
  Creator: zc.object({
    id: zc.string().uuid(),
    userName: zc.string(),
  }).optional()
});

export const NewRecipeSchema = RecipeSchema.omit({
  id: true,
  likesCount: true,
  createdAt: true,
  creatorId: true,
  comments: true,
  imageUrl: true
});

export const GenerateRecipeSchemaRequest = zc.object({
  action: zc.literal("generate"),
  tags: zc.array(zc.string()).optional(),
  maxPreparationAndCookingTime: zc.number().optional(),
  description: zc.string().optional()
})

export const ModifyRecipeSchemaRequest = zc.object({
  action: zc.literal("modify"),
  recipeId: zc.string().uuid(),
  userId: zc.string().uuid(),
  tags: zc.array(zc.string()).optional(),
  maxPreparationAndCookingTime: zc.number().optional(),
});

export const RecipeSchemaRequest = zc.discriminatedUnion("action", [
  GenerateRecipeSchemaRequest,
  ModifyRecipeSchemaRequest,
]);

export const RecipePlannerSchemaRequest = zc.object({
  /*recipes : zc.object({
    description: zc.cstring().optional(),
    tags: zc.string().array().optional(),
    maxPreparationAndCookingTime: zc.number().optional()
  }).array().min(1)*/
  tags: zc.string().array().optional(),
  maxPreparationAndCookingTime: zc.number().optional(),
  count: zc.number().min(1).max(30),
})


export const GetRecipesSchemaRequest = zc.object({
  searchTerm: zc.string().nullable(),
  offset: zc.number().min(0).default(0),
  limit: zc.number().min(1).max(100).default(10),
})

export type Ingredient = z.infer<typeof IngredientSchema>;
export type Recipe = z.infer<typeof RecipeSchema>;
export type RecipeContent = z.infer<typeof RecipeContentSchema>;
export type NewRecipe = z.infer<typeof NewRecipeSchema>;
export type RecipeRequest = z.infer<typeof RecipeSchemaRequest>
export type RecipePlannerRequest = z.infer<typeof RecipePlannerSchemaRequest>
export type GenerateRecipeRequest = z.infer<typeof GenerateRecipeSchemaRequest>;
export type ModifyRecipeRequest = z.infer<typeof ModifyRecipeSchemaRequest>;
export type RecipeRequestAction = z.infer<typeof RecipeSchemaRequest>["action"];
export type GetRecipesRequest = z.infer<typeof GetRecipesSchemaRequest>;