import { HttpError, INTERNAL_ERROR, InternalError } from "@cook/errors";
import { publicProcedure, router } from "../trpc";
import { Recipe, RecipeSchema, RecipeSchemaRequest } from "@cook/validations";

const generatePromptSystem = `Tu es un chef cuisinier professionnel qui donne des recettes détaillées et des conseils de cuisine.

Les temps de cuisson et préparation sont en minutes.
Les quantités d'ingrédients sont en grammes et les liquides en centilitres.
La recette est toujours pour une portion.
Ta mission est de générer des recettes sous un format JSON strictement respecté. Ta réponse **doit être uniquement du JSON valide** ou **"ERROR"** si tu ne peux pas répondre correctement (seulement en cas d'extremes necessités).

### FORMAT JSON STRICT :
{
  "title": "Nom de la recette",
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
  "timePerAdditionalPortion": 2
}`;
const generatePromptUser = (tags: string[], preparationTime: number,) => `
  ### CONTRAINTES :
  ${tags.length !== 0 ? "La recette doit respecter ces tags :" + tags.join(", ")+ "." : "Pas de tags particuliers."}
  Un temps de préparation maximum de ${preparationTime} minutes.
`;

export const recipeRouter = router({
  processRecipe: publicProcedure
    .input(RecipeSchemaRequest)
    .mutation(async ({ input, ctx }) => {

      let generatedRecipe: Recipe | null = null;
      console.log(generatePromptUser(
        input.tags || [],
        input.maxPreparationAndCookingTime || 30
      ));

      if (input.action === "generate") {
        const response = await ctx.openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: generatePromptSystem },
            {
              role: "user",
              content: generatePromptUser(
                input.tags || [],
                input.maxPreparationAndCookingTime || 30
              ),
            },
          ],
          max_tokens: 500,
        });

        const rawResponse = response.choices[0]?.message.content?.trim() ?? "";

        try {
          generatedRecipe = JSON.parse(rawResponse) as Recipe;

          // Validation du format avec Zod
          RecipeSchema.parse(generatedRecipe);
          const newRecipe = await ctx.prisma.recipe.create({
            data: {
              name: generatedRecipe.title,
              creatorId: input.userId ?? undefined,
              content: generatedRecipe,
              tags: input.tags,
              totalCookingTime: generatedRecipe.preparationTime + generatedRecipe.cookingTime,
            },
          });
          return {
            status : "201 Content created",
            data: newRecipe
          }
        } catch (error) {
          throw new InternalError(INTERNAL_ERROR.code, "Erreur lors de la génération de la recette.", {});
        }
        
      }

      return { error: "Action non supportée" };
    }),
});
