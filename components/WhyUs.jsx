import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const CARDS = [
  { icon: "show_chart", tile: "bg-chipblue", color: "text-navy", title: "Structured Learning", body: "Follow a learning pathway designed to help you progress gradually." },
  { icon: "laptop_chromebook", tile: "bg-chippink", color: "text-rust", title: "Interactive Online Classes", body: "Learn from wherever you are, with lessons delivered online." },
  { icon: "folder_special", tile: "bg-peach", color: "text-rust", title: "Learning Materials Included", body: "Get access to the learning materials provided for your programme." },
  { icon: "family_restroom", tile: "bg-[#E3E9F2]", color: "text-navy", title: "Programmes for Different Ages", body: "We welcome both children and adults, with learning suited to their needs and goals." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-mist py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="section-title">Why Choose EspaFrane Academy?</h2>
          <p className="section-lead">We merge structured academic integrity with responsive, conversational teaching methods.</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" gap={0.1}>
          {CARDS.map((c) => (
            <StaggerItem
              key={c.title}
              className="rounded-[22px] bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.tile}`}>
                <Icon name={c.icon} size={30} className={c.color} />
              </span>
              <h3 className="mt-6 text-[1.4rem] font-medium tracking-[-0.02em]">{c.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink">{c.body}</p>
            </StaggerItem>
          ))}

          <StaggerItem className="rounded-[22px] bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10 md:col-span-2">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FD]">
              <Icon name="record_voice_over" size={30} className="text-rust" />
            </span>
            <h3 className="mt-6 text-[1.4rem] font-medium tracking-[-0.02em]">A Focus on Communication</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Develop your understanding of the language and practise using it in real-life situations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Live Pronunciation Drills", "Real-Life Dialogues", "Active Listening Audios"].map((t) => (
                <span key={t} className="rounded-lg bg-[#E8EEF6] px-4 py-2 text-[15px] font-semibold text-slate-600">{t}</span>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
