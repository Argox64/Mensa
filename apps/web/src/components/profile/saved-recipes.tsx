"use client"

import { useState } from "react"
import { Search, Filter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { Recipe } from "@cook/validations"
import { RecipeCard } from "../community/recipe-card"
import { trpcClient } from "@cook/trpc-client/client"

export function SavedRecipes() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [recipeToDelete, setRecipeToDelete] = useState<string | null>(null)
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([])

  const savedRecipesQuery = trpcClient.recipes.savedRecipes.useQuery(
    undefined,
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      onSuccess: (data) => {
        console.log("Saved recipes fetched:", data)
        setSavedRecipes(data)
      },
    }
  )

  const handleRemoveRecipe = (recipeId: string) => {
    setRecipeToDelete(null)
    toast({
      title: "Recette supprimée",
      description: "La recette a été retirée de vos favoris.",
    })
  }

  const confirmDelete = (recipeId: string) => {
    setRecipeToDelete(recipeId)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher dans vos recettes sauvegardées..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2 bg-muted/30 px-3 py-1 rounded-md">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select
            value={categoryFilter || "all"}
            onValueChange={(value) => setCategoryFilter(value === "all" ? null : value)}
          >
            <SelectTrigger className="w-[180px] border-0 bg-transparent p-0 h-8 focus:ring-0">
              <SelectValue placeholder="Toutes les catégories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="text-center py-12 bg-muted/20 rounded-lg">
          <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Aucune recette sauvegardée</h3>
          <p className="text-muted-foreground mb-6">
            {searchQuery || categoryFilter
              ? "Aucune recette ne correspond à vos critères de recherche."
              : "Vous n'avez pas encore sauvegardé de recettes. Explorez notre communauté pour trouver de l'inspiration !"}
          </p>
          {!searchQuery && !categoryFilter && (
            <Button asChild>
              <Link href="/recipes">Explorer les recettes</Link>
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}/>
          ))}
        </div>
      )}

      <Dialog open={!!recipeToDelete} onOpenChange={(open) => !open && setRecipeToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer cette recette ?</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir retirer cette recette de vos favoris ? Cette action ne peut pas être annulée.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRecipeToDelete(null)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={() => recipeToDelete && handleRemoveRecipe(recipeToDelete)}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
