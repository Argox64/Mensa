import { privateProcedure, publicProcedure, router } from "../trpc";
import { SubscriptionSchema } from "@cook/validations/src/subscription";
import { CONFLICT_ERROR, ConflictError, NOT_FOUND_RESOURCE_ERROR, NotFoundError, UnauthorizedError } from "@cook/errors";
import { UserLite } from "@cook/validations";
import Stripe from "stripe";
import { startOfDay } from "date-fns";
import { getProfile } from "../services/user";
import { ITRPCContext } from "../context";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-secret-key", {
    apiVersion: '2025-04-30.basil',
});

export const subscriptionRouter = router({
    getSubscriptions: privateProcedure // TODO REMOVE
        .query(async ({ ctx }) => {
            const user = ctx.user as UserLite;

            const subscriptions = await ctx.prisma.subscriptions.findMany({
                where: { userId: user.id },
                include: { Plan: true },
            });

            return subscriptions.map((subscription) => ({
                id: subscription.id,
                userId: subscription.userId,
                planId: subscription.planId,
                startDate: subscription.startDate,
                Plan: subscription.Plan,
            }));
        }),
    getLastSubscription: privateProcedure
        .query(async ({ ctx }) => {
            const user = ctx.user as UserLite;

            const subscription = await ctx.prisma.subscriptions.findFirst({
                where: { userId: user.id },
                include: { Plan: true },
                orderBy: { startDate: "desc" },
            });

            const sub = await stripe.subscriptions.retrieve(subscription?.stripeSubscriptionId as string);

            return {
                id: subscription?.id,
                planId: subscription?.planId,
                startDate: subscription?.startDate,
                billingCycle: subscription?.billingCycle,
                Plan: subscription?.Plan,
                stripeSubscriptionId: sub.id,
                status: sub.status,
                current_period_end: sub.items.data[0]?.current_period_end as number * 1000,
                current_period_start: sub.items.data[0]?.current_period_start as number * 1000,
                cancel_at_period_end: sub.cancel_at_period_end,
            };
        }),
    cancelActiveSubscription: privateProcedure
        .mutation(async ({ ctx }) => {
            const user = await getProfile({ ctx });

            const subscription = await ctx.prisma.subscriptions.findFirst({
                where: { userId: user.id },
            });
            if (!subscription) return null;

            const subscriptions = await stripe.subscriptions.list({
                customer: user.stripeCustomerId as string,
                status: 'active',
                limit: 1,
            });

            if (!subscriptions.data[0]) return null;

            await stripe.subscriptions.update(subscriptions.data[0].id, {
                cancel_at_period_end: true,
            });

            return { message: "Subscription canceled successfully" };
        }),
    createSubscription: privateProcedure
        .input(SubscriptionSchema.pick({ planId: true, billingCycle: true }))
        .mutation(async ({ input, ctx }) => {
            const user = await getProfile({ ctx })

            let price: string;
            //TODO add field in database
            if (input.billingCycle === "MONTHLY") {
                price = "price_1RNzM3AcuZSbG8QXlUYV70du";
            }
            else
                price = "price_1ROEiTAcuZSbG8QXSCOtAmw7"; // YEARLY

            let customer: Stripe.Customer;
            if (!user.stripeCustomerId) {
                customer = await stripe.customers.create({
                    email: user.email,
                    name: user.username,
                    metadata: {
                        userId: user.id,
                    }
                });
                await ctx.prisma.user.update({
                    where: { id: user.id },
                    data: { stripeCustomerId: customer.id },
                });
            }
            else
                customer = await stripe.customers.retrieve(user.stripeCustomerId) as Stripe.Customer;

            const activeSubscription = await getActiveSubscription(ctx);

            if (activeSubscription) // For now, we only allow one active subscription
                throw new ConflictError(CONFLICT_ERROR, {});

            const newSubscription = await ctx.prisma.subscriptions.create({
                data: {
                    ...input,
                    userId: user.id,
                    startDate: startOfDay(new Date()),
                },
            });

            const checkoutSession = await stripe.checkout.sessions.create({
                mode: 'subscription',
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: price,
                        quantity: 1,
                    },
                ],
                client_reference_id: user.id,
                customer: customer.id,
                success_url: `${ctx.req.headers.origin}/subscriptions/confirmation?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${ctx.req.headers.origin}/subscriptions?canceled=true`,
                subscription_data: {
                    metadata: {
                        userId: user.id,
                        subscriptionId: newSubscription.id,
                    },
                },
            });

            return { ...newSubscription, url: checkoutSession.url };
        }),
    deleteSubscription: privateProcedure
        .input(SubscriptionSchema.pick({ id: true }))
        .mutation(async ({ input, ctx }) => {
            let user = ctx.user as UserLite;

            const subscription = await ctx.prisma.subscriptions.findFirst({
                where: { id: input.id, userId: user.id },
            });

            if (!subscription) return new NotFoundError(NOT_FOUND_RESOURCE_ERROR, {});

            await ctx.prisma.subscriptions.delete({
                where: { id: input.id },
            });

            return { message: "Subscription deleted successfully" };
        }),
});

async function getActiveSubscription(ctx: ITRPCContext) {
    const user = await getProfile({ ctx });

    if (!user?.stripeCustomerId) {
        return null;
    }

    const subscriptions = await stripe.subscriptions.list({
        customer: user.stripeCustomerId,
        status: "active",
        limit: 10, // au cas où il y en aurait plusieurs
    });

    return subscriptions.data[0] ?? null;
}