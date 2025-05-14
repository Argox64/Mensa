import { z } from "zod";
import { z as zc } from "./customs";

export const CommentSchema = zc.object({
    id: zc.string().uuid(),
    userId: zc.string().uuid(),
    recipeId: zc.string().uuid(),
    content: zc.string(),

    createdAt: zc.string().date(),
    updatedAt: zc.string().date(),
})

export type Comment = z.infer<typeof CommentSchema>;