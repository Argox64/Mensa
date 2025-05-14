"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"
import { Plus, X } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Ingredient, IngredientSchema, PlannerEntry } from "@cook/validations"
import EditableSelect from "./ui/select-custom-input"
import { Label } from "@radix-ui/react-dropdown-menu"

const formSchema = z.object({
  title: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  mealType: z.string(),
  ingredients: z.array(IngredientSchema).min(1, "Ajoutez au moins un ingrédient"),
  steps: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface RecipeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  entry: PlannerEntry | null
  onSave: (entry: PlannerEntry) => void
  date: Date
}

const mealTypesBase = ["Breakfast", "Lunch", "Dinner", "Snack"];

export function RecipeDialog({ open, onOpenChange, entry: entry, onSave, date }: RecipeDialogProps) {
  const [newIngredient, setNewIngredient] = useState({ name: "", quantity: 0 })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      mealType: "dinner",
      steps: "",
      ingredients: [],
    },
  })

  const ingredients = form.watch("ingredients")

  useEffect(() => {
    if (entry) {
      form.reset({
        title: entry.recipe.title,
        mealType: "",
        steps: entry.recipe.steps.join("\n"),
        ingredients: entry.recipe.ingredients || [],
      })
    } else {
      form.reset({
        title: "",
        mealType: "dinner",
        steps: "",
        ingredients: [],
      })
    }
    setNewIngredient({ name: "", quantity: 0 })
  }, [entry, form])

  const handleAddIngredient = () => {
    if (newIngredient.name.trim() === "" || newIngredient.quantity < 1) return
    form.setValue("ingredients", [...ingredients, newIngredient])
    setNewIngredient({ name: "", quantity: 0 })
  }

  const handleUpdateIngredient = (name: string, field: keyof Ingredient, value: string | number) => {
    form.setValue(
      "ingredients",
      ingredients.map((ing) =>
        ing.name === name ? { ...ing, [field]: field === "quantity" ? parseInt(value as string) : value } : ing
      )
    )
  }

  const handleRemoveIngredient = (name: string) => {
    form.setValue("ingredients", ingredients.filter((ing) => ing.name !== name))
  }

  const onSubmit = (values: FormValues) => {
    onSave({
      id: entry?.id || 0,
      recipe: {
        id: entry?.recipe.id || "",
        title: values.title,
        ingredients: values.ingredients,
        steps: values.steps?.split("\n") || [],
        preparationTime: 0,
        cookingTime: 0,
        tags : [],
        createdAt: new Date(),
      },
      mealType: values.mealType,
      nbPortions: 1,
      date: format(date, "yyyy-MM-dd"),
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {entry ? "Modifier la recette" : "Ajouter une recette"}
            {date && ` pour le ${format(date, "yyyy-MM-dd")}`}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de la recette</FormLabel>
                  <FormControl>
                    <Input placeholder="Poulet rôti aux herbes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mealType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de repas</FormLabel>
                  <EditableSelect
                    options={mealTypesBase}
                    placeholder="Sélectionnez un type de repas"
                    />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ingredients"
              render={() => (
                <FormItem>
                  <FormLabel>Ingrédients</FormLabel>
                  <Card className="mt-2">
                    <CardContent className="p-4 space-y-4">
                      {ingredients.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-2">
                          Aucun ingrédient. Ajoutez-en ci-dessous.
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {ingredients.map((ingredient) => (
                            <div key={ingredient.name} className="flex items-center gap-2">
                              <Input
                                type="number"
                                className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm text-right"
                                value={ingredient.quantity}
                                onChange={(e) => handleUpdateIngredient(ingredient.name, "quantity", e.target.value)}
                              />
                              <Label className="text-sm font-medium w-4 text-center">g</Label>
                              <Input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                value={ingredient.name}
                                onChange={(e) => handleUpdateIngredient(ingredient.name, "name", e.target.value)}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveIngredient(ingredient.name)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-end gap-2 pt-2 border-t">
                        <div className="flex-1 flex gap-2 items-center">
                          <Input
                            type="number"
                            className="w-20 text-right"
                            placeholder="Quantité"
                            value={newIngredient.quantity}
                            min={1}
                            onChange={(e) => setNewIngredient({ ...newIngredient, quantity: parseInt(e.target.value) })}
                          />
                          <Label className="text-sm font-medium w-4 text-center">g</Label>
                          <Input
                            className="flex-1"
                            placeholder="Nom de l'ingrédient"
                            value={newIngredient.name}
                            onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault()
                                handleAddIngredient()
                              }
                            }}
                          />
                        </div>
                        <Button type="button" onClick={handleAddIngredient} size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Ajouter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="steps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Rôtir au four à 180°C pendant 1h." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Annuler
              </Button>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

