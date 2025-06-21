import { Context } from "@/server/context";
import { loginSchema, LoginUserPayload } from "@/server/schemas/auth";
import { baseProcedure, router } from "@/server/trpc";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const loginRouter = router({
  handleLogin: baseProcedure
    .input(loginSchema)
    .mutation(
      async ({ input, ctx }: { input: LoginUserPayload; ctx: Context }) => {
        const existingUser = await ctx.prisma.user.findUnique({
          where: { email: input.email },
        });

        if (!existingUser) throw new Error("User not found");

        const isPasswordValid = await bcrypt.compare(
          input.password,
          existingUser.password
        );

        if (!isPasswordValid) throw new Error("Invalid password");

        const secret = process.env.JWT_SECRET_KEY;

        const tokenPayload = {
          userId: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
          registrationStep: existingUser.registrationStep,
        };

        const accessToken = await jwt.sign(tokenPayload, secret as jwt.Secret, {
          expiresIn: "1h",
        });

        const cookieOptions = {
          httpOnly: true,
          path: "/",
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60,
        };

        (await cookies()).set("token", accessToken, cookieOptions);

        return { message: "Login successful", accessToken, success: true };
      }
    ),
});
