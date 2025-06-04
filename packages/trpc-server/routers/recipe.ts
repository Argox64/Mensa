import { BadRequestError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { privateProcedure, router } from "../trpc";
import { GetRecipesSchemaRequest, Recipe, RecipePlannerSchemaRequest, RecipeSchema, RecipeSchemaRequest, UserLite } from "@cook/validations";
import { getRecipes, getRecipeById, generateUniqueRecipe, generateRecipesList, likeRecipe, unlikeRecipe, getSavedRecipes } from "@cook/api-services"

export const recipeRouter = router({
  getRecipes: privateProcedure
    .input(GetRecipesSchemaRequest)
    .query(async ({ input, ctx }) => {
      return await getRecipes({ ctx, input });
    }),
  getRecipe: privateProcedure
    .input(RecipeSchema.pick({ id: true }))
    .query(async ({ input, ctx }) => {
      return await getRecipeById({ ctx, recipeId: input.id });
    }),
  processRecipe: privateProcedure
    .input(RecipeSchemaRequest)
    .output(RecipeSchema)
    .mutation(async ({ input, ctx }) => {

      let generatedRecipe: Recipe | null = null;
      let user = ctx.user;
      if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR);

      if (input.action === "generate") {
        generatedRecipe = await generateUniqueRecipe({ input, ctx });
        return generatedRecipe;
      }

      throw new BadRequestError("BAD_REQUEST_ERROR", "Invalid action specified", {});
    }),
  generateRecipesList: privateProcedure
    .input(RecipePlannerSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      const user = ctx.user as UserLite;

      return await generateRecipesList({ input, ctx });
    }),
  like: privateProcedure
    .input(RecipeSchema.pick({ id: true }))
    .mutation(async ({ input, ctx }) => {
      return await likeRecipe({ recipeId: input.id, ctx });
    }),
  unlike: privateProcedure
    .input(RecipeSchema.pick({ id: true }))
    .mutation(async ({ input, ctx }) => {
      return await unlikeRecipe({ recipeId: input.id, ctx });
    }),
  savedRecipes: privateProcedure
    .output(RecipeSchema.array())
    .query(async ({ ctx }) => {
      return await getSavedRecipes({ ctx })
    }),
});
