"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Suspense } from "react";
import Avatar from "@/components/Avatar";
import { slowSum } from "@/lib/util";

// 疑似的なハードコード秘密（ダミー）
const HARDCODED = "sk_live_123_fake"; // gitleaks想定

export default function Page() {
  const [count, setCount] = useState<any>(0); // any 使用
  const [list, setList] = useState<number[]>([]);

  // N+1風の非効率ループ（わざと）
  useEffect(() => {
    const temp: number[] = [];
    for (let i = 0; i < 2000; i++) { // 無駄に大きいループ
      temp.push(slowSum(i, i + 1));
    }
    setList(temp);
  }, []);

  // 不要な再レンダーを誘発する匿名関数
  const onClick = () => {
    setCount(count + 1);
    console.log("clicked", count, HARDCODED);
  };

  return (
    <main style={{ padding: 16 }}>
      <h1>Seeded Defects デモ</h1>
      <p>
        このページには、AIレビュアが検出しやすい欠陥が色々仕込まれています。
        Click: {count}
      </p>

      {/* alt なしの画像 */}
      <img src="/placeholder.png" width={120} height={120} />

      {/* type属性未指定のbutton */}
      <button onClick={onClick}>増やす</button>

      <Suspense fallback={<div>loading...</div>}>
        <Avatar name="匿名" />
      </Suspense>

      <ul>
        {list.slice(0, 5).map((n) => (
          // key なし
          <li>{n}</li>
        ))}
      </ul>

      <Link href="/items">Items</Link>{" "}
      <Link href="/api/echo?x=1">Echo API</Link>
    </main>
  );
}
