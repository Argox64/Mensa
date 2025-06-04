require("dotenv").config();

import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import { trpcExpress } from "@cook/trpc-server";
import { createContext, webhookEvent } from "@cook/api-services";

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

app.use("/trpc", trpcExpress);

app.listen(3001, () => console.log(`Listening on port 3001`));

const handleStripeWebhook = async (req: express.Request, res: express.Response) => {
  const context = await createContext(req, res);
  
  try {
    await webhookEvent(context);

  } catch (err) {
    if (err instanceof Error) {
      return new Error(`Webhook Error: ${err.message}`);
    }
  }
  return;
};