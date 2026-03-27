"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageWrapper({
  children,
  bodyClassName = "",
}: {
  children: React.ReactNode;
  bodyClassName?: string;
}) {
  const { dir, language } = useLanguage();

  return (
    <html lang={language} dir={dir}>
      <body className={`${bodyClassName} bg-slate-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
