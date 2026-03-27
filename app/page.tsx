import HeroBrowsers from "./components/hero-browsers";
import ServicesSection from "./components/services-section";
import ServiceLifecycleMini from "./components/ServiceLifecycleMini";
import WhyUsSection from "./components/why-us-section";
import PortfolioShowcase from "./components/portfolio-showcase";
import { getProjects } from "./lib/data";
import { Metadata } from "next";
import { servicesKeywords, siteDescription } from "./lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: siteDescription,
  keywords: servicesKeywords,
};

export default async function Home() {
  const response = await getProjects();
  const projects = response.projects;

  return (
    <main className="min-h-screen overflow-hidden">
      <HeroBrowsers projects={projects} />

      <ServicesSection />

      <PortfolioShowcase />

      <WhyUsSection />

      <ServiceLifecycleMini />
    </main>
  );
}
