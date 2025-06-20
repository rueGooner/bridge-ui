import { Secret } from "jsonwebtoken";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { TRPCError } from "@trpc/server";
import { IncomingMessage } from "http";

const nonAuthenticatedUser = {
  user: null,
};

export const deserialiseUser = async (req: IncomingMessage) => {
  try {
    const parsedCookies = cookie.parse(req.headers.cookie || "");
    const token = parsedCookies.token;
    const secret = process.env.JWT_SECRET_KEY as Secret;

    if (!token) return nonAuthenticatedUser;

    const decodedUser = jwt.verify(token, secret) as { [key: string]: any };
    if (!decodedUser) return nonAuthenticatedUser;

    const { password, ...userNoPassword } = decodedUser as {
      password?: string;
      [key: string]: any;
    };

    return {
      user: userNoPassword,
    };
  } catch (err: unknown) {
    const error = err as Error;

    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};
