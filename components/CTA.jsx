import Icon from "./Icon";
import { Reveal } from "./Motion";
import { PHONE_DISPLAY, WA } from "@/lib/site";

function Bars() {
  return (
    <span className="flex gap-[3px]" aria-hidden="true">
      <span className="h-4 w-[6px] rounded-[1px] bg-[#C9D2EA]" />
      <span className="h-4 w-[6px] rounded-[1px] border border-[#C9D2EA]" />
    </span>
  );
}

export default function CTA() {
  return (
    <section id="contact" className="bg-white pb-20 pt-4 sm:pb-28">
      <div className="container-site">
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#020A22] via-navy-800 to-[#132043] px-6 py-14 shadow-lift sm:px-14 sm:py-20 lg:px-24">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rust/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-[#3B5BDB]/15 blur-3xl" aria-hidden="true" />

            <div className="relative max-w-[1000px]">
              <p className="inline-flex items-center gap-4 rounded-full bg-white/[0.08] px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.03em] text-[#DCE3F5] sm:text-base">
                <Bars />
                EspaFrane Academy
                <Bars />
              </p>
              <h2 className="mt-8 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.6rem]">
                Your Language Journey Starts Here
              </h2>
              <p className="mt-8 max-w-[900px] text-lg leading-relaxed text-[#D4DBEC] sm:text-[1.35rem]">
                A new language can create new opportunities, new friendships, and new ways to experience the world.
                Take the first step with EspaFrane Academy. Choose your language. Start learning. Keep growing.
              </p>
              <a href={WA.contact} target="_blank" rel="noopener noreferrer" className="btn-wa mt-12 min-h-[64px] rounded-2xl px-8 text-lg sm:text-xl">
                <Icon name="chat" size={26} />
                Contact Us on {PHONE_DISPLAY}
              </a>
              <hr className="mt-12 border-white/10" />
              <p className="mt-6 font-display text-[15px] text-[#B9C3DC] sm:text-base">
                EspaFrane Academy &mdash; French and Spanish learning for a world without language barriers.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
