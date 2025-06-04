import { privateProcedure, publicProcedure, router } from "../trpc";
import { z } from "@cook/validations/src/customs";
import Stripe from "stripe";
import { GetPaymentsListSchema } from "@cook/validations";
import { getInvoicesByCustomerId, getProfile, getSession } from "@cook/api-services";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-scret-key", {
    apiVersion: '2025-04-30.basil',
});

export const paymentRouter = router({
    getPayments: privateProcedure
        .input(GetPaymentsListSchema)
        .query(async ({ input, ctx }) => {
            const u = await getProfile({ ctx });
            if (!u.stripeCustomerId)
                return null;
            return await getInvoicesByCustomerId({ ctx, customerId: u.stripeCustomerId, gte: input.gte });
        }),
    getSession: publicProcedure
        .input(z.object({ sessionId: z.string() }))
        .query(async ({ input, ctx }) => {
            return getSession({ ctx, input });
        })
});