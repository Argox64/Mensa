import {
    ArrowLeft,
    CalendarIcon,
    Clock,
    Loader2,
    Plus,
    RefreshCw,
    Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "./ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "./ui/tabs";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { trpcClient } from "@cook/trpc-client/client";
import { Recipe } from "@cook/validations";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "./ui/popover";
import { Calendar } from "./ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";
import { toast } from "@/hooks/use-toast";
import { addDays, format } from "date-fns";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { recipePlaceholderUrl } from "@/lib/utils";

interface RecipeGeneratorDialogProps {
    recipeParams: { title: string, tags: string[], maxPreparationTime: number };
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function RecipeGeneratorDialog({
    recipeParams,
    open: isDialogOpen,
    onOpenChange
}: RecipeGeneratorDialogProps) {
    const [activeDialogTab, setActiveDialogTab] = useState<"list" | "details">("list");
    const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
    const [isGeneratingAiRecipe, setIsGeneratingAiRecipe] = useState(false);
    const [isGeneratingNewRecipe, setIsGeneratingNewRecipe] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [mealType, setMealType] = useState<string>("");

    console.log("title", recipeParams.title);

    const getRecipes = trpcClient.recipes.getRecipes.useQuery(
        { searchTerm: recipeParams.title },
        { enabled: isDialogOpen }
    );

    const addEntry = trpcClient.planner.addEntry.useMutation();

    const generateRecipe = trpcClient.recipes.processRecipe.useMutation({
        onSuccess: (data) => {
            setCurrentRecipe(data);
            setIsGeneratingAiRecipe(false);
            setActiveDialogTab("details");
        },
        onError: () => setIsGeneratingAiRecipe(false)
    });

    const handleGenerateAiRecipe = () => {
        setIsGeneratingAiRecipe(true);
        generateRecipe.mutate({
            action: "generate",
            description: recipeParams.title,
            tags: recipeParams.tags,
            maxPreparationAndCookingTime: recipeParams.maxPreparationTime
        });
    };

    async function handleAddToPlanning() {
        if (!currentRecipe || !selectedDate || !mealType) return;
        await addEntry.mutateAsync({
            date: format(selectedDate, "yyyy-MM-dd"),
            recipeId: currentRecipe.id,
            mealType
        });
        toast({
            title: "Ajouté au planning",
            description: `${currentRecipe.title} prévu pour le ${selectedDate.toLocaleDateString()} (${mealType})`,
            duration: 3000
        });
        onOpenChange(false);
    }

    function handleSelectRecipe(recipe: Recipe): void {
        setCurrentRecipe(recipe);
        setActiveDialogTab("details");
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Recettes pour "{recipeParams.title}"</DialogTitle>
                </DialogHeader>

                <Tabs
                    value={activeDialogTab}
                    onValueChange={(value) => setActiveDialogTab(value as "list" | "details")}
                >
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="list">Liste des recettes</TabsTrigger>
                        <TabsTrigger value="details">Détails de la recette</TabsTrigger>
                    </TabsList>

                    <TabsContent value="list" className="mt-4">
                        <ScrollArea className="h-[400px] pr-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {getRecipes.data?.map((recipe) => (
                                    <Card key={recipe.id} className={`overflow-hidden ${currentRecipe?.id === recipe.id ? "border-primary" : ""}`}>
                                        <div className="aspect-video relative">
                                            <img src={recipePlaceholderUrl} alt={recipe.title} className="object-cover w-full h-full" />
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-bold text-lg">{recipe.title}</h3>
                                            <div className="flex items-center text-sm text-muted-foreground gap-4">
                                                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />Prép : {recipe.preparationTime} min</span>
                                                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />Cuisson : {recipe.cookingTime} min</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {recipe.tags && recipe.tags.map((tag, index) => (
                                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="p-4 pt-0 flex justify-between">
                                            <Button variant={currentRecipe?.id === recipe.id ? "default" : "outline"} size="sm" onClick={() => handleSelectRecipe(recipe)}>
                                                {currentRecipe?.id === recipe.id ? "Sélectionnée" : "Sélectionner"}
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    <TabsContent value="details" className="mt-4">
                        {currentRecipe ? (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <Button variant="ghost" size="sm" onClick={() => setActiveDialogTab("list")}> <ArrowLeft className="mr-2 h-4 w-4" /> Retour à la liste </Button>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/3">
                                        <div className="aspect-video relative rounded-lg overflow-hidden">
                                            <img src={recipePlaceholderUrl} alt={currentRecipe.title} className="object-cover w-full h-full" />
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            <Button variant="outline" onClick={() => setIsGeneratingNewRecipe(true)} disabled={isGeneratingNewRecipe}>
                                                {isGeneratingNewRecipe ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Génération...</>) : (<><RefreshCw className="mr-2 h-4 w-4" /> Variante</>)}
                                            </Button>
                                            <Button variant="outline" onClick={handleGenerateAiRecipe} disabled={isGeneratingAiRecipe}>
                                                {isGeneratingAiRecipe ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> IA en cours...</>) : (<><Sparkles className="mr-2 h-4 w-4" /> IA</>)}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="md:w-2/3 space-y-4">
                                        <h2 className="text-2xl font-bold">{currentRecipe.title}</h2>
                                        <Accordion type="multiple" defaultValue={["ingredients", "instructions"]} className="w-full">
                                            <AccordionItem value="ingredients">
                                                <AccordionTrigger>Ingrédients</AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className="space-y-1 mt-2">
                                                        {currentRecipe.ingredients.map((ingredient, index) => (
                                                            <li key={index}><span className="font-medium mr-1">{ingredient.quantity}</span><span className="mr-1">g</span>{ingredient.name}</li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="instructions">
                                                <AccordionTrigger>Instructions</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-muted-foreground whitespace-pre-wrap mt-2">
                                                        {currentRecipe.steps.join("\n")}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="notes">
                                                <AccordionTrigger>Notes</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-muted-foreground whitespace-pre-wrap mt-2">
                                                        {currentRecipe.notes.join("\n")}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-col gap-4 md:flex-row md:items-end justify-center w-full">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium">Date</label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="w-[200px] justify-start text-left font-normal">
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {selectedDate ? selectedDate.toLocaleDateString() : "Choisir une date"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus disabled={(date) =>
                                                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                                    date > new Date(addDays(new Date(), 90).setHours(0, 0, 0, 0))
                                                } />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium">Type de repas</label>
                                        <Select value={mealType ?? ""} onValueChange={(value) => setMealType(value as any)}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Choisir un type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="breakfast">Petit-déjeuner</SelectItem>
                                                <SelectItem value="lunch">Déjeuner</SelectItem>
                                                <SelectItem value="dinner">Dîner</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button onClick={handleAddToPlanning} disabled={!selectedDate || !mealType}>
                                        <Plus className="mr-2 h-4 w-4" /> Ajouter au planning
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Générer une recette avec l'IA</CardTitle>
                                        <CardDescription>
                                            Notre IA va créer une recette personnalisée basée sur "{recipeParams.title}".
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-center p-8">
                                            <div className="text-center">
                                                <Sparkles className="h-16 w-16 mx-auto mb-4 text-primary" />
                                                <p className="text-lg font-medium mb-2">Laissez notre IA créer une recette unique pour vous</p>
                                                <p className="text-muted-foreground mb-6">
                                                    L'IA analysera "{recipeParams.title}" et générera une recette complète.
                                                </p>
                                                <Button onClick={handleGenerateAiRecipe} disabled={isGeneratingAiRecipe} size="lg" className="w-full md:w-auto">
                                                    {isGeneratingAiRecipe ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Génération en cours...</>) : (<><Sparkles className="mr-2 h-4 w-4" /> Générer une recette IA</>)}
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}