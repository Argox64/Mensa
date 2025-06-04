import { prisma } from "@cook/db";
import express from "express";
import { authenticateToken } from "./utils/authenticateToken";
import { openai } from "./openai";
import { createClient } from "@cook/supabasejs";
import { stripe } from "./stripe";

export async function createContext(req: express.Request, res: express.Response) {
    const user = req.cookies["token"] ? await authenticateToken(req, res) : undefined;

    return {
        req,
        res,
        user,
        prisma,
        openai,
        stripe,
        supabase: () => createClient() // Invoke only if needed
    }
}

export type IContext = Awaited<ReturnType<typeof createContext>>;