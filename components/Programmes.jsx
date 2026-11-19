import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { WA } from "@/lib/site";

const PROGRAMMES = [
  {
    key: "french",
    chip: "French Programme",
    chipClass: "bg-chipblue text-navy",
    bar: "bg-navy",
    levels: "CEFR Levels: A1 — DELF B2",
    title: "French Classes",
    body: "Discover the French language through structured lessons tailored to your learning needs.",
    items: [
      "French for children",
      "French for adults",
      "Beginner French",
      "Spoken French and communication practice",
      { text: "DELF examination preparation", strong: true },
    ],
    quote:
      "Whether you're learning French for personal development, education, travel, or professional opportunities, we have programmes to help you get started.",
    cta: "Enquire French Programme",
    ctaClass: "bg-navy hover:bg-navy-700",
    href: WA.french,
  },
  {
    key: "spanish",
    chip: "Spanish Programme",
    chipClass: "bg-chippink text-navy",
    bar: "bg-rust",
    levels: "CEFR Levels: A1 — B2",
    title: "Spanish Classes",
    body: "Start your Spanish-learning journey with guided online lessons designed to develop your understanding and communication skills.",
    items: [
      "Spanish for beginners",
      "Vocabulary and grammar",
      "Listening and speaking practice",
      "Everyday Spanish communication",
    ],
    quote: "Build your Spanish skills progressively, one lesson at a time.",
    cta: "Enquire Spanish Programme",
    ctaClass: "bg-rust hover:bg-rust-600",
    href: WA.spanish,
  },
];

function FlagMark({ dark }) {
  return (
    <span className="flex gap-[2px]" aria-hidden="true">
      <span className={`h-3.5 w-[5px] rounded-[1px] ${dark ? "bg-navy" : "bg-rust"}`} />
      <span className={`h-3.5 w-[5px] rounded-[1px] border ${dark ? "border-navy" : "border-rust"}`} />
    </span>
  );
}

export default function Programmes() {
  return (
    <section id="programmes" className="bg-mist py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="section-title">Explore Our Programmes</h2>
          <p className="section-lead">Immersive language pathways designed to unlock European fluency with structured guidance.</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 lg:grid-cols-2" gap={0.15}>
          {PROGRAMMES.map((p) => (
            <StaggerItem
              key={p.key}
              as="article"
              className="relative flex flex-col overflow-hidden rounded-[24px] bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-12"
            >
              <span className={`absolute inset-x-0 top-0 h-2 ${p.bar}`} aria-hidden="true" />
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className={`chip gap-2.5 px-4 py-2 ${p.chipClass}`}>
                  <FlagMark dark={p.key === "french"} />
                  {p.chip}
                </span>
                <span className="font-display text-sm font-semibold text-slate-500">{p.levels}</span>
              </div>

              <h3 className="mt-6 text-[2rem] font-bold tracking-[-0.035em] sm:text-[2.4rem]">{p.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink">{p.body}</p>

              <ul className="mt-7 space-y-3.5">
                {p.items.map((it) => {
                  const text = typeof it === "string" ? it : it.text;
                  const strong = typeof it !== "string" && it.strong;
                  return (
                    <li key={text} className="flex items-center gap-3 text-lg">
                      <Icon name="check_circle_fill" size={24} className="shrink-0 text-rust" />
                      <span className={strong ? "font-semibold text-navy" : "text-navy"}>{text}</span>
                    </li>
                  );
                })}
              </ul>

              <blockquote className="mt-8 rounded-2xl bg-[#EEF4FD] px-6 py-5 text-base italic leading-relaxed text-ink">
                &ldquo;{p.quote}&rdquo;
              </blockquote>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-auto min-h-[60px] w-full text-base text-white sm:text-lg ${p.ctaClass} translate-y-0 hover:-translate-y-0.5`}
                style={{ marginTop: "2.5rem" }}
              >
                {p.cta}
                <Icon name="chat" size={22} />
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
