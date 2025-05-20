import { INTERNAL_ERROR, InternalError, NOT_FOUND_RESOURCE_ERROR, NotFoundError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { privateProcedure, router } from "../trpc";
import { GetRecipesSchemaRequest, NewRecipe, Recipe, RecipeContent, RecipePlannerSchemaRequest, RecipeSchema, RecipeSchemaRequest, UserLite } from "@cook/validations";
import { generateRecipesList, generateUniqueRecipe } from "../services/recipes";
import { Prisma, searchRecipes } from "@cook/db";
import { dateToyyyyMMddFormat } from "../utils/date";

export const recipeRouter = router({
  getRecipes: privateProcedure
    .input(GetRecipesSchemaRequest)
    .query(async ({ input, ctx }) => {
      const user = ctx.user as UserLite;

      const recipes = await ctx.prisma.$queryRawTyped(searchRecipes(input.searchTerm, input.offset, input.limit));

      const recs = recipes.map((recipe) => {
        const recipeContent = recipe.content as RecipeContent;
        return {
          id: recipe.id,
          title: recipe.name,
          description: recipeContent.description,
          tags: recipe.tags,
          ingredients: recipeContent.ingredients,
          steps: recipeContent.steps,
          preparationTime: recipeContent.preparationTime,
          cookingTime: recipeContent.cookingTime,
          nutrition: recipeContent.nutrition,
          notes: recipeContent.notes || [],
          timePerAdditionalPortion: recipeContent.timePerAdditionalPortion || 0,
          difficulty: recipeContent.difficulty,
          likesCount: recipe.likesCount,
          createdAt: dateToyyyyMMddFormat(recipe.createdAt),
          Creator: recipe.user, //WARNING 
        };
      }) as Recipe[];
      console.log("recipes", recs);
      return recs;
    }),
  getRecipe: privateProcedure
    .input(RecipeSchema.pick({ id: true }))
    .query(async ({ input, ctx }) => {
      const user = ctx.user as UserLite;

      const recipe = await ctx.prisma.recipe.findUnique({
        where: { id: input.id },
        include: {
          Likes: {
            where: {
              userId: user.id,
            },
          },
          Creator: true
        },
      });

      if (!recipe) throw new NotFoundError(NOT_FOUND_RESOURCE_ERROR, {});

      const recipeContent = recipe.content as RecipeContent;
      return {
        id: recipe.id,
        title: recipe.name,
        description: recipeContent.description,
        tags: recipe.tags,
        ingredients: recipeContent.ingredients,
        steps: recipeContent.steps,
        preparationTime: recipeContent.preparationTime,
        cookingTime: recipeContent.cookingTime,
        nutrition: recipeContent.nutrition,
        notes: recipeContent.notes || [],
        timePerAdditionalPortion: recipeContent.timePerAdditionalPortion || 0,
        difficulty: recipeContent.difficulty,
        likesCount: recipe.likesCount,
        createdAt: dateToyyyyMMddFormat(recipe.createdAt),
        Creator: {
          id: recipe.creatorId,
          userName: recipe.Creator.username,
        },
      } as Recipe;
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
      const user = ctx.user as UserLite;

      return await generateRecipesList({ input, userId: user.id, ctx });
    }),
  like: privateProcedure
    .input(RecipeSchema.pick({ id: true }))
    .mutation(async ({ input, ctx }) => {
      const user = ctx.user as UserLite;

      try {
        await ctx.prisma.$transaction(async (tx) => {
          await tx.likes.create({
            data: {
              userId: user.id,
              recipeId: input.id
            }
          });
          await tx.recipe.update({
            where: { id: input.id },
            data: { likesCount: { increment: 1 } },
          });
        });

        return { message: 'Liked' };
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            return { error: 'Already liked' };
          }
        }
        return { error: 'Internal error' };
      }
    }),
  dislike: privateProcedure
    .input(RecipeSchema.pick({ id: true }))
    .mutation(async ({ input, ctx }) => {
      const user = ctx.user as UserLite;

      try {
        await ctx.prisma.$transaction(async (tx) => {
          await tx.likes.delete({
            where: { userId_recipeId: { userId: user.id, recipeId : input.id } },
          });
          await tx.recipe.update({
            where: { id: input.id },
            data: { likesCount: { decrement: 1 } },
          });
        });

        return { message: 'Unliked' };
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            return { error: 'Already unliked' };
          }
        }
        throw new InternalError(INTERNAL_ERROR, {});
      }
    }),
  savedRecipes: privateProcedure
    .output(RecipeSchema.array())
    .query(async ({ ctx }) => {
      const user = ctx.user as UserLite;

      const recipes = await ctx.prisma.recipe.findMany({
        where: {
          Likes: {
            some: {
              userId: user.id,
            },
          },
        },
        include: {
          Likes: {
            where: {
              userId: user.id,
            },
          },
        },
      });

      const recs = recipes.map((recipe) => {
        const recipeContent = recipe.content as RecipeContent;
        return {
          id: recipe.id,
          title: recipe.name,
          description: recipeContent.description,
          tags: recipe.tags,
          ingredients: recipeContent.ingredients,
          steps: recipeContent.steps,
          preparationTime: recipeContent.preparationTime,
          cookingTime: recipeContent.cookingTime,
          nutrition: recipeContent.nutrition,
          notes: recipeContent.notes || [],
          timePerAdditionalPortion: recipeContent.timePerAdditionalPortion || 0,
          difficulty: recipeContent.difficulty,
          likesCount: recipe.likesCount,
          createdAt: dateToyyyyMMddFormat(recipe.createdAt),
        };
      }) as Recipe[];
      return recs;
    }),
});
