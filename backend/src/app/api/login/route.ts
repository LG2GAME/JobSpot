import { loginUser } from "@/services/user.service";
import { validateLogin } from "@/utils/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const validationError = validateLogin({ email, password });

    if (validationError != null) {
      return NextResponse.json(
        { message: validationError.message },
        { status: validationError.status }
      );
    }

    const safeUser = await loginUser({ email, password });

    return NextResponse.json(safeUser, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.message === "Invalid credentials.") {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }

    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
