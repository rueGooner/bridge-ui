import { baseProcedure, router } from "./trpc";

export const appRouter = router({
  getSomething: baseProcedure.query(async () => {
    return "something";
  }),
});

export type AppRouter = typeof appRouter;
