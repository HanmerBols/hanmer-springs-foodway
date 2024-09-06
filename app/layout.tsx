import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import {
  GOOGLE_ANALYTICS_ID,
  HANMER_SPRINGS_FOODWAY_DESCRIPTION,
  HANMER_SPRINGS_FOODWAY_NAME,
} from "./content";
import "./globals.css";
import { PRIMARY_FONT } from "./lib/fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | ${HANMER_SPRINGS_FOODWAY_NAME}`,
    default: HANMER_SPRINGS_FOODWAY_NAME,
  },
  description: HANMER_SPRINGS_FOODWAY_DESCRIPTION,
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
