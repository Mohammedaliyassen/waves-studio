"use client";

import { useState } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { validateAccessKey } from "@/app/lib/pocketbase";

export default function KeyEntry({
  onAccessGranted,
}: {
  onAccessGranted: (projectId: string, projectTitle: string) => void;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const project = await validateAccessKey(input);

      if (project) {
        onAccessGranted(project.id, project.project_title);
      } else {
        setError("Sorry, the login code is invalid");
      }
    } catch (err) {
      setError("Sorry, the login code is invalid");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Lock className="text-blue-400" size={32} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Workflow Access
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Enter your unique access key to view the project workflow
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError("");
                }}
                placeholder="Enter access key"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !input}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? "Verifying..." : "Unlock Workflow"}
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-8">
            This page is restricted. You need the correct access key to proceed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
