"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Sparkles, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"

import { Recipe, GetRecipesRequest } from "@cook/validations"
import { trpcClient } from "@cook/trpc-client/client"
import { addDays, format } from "date-fns"
import { SuggestedRecipeItem } from "./suggest-recipe"
import { toast } from "@/hooks/use-toast"
import TagsFormItem from "./tagsFormItem"
import { Label } from "./ui/label"

const formSchema = z.object({
    //mealType: z.string().optional(),
    count: z.string().default("5"),
    tags: z.string().array().optional(),
    maxPreparationTime: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function PlannerRecipeGenerator() {
    const [getRecipeParams, setRecipeParams] = useState<GetRecipesRequest>({
        searchTerm: '',
        offset: 0,
        limit: 1,
    });

    const utils = trpcClient.useUtils();

    const [generatedTitles, setGeneratedTitles] = useState<{ id: number, title: string }[]>([])
    const [generatedRecipes, setGeneratedRecipes] = useState<Record<number, Recipe>>({})
    const [isGeneratingTitles, setIsGeneratingTitles] = useState(false)
    const [loadingRecipeIds, setLoadingRecipeIds] = useState<number[]>([])
    const [failedRecipeIds, setFailedRecipeIds] = useState<number[]>([])

    const [isDateModalOpen, setIsDateModalOpen] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
    const [selectedMealType, setSelectedMealType] = useState<string>("Autres");
    const [selectedPortions, setSelectedPortions] = useState<number>(1);


    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            //mealType: "",
            count: "5",
            maxPreparationTime: "30",
        },
    })

    const generateRecipesList = trpcClient.recipes.generateRecipesList.useMutation();
    const generateRecipe = trpcClient.recipes.processRecipe.useMutation();
    const getRecipe = trpcClient.recipes.getRecipes.useQuery(getRecipeParams, {
        enabled: !!getRecipeParams,
    });
    const addEntry = trpcClient.planner.addEntry.useMutation();

    useEffect(() => {
        if (getRecipe.data) {
            const recipe = getRecipe.data[0] as Recipe;
            const index = generatedTitles.find(({ title }) => title === getRecipeParams.searchTerm)?.id;
            if (index !== undefined) {
                if (recipe) {
                    setGeneratedRecipes((prev) => ({ ...prev, [index]: recipe }))
                    setLoadingRecipeIds((prev) => prev.filter((id) => id !== index))
                    setFailedRecipeIds((prev) => prev.filter((id) => id !== index))
                } else {
                    setLoadingRecipeIds((prev) => prev.filter((id) => id !== index))
                    setFailedRecipeIds((prev) => [...prev, index])
                    toast({
                        title: "Aucune recette trouvée",
                        description: `Aucun résultat pertinent pour "${getRecipeParams.searchTerm}".`,
                        variant: "destructive",
                    });
                }
            }
        }
    }, [getRecipe.data]);

    const generateRecipeTitles = async (values: FormValues) => {
        setIsGeneratingTitles(true);
        const count = Number.parseInt(values.count) || 5;
        const titles = await generateRecipesList.mutateAsync({
            count,
            tags: values.tags,
            maxPreparationAndCookingTime: 30
        });
        const indexed = titles.map((title, i) => ({ id: i, title }))
        setGeneratedTitles(indexed);
        setGeneratedRecipes({});
        setIsGeneratingTitles(false);
    }

    const generateFullRecipe = async (id: number, title: string) => {
        setLoadingRecipeIds((prev) => [...prev, id]);

        const maxTime = Number.parseInt(form.getValues("maxPreparationTime") || "30");

        const newRecipe: Recipe = await generateRecipe.mutateAsync({
            description: title,
            action: "generate",
            tags: form.getValues("tags"),
            maxPreparationAndCookingTime: maxTime,
        });

        setGeneratedRecipes((prev) => ({ ...prev, [id]: newRecipe }));
        setLoadingRecipeIds((prev) => prev.filter((t) => t !== id));
        setFailedRecipeIds((prev) => prev.filter((i) => i !== id));
    }


    const searchSimilarRecipe = async (id: number, title: string) => {
        setLoadingRecipeIds((prev) => [...prev, id]);
        setRecipeParams({ searchTerm: title, offset: 0, limit: 1 });
        await getRecipe.refetch();
    };

    const onSubmit = async (values: FormValues) => {
        await generateRecipeTitles(values);
    }

    const openDateModal = (recipe: Recipe) => {
        setSelectedRecipe(recipe)
        setSelectedDate(new Date())
        setIsDateModalOpen(true)
    }

    const handleConfirmDate = async () => {
        if (selectedRecipe && selectedDate) {
            const date = format(selectedDate, "yyyy-MM-dd")
            console.log("selected meat type", selectedMealType)
            await addEntry.mutateAsync({ recipeId: selectedRecipe.id, date, mealType: selectedMealType, nbPortions: 1 })
            utils.planner.getDays.invalidate()
            setIsDateModalOpen(false)
            setSelectedRecipe(null)
            setSelectedDate(null)
        }
    }

    const handleAddToPlanning = (recipe: Recipe) => {
        openDateModal(recipe)
    }

    const selectedItems = form.watch("tags") || [];

    const addItem = (item: string) => {
        if (!selectedItems.includes(item)) {
            const updated = [...selectedItems, item];
            form.setValue("tags", updated);
        }
    };

    const removeItem = (item: string) => {
        const updated = selectedItems.filter((i: string) => i !== item);
        form.setValue("tags", updated);
    };

    return (
        <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-bold">Générateur de recettes</h2>

            <Card>
                <CardHeader>
                    <CardTitle>Générer des idées de recettes</CardTitle>
                    <CardDescription>
                        Entrez des mots-clés pour générer une liste de recettes, puis choisissez de les générer via IA ou de les
                        rechercher dans la base de données.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TagsFormItem
                                    control={form.control}
                                    addItem={addItem}
                                    removeItem={removeItem}
                                    selectedItems={selectedItems}
                                />
                                <FormField
                                    control={form.control}
                                    name="count"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre de suggestions</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="5" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="3">3</SelectItem>
                                                    <SelectItem value="5">5</SelectItem>
                                                    <SelectItem value="10">10</SelectItem>
                                                    <SelectItem value="15">15</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="maxPreparationTime"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Temps max de préparation (min)</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="30" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="15">15</SelectItem>
                                                    <SelectItem value="30">30</SelectItem>
                                                    <SelectItem value="45">45</SelectItem>
                                                    <SelectItem value="60">60</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isGeneratingTitles}>
                                {isGeneratingTitles ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Génération en cours...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Générer des idées de recettes
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {generatedTitles.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-xl font-medium">Recettes suggérées</h3>
                    <div className="space-y-2">
                        {generatedTitles.map(({ id, title }) => {
                            const recipe = generatedRecipes[id];
                            const isLoading = loadingRecipeIds.includes(id);
                            const hasFailed = failedRecipeIds.includes(id);

                            return (
                                <Card key={id} className="overflow-hidden">
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-medium">{title}</h4>
                                            {!recipe && !isLoading && (
                                                <div className="flex gap-2">
                                                    <Button size="sm" variant="outline" onClick={() => generateFullRecipe(id, title)}>
                                                        <Sparkles className="mr-2 h-3 w-3" /> Générer via IA
                                                    </Button>
                                                    <Button size="sm" variant="outline" onClick={() => searchSimilarRecipe(id, title)} disabled={hasFailed}>
                                                        <Database className="mr-2 h-3 w-3" /> Chercher dans la base
                                                    </Button>
                                                </div>
                                            )}
                                            {isLoading && (
                                                <div className="flex items-center">
                                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    <span className="text-sm">Chargement...</span>
                                                </div>
                                            )}
                                        </div>

                                        {recipe && (
                                            <SuggestedRecipeItem
                                                listId={id}
                                                title={title}
                                                onRecipeLoaded={(listId, recipe) => {
                                                    setGeneratedRecipes((prev) => ({ ...prev, [listId]: recipe }))
                                                    setLoadingRecipeIds((prev) => prev.filter((id) => id !== listId))
                                                    setFailedRecipeIds((prev) => prev.filter((id) => id !== listId))
                                                }}
                                                onRecipeNotFound={(listId) => {
                                                    setLoadingRecipeIds((prev) => prev.filter((id) => id !== listId))
                                                    setFailedRecipeIds((prev) => [...prev, listId])
                                                }}
                                                handleAddToPlanning={handleAddToPlanning} />
                                        )}
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            )}

            <Dialog open={isDateModalOpen} onOpenChange={setIsDateModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Choisir une date</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        {/* Calendrier */}
                        <div className="flex justify-center">
                            <Calendar
                                mode="single"
                                selected={selectedDate ?? new Date()}
                                onSelect={(day) => setSelectedDate(day ?? null)}
                                disabled={(date) =>
                                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                    date > new Date(addDays(new Date(), 90).setHours(0, 0, 0, 0))
                                }
                            />
                        </div>

                        {/* Select type de repas */}
                        <div>
                            <Label>Type de repas</Label>
                            <Select value={selectedMealType} onValueChange={setSelectedMealType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Type de repas" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="breakfast">Petit-déjeuner</SelectItem>
                                    <SelectItem value="lunch">Déjeuner</SelectItem>
                                    <SelectItem value="dinner">Dîner</SelectItem>
                                    <SelectItem value="snack">Collation</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Select portions */}
                        <div>
                            <Label>Nombre de portions</Label>
                            <Select value={String(selectedPortions)} onValueChange={(v) => setSelectedPortions(Number(v))}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Portions" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <SelectItem key={i + 1} value={String(i + 1)}>
                                            {i + 1}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button onClick={() => setIsDateModalOpen(false)} variant="outline">
                            Annuler
                        </Button>
                        <Button onClick={handleConfirmDate} disabled={!selectedDate}>
                            Ajouter au planning
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}