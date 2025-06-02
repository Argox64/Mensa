import { PantryItem } from '@/types/Pantry';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PantryStoreState = { //todo REMOVE
    ingredients: PantryItem[];
    addIngredient: (item: PantryItem) => void;
    removeIngredient: (itemId: number) => void;
};

const useIngredientStore = create(
    persist(
        (set) => ({
            ingredients: [],
            
            addIngredient: (item: PantryItem) => set((state : PantryStoreState) => {
                const existingIngredient = state.ingredients.find((ing) => ing.id === item.id);
                
                if (existingIngredient) {
                    // Si l'ingrédient existe, additionner les quantités
                    return {
                        customIngredients: state.ingredients.map((ing) =>
                            ing.id === item.id
                                ? { ...ing, quantity: ing.quantity + item.quantity}
                                : ing
                        ),
                    };
                } else {
                    // Sinon, l'ajouter normalement
                    return { customIngredients: [...state.ingredients, item] };
                }
            }),
            
            removeIngredient: (itemId: string) => set((state : PantryStoreState) => ({
                customIngredients: state.ingredients.filter((ing) => ing.id !== itemId)
            }))
        }),
        {
            name: "pantry-store", // Clé utilisée dans localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useIngredientStore;
