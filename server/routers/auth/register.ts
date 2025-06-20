import bcrypt from "bcrypt";
import { baseProcedure, router } from "@/server/trpc";
import { registerSchema } from "@/server/schemas/auth";

const JWT_SECRET = process.env.JWT_SECRET_KEY!;

export const registerRouter = router({
  handleRegistration: baseProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const {
        password: currentPassword,
        email,
        passwordConfirmation,
        ...rest
      } = input;

      const existingUser = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) throw new Error("This User already exists");

      const hashedPassword = await bcrypt.hash(currentPassword, 10);
      const newUser = await ctx.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          ...rest,
        },
      });

      const { password, ...user } = newUser;

      return {
        status: "Success",
        data: {
          user,
        },
      };
    }),
});
