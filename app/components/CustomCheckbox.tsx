"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCheckbox({
  id,
  name,
  value,
  className,
}: {
  id: string;
  name: string;
  value: string;
  className: string;
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label htmlFor={id} className={className}>
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="sr-only"
      />
      <motion.div
        className={`relative w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors duration-200 ${
          isChecked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence>
          {isChecked && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none">
              <motion.path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </svg>
          )}
        </AnimatePresence>
      </motion.div>
      <span className="mr-2 text-sm font-medium text-white ">{value}</span>
    </label>
  );
}
