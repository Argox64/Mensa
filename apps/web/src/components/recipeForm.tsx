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
import {SearchInput} from "./searchInput";

// Schéma de validation
const formSchema = z.object({
    description: z.string().min(5, "La description doit comporter au moins 5 caractères."),
    dietType: z.string(),
    customDiet: z.string(),
});

export default function RecipeForm() {
    const [customDietActive, setCustomDietActive] = useState(false);
    const [selectedIntolerances, setSelectedIntolerances] = useState([]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            dietType: "none",
            customDiet: "",
        },
    });

    const { handleSubmit, control, setValue, watch } = form;

    const mutation = trpcClient.recipes.processRecipe.useMutation();

    const onSubmit = async (data) => {
        try {
            const response = await mutation.mutateAsync({
                userId: "1234",
                action: "generate",
                tags: [],
                maxPreparationAndCookingTime: 30
            });

            if ("data" in response && response.data) {
                // Traitez la recette générée
                console.log("Recette générée :", response.data);
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
                        <SearchInput/>
                    </FormItem>


                    {/* Bouton Générer */}
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                        🍳 Générer ma recette
                    </Button>
                </form>
            </Form>
        </div>
    );
}
