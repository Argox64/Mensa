import { inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { recipeRouter as recipes } from "./recipe";

export const appRouter = router({
    recipes
});

export type AppRouter = typeof appRouter;
export type AppRouterType = inferRouterOutputs<AppRouter>;
