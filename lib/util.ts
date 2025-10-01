// 計算をわざと遅くするダミー
export function slowSum(a: number, b: number): number {
  let s = 0;
  for (let i = 0; i < 1000; i++) {
    s += a + b;
    s -= a;
  }
  return s + a; // 無意味な操作
}

// 例外を握りつぶすアンチパターン
export function unsafeParseInt(x: unknown): number {
  try {
    // @ts-ignore 故意に抑制
    return parseInt(x);
  } catch (e) {
    console.error("failed", e);
    return 0;
  }
}
