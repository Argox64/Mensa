import { privateProcedure, router } from "../trpc";
import { PlanSchema } from "@cook/validations/src/plan";
import { createPlan, deletePlan, getPlans } from "@cook/api-services";

export const planRouter = router({
    getPlans: privateProcedure
        .query(async ({ ctx }) => {
            return await getPlans({ ctx })
        }),
    createPlan: privateProcedure
        .input(PlanSchema)
        .mutation(async ({ input, ctx }) => {
            return await createPlan({ ctx, input });
        }),
    deletePlan: privateProcedure
        .input(PlanSchema.pick({ id: true }))
        .mutation(async ({ input, ctx }) => {
            await deletePlan({ ctx, id: input.id });

            return { message: "Plan deleted successfully" };
        }),
});