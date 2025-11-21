import { registerUser } from "@/services/user.service";
import { validateRegistration } from "@/utils/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, confirmPassword } = body;

    const validationError = validateRegistration({
      email,
      password,
      confirmPassword,
    });

    if (validationError != null) {
      return NextResponse.json(
        { message: validationError.message },
        { status: validationError.status }
      );
    }

    const safeUser = await registerUser({ email, password });

    return NextResponse.json(safeUser, { status: 201 });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "User with this email already exists."
    ) {
      return NextResponse.json({ message: error.message }, { status: 409 });
    }

    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
