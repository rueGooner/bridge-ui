// src/server/api/trpc/context.ts
import { prisma } from "@/lib/prisma";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getToken } from "next-auth/jwt"; // Optional: if using NextAuth

interface CreateContextOptions {
  req: Request;
}

export async function createContext({ req, res }: CreateNextContextOptions) {
  return {
    req,
    res,
    prisma,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
