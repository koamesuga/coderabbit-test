import { NextRequest, NextResponse } from "next/server";

let state = { enabled: false };

export async function GET(_req: NextRequest) {
  state.enabled = !state.enabled; // GETで状態変更
  return NextResponse.json({ ok: true, enabled: state.enabled }); // no cache headers
}
