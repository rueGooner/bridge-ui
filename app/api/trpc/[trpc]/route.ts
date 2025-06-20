import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";
import { createContext } from "@/server/context";
import { NextApiRequest } from "next";

const handler = async (request: Request) => {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
  });

  const bodyText = await response.text();
  const data = JSON.parse(bodyText);
  const token = data?.result?.data?.accessToken;

  const newHeaders = new Headers(response.headers);

  if (token) {
    newHeaders.set(
      "Set-Cookie",
      `accessToken=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`
    );
  }

  return new Response(bodyText, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
};

export { handler as GET, handler as POST };
