"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Icon from "./Icon";
import { GrowBar } from "./Motion";
import { PHONE_DISPLAY, WA } from "@/lib/site";

const ease = [0.22, 0.7, 0.2, 1];
const up = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

const FEATURES = [
  { icon: "menu_book", title: "Materials Included", sub: "All packages" },
  { icon: "groups", title: "Kids & Adults", sub: "All age tiers" },
  { icon: "devices", title: "100% Online", sub: "Flexible hours" },
  { icon: "verified", title: "DELF", sub: "Certified Prep" },
];

function LetterBox({ children }) {
  return (
    <span className="inline-flex h-[18px] w-[14px] items-center justify-center border border-dashed border-navy/60 font-display text-[11px] font-semibold leading-none">
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="container-site grid items-start gap-12 pb-16 pt-8 sm:pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:pb-24 xl:gap-20">
        {/* Copy */}
        <div>
          <motion.p
            {...up(0)}
            className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.04em] text-navy shadow-card sm:text-[13px]"
          >
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span className="flex gap-px"><LetterBox>F</LetterBox><LetterBox>R</LetterBox></span>
              <span className="flex gap-px"><LetterBox>E</LetterBox><LetterBox>S</LetterBox></span>
            </span>
            Online French &amp; Spanish Language Academy
          </motion.p>

          <h1 className="mt-7 font-display text-[2.9rem] font-extrabold leading-[1.04] tracking-[-0.05em] sm:text-[4.25rem] lg:text-[3.6rem] xl:text-[4.3rem]">
            <motion.span {...up(0.1)} className="block">Learn French.</motion.span>
            <motion.span {...up(0.2)} className="block">Learn Spanish.</motion.span>
            <motion.span {...up(0.3)} className="block text-rust">Expand your world.</motion.span>
          </h1>

          <motion.p
            {...up(0.4)}
            className="mt-5 font-display text-xl font-medium tracking-[-0.03em] text-ink sm:text-[1.6rem]"
          >
            Your journey to a new language starts here.
          </motion.p>

          <motion.p {...up(0.48)} className="mt-6 max-w-[600px] text-lg leading-relaxed text-ink">
            EspaFrane Academy offers online French and Spanish lessons designed to help children and
            adults develop language skills, build confidence, and communicate across cultures.
            Whether you&rsquo;re starting from scratch, improving your speaking skills, or preparing
            for a French proficiency examination, we&rsquo;re here to guide your learning journey.
          </motion.p>

          <motion.div {...up(0.56)} className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={WA.enrol} target="_blank" rel="noopener noreferrer" className="btn-wa min-h-[56px] px-5 text-base sm:text-[17px]">
              <Icon name="chat" size={24} />
              <span className="sm:hidden">Enrol Now on WhatsApp</span>
              <span className="hidden sm:inline">Enrol Now &mdash; WhatsApp {PHONE_DISPLAY}</span>
            </a>
            <a
              href="#programmes"
              className="btn min-h-[56px] border-[1.5px] border-navy/25 bg-white px-5 text-base text-navy hover:border-navy sm:text-[17px]"
            >
              Explore Programmes
              <Icon name="arrow_downward" size={22} />
            </a>
          </motion.div>

          <motion.ul {...up(0.64)} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex items-center gap-2.5 rounded-xl bg-white p-3 shadow-card">
                <Icon name={f.icon} size={26} className="shrink-0 text-rust" />
                <span className="min-w-0 leading-tight">
                  <span className="block font-display text-[13px] font-semibold text-navy">{f.title}</span>
                  <span className="block text-[15px] text-ink">{f.sub}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="relative rounded-[28px] bg-white p-5 shadow-lift sm:p-7 lg:mt-12"
        >
          <span className="block h-1.5 w-24 rounded-full bg-gradient-to-r from-navy to-rust" aria-hidden="true" />

          <div className="mt-6 flex flex-col-reverse items-start justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src="/logo.png" alt="" width="107" height="37" className="h-7 w-auto sm:h-8" />
              <div className="leading-tight">
                <p className="font-display text-lg font-medium tracking-[-0.02em] sm:text-[1.3rem]">EspaFrane Interactive</p>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.06em] text-rust sm:text-[13px]">Live Virtual Salon</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 font-display text-xs font-semibold text-emerald-700 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Active Cohort
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <img
              src="/hero-salon.webp"
              width="956"
              height="436"
              alt="A tutor teaching a live online French and Spanish vocabulary lesson to students on video call. CEFR Guided Fluency Path: Parisian clarity meets Madrid conversational mastery."
              className="h-auto w-full transition-transform duration-700 hover:scale-[1.03]"
              fetchPriority="high"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#EEF4FD] p-4">
              <div className="flex justify-between font-display text-sm font-semibold"><span>French Tracks</span><span>A1 &mdash; B2</span></div>
              <div className="mt-2.5 h-2 rounded-full bg-[#DDE6F3]"><GrowBar value={80} className="h-2 rounded-full bg-navy" /></div>
              <p className="mt-2.5 text-[15px] text-ink">DELF prep modules ready</p>
            </div>
            <div className="rounded-2xl bg-[#EEF4FD] p-4">
              <div className="flex justify-between font-display text-sm font-semibold text-rust"><span>Spanish Tracks</span><span>A1 &mdash; B2</span></div>
              <div className="mt-2.5 h-2 rounded-full bg-[#DDE6F3]"><GrowBar value={75} className="h-2 rounded-full bg-rust" /></div>
              <p className="mt-2.5 text-[15px] text-ink">Spoken Spanish immersion</p>
            </div>
          </div>

          <figure className="mt-4 flex items-center gap-4 rounded-2xl bg-[#EEF4FD] p-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white" aria-hidden="true">EF</span>
            <div>
              <blockquote className="font-display text-base font-medium tracking-[-0.01em] sm:text-lg">&ldquo;Speaking with confidence after just 4 weeks.&rdquo;</blockquote>
              <figcaption className="text-[15px] text-ink sm:text-base">Chidinma O. &mdash; Lagos / French A2 Cohort</figcaption>
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
