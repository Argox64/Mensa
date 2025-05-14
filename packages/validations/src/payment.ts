import { z } from "zod";
import { z as zc } from "./customs";import { SubscriptionSchema } from "./subscription";

export const PaymentSchema = zc.object({
    id: zc.number().int().positive(),
    subscriptionId: zc.string().uuid(),
    amount: zc.number().int().positive(),
    currency: zc.string(),
    status: zc.enum(["PENDING", "COMPLETED", "FAILED", "REFUNDED"]),
    paymentMethod: zc.enum(["CREDIT_CARD", "PAYPAL", "BANK_TRANSFER"]),
    paymentMethodDetails: zc.string().optional(),

    createdAt: zc.string().date(),
    updatedAt: zc.string().date(),

    Subscription: SubscriptionSchema,
})

export type Payment = z.infer<typeof PaymentSchema>;