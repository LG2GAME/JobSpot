import jwt from "jsonwebtoken";

export interface TokenPayload {
  id: number;
}

export async function verifyAuthToken(request: Request) {
  const authorizationHeader = request.headers.get("Authorization");

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw new Error("Invalid or missing authorization token.");
  }
  const token = authorizationHeader.substring(7);

  try {
    const verifiedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload;

    return verifiedToken.id;
  } catch {
    throw new Error("Unauthorized: Invalid or expired token.");
  }
}
