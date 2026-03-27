"use client";

import { motion } from "framer-motion";

interface AnimatedSectionHeaderProps {
  title: string;
  description: string;
  theme?: 'dark' | 'light';
}

export default function AnimatedSectionHeader({
  title,
  description,
  theme = 'dark',
}: AnimatedSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 mt-30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`text-xl max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-600'
        }`}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
