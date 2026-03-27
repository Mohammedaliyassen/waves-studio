import { Metadata } from "next";
import { mobileKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Mobile Development Services",
  description:
    "High-performance iOS, Android, and cross-platform mobile applications with polished UX and scalable architecture.",
  keywords: mobileKeywords,
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
