"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      web: "Web Development",
      mobile: "Mobile Development",
      desktop: "Desktop Development"
    },
    hero: {
      title: "Build Amazing",
      titleHighlight: "Software",
      subtitle: "We create stunning and performant applications for web, mobile, and desktop.",
      startProject: "Start a Project",
      viewWork: "View Our Work"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive software development services tailored to bring your vision to life across all platforms.",
      webDev: {
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies. From e-commerce platforms to complex web systems.",
        features: ["React/Next.js", "Full-Stack Solutions", "API Integration", "Performance Optimization"]
      },
      mobileDev: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
        features: ["React Native", "Flutter", "iOS/Android", "Cross-Platform"]
      },
      desktopDev: {
        title: "Desktop Development",
        description: "Powerful desktop applications with rich user interfaces and seamless system integration.",
        features: ["Electron", "Tauri", "System Integration", "Performance"]
      }
    },
    portfolio: {
      title: "Our Work",
      subtitle: "Discover our portfolio of high-quality software solutions across web, mobile, and desktop platforms.",
      viewAll: "View All Projects"
    },
    projectsPage: {
      hero: {
        title: "Our Work",
        subtitle: "Explore our portfolio of high-quality software solutions. Each project represents our commitment to excellence and innovation."
      }
    },
    whyUs: {
      title: "Why Choose Waves Studio?",
      subtitle: "We combine technical excellence with professional service to deliver outstanding results for every project.",
      reasons: [
        {
          title: "Quality First",
          description: "We deliver pixel-perfect, bug-free solutions that exceed expectations. Every project undergoes rigorous testing and quality assurance."
        },
        {
          title: "On-Time Delivery",
          description: "We respect your time and deliver projects on schedule. Transparent communication and regular updates keep you informed throughout the process."
        },
        {
          title: "Technical Expertise",
          description: "Our team consists of senior developers with deep expertise in modern technologies and best practices. We solve complex problems elegantly."
        },
        {
          title: "End-to-End Support",
          description: "From concept to deployment and beyond, we provide comprehensive support. We ensure your solution scales and evolves with your business needs."
        }
      ]
    },
    servicesPage: {
      hero: {
        title: "Our Services",
        subtitle: "Comprehensive software development services tailored to bring your vision to life across all platforms. From web applications to mobile apps and desktop software, we deliver excellence at every step."
      },
      webDev: {
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies. From e-commerce platforms to complex web systems, we deliver scalable solutions that drive business growth.",
        features: [
          "React/Next.js Applications",
          "Full-Stack Development",
          "API Integration & Development",
          "Performance Optimization",
          "SEO & Accessibility",
          "E-commerce Solutions",
          "Progressive Web Apps (PWAs)"
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Vercel"
        ],
        learnMore: "Learn More About Web Development"
      },
      mobileDev: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices. We build apps that users love and businesses rely on.",
        features: [
          "iOS & Android Native Apps",
          "Cross-Platform Solutions",
          "UI/UX Design Implementation",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
          "In-App Purchases"
        ],
        technologies: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
          "App Store Connect",
          "Google Play"
        ],
        learnMore: "Learn More About Mobile Development"
      },
      desktopDev: {
        title: "Desktop Applications",
        description: "Powerful desktop software solutions for Windows, macOS, and Linux with advanced functionality and performance. We create applications that enhance productivity and solve complex business challenges.",
        features: [
          "Cross-Platform Desktop Apps",
          "System Integration",
          "Data Processing Tools",
          "Custom Business Software",
          "Automation Solutions",
          "Database Applications",
          "Real-time Applications"
        ],
        technologies: [
          "Electron",
          "Tauri",
          ".NET",
          "Python",
          "C++",
          "Qt",
          "SQLite",
          "PostgreSQL"
        ],
        learnMore: "Learn More About Desktop Applications"
      },
      whatWeOffer: "What We Offer",
      technologiesUsed: "Technologies We Use",
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Let's discuss your requirements and create something amazing together. Get a free consultation and project estimate.",
        button: "Start Your Project"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      services: "الخدمات",
      contact: "اتصل بنا",
      web: "تطوير الويب",
      mobile: "تطوير التطبيقات",
      desktop: "تطوير سطح المكتب"
    },
    hero: {
      title: "نبني برمجيات",
      titleHighlight: "رائعة",
      subtitle: "نحن نصنع تطبيقات مذهلة وعالية الأداء للويب والجوال وسطح المكتب.",
      startProject: "ابدأ مشروعاً",
      viewWork: "شاهد أعمالنا"
    },
    services: {
      title: "خدماتنا",
      subtitle: "خدمات تطوير برمجيات شاملة مصممة لتحويل رؤيتك إلى واقع عبر جميع المنصات.",
      webDev: {
        title: "تطوير الويب",
        description: "تطبيقات ويب حديثة ومتجاوبة مبنية بأحدث التقنيات. من منصات التجارة الإلكترونية إلى الأنظمة الويب المعقدة.",
        features: ["React/Next.js", "حلول شاملة", "تكامل API", "تحسين الأداء"]
      },
      mobileDev: {
        title: "تطوير التطبيقات",
        description: "تطبيقات محمولة أصلية وعبر المنصات تقدم تجارب مستخدم استثنائية عبر جميع الأجهزة.",
        features: ["React Native", "Flutter", "iOS/Android", "عبر المنصات"]
      },
      desktopDev: {
        title: "تطوير سطح المكتب",
        description: "تطبيقات سطح مكتب قوية بواجهات مستخدم غنية وتكامل نظام سلس.",
        features: ["Electron", "Tauri", "تكامل النظام", "الأداء"]
      }
    },
    portfolio: {
      title: "أعمالنا",
      subtitle: "اكتشف معرض أعمالنا من الحلول البرمجية عالية الجودة عبر الويب والجوال وسطح المكتب.",
      viewAll: "عرض جميع المشاريع"
    },
    projectsPage: {
      hero: {
        title: "أعمالنا",
        subtitle: "استكشف معرض أعمالنا من الحلول البرمجية عالية الجودة. كل مشروع يمثل التزامنا بالتميز والابتكار."
      }
    },
    servicesPage: {
      hero: {
        title: "خدماتنا",
        subtitle: "خدمات تطوير برمجيات شاملة مصممة لتحويل رؤيتك إلى واقع عبر جميع المنصات. من تطبيقات الويب إلى تطبيقات الهاتف المحمول والبرمجيات المكتبية، نحن نقدم التميز في كل خطوة."
      },
      webDev: {
        title: "تطوير الويب",
        description: "تطبيقات ويب حديثة ومتجاوبة مبنية بأحدث التقنيات. من منصات التجارة الإلكترونية إلى الأنظمة الويب المعقدة، نحن نقدم حلولاً قابلة للتوسع تدفع نمو الأعمال.",
        features: [
          "تطبيقات React/Next.js",
          "تطوير شامل",
          "تكامل وتطوير API",
          "تحسين الأداء",
          "SEO وإمكانية الوصول",
          "حلول التجارة الإلكترونية",
          "تطبيقات الويب التقدمية (PWAs)"
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Vercel"
        ],
        learnMore: "تعرف على المزيد عن تطوير الويب"
      },
      mobileDev: {
        title: "تطوير التطبيقات",
        description: "تطبيقات محمولة أصلية وعبر المنصات تقدم تجارب مستخدم استثنائية عبر جميع الأجهزة. نحن نبني تطبيقات يحبها المستخدمون وتعتمد عليها الشركات.",
        features: [
          "تطبيقات أصلية لـ iOS و Android",
          "حلول عبر المنصات",
          "تنفيذ تصميم UI/UX",
          "تحسين متجر التطبيقات",
          "إشعارات الدفع",
          "الوظائف دون اتصال",
          "المشتريات داخل التطبيق"
        ],
        technologies: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
          "App Store Connect",
          "Google Play"
        ],
        learnMore: "تعرف على المزيد عن تطوير التطبيقات"
      },
      desktopDev: {
        title: "تطبيقات سطح المكتب",
        description: "حلول برمجية سطح مكتب قوية لـ Windows و macOS و Linux مع وظائف متقدمة وأداء عالي. نحن نصنع تطبيقات تعزز الإنتاجية وتحل التحديات التجارية المعقدة.",
        features: [
          "تطبيقات سطح مكتب عبر المنصات",
          "تكامل النظام",
          "أدوات معالجة البيانات",
          "برمجيات أعمال مخصصة",
          "حلول الأتمتة",
          "تطبيقات قواعد البيانات",
          "تطبيقات في الوقت الفعلي"
        ],
        technologies: [
          "Electron",
          "Tauri",
          ".NET",
          "Python",
          "C++",
          "Qt",
          "SQLite",
          "PostgreSQL"
        ],
        learnMore: "تعرف على المزيد عن تطبيقات سطح المكتب"
      },
      whatWeOffer: "ما نقدمه",
      technologiesUsed: "التقنيات التي نستخدمها",
      cta: {
        title: "جاهز لبدء مشروعك؟",
        subtitle: "دعنا نناقش متطلباتك ونصنع شيئاً مذهلاً معاً. احصل على استشارة مجانية وتقدير تكلفة المشروع.",
        button: "ابدأ مشروعك"
      }
    },
    whyUs: {
      title: "لماذا تختار Waves Studio؟",
      subtitle: "نجمع بين التميز التقني والخدمة المهنية لتقديم نتائج استثنائية لكل مشروع.",
      reasons: [
        {
          title: "الجودة أولاً",
          description: "نقدم حلولاً مثالية وخالية من الأخطاء تتجاوز التوقعات. كل مشروع يخضع لاختبارات صارمة وضمان الجودة."
        },
        {
          title: "التسليم في الوقت المحدد",
          description: "نحترم وقتك ونسلم المشاريع في المواعيد المحددة. التواصل الشفاف والتحديثات المنتظمة تبقيك على اطلاع طوال العملية."
        },
        {
          title: "الخبرة التقنية",
          description: "فريقنا يتكون من مطورين senior بخبرة عميقة في التقنيات الحديثة وأفضل الممارسات. نحل المشكلات المعقدة بأناقة."
        },
        {
          title: "الدعم الشامل",
          description: "من المفهوم إلى النشر وما بعده، نقدم دعماً شاملاً. نضمن أن حلك يتوسع ويتطور مع احتياجات عملك."
        }
      ]
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
