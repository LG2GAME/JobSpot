import { loginUser } from "@/services/user.service";
import { NextResponse } from "next/server";
import { createAuthCookieHeader, getCookieMaxAge } from "@/utils/cookie.util";
import { validateLogin } from "@/utils/validation";

export async function POST(request: Request) {
  try {
    const { email, password, rememberMe } = await request.json();
    const validationError = validateLogin({ email, password });
    if (validationError != null) {
      return NextResponse.json(
        {
          field: validationError.field,
          message: validationError.message,
        },
        { status: validationError.status }
      );
    }

    const { user, token } = await loginUser({ email, password });

    const cookie = createAuthCookieHeader(token, getCookieMaxAge(rememberMe));

    return NextResponse.json(
      { user },
      {
        status: 200,
        headers: { "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    console.error("Login API Error:", error);

    if (error instanceof Error && error.message === "Invalid credentials.") {
      return NextResponse.json(
        { message: "Nieprawidłowy email lub hasło." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Wystąpił nieoczekiwany błąd serwera." },
      { status: 500 }
    );
  }
}
