import * as z from "zod";
import bcrypt from "bcrypt";
import { baseProcedure, router } from "@/server/trpc";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/server/schemas/auth";

export const registerRouter = router({
  handleRegistration: baseProcedure
    .input(registerSchema)
    .mutation(async ({ input }) => {
      const { password, email, ...rest } = input;

      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) throw new Error("This User already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          ...rest,
        },
      });

      return { id: newUser.id, email: newUser.email };
    }),
});
