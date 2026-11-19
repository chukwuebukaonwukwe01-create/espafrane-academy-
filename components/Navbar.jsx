"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Icon from "./Icon";
import { NAV_LINKS, PHONE_DISPLAY, WA } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(3,13,41,0.06),0_8px_24px_-16px_rgba(3,13,41,0.25)]" : ""
      }`}
    >
      <nav className="container-site flex h-[76px] items-center justify-between gap-6" aria-label="Main">
        <a href="#top" aria-label="EspaFrane Academy home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="whitespace-nowrap font-display text-[15px] font-medium text-ink transition-colors hover:text-rust"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA.enrol}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa hidden shrink-0 whitespace-nowrap !rounded-[14px] px-5 text-[15px] lg:inline-flex"
        >
          <Icon name="chat" size={22} />
          <span>
            Enrol Now<span className="hidden xl:inline"> ({PHONE_DISPLAY})</span>
          </span>
        </a>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <ul className="container-site flex flex-col py-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center font-display text-base font-medium text-navy"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pb-3 pt-2">
                <a
                  href={WA.enrol}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa w-full"
                >
                  <Icon name="chat" size={22} />
                  Enrol Now ({PHONE_DISPLAY})
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
