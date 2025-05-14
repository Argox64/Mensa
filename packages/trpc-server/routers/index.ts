import { inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { recipeRouter as recipes } from "./recipe";
import { userRouter as users } from "./user";
import { affiliationsRouter as affiliations } from "./affiliation";
import { plannerRouter as planner } from "./planner";
import { planRouter as plans } from "./plan";
import { paymentRouter as payment } from "./payment";
import { subscriptionRouter as subscriptions } from "./subscription";

export const appRouter = router({
    recipes,
    users,
    affiliations,
    planner,
    plans,
    payment,
    subscriptions
});

export type AppRouter = typeof appRouter;
export type AppRouterType = inferRouterOutputs<AppRouter>;
