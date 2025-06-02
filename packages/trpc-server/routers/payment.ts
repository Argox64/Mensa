import { privateProcedure, publicProcedure, router } from "../trpc";
import { z } from "@cook/validations/src/customs";
import Stripe from "stripe";
import { getProfile } from "../services/user";
import { GetPaymentsListSchema } from "@cook/validations";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-scret-key", {
    apiVersion: '2025-04-30.basil',
});

export const paymentRouter = router({
    getPayments: privateProcedure
    .input(GetPaymentsListSchema)
        .query(async ({ input, ctx }) => {
            const u = await getProfile({ ctx });
            if(!u.stripeCustomerId) 
                return null;
            return await getInvoicesByCustomerId(u.stripeCustomerId, input.gte);
        }),
    getSession: publicProcedure
        .input(z.object({ sessionId: z.string() }))
        .query(async ({ input, ctx }) => {
            const session = await stripe.checkout.sessions.retrieve(input.sessionId, {
                expand: ['payment_intent'],
            });
            return session;
        })
});


async function getInvoicesByEmail(email: string) {
    const customers = await getCustomersByEmail(email);
    let allInvoices: Stripe.Invoice[] = [];

    for (const customer of customers) {
        const invoices = await stripe.invoices.list({
            customer: customer.id,
            limit: 100
        });
        allInvoices = allInvoices.concat(invoices.data);
    }

    return allInvoices;
}

async function getInvoicesByCustomerId(customerId: string, gte: number = 0) {
    return (await stripe.invoices.list({
        created: {
            gte: gte
        },
        customer: customerId,
        limit: 100
    })).data
}

async function getCustomersByEmail(email: string) {
    const customers = await stripe.customers.list({
        email: email,
        limit: 100, 
    });
    return customers.data;
}