import { CreatePlannerEntryBatchSchemaRequest, CreatePlannerEntrySchemaRequest, DeletePlannerEntrySchemaRequest, GetPlannerEntriesSchemaRequest, GetPlannerEntriesSchemaResponse, GetPlannerEntriesResponse, RecipeContent, UserLite } from "@cook/validations";
import { privateProcedure, router } from "../trpc";
import { UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError, NotFoundError, NOT_FOUND_RESOURCE_ERROR } from "@cook/errors";
import { addDays, parse, startOfDay } from "date-fns"
import { dateToyyyyMMddFormat } from "../utils/date";

export const plannerRouter = router({
    getDays: privateProcedure
        .input(GetPlannerEntriesSchemaRequest)
        .output(GetPlannerEntriesSchemaResponse)
        .query(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            const startDate = startOfDay(new Date(input.startDate));

            const planner = await ctx.prisma.planningEntry.findMany({
                where: { 
                    userId: user.id,
                    date: {
                        gte: startDate,
                        lte: addDays(startDate, input.days - 1),
                    }
                },
                include: {
                    Recipe: true
                }
            });

            return planner.map((entry) => {
                const recipe = entry.Recipe.content as RecipeContent;

                return {
                    id: entry.id,
                    userId: entry.userId,
                    date: dateToyyyyMMddFormat(entry.date),
                    nbPortions: entry.nbPortions,
                    mealType: entry.mealType,
                    recipe: {
                        id: entry.Recipe.id,
                        title: entry.Recipe.name,
                        description: entry.Recipe.description,
                        tags: entry.Recipe.tags,
                        ingredients: recipe.ingredients,
                        steps: recipe.steps,
                        totalCookingTime: entry.Recipe.totalCookingTime,
                        preparationTime: recipe.preparationTime,
                        cookingTime: recipe.cookingTime,
                        nutrition: recipe.nutrition,
                        notes: recipe.notes || [],
                        imageUrl: entry.Recipe.imageUrl,
                        timePerAdditionalPortion: recipe.timePerAdditionalPortion || 0,
                        difficulty: recipe.difficulty,
                        creatorId: entry.Recipe.creatorId,
                        likesCount: entry.Recipe.likesCount,
                        createdAt: dateToyyyyMMddFormat(entry.Recipe.createdAt),
                    }
                }
            }) as GetPlannerEntriesResponse;
        }),
    addEntry: privateProcedure
        .input(CreatePlannerEntrySchemaRequest)
        .mutation(async ({ input, ctx }) => {
            let user = ctx.user;
            if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

            const planner = await ctx.prisma.planningEntry.create({
                data: {
                    userId: user.id,
                    date: startOfDay(parse(input.date, "yyyy-MM-dd", new Date())),
                    recipeId: input.recipeId,
                    mealType: input.mealType,
                    nbPortions: input.nbPortions,
                }
            });
            return planner;
        }),
    deleteEntry: privateProcedure
        .input(DeletePlannerEntrySchemaRequest)
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            const plannerEntry = await ctx.prisma.planningEntry.findFirst({
                where: {
                    id: input.entryId,
                }
            });

            if (!plannerEntry) throw new NotFoundError(NOT_FOUND_RESOURCE_ERROR, {});

            if (plannerEntry.userId !== user.id) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

            await ctx.prisma.planningEntry.delete({
                where: {
                    id: input.entryId,
                }
            });
            return {
                message: "OK"
            };
        }),
    createBatchEntries: privateProcedure
        .input(CreatePlannerEntryBatchSchemaRequest)
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            const plannerEntries = await ctx.prisma.planningEntry.createMany({
                data: input.map((entry) => ({
                    userId: user.id,
                    date: entry.date,
                    recipeId: entry.recipeId,
                    nbPortions: entry.nbPortions,
                }))
            });
            return {
                message: "OK",
                count: plannerEntries.count
            };
        })
});