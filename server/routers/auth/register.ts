import * as z from "zod";
import bcrypt from "bcrypt";
import { baseProcedure, router } from "@/server/trpc";
import { prisma } from "@/lib/prisma";

export const registerRouter = router({
  handleRegistration: baseProcedure
    .input(z.string())
    .mutation(async ({ input }) => {}),
});
