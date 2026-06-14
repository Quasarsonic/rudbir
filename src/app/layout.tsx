import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Rud Bir — Birrificio Artigianale Ticinese",
  description:
    "Micro-birrificio artigianale a Gordola, Ticino. Birre artigianali svizzere prodotte con passione da Luka Ferrara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
