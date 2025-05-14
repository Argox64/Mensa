import { privateProcedure, router } from "../trpc";
import { PlanSchema } from "@cook/validations/src/plan";
import { FORBIDDEN_ERROR, ForbiddenError } from "@cook/errors";
import { UserLite } from "@cook/validations";

export const planRouter = router({
    getPlans: privateProcedure
        .query(async ({ ctx }) => {
            const user = ctx.user as UserLite;

            const plans = await ctx.prisma.plans.findMany();
            return plans.map((plan) => ({
                id: plan.id,
                name: plan.name,
                monthlyPrice: plan.monthlyPrice,
                yearlyPrice: plan.yearlyPrice,
                description: plan.description,
                features: plan.features,
            }));
        }),
    createPlan: privateProcedure
        .input(PlanSchema)
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;
            //TODO: Check if user is admin
            //if(!user.aud.includes("admin")) throw new ForbiddenError(FORBIDDEN_ERROR, {});

            const newPlan = await ctx.prisma.plans.create({
                data: {
                    name: input.name,
                    monthlyPrice: input.monthlyPrice,
                    yearlyPrice: input.yearlyPrice,
                    description: input.description,
                    features: input.features,
                },
            });

            return newPlan;
        }),
    deletePlan: privateProcedure
        .input(PlanSchema.pick({ id: true }))
        .mutation(async ({ input, ctx }) => {
            const user = ctx.user as UserLite;

            //TODO: Check if user is admin
            //if(!user.aud.includes("admin")) throw new ForbiddenError(FORBIDDEN_ERROR, {});

            await ctx.prisma.plans.delete({
                where: {
                    id: input.id,
                },
            });

            return { message: "Plan deleted successfully" };
        }),
});