import { loginRouter } from "./routers/auth/login.router";
import { registerRouter } from "./routers/auth/register.router";
import { router } from "./trpc";

export const appRouter = router({
  auth: registerRouter,
  login: loginRouter,
});

export type AppRouter = typeof appRouter;
