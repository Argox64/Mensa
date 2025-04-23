"use client"
import useGeneratedRecipeStore from "@/stores/generatedRecipeStore";
import { Label } from "@radix-ui/react-label";
import { useShallow } from "zustand/react/shallow";


export default function GeneratedRecipe() {
    const { recipe } = useGeneratedRecipeStore(useShallow((state) => ({
        recipe: state.recipe
    })));

    return <div className="max-w-2xl mx-auto mt-10 w-full flex flex-col">
        <h1>{recipe?.title}</h1>
        <div className="bg-[#E2EDAC] rounded-t-lg w-full flex flex-col text-center">
            <h2>Ingrédients</h2>
            {recipe?.ingredients.map((ingredient, index) => (
                <Label key={index}>{ingredient.quantity} grammes de {ingredient.name}</Label>
            ))}
        </div>
        <div className="bg-[#ffd968] rounded-t-lg w-full flex flex-col text-center">
            <h2>Etapes</h2>
            <ol className="list-decimal list-inside">
                {recipe?.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
        <div className="bg-[#E2EDAC] rounded-t-lg w-full flex flex-col text-center">
            <h2>Notes</h2>
            {recipe?.notes.map((note, index) => (
                <Label key={index}>{note}</Label>
            ))}
        </div>
    </div>;
}