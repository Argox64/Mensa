import Stripe from "stripe";
import { IContext } from "../context";
import { endOfDay } from "date-fns";

export async function getInvoicesByEmail({ ctx, email }: { ctx: IContext, email: string }) {
    const customers = await getCustomersByEmail({ ctx, email });
    let allInvoices: Stripe.Invoice[] = [];

    for (const customer of customers) {
        const invoices = await ctx.stripe.invoices.list({
            customer: customer.id,
            limit: 100
        });
        allInvoices = allInvoices.concat(invoices.data);
    }

    return allInvoices;
}

export async function getInvoicesByCustomerId({ ctx, customerId, gte }: { ctx: IContext, customerId: string, gte: number }) {
    return (await ctx.stripe.invoices.list({
        created: {
            gte: gte
        },
        customer: customerId,
        limit: 100
    })).data
}

export async function getCustomersByEmail({ ctx, email }: { ctx: IContext, email: string }) {
    const customers = await ctx.stripe.customers.list({
        email: email,
        limit: 100,
    });
    return customers.data;
}

export async function getSession({ ctx, input }: { ctx: IContext, input: { sessionId: string } }) {
    const session = await ctx.stripe.checkout.sessions.retrieve(input.sessionId, {
        expand: ['payment_intent'],
    });
    return session;
}

export async function webhookEvent(ctx: IContext) {
    const sig = ctx.req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event | null = null;
    if (!sig || !endpointSecret) {
        throw new Error('Missing Stripe signature or endpoint secret');
    }

    event = ctx.stripe.webhooks.constructEvent(ctx.req.body, sig, endpointSecret);

    // Handle the event
    if (event) {
        switch (event.type) {
            case 'invoice.payment_succeeded':
                const invoice = event.data.object;
                // Handle the payment confirmation
                console.log(`PaymentIntent for ${invoice.amount_paid} was successful!`);
                const subscription = await ctx.stripe.subscriptions.retrieve(invoice.parent?.subscription_details?.subscription as string);
                const endDate = endOfDay(new Date(subscription.items.data[0]?.current_period_end as number * 1000));

                const t = await ctx.prisma.subscriptions.update({
                    where: { id: subscription.metadata?.subscriptionId as string },
                    data: {
                        stripeSubscriptionId: subscription.id,

                    },
                });
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
    }
}