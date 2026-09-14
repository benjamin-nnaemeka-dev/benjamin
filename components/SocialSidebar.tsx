"use client";

import { ApexlyIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { profile } from "@/lib/data/profile";

interface SocialSidebarProps {
  isLoaded?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Apexly: ApexlyIcon,
  Email: MailIcon,
};

export default function SocialSidebar({ isLoaded = true }: SocialSidebarProps) {
  const socials = profile.socials.map((item) => ({
    ...item,
    icon: iconMap[item.name] || MailIcon,
  }));

  return (
    <aside
      className={`hidden md:block fixed bottom-0 left-5 lg:left-10 z-30 w-10 transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isLoaded ? "600ms" : "0ms",
        transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      }}
    >
      <ul className="flex flex-col items-center after:block after:h-[90px] after:w-[1px] after:bg-[#a8b2d1]/50 after:mx-auto">
        {socials.map((item, idx) => {
          const IconComponent = item.icon;
          const isLast = idx === socials.length - 1;
          return (
            <li key={item.name} className={isLast ? "mb-5" : ""}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="block p-2.5 text-slate-light hover:text-green hover:-translate-y-1 transition-all duration-200"
              >
                <IconComponent className="h-5 w-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
