"use client";

import { getImageUrl, getImagesUrl } from "@/app/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ShareButtons from "@/app/components/ShareButtons";
import ImageGallery from "@/app/components/ImageGallery";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Project } from "@/app/lib/definitions";

export default function ProjectClient({
  project,
  isMockData,
}: {
  project: Project | null;
  isMockData: boolean;
}) {
  const { language } = useLanguage();

  if (!project) {
    notFound();
  }

  const getProjectTitle = (project: Project) => {
    return language === "ar" ? project.title_ar : project.title_en;
  };

  const getProjectDescription = (project: Project) => {
    return language === "ar" ? project.description_ar : project.description_en;
  };
  const getProjectBrief = (project: Project) => {
    return language === "ar" ? project.brief_ar : project.brief_en;
  };

  const imageUrl = getImageUrl(project);
  const imagesUrl = getImagesUrl(project);
  console.log(project);
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-[50vh] min-h-[400px] bg-gray-800">
        <Image
          src={imageUrl}
          alt={getProjectTitle(project)}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-12 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {getProjectTitle(project)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            {getProjectBrief(project) || "وصف المشروع"}
          </motion.p>
        </div>
      </section>

      {isMockData && (
        <section className="py-8 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">
                      <strong>Database Connection Failed:</strong> Showing
                      sample data. Real data will load when the database
                      connection is restored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "ar" ? "عن هذا المشروع" : " About the Project"}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{getProjectDescription(project)}</p>
                <ImageGallery images={imagesUrl} />
                <p className="text-bold mt-10">
                  {language === "ar"
                    ? "يُبرز هذا المشروع قدرتنا على تقديم حلول عالية الجودة، وذات أداء عالٍ، وقابلة للتطوير. ركزنا على إنشاء تجربة مستخدم سهلة الاستخدام مدعومة ببنية قوية وآمنة"
                    : "  This project showcases our ability to deliver high-quality, performant, and scalable solutions. We focused on creating an intuitive user experience backed by a robust and secure architecture."}
                </p>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "ar"
                    ? " اهم الادوات و المهارات:"
                    : " Most tools and Skills:"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 py-1 px-5 rounded-full "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "ar" ? "روابط المشروع" : " Project Links"}
                </h3>
                <div className="space-y-4">
                  <Link
                    href={project.live_url}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
                  >
                    {language === "ar" ? "شاهد الموقع " : " View Live Site"}
                  </Link>
                  <Link
                    href={project.repo_github}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    {language === "ar" ? " View on GitHub" : " View on GitHub"}
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "ar" ? "شارك المشروع علي :" : " Share Project"}
                </h3>
                <ShareButtons project={project} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
