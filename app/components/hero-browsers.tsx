"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Project } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

function BrowserMockup({
  project,
  onSwipe,
  ...motionProps
}: {
  project: Project;
  onSwipe: (direction: number) => void;
  [key: string]: unknown;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-25, 0, 25]);

  return (
    <motion.div
      className="absolute w-64 h-40 cursor-grab "
      style={{ x, rotate, willChange: "transform" }} // Performance optimization
      drag="x"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.8} // Improve drag feel
      onDragEnd={(e, { offset }) => {
        if (Math.abs(offset.x) > 120) {
          onSwipe(offset.x > 0 ? 1 : -1);
        }
      }}
      whileTap={{ cursor: "grabbing" }}
      {...motionProps}
    >
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden w-64 h-40 ">
        {/* Browser header */}
        <div className="bg-gray-100 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded text-xs px-2 py-1 text-gray-500">
            {project.title_ar}
          </div>
        </div>
        {/* Browser content */}
        <div className="relative h-full ">
          <Image
            src={getImageUrl(project)}
            alt={project.title_ar}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroBrowsers({
  projects = [],
}: {
  projects: Project[];
}) {
  const { t } = useLanguage();
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    setCards(projects.slice(0, 4));
  }, [projects]);

  const handleSwipe = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      // Move the first card to the end of the array
      const swipedCard = newCards.shift();
      if (swipedCard) {
        newCards.push(swipedCard);
      }
      return newCards;
    });
  };

  if (cards.length === 0) {
    return null; // Or a loading/empty state component
  }

  // We only want to render a few cards for performance and visual clarity
  const cardsToRender = cards.slice(0, 3).reverse();

  return (
    // Note: The parent component fetching projects should handle the async nature.
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-30">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          {t("hero.title")}{" "}
          <span className="text-blue-400">{t("hero.titleHighlight")}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            {t("hero.startProject")}
          </Link>
          <Link
            href="/projects"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            {t("hero.viewWork")}
          </Link>
        </div>

        {/* Browser mockups container */}
        <div className="relative h-96 w-full max-w-4xl mx-auto flex items-center justify-center">
          <AnimatePresence>
            {cardsToRender.map((project, index) => {
              const isTopCard = index === cardsToRender.length - 1;
              const mobileScreen = window.innerWidth;
              console.log(mobileScreen);

              return (
                <BrowserMockup
                  key={project.id}
                  project={project}
                  onSwipe={handleSwipe}
                  initial={{ scale: 0, y: 0, x: 0, opacity: 0 }}
                  animate={
                    mobileScreen <= 760
                      ? {
                          scale: 1 - (cardsToRender.length - 1 - index) * 0.05, // Correct and simplify the value
                          y: (cardsToRender.length - 1 - index) * -15,
                          x: isTopCard ? 30 : 0,
                          opacity: 1,
                          zIndex: index,
                        }
                      : {
                          scale: 2 - (cardsToRender.length - 1 - index) * 0.05, // Correct and simplify the value
                          y: (cardsToRender.length - 1 - index) * -15,
                          x: isTopCard ? 30 : 0,
                          opacity: 1,
                          zIndex: index,
                        }
                  }
                  exit={{ x: 300, opacity: 0, scale: 0.5 }} // Make the exit faster and clearer
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  // Only the top card should be draggable
                  drag={isTopCard ? "x" : false}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
