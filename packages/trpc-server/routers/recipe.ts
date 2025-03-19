import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { RecipeSchema, RecipeSchemaRequest } from "@cook/validations";

const prisma = new PrismaClient();

const generatePromptSystem = `Tu es un chef cuisinier professionnel qui donne des recettes détaillées et des conseils de cuisine.

Les temps de cuisson et préparation sont en minutes.
Les quantités d'ingrédients sont en grammes et les liquides en centilitres.
La recette est toujours pour une portion.
Ta mission est de générer des recettes sous un format JSON strictement respecté. Ta réponse **doit être uniquement du JSON valide** ou **"ERROR"** si tu ne peux pas répondre correctement.

### FORMAT JSON STRICT :
{
  "title": "Nom de la recette",
  "ingredients": [
    { "name": "Nom de l'ingrédient", "quantity": "Quantité (sans unité)" }
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
  "timePerAdditionalPortion": 2
}`;
const generatePromptUser = (tags: string[], preparationTime: number,) => `
  ### CONTRAINTES :
  La recette doit respecter ces tags : ${tags.join(", ")}.
  avec un temps de préparation maximum de ${preparationTime} minutes.
  Si tu ne peux pas respecter toutes ces contraintes, **réponds uniquement avec "ERROR"**.
`;


export const recipeRouter = router({
  processRecipe: publicProcedure
    .input(RecipeSchemaRequest)
    .mutation(async ({ input, ctx }) => {
      let generatedRecipe: any = null;

      if (input.action === "generate") {
        const response = await ctx.openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: generatePromptSystem },
            {
              role: "user",
              content: generatePromptUser(
                input.tags || [],
                30
              ),
            },
          ],
          max_tokens: 500,
        });

        const rawResponse = response.choices[0]?.message.content?.trim() ?? "";

        try {
          generatedRecipe = JSON.parse(rawResponse);

          // 🔍 Validation du format avec Zod
          RecipeSchema.parse(generatedRecipe);
        } catch (error) {
          console.error(
            "Erreur JSON OpenAI:",
            error,
            "\nRéponse brute:",
            rawResponse
          );

          const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              generatedRecipe = JSON.parse(jsonMatch[0]);
              generatedRecipe.tags = input.tags || [];
              RecipeSchema.parse(generatedRecipe);
            } catch (recoveryError) {
              console.error("Impossible de corriger le JSON:", recoveryError);
              return {
                error:
                  "L'IA n'a pas pu générer une recette valide. Essayez à nouveau.",
              };
            }
          } else {
            return { error: "L'IA n'a pas renvoyé un JSON valide." };
          }
        }
        const newRecipe = await prisma.recipe.create({
            data: {
              name: generatedRecipe.title,
              creatorId: input.userId ?? undefined,
              content: JSON.parse(generatedRecipe),
              tags: generatedRecipe.tags,
              totalCookingTime: generatedRecipe.preparationTime + generatedRecipe.cookingTime,
            },
          });
          return {
            status : "Content created",
            data: newRecipe
          }
      }

      return { error: "Action non supportée" };
    }),
});
