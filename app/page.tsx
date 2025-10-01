import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Seeded Defects v2</h1>
      <ul>
        <li><Link href="/search?q=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E">/search (XSSデモ)</Link></li>
        <li><Link href="/api/redirect?to=https://example.com">/api/redirect (オープンリダイレクト)</Link></li>
        <li><Link href="/api/toggle">/api/toggle (GETで状態変更)</Link></li>
        <li><Link href="/api/session">/api/session (不適切Cookie属性)</Link></li>
        <li><Link href="/list">/list (レース/再レンダー)</Link></li>
      </ul>
    </main>
  );
}
