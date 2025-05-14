"use client"

import { Recipe } from "@cook/validations"
import { RecipeCard } from "./recipe-card"

interface RecipeGridProps {
  recipes: Recipe[]
  onRecipeClick: (recipe: Recipe) => void
}

export function RecipeGrid({ recipes, onRecipeClick }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">Aucune recette trouvée</h3>
        <p className="text-muted-foreground">
          Essayez de modifier vos filtres ou votre recherche pour trouver des recettes.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">{recipes.length} recettes trouvées</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
        ))}
      </div>
    </div>
  )
}
