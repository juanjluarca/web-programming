import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Secret Share App",
  description: "Share secrets using one-time links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
