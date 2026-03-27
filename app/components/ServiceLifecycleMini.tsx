"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { getWhyUsContent } from "../lib/why-us-content";

export default function ServiceLifecycleMini() {
  const { language, dir } = useLanguage();
  const content = getWhyUsContent(language);
  const isRtl = dir === "rtl";
  const stepLabel = language === "ar" ? "الخطوة" : "Step";
  const stepWindow = 2;
  const circleDuration = 0.55;
  const titleDuration = 1.15;
  const connectorDuration = 0.55;

  return (
    <section dir={dir} className="relative bg-slate-900 py-20 text-white">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            {content.compactLifecycleTitle}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {content.compactLifecycleSubtitle}
          </h2>
        </div>

        <div className="relative mt-12 hidden md:block">
          <div className="grid grid-cols-5 gap-4">
            {content.lifecycle.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative text-center"
              >
                {index < content.lifecycle.length - 1 && (
                  <>
                    <div
                      className={`absolute top-5 h-px bg-white/10 ${
                        isRtl
                          ? "left-[-5.25rem] right-[calc(50%+1.5rem)]"
                          : "left-[calc(50%+1.5rem)] right-[-5.25rem]"
                      }`}
                    />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: connectorDuration,
                        delay: index * stepWindow + 1.35,
                        ease: "easeInOut",
                      }}
                      className={`absolute top-5 h-px ${
                        isRtl
                          ? "left-[-5.25rem] right-[calc(50%+1.5rem)] origin-right bg-gradient-to-l from-cyan-300 via-blue-400 to-cyan-300"
                          : "left-[calc(50%+1.5rem)] right-[-5.25rem] origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300"
                      }`}
                    />
                  </>
                )}

                <motion.div
                  initial={{
                    backgroundColor: "rgba(15,23,42,1)",
                    borderColor: "rgba(165,243,252,0.18)",
                    color: "rgba(165,243,252,0.85)",
                    boxShadow: "0 0 0 rgba(34,211,238,0)",
                    scale: 0.96,
                  }}
                  whileInView={{
                    backgroundColor: "rgba(34,211,238,0.16)",
                    borderColor: "rgba(165,243,252,0.55)",
                    color: "rgba(236,254,255,1)",
                    boxShadow: "0 0 24px rgba(34,211,238,0.42)",
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: circleDuration,
                    delay: index * stepWindow,
                    ease: "easeOut",
                  }}
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold"
                >
                  {index + 1}
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                    boxShadow: "0 0 0 rgba(34,211,238,0)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderColor: "rgba(165,243,252,0.16)",
                    boxShadow: "0 0 28px rgba(34,211,238,0.12)",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: titleDuration,
                    delay: index * stepWindow + 0.85,
                    ease: "easeOut",
                  }}
                  className="mx-auto mt-5 max-w-[170px] rounded-3xl border px-4 py-4 backdrop-blur"
                >
                  <h3 className="text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {content.lifecycle.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: isRtl ? 18 : -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: titleDuration,
                  delay: index * stepWindow + 0.85,
                  ease: "easeOut",
                }}
                className={`absolute -inset-8 blur-3xl ${
                  index % 2 === 0 ? "bg-cyan-400/10" : "bg-blue-400/10"
                }`}
              />
              <div
                className={`absolute bottom-0 top-0 w-px bg-white/10 ${
                  isRtl ? "left-5" : "right-5"
                }`}
              />
              {index < content.lifecycle.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: connectorDuration,
                    delay: index * stepWindow + 1.35,
                    ease: "easeInOut",
                  }}
                  className={`absolute bottom-[-1rem] top-10 w-px origin-top bg-gradient-to-b from-cyan-300 to-blue-400 ${
                    isRtl ? "left-5" : "right-5"
                  }`}
                />
              )}
              <div
                className={`relative z-10 flex items-start gap-4 ${
                  isRtl ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <motion.div
                  initial={{
                    backgroundColor: "rgba(15,23,42,1)",
                    borderColor: "rgba(165,243,252,0.18)",
                    color: "rgba(165,243,252,0.85)",
                    boxShadow: "0 0 0 rgba(34,211,238,0)",
                  }}
                  whileInView={{
                    backgroundColor: "rgba(34,211,238,0.16)",
                    borderColor: "rgba(165,243,252,0.55)",
                    color: "rgba(236,254,255,1)",
                    boxShadow: "0 0 20px rgba(34,211,238,0.35)",
                  }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: circleDuration,
                    delay: index * stepWindow,
                    ease: "easeOut",
                  }}
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold`}
                >
                  {index + 1}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0.5, x: isRtl ? 8 : -8, y: 8 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: titleDuration,
                    delay: index * stepWindow + 0.85,
                    ease: "easeOut",
                  }}
                  className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    {stepLabel} 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-blue-600 hover:bg-blue-950 px-7 py-3 text-sm font-semibold text-white shadow-blue-800 shadow-[0_0px_15px] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {content.ctaPrimary}
          </Link>
        </div>
      </div>
    </section>
  );
}
