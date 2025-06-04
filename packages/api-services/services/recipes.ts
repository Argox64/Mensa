import { GenerateRecipeRequest, GetRecipesRequest, NewRecipe, Recipe, RecipeContent, RecipeContentSchema, RecipeListSchema, RecipePlannerRequest, UserLite } from "@cook/validations";
import { IContext } from "../context";
import { BadRequestError, INTERNAL_ERROR, InternalError, NOT_FOUND_RESOURCE_ERROR, NotFoundError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { dateToyyyyMMddFormat } from "../utils/date";
import { generateImageAI, generateRecipeAI, generateRecipeListAI } from "./openai";
import { Prisma, searchRecipes } from "@cook/db";

const generatePromptUniqueRecipeSystem = `Tu es un chef cuisinier professionnel qui donne des recettes détaillées et des conseils de cuisine.

Les temps de cuisson et préparation sont en minutes.
Les quantités d'ingrédients sont en grammes et les liquides en centilitres.
La recette est toujours pour une portion.
Ta mission est de générer des recettes sous un format JSON strictement respecté. Ta réponse **doit être uniquement du JSON valide** ou **"ERROR"** si tu ne peux pas répondre correctement (seulement en cas d'extremes necessités).

### FORMAT JSON STRICT :
{
  "title": "Nom de la recette",
  "description": "Description de la recette",
  "ingredients": [
    { "name": "Nom de l'ingrédient", "quantity": Quantité (sans unité) }
  ],
  "steps": [
    "Étape 1",
    "Étape 2"
  ],
  "nutrition": {
    "calories": 400,
    "proteins": 20,
    "carbs": 50,
    "fats": 10
  }, 
  "notes": [
   "Note 1",
   "Note 2"
  ],
  "preparationTime": 3,
  "cookingTime": 10,
  "timePerAdditionalPortion": 2,
  "difficulty": 2, // 0-4 (0 = très facile, 4 = très difficile)
}`;
const generatePromptMultipleRecipeSystem = `Tu es un chef cuisinier professionnel.
Ta mission est de générer une liste de recettes suivant un json d'entrée. Ta réponse doit correspondre au même nombre d'entrée et respecter les critères de chaque recette. 
Ta réponse **doit être uniquement du JSON valide** ou **"ERROR"** si tu ne peux pas répondre correctement (seulement en cas d'extremes necessités).

### FORMAT JSON STRICT :
[
    "Nom de la recette",
    "Nom de la recette 2",
    "Nom de la recette 3"
]
`;

const generatePromptBatchRecipeSystem = `Tu es un chef cuisinier professionnel qui donne des recettes détaillées et des conseils de cuisine. 
Les temps de cuisson et préparation sont en minutes.
Les quantités d'ingrédients sont en grammes et les liquides en centilitres.
La recette est toujours pour une portion.
Ta mission est de générer des recettes sous un format JSON strictement respecté. Ta réponse **doit être uniquement du JSON valide** ou **"ERROR"** si tu ne peux pas répondre correctement (seulement en cas d'extremes necessités).

### FORMAT JSON STRICT (doit retourner un talbeau de cet objet):
{
  "title": "Nom de la recette",
  "description": "Description de la recette",
  "ingredients": [
    { "name": "Nom de l'ingrédient", "quantity": Quantité (sans unité) }
  ],
  "steps": [
    "Étape 1",
    "Étape 2"
  ],
  "nutrition": {
    "calories": 400,
    "proteins": 20,
    "carbs": 50,
    "fats": 10
  }, 
  "notes": [
   "Note 1",
   "Note 2"
  ],
  "preparationTime": 3,
  "cookingTime": 10,
  "timePerAdditionalPortion": 2,
  "difficulty": 2, // 0-4 (0 = très facile, 4 = très difficile)
}`;

const generateBatchRecipePromptUser = (recipes: any) => `
  ### CONTRAINTES :
  Les recettes doivent respecter les directives correspondantes à chaque élement de ce tableau json d'entrée.
  ${JSON.stringify(recipes)}
`;

const generateUniqueRecipePromptUser = (tags: string[], preparationAndCookingTime: number, description: string) => `
  ### CONTRAINTES :
  ${tags.length !== 0 ? "La recette doit respecter ces tags :" + tags.join(", ") + "." : "Pas de tags particuliers."}
  Un temps de préparation (avec cuisson compris) maximum de ${preparationAndCookingTime} minutes.
  ${description !== "" ? "Voici une courte description de la recette: " + description + "." : ""}
`;

export async function generateUniqueRecipe({ ctx, input }: { ctx: IContext, input: GenerateRecipeRequest }): Promise<Recipe> {
    let user = ctx.user;
    if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR);

    const rawResponse = await generateRecipeAI({ ctx, input });

    let generatedRecipe = JSON.parse(rawResponse) as NewRecipe;

    // Validation du format avec Zod
    RecipeContentSchema.parse(generatedRecipe);
    const newRecipe = await ctx.prisma.recipe.create({
        data: {
            name: generatedRecipe.title,
            description: generatedRecipe.description,
            creatorId: user.id,
            content: generatedRecipe,
            tags: input.tags,
            totalCookingTime: generatedRecipe.preparationTime + generatedRecipe.cookingTime,
        }
    });
    return {
        id: newRecipe.id,
        title: newRecipe.name,
        description: newRecipe.description,
        tags: newRecipe.tags ?? [],
        ingredients: generatedRecipe.ingredients,
        steps: generatedRecipe.steps,
        preparationTime: generatedRecipe.preparationTime,
        cookingTime: generatedRecipe.cookingTime,
        difficulty: generatedRecipe.difficulty,
        nutrition: generatedRecipe.nutrition,
        notes: generatedRecipe.notes ?? [],
        timePerAdditionalPortion: generatedRecipe.timePerAdditionalPortion || 0,
        imageUrl: newRecipe.imageUrl,
        creatorId: newRecipe.creatorId,
        likesCount: newRecipe.likesCount,
        createdAt: dateToyyyyMMddFormat(newRecipe.createdAt),
    };
}

