import type { Metadata } from "next";
import WhyUsPageClient from "./WhyUsPageClient";
import { servicesKeywords } from "../lib/seo";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Learn why businesses choose Waves Studio for web development, mobile apps, desktop software, and dependable long-term support.",
  keywords: [...servicesKeywords, "why choose us", "software partner"],
};

export default function WhyUsPage() {
  return <WhyUsPageClient />;
}
