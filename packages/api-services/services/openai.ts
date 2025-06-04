import { INTERNAL_ERROR, InternalError } from "@cook/errors";
import { IContext } from "../context";
import { Recipe, RecipePlannerRequest } from "@cook/validations";

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

export async function generateRecipeAI({ ctx, input }: { ctx: IContext, input: GenerateRecipeRequest }) {
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

    return response.choices[0]?.message.content?.trim() ?? "";
}

export async function generateRecipeListAI({ ctx, input }: { ctx: IContext, input: RecipePlannerRequest }) {

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

    return response.choices[0]?.message.content?.trim() ?? "";
}

export async function generateImageAI({ ctx, prompt }: { ctx: IContext, prompt: string }) {
    const response = await ctx.openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
    });
    if (!response.data || response.data.length === 0 || !response.data[0]?.url) {
        throw new InternalError(INTERNAL_ERROR);
    }

    const imageUrl = response.data[0].url;
    console.log("Image générée :", imageUrl);
    return imageUrl;
}

interface GenerateRecipeRequest {
    tags?: string[];
    maxPreparationAndCookingTime?: number;
    description?: string;
}   