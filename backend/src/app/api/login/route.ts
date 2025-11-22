import { loginUser } from "@/services/user.service";
import { NextResponse } from "next/server";
import { createAuthCookieHeader } from "@/utils/cookie.util";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const { user, token } = await loginUser({ email, password });

    const cookie = createAuthCookieHeader(token);

    return NextResponse.json(
      { user },
      {
        status: 200,
        headers: { "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Server error" },
      { status: 401 }
    );
  }
}
