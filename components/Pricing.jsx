import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { WA } from "@/lib/site";

function Check({ children }) {
  return (
    <li className="flex items-start gap-3 text-[17px] text-navy">
      <Icon name="check" size={24} className="mt-0.5 shrink-0 text-rust" />
      <span>{children}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="section-title">Our Pricing</h2>
          <p className="section-lead">Simple, predictable monthly pricing with comprehensive study materials included in every tier.</p>
        </Reveal>

        <Stagger className="mt-14 grid items-stretch gap-7 lg:grid-cols-3" gap={0.12}>
          {/* Intensive */}
          <StaggerItem as="article" className="flex flex-col rounded-[26px] border border-slate-200 bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-slate-500">Intensive Track</p>
            <h3 className="mt-4 text-[1.9rem] font-semibold tracking-[-0.035em]">Three Days per Week</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">For learners who prefer a more frequent weekly learning schedule.</p>
            <p className="mt-8 font-display text-base font-semibold text-rust">Accelerated Fluency Cadence</p>
            <ul className="mt-10 space-y-5">
              <Check>3 live interactive sessions per week</Check>
              <Check>All learning materials included</Check>
              <Check>Weekly progress checks &amp; speech drills</Check>
              <Check>French or Spanish tracks</Check>
            </ul>
          </StaggerItem>

          {/* Balanced, most popular */}
          <StaggerItem as="article" className="relative flex flex-col rounded-[26px] border-2 border-[#EBCFC6] bg-white p-8 shadow-lift transition duration-300 hover:-translate-y-1 sm:p-9 lg:-mt-1">
            <span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[24px] bg-rust px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white">
              Most Popular
            </span>
            <p className="mt-10 font-display text-sm font-semibold uppercase tracking-[0.04em] text-rust">Balanced Track</p>
            <h3 className="mt-4 text-[1.9rem] font-semibold tracking-[-0.035em]">Two Days per Week</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              Continue learning with our two-days-per-week package. Learning materials are included in the programme.
            </p>
            <ul className="mt-10 space-y-5">
              <Check>2 live interactive sessions per week</Check>
              <Check>All learning materials included in programme</Check>
              <Check>Ideal pace for busy students &amp; professionals</Check>
              <Check>Continuous tutor feedback &amp; evaluations</Check>
            </ul>
          </StaggerItem>

          {/* Specialised */}
          <StaggerItem as="article" className="flex flex-col rounded-[26px] bg-gradient-to-br from-navy-700 via-navy-800 to-navy p-8 text-white shadow-lift transition duration-300 hover:-translate-y-1 sm:p-9">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-[#B9C7FF]">Bespoke &amp; Examination</p>
            <h3 className="mt-4 text-[1.9rem] font-semibold leading-tight tracking-[-0.035em] text-white">Specialised French Programmes</h3>
            <p className="mt-4 text-lg leading-[1.75] text-[#A9B3CC]">
              We also offer French programmes for children and adults, including preparation for DELF, and
              A1-level learning. Specialised programme fees are quoted separately. Contact us for details about
              the programme that suits your goals.
            </p>
            <div className="mt-8 rounded-2xl bg-white/[0.07] p-6 ring-1 ring-white/10">
              <p className="font-display text-base font-medium uppercase tracking-[0.05em] text-[#D9E0F2]">Certifications Covered</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <span className="rounded-md bg-white/15 px-3 py-1.5 font-display text-sm font-semibold">DELF Prim / Junior</span>
                <span className="rounded-md bg-white/15 px-3 py-1.5 font-display text-sm font-semibold">DELF Tout Public</span>
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="mt-14 flex justify-center">
          <a href={WA.fees} target="_blank" rel="noopener noreferrer" className="btn-wa min-h-[68px] w-full max-w-[720px] rounded-2xl text-lg sm:text-xl">
            <Icon name="chat" size={26} />
            Ask About Our Fees &mdash; WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
