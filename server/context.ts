import { prisma } from "@/lib/prisma";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { deserialiseUser } from "./auth-middleware";

export async function createContext({ req, res }: CreateNextContextOptions) {
  const { user } = await deserialiseUser(req);

  return {
    req,
    res,
    prisma,
    user,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
