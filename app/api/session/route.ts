import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const res = NextResponse.json({ ok: true, user: "demo" });
  // 不適切な属性
  res.cookies.set("sid", "demo123", { httpOnly: false, secure: false, sameSite: "none", path: "/" });
  return res;
}
