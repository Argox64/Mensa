import { inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { recipeRouter as recipes } from "./recipe";
import { userRouter as users } from "./user";
import { affiliationsRouter as affiliations } from "./affiliation";
import { plannerRouter as planner } from "./planner";

export const appRouter = router({
    recipes,
    users,
    affiliations,
    planner,
});

export type AppRouter = typeof appRouter;
export type AppRouterType = inferRouterOutputs<AppRouter>;
