import Icon from "./Icon";
import Logo from "./Logo";
import { EMAIL, MAILTO, PHONE_E164, PHONE_PRETTY } from "@/lib/site";

const PROGRAMMES = [
  "DELF Certification Prep",
  "DELE & SIELE Spanish Mastery",
  "Corporate European Business Tracks",
  "Bilingual Young Explorers (Ages 6-16)",
  "1-on-1 Executive Fluency Coaching",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.1fr_1fr] lg:gap-10">
        <div>
          <Logo size="lg" showAcademy={false} />
          <p className="mt-6 text-lg leading-relaxed text-ink">
            Premier European bilingual sanctuary offering immersive French and Spanish mastery for
            forward-thinking professionals, children, and lifelong learners.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#programmes" className="chip bg-chipblue text-navy">French Track</a>
            <a href="#programmes" className="chip bg-chippink text-navy">Spanish Track</a>
          </div>
        </div>

        <div>
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em]">Language Programmes</h2>
          <ul className="mt-5 space-y-3">
            {PROGRAMMES.map((p) => (
              <li key={p}>
                <a href="#programmes" className="text-[17px] text-ink transition-colors hover:text-rust">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em]">Admissions &amp; Support</h2>
          <ul className="mt-5 space-y-3 text-[17px] text-ink">
            <li>
              <a href={`tel:+${PHONE_E164}`} className="flex items-center gap-2.5 transition-colors hover:text-rust">
                <Icon name="call" size={22} className="text-rust" />{PHONE_PRETTY}
              </a>
            </li>
            <li>
              <a href={MAILTO} className="flex items-center gap-2.5 transition-colors hover:text-rust">
                <Icon name="mail" size={22} className="shrink-0 text-rust" /><span className="min-w-0 [overflow-wrap:anywhere]">{EMAIL}</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="location_on" size={22} className="text-rust" />Nigeria
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[1.35rem] font-medium tracking-[-0.02em]">Connect &amp; Discover</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            Join cultural masterclasses, conversational salon nights, and international CEFR updates.
          </p>
        </div>
      </div>

      <div className="container-site flex flex-col gap-4 border-t border-slate-100 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base text-ink sm:text-lg">
          &copy; {year} EspaFrane Academy. All rights reserved. French &amp; Spanish Excellence.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display text-[15px] font-semibold text-ink">
          <li><a href="#" className="hover:text-rust">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-rust">Terms of Admission</a></li>
          <li><a href="#" className="hover:text-rust">Academic Standards</a></li>
        </ul>
      </div>
    </footer>
  );
}
