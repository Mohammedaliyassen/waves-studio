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

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { language } = useLanguage();

  const getProjectTitle = (project: Project) => {
    return language === 'ar' ? project.title_ar : project.title_en;
  };

  const getProjectDescription = (project: Project) => {
    return language === 'ar' ? project.description_ar : project.description_en;
  };

  const isLarge = index % 7 === 0 || index % 7 === 3; // Make some cards larger for visual interest

  return (
    <Link
      href={`/projects/${project.id}`}
      draggable={false}
      className={`group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      }`}
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileTap={{ scale: 0.98, cursor: "grabbing" }}
        drag // تفعيل السحب
        dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }} // تحديد حدود السحب
        dragSnapToOrigin={true} // العودة للموضع الأصلي عند ترك السحب
        viewport={{ once: true, amount: 0.3 }} // تحسين الأداء بجعل الحركة تحدث مرة واحدة
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative aspect-square w-full h-full"
      >
        <Image
          src={getImageUrl(project)}
          alt={getProjectTitle(project)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-right">
            <h3 className="text-xl font-bold mb-2">{getProjectTitle(project)}</h3>
            <p className="text-sm text-gray-200 line-clamp-2">
              {getProjectDescription(project)}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
