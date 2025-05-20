"use client"

import { format, isSameMonth, isToday, startOfWeek, endOfWeek, eachDayOfInterval, getDay } from "date-fns"
import { fr } from "date-fns/locale"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PlannerEntry } from "@cook/validations"


interface MonthViewProps {
  days: Date[]
  entries: Record<string, PlannerEntry[]>
  currentDate: Date
  onAddRecipe: (date: Date) => void
  onEditRecipe: (recipe: PlannerEntry, date: Date) => void
  onDeleteRecipe: (recipeId: number, date: Date) => void
}

export function MonthView({ days, entries: recipes, currentDate, onAddRecipe, onEditRecipe, onDeleteRecipe }: MonthViewProps) {
  // Créer un tableau avec les jours de la semaine
  const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  // Obtenir tous les jours pour afficher un calendrier complet (avec les jours du mois précédent/suivant)
  const firstDayOfMonth = days[0]
  const lastDayOfMonth = days[days.length - 1]

  const startDate = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }) // Commence le lundi
  const endDate = endOfWeek(lastDayOfMonth, { weekStartsOn: 1 })

  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate })

  // Grouper les jours par semaine
  const weeks: Date[][] = []
  let currentWeek: Date[] = []

  calendarDays.forEach((day) => {
    if (currentWeek.length > 0 && getDay(day) === 1) {
      weeks.push(currentWeek)
      currentWeek = []
    }
    currentWeek.push(day)
  })

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((day) => (
          <div key={day} className="text-sm font-medium py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="space-y-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((day) => {
              const dateKey = format(day, "yyyy-MM-dd")
              const dayRecipes = recipes[dateKey] || []
              const isCurrentMonth = isSameMonth(day, currentDate)
              const isDayToday = isToday(day)

              return (
                <Card
                  key={dateKey}
                  className={`min-h-[100px] ${!isCurrentMonth ? "opacity-40" : ""} ${isDayToday ? "border-primary" : ""}`}
                >
                  <CardContent className="p-1 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`text-sm font-medium ${isDayToday ? "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center" : ""}`}
                      >
                        {format(day, "d")}
                      </span>
                    </div>

                    {dayRecipes.length > 0 && (
                      <div className="flex-1 overflow-hidden">
                        {dayRecipes.length <= 2 ? (
                          <div className="space-y-1">
                            {dayRecipes.map((recipe) => (
                              <MonthDayRecipe
                                key={recipe.id}
                                recipe={recipe}
                                date={day}
                                onEdit={onEditRecipe}
                                onDelete={onDeleteRecipe}
                              />
                            ))}
                          </div>
                        ) : (
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="cursor-pointer">
                                <MonthDayRecipe
                                  recipe={dayRecipes[0]}
                                  date={day}
                                  onEdit={onEditRecipe}
                                  onDelete={onDeleteRecipe}
                                />
                                <div className="text-xs text-center mt-1 text-muted-foreground">
                                  +{dayRecipes.length - 1} autres
                                </div>
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-72 p-2">
                              <div className="font-medium mb-2">{format(day, "EEEE d MMMM", { locale: fr })}</div>
                              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                                {dayRecipes.map((recipe) => (
                                  <MonthDayRecipe
                                    key={recipe.id}
                                    recipe={recipe}
                                    date={day}
                                    onEdit={onEditRecipe}
                                    onDelete={onDeleteRecipe}
                                    expanded
                                  />
                                ))}
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

interface MonthDayRecipeProps {
  recipe: PlannerEntry
  date: Date
  onEdit: (entry: PlannerEntry, date: Date) => void
  onDelete: (entryId: number, date: Date) => void
  expanded?: boolean
}

function MonthDayRecipe({ recipe: entry, date, onEdit, onDelete, expanded = false }: MonthDayRecipeProps) {
  const mealTypeColors: Record<string, string> = {
    breakfast: "bg-yellow-100 text-yellow-800",
    lunch: "bg-green-100 text-green-800",
    dinner: "bg-blue-100 text-blue-800",
    snack: "bg-purple-100 text-purple-800",
  }

  const colorClass = ""//mealTypeColors[recipe.mealType] || "bg-gray-100 text-gray-800"

  if (expanded) {
    return (
      <div className="p-2 border rounded-md text-sm">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-medium">{entry.recipe.title}</div>
            {/*<Badge variant="outline" className={`mt-1 text-xs ${colorClass}`}>
              {recipe.mealType === "breakfast"
                ? "Petit-déj"
                : recipe.mealType === "lunch"
                  ? "Déjeuner"
                  : recipe.mealType === "dinner"
                    ? "Dîner"
                    : recipe.mealType === "snack"
                      ? "Collation"
                      : recipe.mealType}
            </Badge>*/ }
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={() => onEdit(entry, date)} className="h-6 px-2">
              Modifier
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onDelete(entry.id, date)} className="h-6 px-2">
              Supprimer
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`px-1 py-0.5 rounded text-[10px] truncate cursor-pointer ${colorClass}`}
      onClick={() => onEdit(entry, date)}
    >
      {entry.recipe.title}
    </div>
  )
}
