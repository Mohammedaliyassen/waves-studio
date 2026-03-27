import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageWrapper from "./components/LanguageWrapper";
import {
  defaultShareImagePath,
  getSiteUrl,
  siteName,
} from "./lib/metadata";
import { siteDescription, siteKeywords } from "./lib/seo";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: `%s | ${siteName}`,
    default: `${siteName} | Portfolio`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    siteName,
    url: "/",
    images: [
      {
        url: defaultShareImagePath,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultShareImagePath],
  },
  verification: {
    google: "d4_PlgcMJawoVgrFoD00BQN07nFWoBkfEJbEg3sQWLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LanguageWrapper bodyClassName={cairo.variable}>
        <Navbar />
        {children}
      </LanguageWrapper>
    </LanguageProvider>
  );
}
