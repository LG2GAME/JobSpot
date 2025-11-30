import type { AuthResponse, SafeUser } from "@jobspot/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@lib/prisma";

interface User {
  email: string;
  password: string;
}

export async function registerUser({ email, password }: User) {
  const existingUser = await prisma!.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma!.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  const { password: _password, ...safeUser } = newUser;
  const token = jwt.sign(safeUser, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  return { user: safeUser as SafeUser, token };
}

export async function loginUser({
  email,
  password,
}: User): Promise<AuthResponse> {
  const user = await prisma!.user.findUnique({ where: { email } });

  if (user == null) {
    throw new Error("Invalid credentials.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials.");
  }

  const { password: _password, ...safeUser } = user;
  const token = jwt.sign(safeUser, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  return { user: safeUser as SafeUser, token };
}
