import { inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { recipeRouter as recipes } from "./recipe";
import { userRouter as users } from "./user";

export const appRouter = router({
    recipes,
    users
});

export type AppRouter = typeof appRouter;
export type AppRouterType = inferRouterOutputs<AppRouter>;
