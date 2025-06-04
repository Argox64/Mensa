import { CreatePlannerEntryRequest, GetPlannerEntriesResponse, RecipeContent, UserLite } from "@cook/validations";
import { IContext } from "../context";
import { addDays, parse, startOfDay } from "date-fns";
import { dateToyyyyMMddFormat } from "../utils/date";
import { NOT_FOUND_RESOURCE_ERROR, NotFoundError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";

export async function getDays({ ctx, input }: { ctx: IContext, input: { startDate: string, days: number } }) {
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
}

export async function addPlannerEntry({ ctx, input }: { ctx: IContext, input: CreatePlannerEntryRequest }) {
    const user = ctx.user as UserLite;

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
}

export async function deletePlannerEntry({ ctx, input }: { ctx: IContext, input: { entryId: number } }) {
    const user = ctx.user as UserLite;

    const plannerEntry = await ctx.prisma.planningEntry.findFirst({
        where: {
            id: input.entryId,
        }
    });

    if (!plannerEntry) throw new NotFoundError(NOT_FOUND_RESOURCE_ERROR);

    if (plannerEntry.userId !== user.id) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR);

    await ctx.prisma.planningEntry.delete({
        where: {
            id: input.entryId,
        }
    });
    return {
        message: "OK"
    };
}

export async function createBatchEntries({ ctx, input }: { ctx: IContext, input: CreatePlannerEntryRequest[] }) {
    const user = ctx.user as UserLite;

    const plannerEntries = await ctx.prisma.planningEntry.createMany({
        data: input.map((entry) => ({
            userId: user.id,
            date: entry.date,
            recipeId: entry.recipeId,
            nbPortions: entry.nbPortions,
        }))
    });

    return plannerEntries;
}