import React from "react";

export const metadata = {
  title: "Seeded Defects v2",
  description: "AI review demo v2"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
