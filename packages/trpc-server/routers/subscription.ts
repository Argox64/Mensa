import { privateProcedure, router } from "../trpc";
import { SubscriptionSchema } from "@cook/validations/src/subscription";
import { cancelActiveSubscription, createSubscription, deleteSubscription, getLastSubscription } from "@cook/api-services";

export const subscriptionRouter = router({
    getLastSubscription: privateProcedure
        .query(async ({ ctx }) => {
            return getLastSubscription({ ctx });
        }),
    cancelActiveSubscription: privateProcedure
        .mutation(async ({ ctx }) => {
            await cancelActiveSubscription({ ctx });

            return { message: "Subscription canceled successfully" };
        }),
    createSubscription: privateProcedure
        .input(SubscriptionSchema.pick({ planId: true, billingCycle: true }))
        .mutation(async ({ input, ctx }) => {
            return await createSubscription({ ctx, planId: input.planId, billingCycle: input.billingCycle });
        }),
    deleteSubscription: privateProcedure
        .input(SubscriptionSchema.pick({ id: true }))
        .mutation(async ({ input, ctx }) => {
            await deleteSubscription({ ctx, id: input.id });

            return { message: "Subscription deleted successfully" };
        }),
});