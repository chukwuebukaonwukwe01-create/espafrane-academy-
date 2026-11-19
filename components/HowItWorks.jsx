import { Reveal, Stagger, StaggerItem } from "./Motion";

const STEPS = [
  { title: "Choose your Programme", body: "Select French or Spanish and the package that suits your needs." },
  { title: "Contact Us", body: "Reach out through WhatsApp to discuss your preferred programmes, class schedule." },
  { title: "Complete Registration", body: "Receive your enrolment details and payment instructions" },
  { title: "Begin Learning", body: "Get your learning materials, confirm your timetable, and start your language journey." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="section-title">How It Works</h2>
          <p className="section-lead">Follow four effortless steps to commence your European language fluency.</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
          {STEPS.map((s, i) => (
            <StaggerItem
              key={s.title}
              className="group relative rounded-[22px] bg-white p-7 shadow-card ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className="absolute left-7 right-7 top-0 h-[3px] origin-left scale-x-0 rounded-b-full bg-rust transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <h3 className="pt-6 text-[1.35rem] font-medium tracking-[-0.02em]">
                <span className="mr-2">{i + 1}.</span>
                {s.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink">{s.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
