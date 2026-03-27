import { Metadata } from "next";
import { servicesKeywords } from "../lib/seo";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Waves Studio services including web development, mobile apps, desktop software, UI/UX, graphic design, branding, and digital marketing.",
  keywords: servicesKeywords,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
