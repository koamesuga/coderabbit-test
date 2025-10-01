// ランタイム評価の危険デモ
export function run(code: string): unknown {
  // eslint-disable-next-line no-new-func
  const f = new Function(code);
  return f();
}
