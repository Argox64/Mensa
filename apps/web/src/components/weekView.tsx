"use client"

import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { useMediaQuery } from "@/hooks/use-media-query"
import { PlannerEntry } from "@cook/validations"

interface WeekViewProps {
  days: Date[]
  entries: Record<string, PlannerEntry[]>
  onAddRecipe: (date: Date) => void
  onEditRecipe: (recipe: PlannerEntry, date: Date) => void
  onDeleteRecipe: (entryId: number, date: Date) => void
}

export function WeekView({ days, entries: recipes, onAddRecipe, onEditRecipe, onDeleteRecipe }: WeekViewProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateKey = format(day, "yyyy-MM-dd")
          const dayRecipes = recipes[dateKey] || []
          const isToday = format(new Date(), "yyyy-MM-dd") === dateKey

          const visibleCount = 4
          const visibleRecipes = dayRecipes.slice(0, visibleCount)
          const hiddenCount = dayRecipes.length - visibleCount

          return (
            <Card key={dateKey} className={`${isToday ? "border-primary" : ""}`}>
              <CardHeader className="p-3">
                <CardTitle className="text-sm font-medium text-center">
                  {format(day, "EEEE", { locale: fr })}
                  <div className="text-lg font-bold">{format(day, "d", { locale: fr })}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <ScrollArea className="h-[200px]">
                  {dayRecipes.length === 0 ? (
                    <p className="text-xs text-center text-muted-foreground">Aucune recette</p>
                  ) : (
                    <div className="space-y-2">
                      {visibleRecipes.map((entry) => (
                        <WeekDayRecipe
                          key={entry.id}
                          entry={entry}
                          onEdit={() => onEditRecipe(entry, day)}
                          onDelete={() => onDeleteRecipe(entry.id, day)}
                        />
                      ))}
                      {hiddenCount > 0 && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="text-xs text-center text-muted-foreground cursor-pointer">
                              +{hiddenCount} autres
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-72 p-2">
                            <div className="font-medium mb-2">
                              {format(day, "EEEE d MMMM", { locale: fr })}
                            </div>
                            <div className="space-y-2 max-h-[300px] overflow-y-auto">
                              {dayRecipes.map((entry) => (
                                <WeekDayRecipe
                                  key={entry.id}
                                  entry={entry}
                                  onEdit={() => onEditRecipe(entry, day)}
                                  onDelete={() => onDeleteRecipe(entry.id, day)}
                                  expanded
                                />
                              ))}
                            </div>
                            <Button className="w-full mt-2" size="sm" onClick={() => onAddRecipe(day)}>
                              <Plus className="mr-1 h-3 w-3" />
                              Ajouter une recette
                            </Button>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  )}
                </ScrollArea>
                <Button variant="ghost" size="sm" className="w-full mt-2" onClick={() => onAddRecipe(day)}>
                  <Plus className="h-3 w-3 mr-1" />
                  Ajouter
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {days.map((day) => {
        const dateKey = format(day, "yyyy-MM-dd")
        const dayRecipes = recipes[dateKey] || []
        const isToday = format(new Date(), "yyyy-MM-dd") === dateKey

        return (
          <Card key={dateKey} className={`${isToday ? "border-primary" : ""}`}>
            <CardHeader className="py-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">{format(day, "EEEE d MMMM", { locale: fr })}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => onAddRecipe(day)}>
                  <Plus className="h-4 w-4 mr-1" />
                  Ajouter
                </Button>
              </div>
            </CardHeader>
            <CardContent className="py-2">
              {dayRecipes.length === 0 ? (
                <p className="text-sm text-center text-muted-foreground py-2">Aucune recette</p>
              ) : (
                <div className="space-y-2">
                  {dayRecipes.map((recipe) => (
                    <WeekDayRecipe
                      key={recipe.id}
                      entry={recipe}
                      onEdit={() => onEditRecipe(recipe, day)}
                      onDelete={() => onDeleteRecipe(recipe.id, day)}
                      expanded
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

interface WeekDayRecipeProps {
  entry: PlannerEntry
  onEdit: () => void
  onDelete: () => void
  expanded?: boolean
}

function WeekDayRecipe({ entry, onEdit, onDelete, expanded = false }: WeekDayRecipeProps) {
  if (expanded) {
    return (
      <div className="p-2 border rounded-md text-sm hover:bg-muted/50 transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-medium">{entry.recipe.title}</div>
            {entry.mealType && (
              <Badge variant="outline" className="mt-1 text-xs">
                {entry.mealType}
              </Badge>
            )}
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={onEdit} className="h-6 px-2">
              Modifier
            </Button>
            <Button variant="ghost" size="sm" onClick={onDelete} className="h-6 px-2">
              Supprimer
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-1 border rounded-md text-xs hover:bg-muted/50 transition-colors cursor-pointer" onClick={onEdit}>
      <div className="font-medium truncate">{entry.recipe.title}</div>
      {entry.mealType && (
        <Badge variant="outline" className="mt-1 text-[10px]">
          {entry.mealType}
        </Badge>
      )}
    </div>
  )
}