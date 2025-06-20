import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { baseProcedure, router } from "@/server/trpc";
import { registerSchema } from "@/server/schemas/auth";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET_KEY!;

export const registerRouter = router({
  handleRegistration: baseProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const { password, email, passwordConfirmation, ...rest } = input;

      const existingUser = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) throw new Error("This User already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await ctx.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          ...rest,
        },
      });

      const tokenPayload = {
        userId: newUser.id,
        email: newUser.email,
        role: newUser.role,
      };

      const accessToken = jwt.sign(tokenPayload, JWT_SECRET, {
        expiresIn: "1h",
      });

      ctx.res.setHeader(
        "Set-Cookie",
        serialize("token", accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60, // 1 hour
          path: "/",
        })
      );

      return { id: newUser.id, email: newUser.email, accessToken };
    }),
});
