"use client"

import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useMediaQuery } from "@/hooks/use-media-query"

interface RecipeFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedCategory: string | null
  onCategoryChange: (value: string | null) => void
  selectedDifficulty: string | null
  onDifficultyChange: (value: string | null) => void
  selectedTime: string | null
  onTimeChange: (value: string | null) => void
  sortBy: string
  onSortChange: (value: string) => void
  selectedTag: string | null
  onTagChange: (value: string | null) => void
}

export function RecipeFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedTime,
  onTimeChange,
  sortBy,
  onSortChange,
  selectedTag,
  onTagChange,
}: RecipeFiltersProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [tempFilters, setTempFilters] = useState({
    category: selectedCategory,
    difficulty: selectedDifficulty,
    time: selectedTime,
    tag: selectedTag,
  })
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleApplyFilters = () => {
    onCategoryChange(tempFilters.category)
    onDifficultyChange(tempFilters.difficulty)
    onTimeChange(tempFilters.time)
    onTagChange(tempFilters.tag)
    setIsSheetOpen(false)
  }

  const handleResetFilters = () => {
    setTempFilters({
      category: null,
      difficulty: null,
      time: null,
      tag: null,
    })
    onCategoryChange(null)
    onDifficultyChange(null)
    onTimeChange(null)
    onTagChange(null)
    setIsSheetOpen(false)
  }

  const categories = [
    { value: "entree", label: "Entrée" },
    { value: "plat", label: "Plat principal" },
    { value: "dessert", label: "Dessert" },
    { value: "aperitif", label: "Apéritif" },
    { value: "boisson", label: "Boisson" },
  ]

  const difficulties = [
    { value: "facile", label: "Facile" },
    { value: "moyen", label: "Moyen" },
    { value: "difficile", label: "Difficile" },
  ]

  const prepTimes = [
    { value: "quick", label: "Rapide (< 20 min)" },
    { value: "medium", label: "Moyen (20-45 min)" },
    { value: "long", label: "Long (> 45 min)" },
  ]

  const sortOptions = [
    { value: "popular", label: "Les plus populaires" },
    { value: "recent", label: "Les plus récentes" },
    { value: "quickest", label: "Les plus rapides" },
  ]

  const popularTags = [
    { value: "vegetarien", label: "Végétarien" },
    { value: "vegan", label: "Vegan" },
    { value: "sans-gluten", label: "Sans gluten" },
    { value: "rapide", label: "Rapide" },
    { value: "healthy", label: "Healthy" },
    { value: "dessert", label: "Dessert" },
    { value: "italien", label: "Italien" },
    { value: "français", label: "Français" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher une recette ou un auteur..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {isMobile ? (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtres</SheetTitle>
                  <SheetDescription>Affinez votre recherche de recettes avec ces filtres.</SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  <div className="space-y-2">
                    <Label>Catégorie</Label>
                    <RadioGroup
                      value={tempFilters.category || ""}
                      onValueChange={(value) => setTempFilters({ ...tempFilters, category: value || null })}
                    >
                      {categories.map((category) => (
                        <div key={category.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={category.value} id={`category-${category.value}`} />
                          <Label htmlFor={`category-${category.value}`}>{category.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Difficulté</Label>
                    <RadioGroup
                      value={tempFilters.difficulty || ""}
                      onValueChange={(value) => setTempFilters({ ...tempFilters, difficulty: value || null })}
                    >
                      {difficulties.map((difficulty) => (
                        <div key={difficulty.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={difficulty.value} id={`difficulty-${difficulty.value}`} />
                          <Label htmlFor={`difficulty-${difficulty.value}`}>{difficulty.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Temps de préparation</Label>
                    <RadioGroup
                      value={tempFilters.time || ""}
                      onValueChange={(value) => setTempFilters({ ...tempFilters, time: value || null })}
                    >
                      {prepTimes.map((time) => (
                        <div key={time.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={time.value} id={`time-${time.value}`} />
                          <Label htmlFor={`time-${time.value}`}>{time.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label>Tags populaires</Label>
                    <RadioGroup
                      value={tempFilters.tag || ""}
                      onValueChange={(value) => setTempFilters({ ...tempFilters, tag: value || null })}
                    >
                      {popularTags.map((tag) => (
                        <div key={tag.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={tag.value} id={`tag-${tag.value}`} />
                          <Label htmlFor={`tag-${tag.value}`}>{tag.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" onClick={handleResetFilters}>
                    Réinitialiser
                  </Button>
                  <Button onClick={handleApplyFilters}>Appliquer</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ) : (
            <>
              <Select
                value={selectedCategory || ""}
                onValueChange={(value) => onCategoryChange(value === "" ? null : value)}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedDifficulty || ""}
                onValueChange={(value) => onDifficultyChange(value === "" ? null : value)}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Difficulté" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les difficultés</SelectItem>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTime || ""} onValueChange={(value) => onTimeChange(value === "" ? null : value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Temps de préparation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les temps</SelectItem>
                  {prepTimes.map((time) => (
                    <SelectItem key={time.value} value={time.value}>
                      {time.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedTag || ""} onValueChange={(value) => onTagChange(value === "" ? null : value)}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les tags</SelectItem>
                  {popularTags.map((tag) => (
                    <SelectItem key={tag.value} value={tag.value}>
                      {tag.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        </div>
      </div>

      {/* Affichage des filtres actifs */}
      <div className="flex flex-wrap gap-2">
        {selectedCategory && (
          <Button variant="outline" size="sm" onClick={() => onCategoryChange(null)} className="h-7 text-xs">
            {categories.find((c) => c.value === selectedCategory)?.label} ✕
          </Button>
        )}
        {selectedDifficulty && (
          <Button variant="outline" size="sm" onClick={() => onDifficultyChange(null)} className="h-7 text-xs">
            {difficulties.find((d) => d.value === selectedDifficulty)?.label} ✕
          </Button>
        )}
        {selectedTime && (
          <Button variant="outline" size="sm" onClick={() => onTimeChange(null)} className="h-7 text-xs">
            {prepTimes.find((t) => t.value === selectedTime)?.label} ✕
          </Button>
        )}
        {selectedTag && (
          <Button variant="outline" size="sm" onClick={() => onTagChange(null)} className="h-7 text-xs">
            {popularTags.find((t) => t.value === selectedTag)?.label || selectedTag} ✕
          </Button>
        )}
        {(selectedCategory || selectedDifficulty || selectedTime || selectedTag) && (
          <Button variant="ghost" size="sm" onClick={handleResetFilters} className="h-7 text-xs text-muted-foreground">
            Effacer tous les filtres
          </Button>
        )}
      </div>
    </div>
  )
}
