"use client"

import { useEffect, useState } from "react"
import { Helmet } from "@/components/community/helmet"
import { RecipeFilters } from "@/components/community/recipe-filters"
import { RecipeGrid } from "@/components/community/recipe-grid"
import { Recipe } from "@cook/validations"
import { trpcClient } from "@cook/trpc-client/client"
import { useRouter, useSearchParams } from "next/navigation"

export default function CommunityPage() {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<string>("popular")
    const params = new URLSearchParams()

    // Mettre à jour l'URL lorsque les filtres changent
    useEffect(() => {
        const params = new URLSearchParams()

        if (searchQuery) params.set("q", searchQuery)
        if (selectedCategory) params.set("category", selectedCategory)
        if (selectedDifficulty) params.set("difficulty", selectedDifficulty)
        if (selectedTime) params.set("time", selectedTime)
        if (selectedTag) params.set("tag", selectedTag)
        if (sortBy !== "popular") params.set("sort", sortBy)

        const url = `/recipes${params.toString() ? `?${params.toString()}` : ""}`

        // Utiliser replaceState pour ne pas ajouter d'entrées inutiles dans l'historique
        window.history.replaceState(null, "", url)
    }, [searchQuery, selectedCategory, selectedDifficulty, selectedTime, selectedTag, sortBy])


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
        return true
    })

    // Gestionnaires de mise à jour des filtres
    const handleSearchChange = (value: string) => {
        setSearchQuery(value)
    }

    const handleCategoryChange = (value: string | null) => {
        setSelectedCategory(value)
    }

    const handleDifficultyChange = (value: string | null) => {
        setSelectedDifficulty(value)
    }

    const handleTimeChange = (value: string | null) => {
        setSelectedTime(value)
    }

    const handleTagChange = (value: string | null) => {
        setSelectedTag(value)
    }

    const handleSortChange = (value: string) => {
        setSortBy(value)
    }

    const handleResetFilters = () => {
        setSearchQuery("")
        setSelectedCategory(null)
        setSelectedDifficulty(null)
        setSelectedTime(null)
        setSelectedTag(null)
        setSortBy("popular")
    }

    const handleRecipeClick = (recipe: Recipe) => {
        // Conserver les paramètres de recherche actuels dans l'URL de la recette
        const currentParams = new URLSearchParams(window.location.search)
        const recipeUrl = `/recipes/${recipe.id}${currentParams.toString() ? `?${currentParams.toString()}` : ""}`
        router.push(recipeUrl)
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
                onSearchChange={handleSearchChange}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                selectedDifficulty={selectedDifficulty}
                onDifficultyChange={handleDifficultyChange}
                selectedTime={selectedTime}
                onTimeChange={handleTimeChange}
                selectedTag={selectedTag}
                onTagChange={handleTagChange}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                onResetFilters={handleResetFilters}
            />

            <div className="mt-8">
                <RecipeGrid recipes={filteredRecipes ?? []} onRecipeClick={handleRecipeClick} />
            </div>
        </div>
    )
}
