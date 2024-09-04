import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import {
  GOOGLE_ANALYTICS_ID,
  WEBSITE_DESCRIPTION,
  WEBSITE_TITLE,
} from "./content";
import "./globals.css";
import { PRIMARY_FONT } from "./lib/fonts";

export const metadata: Metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={PRIMARY_FONT.className}>
        {children}
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
};

export default RootLayout;
