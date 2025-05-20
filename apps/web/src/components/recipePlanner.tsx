"use client"

import { useState } from "react"
import {
  format,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addWeeks,
  subWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
} from "date-fns"
import { fr } from "date-fns/locale"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DayCard } from "@/components/dayCard"
import { WeekView } from "@/components/weekView"
import { MonthView } from "@/components/monthView"
import type { GetPlannerEntriesResponse, PlannerEntry } from "@cook/validations"
import { trpcClient } from "@cook/trpc-client/client"
import { usePlannerEntriesStore } from "@/stores/plannerEntries"
import { useShallow } from "zustand/react/shallow"

type ViewMode = "day" | "week" | "month"

export function DailyRecipePlanner() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const { entries, refreshEntries } = usePlannerEntriesStore(useShallow((state) => ({
    entries : state.entries,
    refreshEntries : state.refreshEntries
})));
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingRecipe, setEditingEntry] = useState<PlannerEntry | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("day")
  const [selectedDateForAdd, setSelectedDateForAdd] = useState<Date>(new Date())

  const utils = trpcClient.useUtils();
  const removeEntry = trpcClient.planner.deleteEntry.useMutation();

  const setEntriesData = (data : GetPlannerEntriesResponse) => {
    if (data) {
      refreshEntries(data);
    }
  }

  const dateKey = format(currentDate, "yyyy-MM-dd")
  const dayRecipes = entries[dateKey] || []

  // Navigation pour la vue jour
  const handlePreviousDay = () => {
    setCurrentDate((prev) => subDays(prev, 1))
  }

  const handleNextDay = () => {
    setCurrentDate((prev) => addDays(prev, 1))
  }

  // Navigation pour la vue semaine
  const handlePreviousWeek = () => {
    setCurrentDate((prev) => subWeeks(prev, 1))
  }

  const handleNextWeek = () => {
    setCurrentDate((prev) => addWeeks(prev, 1))
  }

  // Navigation pour la vue mois
  const handlePreviousMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1))
  }

  // Calcul des jours de la semaine
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }) // Commence le lundi
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 })
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd })

  // Calcul des jours du mois
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const getDays = trpcClient.planner.getDays.useQuery({
    startDate: format(
      viewMode === "day"
        ? currentDate
        : viewMode === "week"
        ? weekStart
        : monthStart,
      "yyyy-MM-dd"
    ),
    days: viewMode === "day" ? 1 : viewMode === "week" ? 7 : 31,
  }, {
    enabled: !!currentDate,
    onSuccess: (data) => {
      console.log("Data fetched:", data)
      setEntriesData(data)
    },
  });

  // Gestion des recettes
  const handleAddRecipe = (date?: Date) => {
    setEditingEntry(null)
    setSelectedDateForAdd(date || currentDate)
    setIsDialogOpen(true)
  }

  const handleEditRecipe = (entry: PlannerEntry, date?: Date) => {
    setEditingEntry(entry)
    setSelectedDateForAdd(date || currentDate)
    setIsDialogOpen(true)
  }

  const handleDeleteRecipe = async (entryId: number, date?: Date) => {
    const targetDate = date || currentDate
    const targetDateKey = format(targetDate, "yyyy-MM-dd")
    const targetDayRecipes = entries[targetDateKey] || []

    await removeEntry.mutateAsync({entryId});
    utils.planner.getDays.invalidate();
  }

  /*const handleSaveRecipe = (entry: PlannerEntry) => {
    const targetDateKey = format(selectedDateForAdd, "yyyy-MM-dd")
    const targetDayRecipes = entries[targetDateKey] || []

    if (editingRecipe) {
      updateOrAddEntry(targetDateKey, entry)
    } else {
      // Ajout d'une nouvelle recette
      const newEntry = {
        ...entry,
        id: Date.now(), // Use a number-based unique ID 
      }

      updateOrAddEntry(targetDateKey, newEntry)
    }

    setIsDialogOpen(false)
  }*/

  // Titre et navigation selon la vue
  let viewTitle = ""
  let handlePrevious = handlePreviousDay
  let handleNext = handleNextDay

  if (viewMode === "day") {
    viewTitle = format(currentDate, "EEEE d MMMM yyyy", { locale: fr })
    handlePrevious = handlePreviousDay
    handleNext = handleNextDay
  } else if (viewMode === "week") {
    viewTitle = `${format(weekStart, "d MMMM", { locale: fr })} - ${format(weekEnd, "d MMMM yyyy", { locale: fr })}`
    handlePrevious = handlePreviousWeek
    handleNext = handleNextWeek
  } else if (viewMode === "month") {
    viewTitle = format(currentDate, "MMMM yyyy", { locale: fr })
    handlePrevious = handlePreviousMonth
    handleNext = handleNextMonth
  }

  console.log("Current date:", currentDate)
  return (
    <div className="space-y-6">
      <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as ViewMode)} className="w-full">
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" size="icon" onClick={handlePrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-medium">{viewTitle}</h2>
            <TabsList>
              <TabsTrigger value="day">Jour</TabsTrigger>
              <TabsTrigger value="week">Semaine</TabsTrigger>
              <TabsTrigger value="month">Mois</TabsTrigger>
            </TabsList>
          </div>

          <Button variant="outline" size="icon" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <TabsContent value="day" className="mt-0">
          <DayCard
            entries={dayRecipes}
            onEdit={(recipe) => handleEditRecipe(recipe)}
            onDelete={(recipeId) => handleDeleteRecipe(recipeId)}
          />
        </TabsContent>

        <TabsContent value="week" className="mt-0">
          <WeekView
            days={daysInWeek}
            entries={entries}
            onAddRecipe={handleAddRecipe}
            onEditRecipe={handleEditRecipe}
            onDeleteRecipe={handleDeleteRecipe}
          />
        </TabsContent>

        <TabsContent value="month" className="mt-0">
          <MonthView
            days={daysInMonth}
            entries={entries}
            currentDate={currentDate}
            onAddRecipe={handleAddRecipe}
            onEditRecipe={handleEditRecipe}
            onDeleteRecipe={handleDeleteRecipe}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
