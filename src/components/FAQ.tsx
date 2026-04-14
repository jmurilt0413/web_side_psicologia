import { useState } from "react";
import { FAQ as FAQ_DATA } from "../data/content";
import { useInView } from "../hooks/useIntersectionObserver";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const btnId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-primary/10 last:border-b-0">
      <button
        id={btnId}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-semibold text-text group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <svg
          aria-hidden="true"
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-text-light leading-relaxed px-1">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useInView();

  return (
    <section id="faq" className="py-16 sm:py-24 bg-bg-alt">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 text-text">
          {FAQ_DATA.sectionTitle}
        </h2>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          {FAQ_DATA.items.map((item, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
