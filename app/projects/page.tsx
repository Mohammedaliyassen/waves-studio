import AnimatedProjectsGrid from "../components/AnimatedProjectsGrid";
import ProjectsHero from "../components/ProjectsHero";
import NoProjectsFound from "../components/NoProjectsFound";
import { getProjects } from "../lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse our portfolio of high-quality software development projects.",
};

export default async function ProjectsPage() {
  const response = await getProjects();
  const projects = response.projects;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ProjectsHero />

      {/* Projects Grid (now a client component) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedProjectsGrid projects={projects} />

          {projects.length === 0 && <NoProjectsFound />}
        </div>
      </section>
    </main>
  );
}
