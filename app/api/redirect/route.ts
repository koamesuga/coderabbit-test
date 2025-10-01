import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const to = url.searchParams.get("to") || "/";
  // 危険: ホワイトリスト検証なし
  // @ts-ignore
  redirect(to);
}
