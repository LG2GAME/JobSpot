import { NextResponse } from "next/server";
import { verifyAuthToken } from "@/utils/auth";
import prisma from "@lib/prisma";

export async function GET(request: Request) {
  try {
    const verifiedUserId = await verifyAuthToken(request);

    const user = await prisma!.user.findUnique({
      where: { id: verifiedUserId },
    });

    if (!user) {
      throw new Error("Unauthorized: User not found.");
    }

    const { password: _password, ...safeUser } = user;

    return NextResponse.json(safeUser, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/user:", error);

    if (error instanceof Error && error.message.startsWith("Unauthorized")) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }

    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
