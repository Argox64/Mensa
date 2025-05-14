"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Sparkles, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { trpcClient } from "@cook/trpc-client/client"
import TagsFormItem from "./tagsFormItem"
import { RecipeGeneratorDialog } from "./recipe-generator-dialog"

const formSchema = z.object({
    count: z.number().default(5),
    tags: z.string().array().optional(),
    maxPreparationTime: z.number().default(10000),
})

type FormValues = z.infer<typeof formSchema>

export default function PlannerRecipeGenerator() {
    const [generatedTitles, setGeneratedTitles] = useState<{ id: number, title: string }[]>([])
    const [isGeneratingTitles, setIsGeneratingTitles] = useState(false)

    const [isDateModalOpen, setIsDateModalOpen] = useState(false)
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null)


    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            count: 5,
            tags: [],
            maxPreparationTime: 10000,
        },
    })

    const generateRecipesList = trpcClient.recipes.generateRecipesList.useMutation();

    const generateRecipeTitles = async (values: FormValues) => {
        setIsGeneratingTitles(true);
        const count = values.count;
        const titles = await generateRecipesList.mutateAsync({
            count,
            tags: values.tags,
            maxPreparationAndCookingTime: 30
        });
        const indexed = titles.map((title, i) => ({ id: i, title }))
        setGeneratedTitles(indexed);
        setIsGeneratingTitles(false);
    }

    const onSubmit = async (values: FormValues) => {
        await generateRecipeTitles(values);
    }

    const SearchRecipesModal = (title: string) => {
        setSelectedTitle(title)
        console.log("selected recipe", title)
        setIsDateModalOpen(true)
    }

    const selectedTags = form.watch("tags") || [];
    const maxPreparationTime = form.getValues("maxPreparationTime")

    const addItem = (item: string) => {
        if (!selectedTags.includes(item)) {
            const updated = [...selectedTags, item];
            form.setValue("tags", updated);
        }
    };

    const removeItem = (item: string) => {
        const updated = selectedTags.filter((i: string) => i !== item);
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
                                    selectedItems={selectedTags}
                                />

                                <FormField
                                    control={form.control}
                                    name="count"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre de suggestions</FormLabel>
                                            <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
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
                                            <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
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
                            return (
                                <Card key={id} className="overflow-hidden">
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-medium">{title}</h4>
                                            <div className="flex justify-between items-start">
                                                <Button onClick={() => SearchRecipesModal(title)} size="sm">
                                                    Générer la recette<ChevronRight className="ml-1 h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            )}
            {selectedTitle &&
                <RecipeGeneratorDialog recipeParams={{
                    title: selectedTitle,
                    tags: selectedTags,
                    maxPreparationTime: maxPreparationTime
                }} open={isDateModalOpen} onOpenChange={setIsDateModalOpen} />
            }
        </div>
    )
}