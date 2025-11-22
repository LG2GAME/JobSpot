import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  const commonHeaders = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };

  if (request.method === "OPTIONS") {
    const headers = new Headers(commonHeaders);
    if (origin && allowedOrigins.includes(origin)) {
      headers.set("Access-Control-Allow-Origin", origin);
    }
    return new NextResponse(null, { status: 204, headers });
  }

  const response = NextResponse.next();

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);

    Object.entries(commonHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  } else if (origin) {
    return new NextResponse(null, { status: 403 });
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/auth/:path*"],
};
