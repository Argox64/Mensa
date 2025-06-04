import { BillingCycle, UserLite } from "@cook/validations";
import { IContext } from "../context";
import { getProfile } from "./users";
import { CONFLICT_ERROR, ConflictError, INTERNAL_ERROR, InternalError, NOT_FOUND_RESOURCE_ERROR, NotFoundError } from "@cook/errors";
import Stripe from "stripe";
import { startOfDay } from "date-fns";

export async function getActiveSubscription(ctx: IContext) {
    const user = await getProfile({ ctx });

    if (!user?.stripeCustomerId) {
        return null;
    }

    const subscriptions = await ctx.stripe.subscriptions.list({
        customer: user.stripeCustomerId,
        status: "active",
        limit: 10,
    });

    return subscriptions.data[0] ?? null;
}

export async function createSubscription({ ctx, planId, billingCycle }: { ctx: IContext, planId: number, billingCycle: BillingCycle }) {
    const user = await getProfile({ ctx })

    let price: string;
    //TODO add field in database
    if (billingCycle === "MONTHLY") {
        price = "price_1RNzM3AcuZSbG8QXlUYV70du";
    }
    else
        price = "price_1ROEiTAcuZSbG8QXSCOtAmw7"; // YEARLY

    let customer: Stripe.Customer;
    if (!user.stripeCustomerId) {
        customer = await ctx.stripe.customers.create({
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
        customer = await ctx.stripe.customers.retrieve(user.stripeCustomerId) as Stripe.Customer;

    const activeSubscription = await getActiveSubscription(ctx);

    if (activeSubscription) // For now, we only allow one active subscription
        throw new ConflictError(CONFLICT_ERROR);

    const newSubscription = await ctx.prisma.subscriptions.create({
        data: {
            planId: planId,
            billingCycle: billingCycle,
            userId: user.id,
            startDate: startOfDay(new Date()),
        },
    });

    const checkoutSession = await ctx.stripe.checkout.sessions.create({
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
}

export async function deleteSubscription({ ctx, id }: { ctx: IContext, id: string }) {
    let user = ctx.user as UserLite;

    const subscription = await ctx.prisma.subscriptions.findFirst({
        where: { id: id, userId: user.id },
    });

    if (!subscription) return new NotFoundError(NOT_FOUND_RESOURCE_ERROR);

    await ctx.prisma.subscriptions.delete({
        where: { id: id },
    });
}

export async function cancelActiveSubscription({ ctx }: { ctx: IContext }) {
    const user = await getProfile({ ctx });

    const subscription = await ctx.prisma.subscriptions.findFirst({
        where: { userId: user.id },
    });
    if (!subscription) return null;

    const subscriptions = await ctx.stripe.subscriptions.list({
        customer: user.stripeCustomerId as string,
        status: 'active',
        limit: 1,
    });

    if (!subscriptions.data[0]) return null;

    await ctx.stripe.subscriptions.update(subscriptions.data[0].id, {
        cancel_at_period_end: true,
    });
}

export async function getLastSubscription({ ctx }: { ctx: IContext }) {
    const user = await getProfile({ ctx });

    const subscription = await ctx.prisma.subscriptions.findFirst({
        where: { userId: user.id },
        include: { Plan: true },
        orderBy: { startDate: "desc" },
    });

    if (!subscription) return null;

    let sub: Stripe.Subscription | null = null;
    if (subscription.stripeSubscriptionId === null) { // If webhook has not been called
        console.warn("Stripe subscription ID is null (Webhook has certainly an issue), fetching from Stripe API");
        const subscriptions = await ctx.stripe.subscriptions.list({
            customer: user.stripeCustomerId as string,
            limit: 1,
            status: 'all',
            expand: ['data.default_payment_method'],
        });

        sub = subscriptions.data[0] ?? null;
        ctx.prisma.subscriptions.update({
            where: { id: subscription.id },
            data: {
                stripeSubscriptionId: sub?.id || null,
            },
        });

    }
    else {
        sub = await ctx.stripe.subscriptions.retrieve(subscription?.stripeSubscriptionId as string);
    }

    if (!sub) throw new InternalError(INTERNAL_ERROR);

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
}