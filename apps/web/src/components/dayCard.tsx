"use client"

import { Edit, Trash2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlannerEntry } from "@cook/validations"

interface DayCardProps {
  entries: PlannerEntry[]
  onEdit: (entry: PlannerEntry) => void
  onDelete: (recipeId: number) => void
}

export function DayCard({ entries: entries, onEdit, onDelete }: DayCardProps) {
  const groupedByMealType = entries.reduce<Record<string, PlannerEntry[]>>((acc, entry) => {
    const type = entry.mealType || "Autres";
    if (!acc[type]) {
      acc[type] = []
    }
    acc[type].push(entry)
    return acc
  }, {})
  
  const mealTypeLabels: Record<string, string> = {
    breakfast: "Petit-déjeuner",
    lunch: "Déjeuner",
    dinner: "Dîner",
    snack: "Collation",
    default: "Autres",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recettes du jour</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {entries.length === 0 ? (
          <p className="text-center text-muted-foreground py-6">
            Aucune recette programmée pour ce jour
          </p>
        ) : (
          Object.entries(groupedByMealType).map(([type, entries]) => (
            <div key={type} className="space-y-4">
              <h3 className="font-medium">
                {mealTypeLabels[type] ?? type }
              </h3>
              {entries.map((entry) => (
                <RecipeItem key={entry.id} entry={entry} onEdit={onEdit} onDelete={onDelete} />
              ))}
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}

interface RecipeItemProps {
  entry: PlannerEntry
  onEdit: (entry: PlannerEntry) => void
  onDelete: (entryId: number) => void
}

function RecipeItem({ entry, onEdit, onDelete }: RecipeItemProps) {
  return (
    <div
      className="rounded-lg border p-4 transition-all duration-200 hover:bg-muted/50 hover:shadow-sm cursor-pointer"
      onClick={() => onEdit(entry)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{entry.recipe.title}</h4>
          <div className="mt-2 flex flex-wrap gap-1">
            {entry.recipe.tags?.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onDelete(entry.id)
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
