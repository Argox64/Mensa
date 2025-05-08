import { UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { privateProcedure, router } from "../trpc";
import { GetRecipesSchemaRequest, NewRecipe, Recipe, RecipePlannerSchemaRequest, RecipeSchema, RecipeSchemaRequest } from "@cook/validations";
import { generateRecipesList, generateUniqueRecipe } from "../services/recipes";
import { searchRecipes } from "@cook/db";

export const recipeRouter = router({
  getRecipes: privateProcedure
    .input(GetRecipesSchemaRequest)
    .query(async ({ input, ctx }) => {
      let user = ctx.user;
      if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

      const recipes = await ctx.prisma.$queryRawTyped(searchRecipes(input.searchTerm, input.offset, input.limit));

      const recs = recipes.map((recipe) => {
        const recipeContent = recipe.content as Recipe;
        return {
          id: recipe.id,
          title: recipe.name,
          tags: recipe.tags,
          ingredients: recipeContent.ingredients,
          steps: recipeContent.steps,
          preparationTime: recipeContent.preparationTime,
          cookingTime: recipeContent.cookingTime,
          nutrition: recipeContent.nutrition,
          notes: recipeContent.notes || [],
          timePerAdditionalPortion:
            recipeContent.timePerAdditionalPortion || 0,
        };
      }) as Recipe[];
      //await new Promise(r => setTimeout(r, 500))
      console.log("recipes", recs);
      return recs;
    }),
  processRecipe: privateProcedure
    .input(RecipeSchemaRequest)
    .output(RecipeSchema)
    .mutation(async ({ input, ctx }) => {

      let generatedRecipe: Recipe | null = null;
      let user = ctx.user;
      if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

      if (input.action === "generate") {
        generatedRecipe = await generateUniqueRecipe({ input, ctx });
        return generatedRecipe;
      }

      throw new Error("Incorrect action.");
    }),
  generateRecipesList: privateProcedure
    .input(RecipePlannerSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      //let generatedRecipes: string[] = [];
      let user = ctx.user;
      if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

      return await generateRecipesList({ input, userId: user.id, ctx });
    })
});
