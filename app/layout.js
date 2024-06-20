import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/PrelineScript";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "animate.css";
import { Inter } from "next/font/google";
import metadataJson from "../data/metadataJson.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataJson.header.title,
  description: metadataJson.header.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="kqb-ojgRUiCSqnNrXfI8J0493SPDHcsCYvBqnhIYQyk"
      />

      {/* GoogleTagManager */}
      <GoogleTagManager gtmId="GTM-MFGJRR3M" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <PrelineScript />
      </body>
    </html>
  );
}
