import { registerUser } from "@/services/user.service";
import { validateRegistration } from "@/utils/validation";
import { NextResponse } from "next/server";
import { createAuthCookieHeader } from "@/utils/cookie.util";

export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword } = await request.json();
    const validationError = validateRegistration({
      email,
      password,
      confirmPassword,
    });

    if (validationError != null) {
      return NextResponse.json(
        {
          field: validationError.field,
          message: validationError.message,
        },
        { status: validationError.status }
      );
    }

    const { user, token } = await registerUser({ email, password });
    const cookie = createAuthCookieHeader(token);

    return NextResponse.json(user, {
      status: 201,
      headers: { "Set-Cookie": cookie },
    });
  } catch (error) {
    console.error("Registration API Error (409/500):", error);

    if (
      error instanceof Error &&
      error.message === "User with this email already exists."
    ) {
      return NextResponse.json(
        {
          field: "email",
          message: "Użytkownik z tym adresem e-mail już istnieje.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Wystąpił nieoczekiwany błąd serwera." },
      { status: 500 }
    );
  }
}
