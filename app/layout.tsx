import React from "react";

export const metadata = {
  title: "Seeded Defects",
  description: "AI review demo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
