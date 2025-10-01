import { NextRequest, NextResponse } from "next/server";

// 入力検証が甘い・X- header を漏洩するなどの欠陥デモ
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const x = url.searchParams.get("x");
  // 故意の内部情報出力
  const headersDump: Record<string, string> = {};
  req.headers.forEach((v, k) => (headersDump[k] = v)); // 不要情報の収集

  return NextResponse.json({
    ok: true,
    x,
    debug: headersDump, // 内部情報を返してしまう
  });
}
