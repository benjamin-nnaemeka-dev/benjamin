"use client";

import { profile } from "@/lib/data/profile";

interface EmailSidebarProps {
  isLoaded?: boolean;
}

export default function EmailSidebar({ isLoaded = true }: EmailSidebarProps) {
  return (
    <aside
      className={`hidden md:block fixed bottom-0 right-5 lg:right-10 z-30 w-10 transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isLoaded ? "600ms" : "0ms",
        transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      }}
    >
      <div className="flex flex-col items-center after:block after:h-[90px] after:w-[1px] after:bg-[#a8b2d1]/50 after:mx-auto">
        <a
          href={`mailto:${profile.email}`}
          className="my-5 p-2.5 font-mono text-[12px] tracking-[0.1em] text-slate-light hover:text-green hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
        >
          {profile.email}
        </a>
      </div>
    </aside>
  );
}
