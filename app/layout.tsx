import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym",
  description: "Gym academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
