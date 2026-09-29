import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paul Ginting | Musician & Creator",
  description: "Personal portfolio of Paul Ginting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
