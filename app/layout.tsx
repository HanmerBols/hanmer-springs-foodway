import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from "./content";
import "./globals.css";
import { PRIMARY_FONT } from "./lib/fonts";

export const metadata: Metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={PRIMARY_FONT.className}>
        {children}
        <GoogleAnalytics gaId="G-MVTNC9MC3X" />
      </body>
    </html>
  );
};

export default RootLayout;
