import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const allHeaders: Record<string, string> = {};
  req.headers.forEach((v, k) => (allHeaders[k] = v));
  console.log("[mw] headers:", allHeaders); // 過剰収集・ログ

  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
