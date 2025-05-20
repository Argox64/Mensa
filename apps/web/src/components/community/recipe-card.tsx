"use client"

import { Clock, Heart, User } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recipe } from "@cook/validations"
import { recipePlaceholderUrl } from "@/lib/utils"
import { difficultyColors } from "@/lib/types"

interface RecipeCardProps {
  recipe: Recipe
  onClick: (recipe: Recipe) => void
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const difficulty =
    difficultyColors[recipe.difficulty as keyof typeof difficultyColors] || "bg-gray-100 text-gray-800";
    console.log("Difficulty:", recipe);

  return (
    <Card
      className="overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer h-full flex flex-col"
      onClick={() => onClick(recipe)}
    >
      <div className="aspect-video relative">
        <img src={recipePlaceholderUrl} alt={recipe.title} className="object-cover w-full h-full" />
        <Badge className={`absolute top-2 right-2 ${difficulty.class}`}>
          {difficulty.text}
        </Badge>
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-lg line-clamp-2">{recipe.title}</h3>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <User className="h-3 w-3 mr-1" />
          <span className="mr-3">{recipe.Creator?.userName}</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{recipe.preparationTime + recipe.cookingTime} min</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm">Tags ici ?</span>
          </div>
          <div className="flex items-center">
            <Heart className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-sm">{recipe.likesCount}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
