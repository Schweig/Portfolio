import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Billy Schweigert's Portfolio",
  description: "Portfolio for Billy Schweigert",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html className="h-screen bg-stone-100" lang="en">
      <body className={inter.className + " h-full overflow-hidden"}>{children}</body>
    </html>
  );
}
