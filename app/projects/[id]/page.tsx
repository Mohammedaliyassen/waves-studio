import { getProjectById } from "@/app/lib/data";
import { getAbsoluteUrl, siteName } from "@/app/lib/metadata";
import { getImageUrl } from "@/app/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectClient from "./ProjectClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { project } = await getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectTitle = project.title_en || project.title_ar || "Project";
  const projectDescription =
    project.description_en ||
    project.description_ar ||
    "Explore this project from Waves Studio.";
  const projectUrl = `/projects/${project.id}`;
  const shareImageUrl = getAbsoluteUrl(getImageUrl(project));

  return {
    title: projectTitle,
    description: projectDescription,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${projectTitle} | ${siteName}`,
      description: projectDescription,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: `${projectTitle} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectTitle} | ${siteName}`,
      description: projectDescription,
      images: [shareImageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const { project, isMockData } = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} isMockData={isMockData} />;
}
