import { Recipe } from '@cook/validations';
import { create } from 'zustand';

export type GeneratedRecipeState = {
    recipe: Recipe | null;
    setRecipe: (recipe: Recipe) => void;
    reset: () => void;
}; 

const useGeneratedRecipeStore = create<GeneratedRecipeState>((set) => ({
    recipe: null,
    setRecipe: (newRecipe: Recipe) => set({
        recipe: newRecipe
    }),
    reset: () => set({
        recipe: null
    }),
}))
export default useGeneratedRecipeStore