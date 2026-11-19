import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const CARDS = [
  {
    icon: "explore",
    iconClass: "text-navy",
    title: "Accessible & Engaging",
    body: "Carefully formatted for learners of all backgrounds. Interactive methods remove the fear of making mistakes, encouraging live dialogue from day one.",
    tag: "Interactive virtual salons",
  },
  {
    icon: "format_list_numbered",
    iconClass: "text-rust",
    title: "Structured Step-by-Step",
    body: "Curriculum aligned with the Common European Framework (CEFR). Clear milestones track grammar, syntax, auditory comprehension, and accent acquisition.",
    tag: "CEFR-calibrated progress",
  },
  {
    icon: "auto_stories",
    iconClass: "text-navy",
    title: "All Materials Included",
    body: "No hidden textbook charges. Every enrolled student receives dedicated digital workbooks, practice audios, grammar decks, and examination mock sheets.",
    tag: "Comprehensive student portal",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-mist py-20 sm:py-28">
      <div className="container-site">
        <Reveal>
          <h2 className="section-title">About EspaFrane Academy</h2>
          <p className="mt-6 max-w-[920px] text-lg leading-relaxed text-ink sm:text-xl">
            At EspaFrane Academy, we believe that learning a new language opens doors to new
            opportunities, cultures, and connections. Our mission is to make French and Spanish
            learning accessible, engaging, and structured for learners at different stages of their
            journey. Through online lessons, guided practice, and learning materials included in our
            programmes, we help learners build their skills step by step.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <StaggerItem
              key={c.title}
              className="flex flex-col rounded-[22px] bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FD]">
                <Icon name={c.icon} size={30} className={c.iconClass} />
              </span>
              <h3 className="mt-6 text-[1.4rem] font-medium tracking-[-0.02em]">{c.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink">{c.body}</p>
              <p className="mt-auto flex items-center gap-2.5 pt-8 font-display text-sm font-semibold">
                <Icon name="check_circle" size={22} className="text-rust" />
                {c.tag}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
