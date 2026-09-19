"use client";

import { profile } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      className="py-24 max-w-[600px] mx-auto text-center scroll-mt-20"
    >
      <p className="font-mono text-sm sm:text-base text-green mb-5">
        04. What&apos;s Next?
      </p>

      <h2 className="text-[clamp(40px,5vw,60px)] font-bold tracking-tight text-slate-lightest leading-tight">
        Get In Touch
      </h2>

      <p className="mt-5 text-base sm:text-[20px] leading-[1.3] text-slate">
        I&apos;m open to new software engineering opportunities and consulting
        work. Whether you have a project in mind or just want to chat about
        tech, feel free to drop me a note.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a href={`mailto:${profile.email}`} className="big-btn">
          Say Hello
        </a>

        <button
          onClick={handleCopyEmail}
          type="button"
          aria-label="Copy email address"
          className="inline-flex items-center gap-2 rounded border border-slate/30 px-6 py-4 font-mono text-sm text-slate-lightest transition-all duration-200 hover:border-green hover:text-green"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </motion.section>
  );
}
