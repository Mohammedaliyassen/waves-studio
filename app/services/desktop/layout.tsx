import { Metadata } from "next";
import { desktopKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Desktop Development Services",
  description:
    "Robust desktop applications for Windows, macOS, and Linux with offline support, integrations, and optimized performance.",
  keywords: desktopKeywords,
};

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
