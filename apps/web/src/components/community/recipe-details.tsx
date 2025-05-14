"use client"

import type React from "react"

import { useState } from "react"
import { Heart, User, Calendar, Plus, Bookmark, Share2, Printer, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Recipe } from "@cook/validations"
import { recipePlaceholderUrl } from "@/lib/utils"

interface RecipeDetailsProps {
  recipe: Recipe
  isOpen: boolean
  onClose: () => void
  onAddToPlanning: (recipe: Recipe) => void
}

export function RecipeDetails({ recipe, isOpen, onClose, onAddToPlanning }: RecipeDetailsProps) {
  const [activeTab, setActiveTab] = useState("ingredients")
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const difficultyLabels = {
    facile: "Facile",
    moyen: "Moyen",
    difficile: "Difficile",
  }

  const categoryLabels = {
    entree: "Entrée",
    plat: "Plat principal",
    dessert: "Dessert",
    aperitif: "Apéritif",
    boisson: "Boisson",
  }

  //const difficultyLabel = difficultyLabels[recipe.difficulty as keyof typeof difficultyLabels] || recipe.difficulty
  //const categoryLabel = categoryLabels[recipe.category as keyof typeof categoryLabels] || recipe.category

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSaved(!isSaved)
  }

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Logique de partage
    alert("Fonctionnalité de partage à implémenter")
  }

  const handlePrint = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.print()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src={recipePlaceholderUrl} alt={recipe.title} className="object-cover w-full h-full" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">categoryLabel</Badge>
              <Badge variant="outline">difficultyLabel</Badge>
              <Badge variant="outline">Prep: {recipe.preparationTime} min</Badge>
              <Badge variant="outline">Cuisson: {recipe.cookingTime} min</Badge>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">recipe.author</span>
              </div>
              {/* CREATION DATE*/ /*<div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">{format(new Date(recipe.date), "d MMMM yyyy", { locale: fr })}</span>
              </div>*/}
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{recipe.preparationTime} min de préparation</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{recipe.cookingTime} min de cuisson</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm">{/*isLiked ? recipe.likes + 1 : recipe.likes*/} likes</span>
              </div>
            </div>

            <Separator className="my-4" />

            <p className="text-muted-foreground">recipe.description</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {recipe.tags?.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

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
              <Button onClick={() => onAddToPlanning(recipe)}>
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

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
