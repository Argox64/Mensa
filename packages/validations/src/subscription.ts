import { z } from "zod";
import { z as zc } from "./customs";
import { PlanSchema } from "./plan";

export const SubscriptionSchema = zc.object({
    id: zc.string().uuid(),
    userId: zc.string().uuid(),
    planId: zc.number().int().positive(),
    startDate: zc.string().date(),
    endDate: zc.string().date(),
    status: zc.enum(["ACTIVE", "PENDING", "CANCELED", "PAST_DUE", "TRIALING", "EXPIRED"]),
    billingCycle: zc.enum(["MONTHLY", "YEARLY"]),
    nextBillingDate: zc.string().date(),
    canceledAt: zc.string().date().optional(),
    Plan : PlanSchema,
});

export type Subscription = z.infer<typeof SubscriptionSchema>;