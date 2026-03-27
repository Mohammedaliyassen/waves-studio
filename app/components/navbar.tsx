"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "@/public/codelegendlogo.jpg";
const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    ransition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [languageOpen, setLanguageOpen] = useState(false);

  const switchLanguage = (newLang: "en" | "ar") => {
    setLanguage(newLang);
    setLanguageOpen(false);
  };

  const navLinks = [
    { name: t("nav.home"), href: `/` },
    { name: t("nav.projects"), href: `/projects` },
    {
      name: t("nav.services"),
      href: `/services`,
      subLinks: [
        { name: t("nav.web"), href: `/services/web` },
        { name: t("nav.mobile"), href: `/services/mobile` },
        { name: t("nav.desktop"), href: `/services/desktop` },
      ],
    },
    {
      name: language === "ar" ? "لماذا نحن" : "Why Us",
      href: `/why-us`,
    },
  ];

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      // Hide on scroll down, show on scroll up
      if (currentY > lastY && currentY > 100 && !isOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageOpen &&
        !(event.target as Element).closest(".language-dropdown")
      ) {
        setLanguageOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, languageOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-slate-900/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            alt="logo"
            src={logo}
            className="object-cover inline"
            draggable={false}
            width={50}
            height={50}
          />
          <p
            className={`inline ${
              isOpen ? "sm:visible " : "sm:visible invisible"
            } `}
          >
            Waves <span className="text-blue-400">Studio</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <motion.div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setHoveredLink(link.name)}
                onMouseLeave={() => link.subLinks && setHoveredLink(null)}
              >
                <div
                  className={`flex items-center gap-1 transition-colors relative group ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  } ${link.subLinks ? "cursor-default" : ""}`}
                >
                  {link.subLinks ? (
                    <>
                      {link.name}
                      <ChevronDown size={16} />
                    </>
                  ) : (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                  <span
                    className={`absolute bottom-0 right-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
                <AnimatePresence>
                  {link.subLinks && hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute op-full right-1/2 translate-x-1/2 mt-2 w-48 bg-slate-800 rounded-md shadow-lg p-2"
                    >
                      <div className="flex flex-col gap-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="px-3 py-2 ext-sm ext-gray-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="relative language-dropdown">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm uppercase">{language}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-32 bg-slate-800 rounded-md shadow-lg p-2 z-50"
                >
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => switchLanguage("en")}
                      className={`px-3 py-2 text-sm rounded-md transition-colors text-left ${
                        language === "en"
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => switchLanguage("ar")}
                      className={`px-3 py-2 text-sm rounded-md transition-colors text-left ${
                        language === "ar"
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      العربية
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href={`/contact`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors duration-300 whitespace-nowrap"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-slate-900/95 backdrop-blur-lg absolute op-full left-0 w-full"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full ext-center">
                  <motion.div variants={linkVariants}>
                    {link.subLinks ? (
                      <button
                        onClick={() =>
                          setOpenMobileSubMenu(
                            openMobileSubMenu === link.name ? null : link.name
                          )
                        }
                        className="flex items-center justify-center gap-2 w-full ext-xl font-semibold ext-gray-200 hover:text-white"
                      >
                        {link.name}
                        <motion.div
                          animate={{
                            rotate: openMobileSubMenu === link.name ? 180 : 0,
                          }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-xl font-semibold transition-colors ${
                          link.href === "/"
                            ? pathname === link.href
                            : pathname.startsWith(link.href)
                            ? "text-blue-400"
                            : "text-gray-200 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {link.subLinks && openMobileSubMenu === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col items-center gap-4 mt-4 overflow-hidden"
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="text-gray-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <motion.div variants={linkVariants} className="w-full ext-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`px-4 py-2 rounded-md font-semibold ransition-colors `}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLanguage("ar")}
                    className={`px-4 py-2 rounded-md font-semibold ransition-colors 
                     `}
                  >
                    AR
                  </button>
                </div>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link
                  href={`/contact`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
