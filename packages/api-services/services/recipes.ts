import { GenerateRecipeRequest, NewRecipe, NewRecipeSchema, Recipe, RecipeContentSchema, RecipeListSchema, RecipePlannerRequest, RecipePlannerSchemaRequest, RecipeRequest, RecipeResponseSchema, RecipeSchema } from "@cook/validations";
import { ITRPCContext } from "../context";
import { INTERNAL_ERROR, InternalError, UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { dateToyyyyMMddFormat } from "../utils/date";

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

export async function generateUniqueRecipe({ ctx, input }: { ctx: ITRPCContext, input: GenerateRecipeRequest }): Promise<Recipe> {
    let user = ctx.user;
    if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});
    const response = await ctx.openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: generatePromptUniqueRecipeSystem },
            {
                role: "user",
                content: generateUniqueRecipePromptUser(
                    input.tags || [],
                    input.maxPreparationAndCookingTime || 60,
                    input.description || ""
                ),
            },
        ],
        max_tokens: 500,
    });

    const rawResponse = response.choices[0]?.message.content?.trim() ?? "";

    try {
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
            creatorId : newRecipe.creatorId,
            likesCount: newRecipe.likesCount,
            createdAt: dateToyyyyMMddFormat(newRecipe.createdAt),
        };
    } catch (error) {
        if (process.env.NODE_ENV === "development")
            throw error;
        throw new InternalError(INTERNAL_ERROR.code, "Erreur lors de la génération de la recette.", {});
    }
}

export async function generateRecipesList({ ctx, userId, input }: { ctx: ITRPCContext, userId: string, input: RecipePlannerRequest }): Promise<string[]> {
    let generatedRecipesList: string[] = [];

    const response = await ctx.openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: generatePromptMultipleRecipeSystem },
            {
                role: "user",
                content: JSON.stringify(input),
            },
        ],
        max_tokens: 500,
    });

    const rawResponse = response.choices[0]?.message.content?.trim() ?? "";
    console.log(input)
    console.log("Response: ", rawResponse);

    try {
        generatedRecipesList = JSON.parse(rawResponse) as string[];

        // Validation du format avec Zod
        RecipeListSchema.parse(generatedRecipesList);

        return generatedRecipesList;

        //return generateRecipeBatch({ ctx, userId: userId, input: input.recipes, recipesList: generatedRecipesList });

    } catch (error) {
        if (process.env.NODE_ENV === "development")
            throw error;
        throw new InternalError(INTERNAL_ERROR.code, "Erreur lors de la génération du planning.", {});
    }
}

/*async function generateRecipesBatch({ ctx, userId, input, recipesList }: { ctx: ITRPCContext, userId: string, input: RecipePlannerRequest, recipesList: string[] }): Promise<Recipe[]> {
    let recipesBatchContent = input.map((objet, index) => ({
        ...objet,
        title: recipesList[index]
    }))

    console.log("System : ", recipesBatchContent);
    console.log("User : ", generateBatchRecipePromptUser(recipesBatchContent));
    // Validation du format avec Zod
    const response = await ctx.openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: generatePromptBatchRecipeSystem },
            {
                role: "user",
                content: generateBatchRecipePromptUser(recipesBatchContent),
            },
        ],
        max_tokens: 300 * recipesList.length,
    });

    const rawResponse = response.choices[0]?.message.content?.trim() ?? "";
    console.log("Response: ", rawResponse);

    try {
        const generatedRecipes = JSON.parse(rawResponse) as Recipe[];

        // Validation du format avec Zod
        RecipeSchema.array().parse(generatedRecipes);

        const newRecipes = await ctx.prisma.recipe.createMany({
            data: generatedRecipes.map(recipe => ({
                name: recipe.title,
                creatorId: userId,
                content: recipe,
                tags: recipe.tags,
                totalCookingTime: recipe.preparationTime + recipe.cookingTime,
            }))
        });

        return generatedRecipes;

    } catch (error) {
        if(process.env.NODE_ENV === "development")
            throw error;
        throw new InternalError(INTERNAL_ERROR.code, "Erreur lors de la génération du planning.", {});
    }
}*/