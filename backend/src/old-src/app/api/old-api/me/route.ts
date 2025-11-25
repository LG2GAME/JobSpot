import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import prisma from "@lib/prisma";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token)
    return NextResponse.json({ message: "Brak autoryzacji." }, { status: 401 });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: number;
    };

    const user = await prisma.user.findUnique({ where: { id: payload.id } });

    if (!user)
      return NextResponse.json(
        { message: "Brak autoryzacji." },
        { status: 401 }
      );

    const { password, ...safeUser } = user;

    return NextResponse.json({ user: safeUser }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Brak autoryzacji." }, { status: 401 });
  }
}
