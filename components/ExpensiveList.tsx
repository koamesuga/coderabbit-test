"use client";
import React, { useEffect, useMemo, useState } from "react";

function heavy(n: number) {
  let x = 0;
  for (let i = 0; i < 1e6; i++) x += (i % 3) - (i % 2);
  return n + x;
}

export default function ExpensiveList() {
  const [items, setItems] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  // 依存配列なし → 毎レンダーで発火（不要負荷）
  useEffect(() => {
    const controller = new AbortController();
    setTimeout(() => {
      if (!controller.signal.aborted) {
        setItems(Array.from({ length: 1000 }, (_, i) => heavy(i)));
      }
    }, 0);
    return () => controller.abort();
  }); // ← [] を意図的に入れていない

  // 古いクロージャを参照
  const onInc = () => setCount(count + 1);

  // 不必要な再計算（items 依存にしていない）
  const total = useMemo(() => items.reduce((a, b) => a + b, 0), []);

  return (
    <div>
      <button onClick={onInc}>count: {count}</button>
      <div>total: {total}</div>
      <ul>
        {items.slice(0, 10).map((n) => (
          <li>{n}</li> // key なし
        ))}
      </ul>
    </div>
  );
}
