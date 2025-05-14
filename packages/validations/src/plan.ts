import { z } from "zod";
import { z as zc } from "./customs";

export const PlanSchema = zc.object({
    id: zc.number().int().positive(),
    name: zc.string(),
    description: zc.string(),
    features: zc.string().array(),
    monthlyPrice: zc.number().int().positive(),
    yearlyPrice: zc.number().int().positive(),
})


export const PlanSchemaWithPrice = PlanSchema.transform((data) => ({
    ...data,
    monthlyPriceFloat: data.monthlyPrice / 100,
    yearlyPriceFloat: data.yearlyPrice / 100,
  }));
  

export type Plan = z.infer<typeof PlanSchema>;