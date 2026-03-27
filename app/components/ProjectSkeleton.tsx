"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectSkeleton({ index }: { index: number }) {
  const isLarge = index % 7 === 0 || index % 7 === 3;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group block relative overflow-hidden rounded-lg shadow-lg animate-pulse ${
        isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      }`}
    >
      <div className="relative aspect-square w-full h-full bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="h-6 bg-gray-400 rounded mb-2"></div>
            <div className="h-4 bg-gray-400 rounded mb-1"></div>
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}