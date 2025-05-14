import { privateProcedure, router } from "../trpc";
import { PaymentSchema } from "@cook/validations/src/payment";
import { UNAUTHORIZED_RESOURCE_ERROR, UnauthorizedError } from "@cook/errors";
import { UserLite } from "@cook/validations";
import Stripe from "stripe";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-scret-key", {
    apiVersion: '2025-04-30.basil',
});

export const paymentRouter = router({
    getPayments: privateProcedure
        .query(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            const payments = await ctx.prisma.payments.findMany({
                where: { userId: user.id },
            });

            return payments.map((payment) => ({
                id: payment.id,
                userId: payment.userId,
                subscriptionId: payment.subscriptionId,
                amount: payment.amount,
                currency: payment.currency,
                status: payment.status,
                paymentMethod: payment.paymentMethod,
                paymentMethodDetails: payment.paymentMethodDetails?.toString() || null,
                invoiceNumber: payment.invoiceNumber,
                createdAt: payment.createdAt,
                updatedAt: payment.updatedAt,
            }));
        }),
    /*createPayment: privateProcedure
        .input(PaymentSchema.omit({ id: true, createdAt: true, updatedAt: true }))
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            const profile = await getProfile({ ctx });

            const customer = await getOrCreateStripeCustomer(
                profile.email,
                profile.username);

            const stripePaymentIntent = await createStripePaymentIntent(
                customer,
                profile,
                input.amount,
                "eur",
                ctx
            );

            const newPayment = await ctx.prisma.payments.create({
                data: {
                    ...input,
                    userId: user.id,
                },
            });

            return newPayment;
        }),*/
    deletePayment: privateProcedure
        .input(PaymentSchema.pick({ id: true }))
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            const payment = await ctx.prisma.payments.findFirst({
                where: { id: input.id, userId: user.id },
            });

            if (!payment) throw new UnauthorizedError(UNAUTHORIZED_RESOURCE_ERROR, {});

            await ctx.prisma.payments.delete({
                where: { id: input.id },
            });

            return { message: "Payment deleted successfully" };
        }),
});


async function getOrCreateStripeCustomer(
    email: string,
    fullName: string
): Promise<Stripe.Customer> {
    const customers = await stripe.customers.list({ email });
    if (customers.data.length > 0) {
        return customers.data[0] as Stripe.Customer;
    } else {
        const customer = await stripe.customers.create({ email: email, name: fullName });
        if (!customer)
            throw new Error("Stripe user creation failed.");
        return customer;
    }
}

