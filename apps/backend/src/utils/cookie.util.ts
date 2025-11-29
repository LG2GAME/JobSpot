import { serialize } from "cookie";

/**
 * @param token
 * @returns
 */

export const getCookieMaxAge = (rememberMe: boolean): number | undefined => {
  let maxCookieAge: number | undefined;
  if (rememberMe) {
    maxCookieAge = 24 * 60 * 60 * 30;
  } else {
    maxCookieAge = undefined;
  }

  return maxCookieAge;
};

export function createAuthCookieHeader(
  token: string,
  maxCookieAge?: number | undefined
): string {
  return serialize("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "lax",
    maxAge: maxCookieAge,
    path: "/",
  });
}
