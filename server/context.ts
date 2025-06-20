// src/server/api/trpc/context.ts
import { prisma } from "@/lib/prisma";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getToken } from "next-auth/jwt"; // Optional: if using NextAuth

interface CreateContextOptions {
  req: Request;
}

export async function createContext({ req }: CreateContextOptions) {
  const cookie = req.headers.get("cookie") ?? undefined;
  const token = await getToken({ req: { headers: { cookie } } as any });

  return {
    req,
    prisma,
    user: token ?? null,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
