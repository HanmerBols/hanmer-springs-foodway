import type { Metadata } from "next";
import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from "./content";
import "./globals.css";
import { PRIMARY_FONT } from "./lib/fonts";

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
      <body className={PRIMARY_FONT.className}>{children}</body>
    </html>
  );
}
