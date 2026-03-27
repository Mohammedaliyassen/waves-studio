"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import { useLanguage } from "@/app/contexts/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedProjectsGrid({
  projects,
}: {
  projects: Project[];
}) {
  const { language } = useLanguage();

  const getProjectTitle = (project: Project) => {
    return language === 'ar' ? project.title_ar : project.title_en;
  };

  const getProjectDescription = (project: Project) => {
    return language === 'ar' ? project.description_ar : project.description_en;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <Link href={`/projects/${project.id}`}>
            <div className="relative overflow-hidden">
              <Image
                src={getImageUrl(project)}
                alt={getProjectTitle(project)}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          <div className="p-6">
            <Link href={`/projects/${project.id}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {getProjectTitle(project)}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {getProjectDescription(project)}
            </p>
            <div className="flex gap-4">
              <Link
                href={project.live_url}
                target="_blank"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
              >
                View Live
              </Link>
              <Link
                href={project.repo_github}
                target="_blank"
                className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
              >
                GitHub
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
