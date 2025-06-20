import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: async () => {
      const { prisma } = await import("@/lib/prisma");
      return { prisma };
    },
  });
};

export { handler as GET, handler as POST };
