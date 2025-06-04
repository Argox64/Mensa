import { z } from "zod";
import { z as zc } from "./customs";
import { RecipeSchema } from "./recipe";

export const PlannerEntrySchema = zc.object({   
    id: zc.number(),
    date: zc.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "Format invalide, attendu yyyy-MM-dd",
        })
        .refine((val) => {
            const date = new Date(val);
            return !isNaN(date.getTime()) && val === date.toISOString().slice(0, 10);
        }, {
            message: "Date invalide",
        }),
    nbPortions: zc.number().min(1).max(12).default(1),
    mealType: zc.string(),
    recipe : RecipeSchema
})

export const GetPlannerEntriesSchemaRequest = zc.object({
    startDate: zc.string().date(),
    days: zc.number().min(1).max(35),
});

export const GetPlannerEntriesSchemaResponse = zc.array(PlannerEntrySchema);

export const CreatePlannerEntrySchemaRequest = zc.object({
    date: zc.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Format invalide, attendu yyyy-MM-dd",
    })
    .refine((val) => {
        const date = new Date(val);
        return !isNaN(date.getTime()) && val === date.toISOString().slice(0, 10);
    }, {
        message: "Date invalide",
    }),
    recipeId: zc.string().uuid(),
    mealType: zc.string(),
    nbPortions: zc.number().min(1).max(12).default(1)
});

export const CreatePlannerEntryBatchSchemaRequest = CreatePlannerEntrySchemaRequest.array().min(1).max(150);

export const DeletePlannerEntrySchemaRequest = zc.object({
    entryId: zc.number()
});


export type PlannerEntry = z.infer<typeof PlannerEntrySchema>;
export type GetPlannerRequest = z.infer<typeof GetPlannerEntriesSchemaRequest>;
export type CreatePlannerEntryRequest = z.infer<typeof CreatePlannerEntrySchemaRequest>;
export type CreatePlannerEntriesBatchRequest = z.infer<typeof CreatePlannerEntryBatchSchemaRequest>;
export type DeletePlannerEntryRequest = z.infer<typeof DeletePlannerEntrySchemaRequest>;
export type GetPlannerEntriesResponse = z.infer<typeof GetPlannerEntriesSchemaResponse>;
