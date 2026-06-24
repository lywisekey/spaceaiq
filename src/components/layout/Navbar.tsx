"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[14px] border-b border-sq-line transition-colors duration-300 ${
        scrolled ? "bg-sq-void/85" : "bg-sq-void/72"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#top" className="flex items-center" aria-label="SpaceAIQ home">
          <Image
            src="/spacaiq-logo.png"
            alt="SpaceAIQ"
            width={1413}
            height={151}
            priority
            className="h-6.5 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-[34px] text-[.86rem] text-sq-slate">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sq-starlight transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#investors"
            className="hidden sm:inline-block font-mono text-[.72rem] tracking-[.14em] uppercase border border-sq-kapton-bright text-sq-kapton-bright px-[18px] py-[9px] rounded-sm transition-all duration-200 hover:bg-sq-kapton hover:text-sq-starlight"
          >
            Request Briefing
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] w-6 h-6 justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-full bg-sq-starlight transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-sq-starlight transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-sq-starlight transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-sq-line bg-sq-void/95 backdrop-blur-xl"
          >
            <div className="max-w-[1180px] mx-auto px-7 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sq-slate hover:text-sq-starlight transition-colors text-[.95rem]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#investors"
                onClick={() => setMenuOpen(false)}
                className="sm:hidden font-mono text-[.72rem] tracking-[.14em] uppercase border border-sq-kapton-bright text-sq-kapton-bright px-[18px] py-[9px] rounded-sm w-fit transition-all duration-200 hover:bg-sq-kapton hover:text-sq-starlight"
              >
                Request Briefing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
