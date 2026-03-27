"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const services = [
  {
    title: "Web Development",
    slug: "web",
    description:
      "Modern, responsive web applications built with cutting-edge technologies. From e-commerce platforms to complex web systems, we deliver scalable solutions that drive business growth.",
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
        />
      </svg>
    ),
    features: [
      "React/Next.js Applications",
      "Full-Stack Development",
      "API Integration & Development",
      "Performance Optimization",
      "SEO & Accessibility",
      "E-commerce Solutions",
      "Progressive Web Apps (PWAs)",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Vercel",
    ],
  },
  {
    title: "Mobile Development",
    slug: "mobile",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices. We build apps that users love and businesses rely on.",
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    features: [
      "iOS & Android Native Apps",
      "Cross-Platform Solutions",
      "UI/UX Design Implementation",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "In-App Purchases",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "App Store Connect",
      "Google Play",
    ],
  },
  {
    title: "Desktop Applications",
    slug: "desktop",
    description:
      "Powerful desktop software solutions for Windows, macOS, and Linux with advanced functionality and performance. We create applications that enhance productivity and solve complex business challenges.",
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    features: [
      "Cross-Platform Desktop Apps",
      "System Integration",
      "Data Processing Tools",
      "Custom Business Software",
      "Automation Solutions",
      "Database Applications",
      "Real-time Applications",
    ],
    technologies: [
      "Electron",
      "Tauri",
      ".NET",
      "Python",
      "C++",
      "Qt",
      "SQLite",
      "PostgreSQL",
    ],
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("servicesPage.webDev.title"),
      slug: "web",
      description: t("servicesPage.webDev.description"),
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
      features: t("servicesPage.webDev.features") as unknown as string[],
      technologies: t(
        "servicesPage.webDev.technologies"
      ) as unknown as string[],
      learnMore: t("servicesPage.webDev.learnMore"),
    },
    {
      title: t("servicesPage.mobileDev.title"),
      slug: "mobile",
      description: t("servicesPage.mobileDev.description"),
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      features: t("servicesPage.mobileDev.features") as unknown as string[],
      technologies: t(
        "servicesPage.mobileDev.technologies"
      ) as unknown as string[],
      learnMore: t("servicesPage.mobileDev.learnMore"),
    },
    {
      title: t("servicesPage.desktopDev.title"),
      slug: "desktop",
      description: t("servicesPage.desktopDev.description"),
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: t("servicesPage.desktopDev.features") as unknown as string[],
      technologies: t(
        "servicesPage.desktopDev.technologies"
      ) as unknown as string[],
      learnMore: t("servicesPage.desktopDev.learnMore"),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t("servicesPage.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t("servicesPage.hero.subtitle")}
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
              >
                {/* Service Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 w-32 h-32 rounded-full flex items-center justify-center text-white shadow-2xl">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex-1 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mt-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {t("servicesPage.whatWeOffer")}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                              duration: 0.4,
                              delay: featureIndex * 0.05,
                            }}
                            className="flex items-center text-gray-700"
                          >
                            <svg
                              className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {t("servicesPage.technologiesUsed")}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                              duration: 0.3,
                              delay: techIndex * 0.05,
                            }}
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="pt-4"
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                      >
                        {service.learnMore}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("servicesPage.cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {t("servicesPage.cta.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              {t("servicesPage.cta.button")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
