"use client";

import { profile } from "@/lib/data/profile";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroProps {
  isLoaded?: boolean;
}

export default function Hero({ isLoaded = true }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const show = isLoaded || mounted;

  const getDelayStyle = (delayMs: number) => ({
    transitionDelay: show ? `${delayMs}ms` : "0ms",
    transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  });

  return (
    <section className="flex min-h-screen flex-col justify-center items-start pt-[100px] pb-6 max-w-[1000px] mx-auto">
      <div>
        <h1
          className={`font-mono text-[14px] sm:text-[15px] text-green mb-[30px] ml-1 transition-all duration-500 font-normal ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={getDelayStyle(700)}
        >
          Hi, my name is
        </h1>

        <h2
          className={`text-[clamp(40px,6vw,70px)] font-bold tracking-tight text-slate-lightest leading-[1.1] transition-all duration-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={getDelayStyle(800)}
        >
          {profile.name}.
        </h2>

        <h3
          className={`mt-[5px] text-[clamp(40px,6vw,70px)] font-bold tracking-tight text-slate leading-[1.05] transition-all duration-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={getDelayStyle(900)}
        >
          {profile.tagline}
        </h3>

        <p
          className={`mt-5 max-w-[540px] text-[18px] sm:text-[20px] leading-[1.3] text-slate transition-all duration-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={getDelayStyle(1000)}
          dangerouslySetInnerHTML={{ __html: profile.heroBio }}
        />

        <div
          className={`mt-[50px] transition-all duration-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={getDelayStyle(1100)}
        >
          <Link href="#work" className="big-btn">
            View my work
          </Link>
        </div>
      </div>
    </section>
  );
}
