import { privateProcedure, router } from "../trpc";
import { SubscriptionSchema } from "@cook/validations/src/subscription";
import { UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { User, UserLite } from "@cook/validations";
import Stripe from "stripe";
import { ITRPCContext } from "../context";
import { startOfDay } from "date-fns";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-secret-key", {
    apiVersion: '2025-04-30.basil',
});

export const subscriptionRouter = router({
    getSubscriptions: privateProcedure
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
                endDate: subscription.endDate,
                status: subscription.status,
                nextBillingDate: subscription.nextBillingDate,
                canceledAt: subscription.canceledAt,
                Plan: subscription.Plan,
            }));
        }),

    getActiveSubscription: privateProcedure
        .query(async ({ ctx }) => {
            const user = ctx.user as UserLite;

            const subscription = await ctx.prisma.subscriptions.findFirst({
                where: { userId: user.id, status: "ACTIVE" },
                include: { Plan: true },
            });

            return subscription;
        }),
    createSubscription: privateProcedure
        .input(SubscriptionSchema.pick({ planId: true, billingCycle: true }))
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            let price: string;
            //TODO add field in database
            if (input.billingCycle === "MONTHLY") {
                price = "price_1RNzM3AcuZSbG8QXlUYV70du";
            }
            else
                price = "price_1ROEiTAcuZSbG8QXSCOtAmw7"; // YEARLY

            const newSubscription = await ctx.prisma.subscriptions.create({
                data: {
                    ...input,
                    userId: user.id,
                    startDate: startOfDay(new Date()),
                    status: "PENDING"
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
                customer_email: user.email,
                success_url: `${ctx.req.headers.origin}/subscriptions/confirmation`,
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
            //if (!user) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

            const subscription = await ctx.prisma.subscriptions.findFirst({
                where: { id: input.id, userId: user.id },
            });

            if (!subscription) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

            await ctx.prisma.subscriptions.delete({
                where: { id: input.id },
            });

            return { message: "Subscription deleted successfully" };
        }),
});


async function createStripePaymentIntent(
    customer: Stripe.Customer,
    user: User,
    amount: number,
    currency: string = 'usd',
    ctx: ITRPCContext
): Promise<Stripe.PaymentIntent> {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        customer: customer.id,
        description: `Payment for ${user?.email}`,
        shipping: {
            name: `${user?.username}`,
            address: {
                line1: "23 Addess Fictive"
            }
        }, //TODO add address infos 
    });

    await ctx.prisma.payments.create({
        data: {
            userId: user.id,
            subscriptionId: null,
            amount: amount,
            currency: currency,
            status: "PENDING",
            paymentMethod: "CREDIT_CARD",
            paymentMethodDetails: JSON.stringify(paymentIntent.payment_method),
            invoiceNumber: paymentIntent.id,
        }
    });

    return paymentIntent;
}

async function updateStripeCustomer(
    customerId: string,
    updates: Stripe.CustomerUpdateParams
): Promise<Stripe.Customer> {
    try {
        const customer = await stripe.customers.update(customerId, updates);
        return customer;
    } catch (error) {
        console.error('Error updating Stripe customer:', error);
        throw error;
    }
}