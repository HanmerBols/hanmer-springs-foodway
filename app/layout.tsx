import type { Metadata } from "next";
import { Do_Hyeon } from "next/font/google";
import "./globals.css";
import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from "./content";

const doHyeon = Do_Hyeon({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
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
