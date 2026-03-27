import { Metadata } from "next";
import { webKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Modern websites, web applications, dashboards, landing pages, and e-commerce platforms built for performance and growth.",
  keywords: webKeywords,
};

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
