"use client";

import { profile } from "@/lib/data/profile";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      className="py-24 max-w-[900px] mx-auto scroll-mt-20"
    >
      <h2 className="numbered-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-2 font-normal">
          01.
        </span>
        About Me
      </h2>

      {/* Exact 3fr 2fr grid layout with 50px gap from v4 */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-[50px] items-start mt-8">
        {/* Left Column: Text */}
        <div className="space-y-4 text-base sm:text-[20px] leading-[1.3] text-slate">
          {profile.aboutParagraphs.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}

          <p className="pt-2 text-slate-light">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          {/* Authentic v4 2-column skills grid with ▹ bullets */}
          <ul className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] pt-1 font-mono text-[13px] text-slate-light list-none p-0">
            {profile.skills.map((skill) => (
              <li key={skill} className="relative pl-5 flex items-center">
                <span className="absolute left-0 text-green text-[14px] leading-[12px]">
                  ▹
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Signature Framed Photo (max-w-[300px], 50px adjacent gap) */}
        <div className="relative max-w-[300px] w-full mx-auto md:mx-0 mt-6 md:mt-0">
          <div className="group relative block w-full aspect-square">
            {/* Background offset teal border frame (14px offset by default, expands on hover) */}
            <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded border-2 border-green transition-transform duration-300 group-hover:translate-x-[20px] group-hover:translate-y-[20px]" />

            {/* Photo container with authentic v4 duotone treatment */}
            <div className="relative w-full h-full rounded bg-[#64ffda] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 overflow-hidden">
              {/* Screen overlay to boost teal contrast on dark elements */}
              <div className="absolute inset-0 z-10 bg-[#0a192f] mix-blend-screen transition-all duration-300 group-hover:bg-transparent pointer-events-none" />

              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="300px"
                className="object-cover object-top filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
