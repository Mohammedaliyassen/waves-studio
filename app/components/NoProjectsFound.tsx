"use client";

import { motion } from "framer-motion";

export default function NoProjectsFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-center py-20"
    >
      <div className="text-gray-400 text-lg">
        No projects found. Check back soon!
      </div>
    </motion.div>
  );
}
