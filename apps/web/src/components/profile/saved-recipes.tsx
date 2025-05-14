"use client"

import { useState } from "react"
import { Search, Filter, Heart, Trash2, Clock, ChefHat, Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
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
import { recipePlaceholderUrl } from "@/lib/utils"
import { trpcClient } from "@cook/trpc-client/client"
import { Recipe } from "@cook/validations"

export function SavedRecipes() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [recipeToDelete, setRecipeToDelete] = useState<string | null>(null)
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([])

  const dislike = trpcClient.recipes.dislike.useMutation();
  trpcClient.recipes.savedRecipes.useQuery(undefined, {
    enabled: true,
    onSuccess: (data) => {
      setSavedRecipes(data);
    }
  });

  // Extraire toutes les catégories uniques des recettes
  //const categories = Array.from(new Set(recipes.map((recipe) => recipe.category)))

  // Filtrer les recettes en fonction de la recherche et de la catégorie
  /*const filteredRecipes = savedRecipes.filter((recipe) => {
    // Filtre par recherche
    if (
      searchQuery &&
      !recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filtre par catégorie
    if (categoryFilter && recipe.category !== categoryFilter) {
      return false
    }

    return true
  })*/

  const handleRemoveRecipe = (recipeId: string) => {
    dislike.mutate({ id: recipeId })
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
              {/*categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))*/}
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
            <Card key={recipe.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.imageUrl || recipePlaceholderUrl}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                {/*<Badge className="absolute top-2 right-2">{recipe.category}</Badge>*/}
              </div>
              <CardContent className="flex-grow pt-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-1">{recipe.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {recipe.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{recipe.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{recipe.preparationTime + recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-4 w-4 mr-1" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/recettes/${recipe.id}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => confirmDelete(recipe.id)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Retirer
                </Button>
              </CardFooter>
            </Card>
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
