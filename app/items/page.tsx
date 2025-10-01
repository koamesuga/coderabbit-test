import React from "react";

// 魔法値と低効率な文字列結合
function buildCsv(items: number[]) {
  let s = "";
  for (let i = 0; i < items.length; i++) {
    s += items[i] + ","; // 末尾カンマ
  }
  return s;
}

export default function Items() {
  const items = Array.from({ length: 50 }, (_, i) => i + 1);
  return (
    <div style={{ padding: 12 }}>
      <h2>Items</h2>
      <pre>{buildCsv(items)}</pre>
    </div>
  );
}
