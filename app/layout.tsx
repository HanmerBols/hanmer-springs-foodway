import type { Metadata } from "next";
import { Do_Hyeon } from "next/font/google";
import "./globals.css";

const doHyeon = Do_Hyeon({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hanmer Springs Foodway",
  description: "Enjoy food your way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={doHyeon.className}>{children}</body>
    </html>
  );
}
