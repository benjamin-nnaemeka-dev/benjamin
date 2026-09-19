"use client";

import { jobs } from "@/lib/data/jobs";
import { motion } from "framer-motion";
import { useState } from "react";
import { AwardIcon } from "./Icons";

export default function Jobs() {
  const [activeTabId, setActiveTabId] = useState("apexly");
  const activeJob = jobs.find((j) => j.id === activeTabId) || jobs[0];
  const activeIndex = jobs.findIndex((j) => j.id === activeTabId);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      className="py-24 max-w-[700px] mx-auto scroll-mt-20"
    >
      <h2 className="numbered-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-2 font-normal">
          02.
        </span>
        Where I&apos;ve Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-10">
        {/* Tab List with Animated Slider Line */}
        <div className="relative">
          <div
            role="tablist"
            aria-label="Job tabs"
            className="flex md:flex-col overflow-x-auto border-b md:border-b-0 md:border-l-2 border-[#233554] shrink-0"
          >
            {jobs.map((job) => {
              const isActive = activeTabId === job.id;
              return (
                <button
                  key={job.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(job.id)}
                  className={`flex items-center px-5 py-3 font-mono text-xs sm:text-xs whitespace-nowrap text-left transition-all duration-200 ${
                    isActive
                      ? "text-green bg-[#112240]"
                      : "text-slate hover:text-green hover:bg-[#112240]/50"
                  }`}
                >
                  {job.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Sliding Green Active Indicator Bar */}
          <div
            className="hidden md:block absolute top-0 left-0 w-[2px] h-[42px] bg-green transition-transform duration-250 ease-out -ml-[2px]"
            style={{
              transform: `translateY(${activeIndex * 42}px)`,
            }}
          />
        </div>

        {/* Tab Content Panel */}
        <div className="min-h-[320px] flex-1 md:pl-2">
          <h3 className="text-lg sm:text-[20px] font-medium text-slate-lightest">
            <span>{activeJob.title}</span>
            <span className="text-green">
              {" "}
              @{" "}
              <a
                href={activeJob.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {activeJob.company}
              </a>
            </span>
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-2">
            <p className="font-mono text-[13px] text-slate-light">
              {activeJob.range}
            </p>
            {activeJob.certificate && (
              <a
                href={activeJob.certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-mono text-green hover:underline bg-green/10 px-3 py-1 rounded-full border border-green/20 hover:bg-green/15 transition-all"
              >
                <AwardIcon className="h-3.5 w-3.5 shrink-0" />
                <span>View Certificate</span>
              </a>
            )}
          </div>

          <ul className="mt-6 space-y-3.5">
            {activeJob.duties.map((duty, idx) => (
              <li
                key={idx}
                className="relative pl-6 text-slate text-[16px] sm:text-[18px] leading-[1.4]"
              >
                <span className="absolute left-0 top-0.5 text-green text-sm">
                  ▹
                </span>
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
