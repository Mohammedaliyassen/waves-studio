"use client";

import { Project } from "@/app/lib/definitions";

interface ShareButtonsProps {
  project: Project;
}

const socialPlatforms = [
  {
    name: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getShareUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(`Check out this project: ${title}`)}`,
  },
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    getShareUrl: (url: string, title: string, summary: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
        summary
      )}`,
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    ),
    getShareUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.75 13.96c.25.13.43.2.5.33.07.13.07.55-.02.98-.09.43-.55.83-1.25 1.03-.7.2-1.58.3-2.43.2-1.6-.2-2.93-.83-4.03-1.9-1.3-1.28-2.08-2.88-2.18-3.18-.1-.3-.88-1.13-.88-2.1s.55-1.48.73-1.68c.18-.2.43-.25.6-.25.18 0 .35.03.5.25.15.2.53.63.6.73.07.1.1.23.03.38-.07.15-.12.23-.22.35-.1.13-.2.25-.28.33-.08.08-.15.18-.05.33.1.15.43.7.88 1.13.68.65 1.23.88 1.4.93.18.05.28.03.38-.08.1-.1.43-.5.55-.68.13-.18.25-.15.43-.1s1.13.53 1.3.6c.18.07.3.1.35.15.05.05.03.23-.02.38-.05.15-.28.35-.38.45zM12 2C6.48 2 2 6.48 2 12c0 1.75.45 3.4 1.25 4.85L2 22l5.25-1.38c1.45.78 3.08 1.23 4.75 1.23 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.5c-1.53 0-3-.38-4.3-1.1L4.5 20.5l1.1-3.2c-.75-1.3-1.15-2.8-1.15-4.3C4.5 7.57 7.85 4.5 12 4.5s7.5 3.07 7.5 7.5-3.35 7.5-7.5 7.5z" />
      </svg>
    ),
    getShareUrl: (url: string, title: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `Check out this project: ${title}`
      )}%20${encodeURIComponent(url)}`,
  },
];

export default function ShareButtons({
  project,
}: ShareButtonsProps) {
  const projectTitle = project.title_en || project.title_ar || project.title;
  const projectDescription =
    project.description_en || project.description_ar || project.description;

  const handleShare = (
    getShareUrl: (url: string, title: string, summary: string) => string
  ) => {
    if (typeof window === "undefined") {
      return;
    }

    const shareUrl = getShareUrl(
      window.location.href,
      projectTitle,
      projectDescription
    );

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3">
      {socialPlatforms.map((platform) => (
        <button
          key={platform.name}
          type="button"
          onClick={() => handleShare(platform.getShareUrl)}
          aria-label={`Share on ${platform.name}`}
          className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300"
        >
          {platform.icon}
        </button>
      ))}
    </div>
  );
}
