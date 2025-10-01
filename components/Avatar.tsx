// アクセシビリティ上の欠陥: alt を受け取らず img直書き
export default function Avatar({ name }: { name: string }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <img src="/placeholder.png" width={32} height={32} />
      <span>{name}</span>
    </div>
  );
}
