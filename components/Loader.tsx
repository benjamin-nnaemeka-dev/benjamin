"use client";

import { useEffect, useState } from "react";
import { IconLoader } from "./Icons";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase 1: Draw hex (1.4s), fade in B (1.2s - 1.8s)
    // Phase 2: Start scale-out exit at 2.1s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2100);

    // Phase 3: Complete and unmount at 2.45s
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2450);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#020c1b] transition-opacity duration-300 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`w-24 h-24 max-w-[100px] text-[#64ffda] ${
          isExiting ? "animate-exit-loader" : ""
        }`}
      >
        <IconLoader />
      </div>
    </div>
  );
}
