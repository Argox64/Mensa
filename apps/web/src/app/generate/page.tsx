import RecipeForm from "@/components/recipeForm";
import GeneratedRecipe from "@/components/generatedRecipe";

export default function GeneratePage() {
  return (
    <>
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Générer une recette</h2>
      <RecipeForm />
    </div>
    <GeneratedRecipe />
    </>
  );
}
