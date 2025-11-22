import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
  const expiredCookie = serialize("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return NextResponse.json(
    { success: true },
    {
      status: 200,
      headers: { "Set-Cookie": expiredCookie },
    }
  );
}
