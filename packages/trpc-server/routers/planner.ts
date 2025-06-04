import { CreatePlannerEntryBatchSchemaRequest, CreatePlannerEntrySchemaRequest, DeletePlannerEntrySchemaRequest, GetPlannerEntriesSchemaRequest, GetPlannerEntriesSchemaResponse } from "@cook/validations";
import { privateProcedure, router } from "../trpc";
import { addPlannerEntry, createBatchEntries, deletePlannerEntry, getDays } from "@cook/api-services"

export const plannerRouter = router({
    getDays: privateProcedure
        .input(GetPlannerEntriesSchemaRequest)
        .output(GetPlannerEntriesSchemaResponse)
        .query(async ({ input, ctx }) => {
            return await getDays({ ctx, input });
        }),
    addEntry: privateProcedure
        .input(CreatePlannerEntrySchemaRequest)
        .mutation(async ({ input, ctx }) => {
            return await addPlannerEntry({ ctx, input });
        }),
    deleteEntry: privateProcedure
        .input(DeletePlannerEntrySchemaRequest)
        .mutation(async ({ input, ctx }) => {
            await deletePlannerEntry({ ctx, input });
            return {
                message: "OK"
            };
        }),
    createBatchEntries: privateProcedure
        .input(CreatePlannerEntryBatchSchemaRequest)
        .mutation(async ({ input, ctx }) => {
            const plannerEntries = await createBatchEntries({ctx, input});
            return {
                message: "OK",
                count: plannerEntries.count
            };
        })
});