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
import { useEffect, useState } from "react";
import { SearchInput } from "./searchInput";
import { useUser } from "@/contexts/UserContext";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";
import useGeneratedRecipeStore from "@/stores/generatedRecipeStore";
import { Recipe } from "@cook/validations";
import { useShallow } from "zustand/react/shallow";

// Schéma de validation
const formSchema = z.object({
    description: z.string().min(5, "La description doit comporter au moins 5 caractères."),
    dietType: z.string(),
    customDiet: z.string(),
    maxPreparationAndCookingTime: z
        .number({ invalid_type_error: "Veuillez entrer un nombre." })
        .min(1, "Le temps doit être au moins de 1 minute.")
        .optional()
});

export default function RecipeForm() {
    const { setRecipe } = useGeneratedRecipeStore(useShallow(state => ({
        setRecipe: state.setRecipe,
    })));

    const [customDietActive, setCustomDietActive] = useState(false);
    const { user } = useUser();
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            dietType: "none",
            customDiet: "",
            maxPreparationAndCookingTime: 30,
        },
    });

    const addItem = (item: string) => {
        console.log(item);
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }
        console.log("Selected items:", selectedItems);
    };

    const removeItem = (item: string) => {
        setSelectedItems(selectedItems.filter(i => i !== item));
    };

    const { handleSubmit, control, watch } = form;

    const mutation = trpcClient.recipes.processRecipe.useMutation();

    const onSubmit = async (data: any) => {
        if (!user) {
            console.error("User invalid");
            return;
        }
        try {
            const response = await mutation.mutateAsync({
                userId: user.id,
                action: "generate",
                tags: selectedItems,
                maxPreparationAndCookingTime: data.maxPreparationAndCookingTime,
            });

            if ("data" in response && response.data) {
                // Traitez la recette générée
                setRecipe(response.data.content as Recipe);
                
            } else if ("error" in response && response.error) {
                console.error("Erreur API :", response.error);
            }
        } catch (error) {
            console.error("Erreur lors de la génération de la recette :", error);
        }
    };

    const selectedDiet = watch("dietType");
    useEffect(() => {
        setCustomDietActive(selectedDiet === "other");
    }, [selectedDiet]);

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

                    <FormItem>
                        <FormLabel>Ajouter un tag :</FormLabel>
                        <SearchInput addItem={addItem} removeItem={removeItem} />
                        <div className="mt-4 gap-2 flex flex-wrap">
                            {selectedItems.map((badge, index) => (
                                <Badge key={index} className="items-center px-3 py-1 gap-2">
                                    {badge}
                                    <X
                                        className="w-4 h-4 cursor-pointer hover:text-red-500"
                                        onClick={() => removeItem(selectedItems[index])}
                                    />
                                </Badge>
                            ))}
                        </div>
                    </FormItem>

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
