"use client"

import { useState } from "react"
import { Helmet } from "@/components/community/helmet"
import { RecipeFilters } from "@/components/community/recipe-filters"
import { RecipeGrid } from "@/components/community/recipe-grid"
import { RecipeDetails } from "@/components/community/recipe-details"
import { Recipe } from "@cook/validations"
import { trpcClient } from "@cook/trpc-client/client"

export default function CommunityPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<string>("popular")
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)


    const getRecipes = trpcClient.recipes.getRecipes.useQuery(
        { 
            searchTerm: searchQuery, 
            offset: 0, limit: 100 
        },
        {
            enabled: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
        }
    );

    // Filtrer les recettes en fonction des critères
    const filteredRecipes = getRecipes.data?.filter((recipe: Recipe) => {
        // Filtre par recherche
        if (
            searchQuery &&
            !recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
            //!recipe.author.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            return false
        }

        // Filtre par catégorie
        /*if (selectedCategory && recipe.category !== selectedCategory) {
          return false
        }*/

        // Filtre par difficulté
        /*if (selectedDifficulty && recipe.difficulty !== selectedDifficulty) {
          return false
        }*/

        // Filtre par temps de préparation
        if (selectedTime) {
            const prepTimeMinutes = recipe.preparationTime + recipe.cookingTime;
            if (selectedTime === "quick" && prepTimeMinutes > 20) return false
            if (selectedTime === "medium" && (prepTimeMinutes <= 20 || prepTimeMinutes > 45)) return false
            if (selectedTime === "long" && prepTimeMinutes <= 45) return false
        }

        // Filtre par tag
        if (selectedTag && !recipe.tags?.includes(selectedTag)) {
            return false
        }

        return true
    })

    // Trier les recettes
    const sortedRecipes = getRecipes.data?.sort((a, b) => {
        //if (sortBy === "popular") return b.likes - a.likes
        //if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime()
        //if (sortBy === "quickest") return Number.parseInt(a.prepTime) - Number.parseInt(b.prepTime)
        return 0
    })

    const handleRecipeClick = (recipe: Recipe) => {
        setSelectedRecipe(recipe)
        setIsDetailsOpen(true)
    }

    const handleCloseDetails = () => {
        setIsDetailsOpen(false)
    }

    const handleAddToPlanning = (recipe: Recipe) => {
        // Ici, vous pourriez implémenter la logique pour ajouter la recette au planning
        console.log("Recette ajoutée au planning:", recipe.title)
        setIsDetailsOpen(false)
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <Helmet
                title="Recettes de la communauté"
                description="Découvrez et partagez des recettes avec notre communauté de passionnés de cuisine."
            />

            <h1 className="text-3xl font-bold mb-2 text-center">Recettes de la communauté</h1>
            <p className="text-center text-muted-foreground mb-8">
                Découvrez des recettes partagées par notre communauté de passionnés de cuisine
            </p>

            <RecipeFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedDifficulty={selectedDifficulty}
                onDifficultyChange={setSelectedDifficulty}
                selectedTime={selectedTime}
                onTimeChange={setSelectedTime}
                selectedTag={selectedTag}
                onTagChange={setSelectedTag}
                sortBy={sortBy}
                onSortChange={setSortBy}
            />

            <div className="mt-8">
                <RecipeGrid recipes={sortedRecipes || []} onRecipeClick={handleRecipeClick} />
            </div>

            {selectedRecipe && (
                <RecipeDetails
                    recipe={selectedRecipe}
                    isOpen={isDetailsOpen}
                    onClose={handleCloseDetails}
                    onAddToPlanning={handleAddToPlanning}
                />
            )}
        </div>
    )
}
