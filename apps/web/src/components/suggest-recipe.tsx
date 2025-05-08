"use client"

import { trpcClient } from "@cook/trpc-client/client"
import { Recipe } from "@cook/validations"
import { useEffect, useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

export function SuggestedRecipeItem({ listId, title, onRecipeLoaded, onRecipeNotFound, handleAddToPlanning }: {
    listId: number
    title: string
    onRecipeLoaded: (listId: number, recipe: Recipe) => void
    onRecipeNotFound: (listId: number) => void
    handleAddToPlanning: (recipe: Recipe) => void
}) {
    const { data, isFetching } = trpcClient.recipes.getRecipes.useQuery(
        { searchTerm: title, offset: 0, limit: 1 },
        {
            enabled: true,
        }
    );

    const [recipe, setRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
        if (data?.[0]) {
            onRecipeLoaded(listId, data[0]);
            setRecipe(data[0])
        }
        else {
            onRecipeNotFound(listId)
        }
    }, [data])

    if (!recipe) return null

    return (
        <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-start">
                <div>
                    {recipe.tags && recipe.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                            {recipe.tags.map((tag, i) => (
                                <Badge key={i} variant="outline">{tag}</Badge>
                            ))}
                        </div>
                    )}
                    <div className="space-y-2">
                        <div>
                            <h5 className="text-sm font-medium">Ingrédients:</h5>
                            <ul className="text-sm mt-1 space-y-1">
                                {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient.name}>
                                        {ingredient.quantity} g {ingredient.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-sm font-medium">Instructions:</h5>
                            <p className="text-sm mt-1 text-muted-foreground">{recipe.steps}</p>
                        </div>
                    </div>
                </div>
                <Button onClick={() => handleAddToPlanning(recipe)} size="sm">
                    Ajouter au planning <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
            </div>
        </div>
    )
}
