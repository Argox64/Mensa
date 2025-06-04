import { Plan, UserLite } from "@cook/validations";
import { IContext } from "../context";
import { FORBIDDEN_ERROR, ForbiddenError } from "@cook/errors";

export async function getPlans({ ctx }: { ctx: IContext }) {
    const plans = await ctx.prisma.plans.findMany();
    return plans.map((plan) => ({
        id: plan.id,
        name: plan.name,
        monthlyPrice: plan.monthlyPrice,
        yearlyPrice: plan.yearlyPrice,
        description: plan.description,
        features: plan.features,
    }));
}

export async function createPlan({ ctx, input }: { ctx: IContext, input: Plan }) {
    const user = ctx.user as UserLite;
    if (!user.aud.includes("admin")) throw new ForbiddenError(FORBIDDEN_ERROR);

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
}

export async function deletePlan({ ctx, id }: { ctx: IContext, id: number }) {
    const user = ctx.user as UserLite;

    if (!user.aud.includes("admin")) throw new ForbiddenError(FORBIDDEN_ERROR);

    await ctx.prisma.plans.delete({
        where: {
            id: id,
        },
    });
}