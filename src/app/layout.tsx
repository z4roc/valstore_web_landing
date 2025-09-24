import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valstore - Check Your Valorant Store Anywhere",
  description:
    "A portable access to your Valorant Shop built with Flutter. Check your store anywhere, anytime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid-bg min-h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
