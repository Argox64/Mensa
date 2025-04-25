"use client";
import useGeneratedRecipeStore from "@/stores/generatedRecipeStore";
import { Label } from "@radix-ui/react-label";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";

export default function GeneratedRecipe() {
    const { recipe } = useGeneratedRecipeStore(useShallow((state) => ({
        recipe: state.recipe
    })));

    const [portions, setPortions] = useState(1);

    const handlePortionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPortions(Number(e.target.value));
    };

    if (!recipe) return null;

    return (
        <div className="max-w-2xl mx-auto mt-10 w-full flex flex-col space-y-6">
            <h1 className="text-2xl font-bold text-center">{recipe.title}</h1>

            <div className="flex justify-between px-4">
                <p>🕒 Préparation : {recipe.preparationTime} min</p>
                <p>🔥 Cuisson : {recipe.cookingTime + recipe.timePerAdditionalPortion * portions} min</p>
            </div>

            <div className="flex items-center gap-2 px-4">
                <Label htmlFor="portions">Portions :</Label>
                <select
                    id="portions"
                    value={portions}
                    onChange={handlePortionsChange}
                    className="border rounded px-2 py-1"
                >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                            {num} {num === 1 ? "personne" : "personnes"}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-[#E2EDAC] rounded-lg w-full flex flex-col text-center py-4">
                <h2 className="text-lg font-semibold mb-2">Ingrédients</h2>
                <ul className="space-y-1">
                    {recipe.ingredients.map((ingredient, index) => {
                        const adjustedQty = (ingredient.quantity * portions);
                        return (
                            <li key={index}>
                                {adjustedQty.toFixed(1)} grammes de {ingredient.name}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="bg-[#ffd968] rounded-lg w-full flex flex-col text-center py-4">
                <h2 className="text-lg font-semibold mb-2">Étapes</h2>
                <ol className="list-decimal list-inside space-y-1 text-left px-4">
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>

            <div className="bg-[#E2EDAC] rounded-lg w-full flex flex-col text-center py-4">
                <h2 className="text-lg font-semibold mb-2">Notes</h2>
                <div className="space-y-1">
                    {recipe.notes.map((note, index) => (
                        <Label key={index}>{note}</Label>
                    ))}
                </div>
            </div>
        </div>
    );
}
