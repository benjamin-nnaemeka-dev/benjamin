"use client";

import { featuredProjects, otherProjects } from "@/lib/data/projects";
import Image from "next/image";
import { ExternalLinkIcon, FolderIcon, GitHubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="work" className="py-24 max-w-[1000px] mx-auto scroll-mt-20">
      <h2 className="numbered-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-2 font-normal">
          03.
        </span>
        Some Things I&apos;ve Built
      </h2>

      {/* Featured Projects List with Authentic v4 Overlapping Cards */}
      <ul className="space-y-28 mt-16 list-none p-0">
        {featuredProjects.map((proj, idx) => {
          // idx 0 & 2: Image on LEFT (cols 1-8), Content on RIGHT (cols 5-13, right-aligned)
          // idx 1: Content on LEFT (cols 1-9, left-aligned), Image on RIGHT (cols 6-13)
          const isOdd = idx % 2 === 0; // matching Screenshot: first project has image on left

          return (
            <li
              key={proj.title}
              className="relative grid grid-cols-1 md:grid-cols-12 items-center"
            >
              {/* Overlapping Project Image Container */}
              <div
                className={`relative z-10 rounded shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] overflow-hidden group transition-all duration-300 md:row-start-1 md:row-end-2 ${
                  isOdd
                    ? "md:col-start-1 md:col-end-8"
                    : "md:col-start-6 md:col-end-13"
                }`}
              >
                <a
                  href={proj.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/10] bg-[#64ffda] rounded overflow-hidden"
                >
                  {/* Brittany v4 Duotone Screen/Navy Layer */}
                  <div className="absolute inset-0 z-20 bg-[#0a192f] mix-blend-screen transition-all duration-300 group-hover:bg-transparent pointer-events-none" />

                  {/* Real Project Screenshot with Duotone Multiply & Grayscale */}
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 580px"
                    className="object-cover object-top mix-blend-multiply filter grayscale contrast-100 brightness-90 group-hover:mix-blend-normal group-hover:filter-none group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>

              {/* Overlapping Text Content Card */}
              <div
                className={`relative z-20 md:row-start-1 md:row-end-2 flex flex-col mt-4 md:mt-0 ${
                  isOdd
                    ? "md:col-start-5 md:col-end-13 md:items-end md:text-right"
                    : "md:col-start-1 md:col-end-9 md:items-start md:text-left"
                }`}
              >
                <p className="font-mono text-xs text-green mb-2">
                  Featured Project
                </p>

                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-lightest hover:text-green transition-colors mb-5">
                  <a
                    href={proj.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.title}
                  </a>
                </h3>

                {/* The Signature Overlapping Dark Navy Description Box */}
                <div className="w-full md:max-w-[500px] p-6 rounded bg-[#112240] text-slate-light text-[16px] sm:text-[18px] leading-[1.3] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] border border-[#233554]/40 hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] transition-all">
                  <p className="line-clamp-3">{proj.description}</p>
                </div>

                {/* Tech List */}
                <ul
                  className={`flex flex-wrap gap-x-5 gap-y-1.5 mt-6 font-mono text-[13px] text-slate-light ${
                    isOdd ? "justify-end" : "justify-start"
                  }`}
                >
                  {proj.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {/* Links */}
                <div
                  className={`flex items-center gap-4 mt-4 text-slate-lightest ${
                    isOdd ? "justify-end" : "justify-start"
                  }`}
                >
                  {proj.docs && (
                    <a
                      href={proj.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-green hover:underline"
                    >
                      Documentation ↗
                    </a>
                  )}
                  <a
                    href={proj.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                    className="p-1 hover:text-green transition-colors"
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Other Noteworthy Projects Section */}
      <div className="mt-32">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-lightest">
            Other Noteworthy Projects
          </h3>
          <a
            href="https://github.com/benjamin-nnaemeka-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-mono text-xs text-green hover:underline"
          >
            view the archive on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {otherProjects.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between p-7 rounded bg-[#112240] shadow-navy-card transition-all duration-300 hover:-translate-y-2 border border-[#233554]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <FolderIcon className="h-10 w-10 text-green" />
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="text-slate-lightest hover:text-green transition-colors"
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                </div>

                <h4 className="text-lg font-bold text-slate-lightest group-hover:text-green transition-colors">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </h4>

                <p className="mt-3 text-slate text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2.5 mt-6 font-mono text-[11px] text-slate">
                {item.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
