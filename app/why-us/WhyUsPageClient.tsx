"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardList,
  Code2,
  HelpCircle,
  LifeBuoy,
  MessageSquareMore,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getWhyUsContent } from "../lib/why-us-content";

const pillarIcons = {
  scope: ClipboardList,
  quality: Code2,
  communication: MessageSquareMore,
  support: LifeBuoy,
} as const;

const processIcons = [ShieldCheck, Code2, BadgeCheck, Rocket];

export default function WhyUsPageClient() {
  const { language, dir } = useLanguage();
  const content = getWhyUsContent(language);
  const isRtl = dir === "rtl";
  const lifecycleStepDuration = 2;

  return (
    <main
      dir={dir}
      className="min-h-screen overflow-hidden bg-[linear-gradient(160deg,#020617_0%,#0f172a_45%,#082f49_100%)] pt-28 text-white"
    >
      <section className="relative">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
              {content.pageBadge}
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {content.pageTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {content.pageSubtitle}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {content.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-cyan-200">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
              {content.pillarsTitle}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {content.pillarsSubtitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.pillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.id];

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-white/10 bg-slate-950/40 p-7 shadow-[0_20px_80px_rgba(2,6,23,0.35)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
              {content.processTitle}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {content.processSubtitle}
            </h2>

            <div className="mt-8 space-y-5">
              {content.process.map((step, index) => {
                const Icon = processIcons[index];

                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/40 p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[32px] border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(15,23,42,0.55))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
              {content.promiseTitle}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {content.promiseSubtitle}
            </h2>

            <div className="mt-8 space-y-4">
              {content.promises.map((promise) => (
                <div
                  key={promise}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="text-slate-200">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
              {content.lifecycleTitle}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {content.lifecycleSubtitle}
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="space-y-6">
              {content.lifecycle.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/45 p-6 ${
                    isRtl ? "pr-20 text-right" : "pl-20 text-left"
                  }`}
                >
                  {index < content.lifecycle.length - 1 && (
                    <>
                      <div
                        className={`absolute bottom-[-1.55rem] top-[4.7rem] w-px bg-white/10 ${
                          isRtl ? "right-[2.75rem]" : "left-[2.75rem]"
                        }`}
                      />
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{
                          duration: lifecycleStepDuration,
                          ease: "easeInOut",
                        }}
                        className={`absolute bottom-[-1.55rem] top-[4.7rem] w-px origin-top bg-gradient-to-b from-cyan-300 via-blue-400 to-amber-300 ${
                          isRtl ? "right-[2.75rem]" : "left-[2.75rem]"
                        }`}
                      />
                    </>
                  )}

                  <div
                    className={`absolute top-[3rem] h-px bg-white/10 ${
                      isRtl ? "right-[2.75rem] w-8" : "left-[2.75rem] w-8"
                    }`}
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: lifecycleStepDuration,
                      ease: "easeInOut",
                    }}
                    className={`absolute top-[3rem] h-px origin-center bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 ${
                      isRtl
                        ? "right-[2.75rem] w-8 origin-right bg-gradient-to-l"
                        : "left-[2.75rem] w-8 origin-left"
                    }`}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{
                      opacity: [0.08, 0.24, 0.18],
                      scale: [0.96, 1.03, 1],
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: lifecycleStepDuration,
                      ease: "easeInOut",
                    }}
                    className={`absolute -inset-10 blur-3xl ${
                      index % 2 === 0 ? "bg-cyan-400/10" : "bg-amber-300/10"
                    }`}
                  />

                  <motion.div
                    initial={{
                      backgroundColor: "rgba(34,211,238,0.08)",
                      borderColor: "rgba(165,243,252,0.18)",
                      boxShadow: "0 0 0 rgba(34,211,238,0)",
                      scale: 0.94,
                    }}
                    whileInView={{
                      backgroundColor: "rgba(34,211,238,0.16)",
                      borderColor: "rgba(165,243,252,0.42)",
                      boxShadow: [
                        "0 0 0 rgba(34,211,238,0.0)",
                        "0 0 24px rgba(34,211,238,0.35)",
                        "0 0 12px rgba(34,211,238,0.18)",
                      ],
                      scale: [0.94, 1.03, 1],
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: lifecycleStepDuration,
                      ease: "easeInOut",
                    }}
                    className={`absolute top-6 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100 ${
                      isRtl ? "right-5" : "left-5"
                    }`}
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: lifecycleStepDuration,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-300">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-cyan-200/15 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(15,23,42,0.55))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
              {content.comparisonTitle}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {content.comparisonSubtitle}
            </h2>
          </div>

          <div className="space-y-4">
            {content.comparisonRows.map((row, index) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">
                  {row.title}
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                      Waves Studio
                    </p>
                    <p className="mt-2 text-slate-100">{row.ours}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Typical experience
                    </p>
                    <p className="mt-2 text-slate-300">{row.typical}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
              <HelpCircle className="h-7 w-7" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
              {content.faqTitle}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {content.faqSubtitle}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {content.faq.map((item, index) => (
              <motion.details
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group rounded-3xl border border-white/10 bg-slate-950/40 p-5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.85),rgba(8,47,73,0.9))] px-8 py-10 text-center shadow-[0_30px_120px_rgba(8,47,73,0.35)] md:px-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            {content.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {content.ctaSubtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
