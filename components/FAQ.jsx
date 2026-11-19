"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { Reveal } from "./Motion";

// Only the first answer came with the design. The others are drafts based on the
// page content. Confirm them with the client before launch.
const FAQS = [
  {
    q: "Can i complete beginners enrollment?",
    a: "Yes. Contact us to identify the programme that best suits your current level and goals.",
  },
  {
    q: "Do you teach children and adults?",
    a: "Yes. We offer French and Spanish programmes for both children and adults, with learning suited to each learner's age, needs and goals.",
  },
  {
    q: "Are the classes online?",
    a: "Yes. All our classes are live and 100% online, so you can learn from wherever you are with a schedule that fits your week.",
  },
  {
    q: "Are learning materials included in the fees?",
    a: "Yes. Learning materials are included in every programme, with no hidden textbook charges.",
  },
  {
    q: "Do you offer DELF and DALF preparation?",
    a: "We offer DELF preparation, including DELF Prim, DELF Junior and DELF Tout Public. Contact us on WhatsApp to discuss your target level and exam date.",
  },
  {
    q: "How do I register?",
    a: "Choose your programme, then message us on WhatsApp. We will discuss your schedule, send your enrolment details and payment instructions, and get you started.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="container-site max-w-[1000px]">
        <Reveal className="text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-lead">Everything you need to know about starting your language journey at EspaFrane Academy.</p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <Reveal key={f.q} delay={i * 0.05} y={20}>
                <div className="rounded-[22px] bg-white shadow-card ring-1 ring-slate-100">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                      id={`${id}-btn`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left font-display text-lg font-medium tracking-[-0.02em] text-navy sm:px-8 sm:py-8 sm:text-[1.4rem]"
                    >
                      {f.q}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-rust">
                        <Icon name="expand_more" size={30} />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${id}-panel`}
                        role="region"
                        aria-labelledby={`${id}-btn`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 0.7, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-7 text-lg leading-relaxed text-ink sm:px-8 sm:pb-8">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
