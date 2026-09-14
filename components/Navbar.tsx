"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconHex, IconLogo } from "./Icons";

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Work", url: "#work" },
  { name: "Contact", url: "#contact" },
];

interface NavbarProps {
  isLoaded?: boolean;
}

export default function Navbar({ isLoaded = true }: NavbarProps) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      setScrolledToTop(scrollY < 50);
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine dynamic classes for Brittany Chiang v4 scroll behavior:
  // 1. At top of page: 100px height, no shadow, visible
  // 2. Scrolling down: hides with -translate-y-full (or -70px)
  // 3. Scrolling up: 70px height, deep shadow, visible
  const isHidden = !scrolledToTop && scrollDirection === "down" && !menuOpen;
  const isScrolledNav = !scrolledToTop && scrollDirection === "up";

  return (
    <header
      className={`fixed top-0 z-40 flex w-full items-center justify-between px-6 sm:px-10 lg:px-[50px] transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
        scrolledToTop
          ? "h-[100px] bg-[#0a192f]/85 backdrop-blur-[10px] shadow-none translate-y-0"
          : isScrolledNav
          ? "h-[70px] bg-[#0a192f]/85 backdrop-blur-[10px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] translate-y-0"
          : isHidden
          ? "h-[70px] bg-[#0a192f]/85 backdrop-blur-[10px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] -translate-y-full"
          : "h-[100px] bg-[#0a192f]/85 backdrop-blur-[10px] translate-y-0"
      } ${
        isLoaded
          ? "opacity-100"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      {/* Brittany Chiang v4 Exact 42px Logo with 3D Offset Hover */}
      <Link href="/" aria-label="home" className="logo-btn">
        <div className="hex-container">
          <IconHex />
        </div>
        <div className="logo-container">
          <IconLogo />
        </div>
      </Link>

      {/* Desktop Navigation with Authentic 13px / 12px Typography */}
      <div className="hidden md:flex items-center">
        <ol className="flex items-center list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li
              key={link.name}
              className={`mx-1 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: `${isLoaded ? (i + 1) * 100 : 0}ms`,
              }}
            >
              <Link
                href={link.url}
                className="inline-block p-2.5 font-mono text-[13px] text-slate-lightest hover:text-green transition-colors"
              >
                <span className="text-green text-[12px] mr-1.5 font-normal">
                  0{i + 1}.
                </span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ol>

        <div
          className={`ml-4 transition-all duration-500 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
          style={{
            transitionDelay: `${isLoaded ? (navLinks.length + 1) * 100 : 0}ms`,
          }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="small-btn text-[13px] px-4 py-2.5"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-green"
      >
        <span
          className={`block w-6 h-0.5 bg-green transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-green transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-green transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#112240] transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 font-mono text-base">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.url}
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center gap-1 text-slate-lightest hover:text-green"
            >
              <span className="text-sm text-green">0{i + 1}.</span>
              <span>{link.name}</span>
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="small-btn mt-4 text-[13px]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
