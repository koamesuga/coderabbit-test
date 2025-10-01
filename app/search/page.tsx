"use client";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const sp = useSearchParams();
  const q = sp.get("q") ?? "";
  return (
    <div style={{ padding: 16 }}>
      <h2>Search</h2>
      {/* 危険: 直接埋め込み */}
      <div dangerouslySetInnerHTML={{ __html: q }} />
    </div>
  );
}
