"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"
import { trpcClient } from "@cook/trpc-client/client"
import { Helmet } from "@/components/community/helmet"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bookmark, Calendar, Clock, Heart, Plus, Printer, Share2, User } from "lucide-react"
import { format } from "date-fns"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fr } from "date-fns/locale"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Recipe } from "@cook/validations"
import { Separator } from "@/components/ui/separator"
import { recipePlaceholderUrl } from "@/lib/utils"

export default function RecipePage() {

  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const recipeId = params?.id as string

  console.log("Recipe ID:", recipeId)

  //const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [activeTab, setActiveTab] = useState("ingredients")
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const { data: recipe, isLoading, error } = trpcClient.recipes.getRecipe.useQuery(
    { id: recipeId },
    {
      enabled: !!recipeId,
    }
  )

  const handleShare = () => {
    // Logique de partage
    alert("Fonctionnalité de partage à implémenter")
  }

  const handlePrint = () => {
    window.print()
  }

  const handleAddToPlanning = () => {
    // Logique pour ajouter au planning
    alert(`Recette ${recipe?.title} ajoutée au planning`)
  }

  const handleBack = () => {
    // Préserver les paramètres de recherche lors du retour
    const currentParams = searchParams.toString()
    router.push(`/recipes${currentParams ? `?${currentParams}` : ""}`)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  if (isLoading) return <p className="p-4">Chargement...</p>
  if (error || !recipe) return <p className="p-4 text-red-500">Erreur de chargement de la recette.</p>

  return <div className="container mx-auto py-10 px-4">
    <Button variant="ghost" onClick={handleBack} className="mb-6 hover:bg-gray-100">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Retour aux recettes
    </Button>

    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image + infos */}
      <div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img src={recipePlaceholderUrl} alt={recipe.title} className="object-cover w-full h-full" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline">Prep: {recipe.preparationTime} min</Badge>
          <Badge variant="outline">Cuisson: {recipe.cookingTime} min</Badge>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{recipe.Creator?.userName}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{format(new Date(recipe.createdAt), "d MMMM yyyy", { locale: fr })}</span>
          </div>
        </div>

        <Separator className="my-4" />

        <p className="text-muted-foreground">{recipe.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {recipe.tags?.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Onglets */}
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ingredients">Ingrédients</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredients" className="mt-4">
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-baseline">
                  <span className="font-medium mr-1">{ingredient.quantity}</span>
                  <span className="mr-1">g</span>
                  <span>{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="instructions" className="mt-4">
            <ol className="space-y-4 list-decimal list-inside">
              {recipe.steps.map((step, index) => (
                <li key={index} className="pl-2">
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </TabsContent>
        </Tabs>

        <Separator className="my-6" />

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleAddToPlanning}>
            <Plus className="mr-2 h-4 w-4" />
            Ajouter au planning
          </Button>
          <Button variant="outline" onClick={handleSave}>
            <Bookmark className={`mr-2 h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Sauvegardé" : "Sauvegarder"}
          </Button>
          <Button variant="outline" onClick={handleLike}>
            <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
            {isLiked ? "Aimé" : "J'aime"}
          </Button>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handlePrint}>
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
}
