"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpcClient } from "@cook/trpc-client/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { useUser } from "@/contexts/UserContext";
import useGeneratedRecipeStore from "@/stores/generatedRecipeStore";
import { Recipe } from "@cook/validations";
import { useShallow } from "zustand/react/shallow";
import TagsFormItem from "./tagsFormItem";

// Schéma de validation
const formSchema = z.object({
    description: z.string().min(5, "La description doit comporter au moins 5 caractères."),
    tags: z.string().array(),
    maxPreparationAndCookingTime: z
        .number({ invalid_type_error: "Veuillez entrer un nombre." })
        .min(1, "Le temps doit être au moins de 1 minute.")
        .optional()
});

type FormSchema = z.infer<typeof formSchema>;

export default function RecipeForm() {
    const { setRecipe } = useGeneratedRecipeStore(useShallow(state => ({
        setRecipe: state.setRecipe,
    })));
    
    const { user } = useUser();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            tags: [],
            maxPreparationAndCookingTime: 30,
        },
    });

    const { handleSubmit, control, watch, setValue } = form;
    const selectedItems = watch("tags") || [];

    const addItem = (item: string) => {
        if (!selectedItems.includes(item)) {
            const updated = [...selectedItems, item];
            setValue("tags", updated);
        }
    };

    const removeItem = (item: string) => {
        const updated = selectedItems.filter((i: string) => i !== item);
        setValue("tags", updated);
    };

    const mutation = trpcClient.recipes.processRecipe.useMutation();

    const onSubmit = async (data: FormSchema) => {
        try {
            const response = await mutation.mutateAsync({
                description: data.description,
                action: "generate",
                tags: selectedItems,
                maxPreparationAndCookingTime: data.maxPreparationAndCookingTime,
            });

            if ("data" in response && response.data) {
                // Traitez la recette générée
                setRecipe(response.data as Recipe);

            } else if ("error" in response && response.error) {
                console.error("Erreur API :", response.error);
            }
        } catch (error) {
            console.error("Erreur lors de la génération de la recette :", error);
        }
    };

    return (
        <div className="relative w-full mx-auto min-w-[500px]">
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg space-y-6">
                    {/* Description */}
                    <FormField
                        control={control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>📝 Description de la recette souhaitée :</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Décrivez vos préférences, par exemple : 'Une salade fraîche avec une sauce légère'..."
                                        className="w-full mt-2 p-2 border rounded"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Tags */}
                    <TagsFormItem control={control}
                        addItem={addItem}
                        removeItem={removeItem}
                        selectedItems={selectedItems}
                    />

                    <FormField
                        control={control}
                        name="maxPreparationAndCookingTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>⏱ Temps de préparation et cuisson max (en minutes) :</FormLabel>
                                <FormControl>
                                    <input
                                        type="number"
                                        min={1}
                                        max={300}
                                        placeholder="ex: 30"
                                        className="w-full mt-2 p-2 border rounded"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Bouton Générer */}
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                        🍳 Générer ma recette
                    </Button>
                </form>
            </Form>
        </div>
    );
}
