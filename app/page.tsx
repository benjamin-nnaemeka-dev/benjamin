"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import EmailSidebar from "@/components/EmailSidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Jobs from "@/components/Jobs";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFinishLoading = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 50);
  };

  useEffect(() => {
    // Fallback safety timeout in case loader is interrupted
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setIsLoaded(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-slate font-sans selection:bg-[#233554] selection:text-[#ccd6f6]">
      {isLoading && <Loader onFinish={handleFinishLoading} />}

      <Navbar isLoaded={isLoaded} />
      <SocialSidebar isLoaded={isLoaded} />
      <EmailSidebar isLoaded={isLoaded} />

      <main className="mx-auto w-full max-w-[1600px] min-h-screen px-6 sm:px-12 md:px-24 lg:px-[150px]">
        <Hero isLoaded={isLoaded} />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