export async function generateRecipesList({ ctx, input }: { ctx: IContext, input: RecipePlannerRequest }): Promise<string[]> {
    let generatedRecipesList: string[] = [];

    const rawResponse = await generateRecipeListAI({ ctx, input });

    generatedRecipesList = JSON.parse(rawResponse) as string[];

    RecipeListSchema.parse(generatedRecipesList);

    return generatedRecipesList;
}

export async function generateRecipeImage({ ctx, prompt }: { ctx: IContext, prompt: string }) {
    return await generateImageAI({ ctx, prompt });
}

export async function getRecipes({ ctx, input }: { ctx: IContext, input: GetRecipesRequest }) {
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
            Creator: recipe.user,
        };
    }) as Recipe[];
    return recs;
}

export async function getRecipeById({ ctx, recipeId }: { ctx: IContext, recipeId: string }) {
    const user = ctx.user as UserLite;

    const recipe = await ctx.prisma.recipe.findUnique({
        where: { id: recipeId },
        include: {
            Likes: {
                where: {
                    userId: user.id,
                },
            },
            Creator: true
        },
    });

    if (!recipe) throw new NotFoundError(NOT_FOUND_RESOURCE_ERROR);

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
        userLiked: recipe.Likes.length > 0, // Check if the user has liked the recipe
        Creator: {
            id: recipe.creatorId,
            userName: recipe.Creator.username,
        },
    } as Recipe;
}

export async function likeRecipe({ ctx, recipeId }: { ctx: IContext, recipeId: string }) {
    const user = ctx.user as UserLite;

    try {
        await ctx.prisma.$transaction(async (tx) => {
            await tx.likes.create({
                data: {
                    userId: user.id,
                    recipeId: recipeId
                }
            });
            await tx.recipe.update({
                where: { id: recipeId },
                data: { likesCount: { increment: 1 } },
            });
        });

        return { message: 'Liked' };
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') {
                return new BadRequestError('ALREADY_LIKED', 'You have already liked this recipe', {});
            }
        }
        throw new InternalError(INTERNAL_ERROR);
    }
}

export async function unlikeRecipe({ ctx, recipeId }: { ctx: IContext, recipeId: string }) {
    const user = ctx.user as UserLite;

    try {
        await ctx.prisma.$transaction(async (tx) => {
            await tx.likes.delete({
                where: { userId_recipeId: { userId: user.id, recipeId: recipeId } },
            });
            await tx.recipe.update({
                where: { id: recipeId },
                data: { likesCount: { decrement: 1 } },
            });
        });

        return { message: 'Unliked' };
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002' || err.code === 'P2025') {
                return new BadRequestError('ALREADY_UNLIKED', 'You have already unliked this recipe', {});
            }
        }
        throw new InternalError(INTERNAL_ERROR);
    }
}

export async function getSavedRecipes({ ctx }: { ctx: IContext }) {
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
            Creator: true,
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
            imageUrl: recipe.imageUrl,
            creatorId: recipe.creatorId,
            Creator: {
                id: recipe.creatorId,
                userName: recipe.Creator.username,
            }
        } as Recipe;
    }) as Recipe[];
    return recs;
}