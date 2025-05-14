require("dotenv").config();

import cors from "cors";
import express, { raw } from "express";
import cookieParser from "cookie-parser";

import { trpcExpress } from "@cook/trpc-server";
import Stripe from "stripe";
import { prisma } from "@cook/db";
import { add, endOfDay } from "date-fns";

const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}));
app.post("/stripe", express.raw({ type: 'application/json' }), (req, res, next) => {
  try {
    handleStripeWebhook(req, res);
  } catch (err) {
    next(err);
  }
}) // before json parser
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/trpc", trpcExpress);

app.listen(3001, () => console.log(`Listening on port 3001`));


const handleStripeWebhook = async (req: express.Request, res: express.Response) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event | null = null;

  const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "stripe-secret-key", {
    apiVersion: '2025-04-30.basil',
  });

  try {
    if (!sig || !endpointSecret) {
      throw new Error('Missing Stripe signature or endpoint secret');
    }

    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    // Handle the event
    if (event) {
      switch (event.type) {
        case 'invoice.payment_succeeded':
          const invoice = event.data.object;
          // Handle the payment confirmation
          console.log(`PaymentIntent for ${invoice.amount_paid} was successful!`);
          const endDate = endOfDay(new Date(invoice.period_end * 1000));
          const subscription = await stripe.subscriptions.retrieve(invoice.parent?.subscription_details?.subscription as string);

          const t = await prisma.subscriptions.update({
            where: { id: subscription.metadata?.subscriptionId as string },
            data: {
              status: "ACTIVE",
              nextBillingDate: endDate,
              endDate: endDate
            },
          });//TODO déplacer la logique métier dans un package à part du router de même pour trpc
          break;
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
    }

  } catch (err) {
    if (err instanceof Error) {
      console.log(`Webhook Error: ${err.message}`);
      return new Error(`Webhook Error: ${err.message}`);
    }
  }
  return;
};