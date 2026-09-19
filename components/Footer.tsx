"use client";

import { profile } from "@/lib/data/profile";
import { ApexlyIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Apexly: ApexlyIcon,
  Email: MailIcon,
};

export default function Footer() {
  const socials = profile.socials.map((item) => ({
    ...item,
    icon: iconMap[item.name] || MailIcon,
  }));

  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center min-h-[70px]">
      {/* Mobile Socials */}
      <div className="block md:hidden w-full max-w-[270px] mx-auto mb-2.5 text-slate-light">
        <ul className="flex items-center justify-between">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-2.5 text-slate-light hover:text-green transition-colors block"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-slate-light font-mono text-[12px] leading-normal sm:leading-none p-2.5">
        <div>
          Designed by{" "}
          <a
            href="https://github.com/bchiang7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors inline-block"
          >
            Brittany Chiang
          </a>{" "}
          &amp; Engineered in Next.js 15 by{" "}
          <a
            href="https://github.com/benjamin-nnaemeka-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors inline-block"
          >
            Benjamin Nnaemeka
          </a>
        </div>
      </div>
    </footer>
  );
}
