import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://waves-studio-rzcl.vercel.app";

  // 🟢 الصفحات الأساسية
  const staticPages = [
    "",
    "/projects",
    "/services",
    "/services/web",
    "/services/mobile",
    "/services/desktop",
    "/contact",
    "/workflow",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // 🔥 صفحات المشاريع
  let projects: any[] = [];

  try {
    const res = await fetch(`https://cat-price.pockethost.io/api/collections/projects/records`, {
      cache: "no-store", // أو استخدم revalidate لو حابب
    });
    projects = await res.json();
  } catch (error) {
    console.error("Failed to fetch projects", error);
  }

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.updatedAt || Date.now()),
  }));

  return [...staticPages, ...projectPages];
}
