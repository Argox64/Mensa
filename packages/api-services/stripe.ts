import Stripe from "stripe";

export const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-secret-key", {
    apiVersion: '2025-04-30.basil',
});