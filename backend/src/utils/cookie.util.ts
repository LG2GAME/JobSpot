import { serialize } from "cookie";

/**
 * @param token
 * @returns
 */

export function createAuthCookieHeader(token: string): string {
  return serialize("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
