"use client";

import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function ImageGallery({ images }: { images: string[] }) {
  const { language } = useLanguage();

  if (!Array.isArray(images)) return null;
  console.log(images, typeof images);
  return (
    <div className="mt-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        {language === "ar" ? "معرض الصور" : "Image Gallery"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.isArray(images) &&
          images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md group"
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                sizes="100"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
