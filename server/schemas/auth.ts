import { UserRole } from "@/prisma/generated/prisma";
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please provide a valid email."),
  password: z
    .string()
    .min(6)
    .max(12)
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[0-9]/, "Must contain a number"),
});

export const registerSchema = loginSchema
  .extend({
    firstName: z.string().min(1, "First name is required"),
    surname: z.string().min(1, "Surname is required"),
    phoneNumber: z
      .string()
      .regex(/^\+?\d{10,15}$/, "Invalid phone number format"),
    role: z.nativeEnum(UserRole),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export type LoginUserPayload = z.TypeOf<typeof loginSchema>;
export type RegisterUserPayload = z.TypeOf<typeof registerSchema>;
