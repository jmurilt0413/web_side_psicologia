import { TESTIMONIALS } from "../data/content";
import { useInView } from "../hooks/useIntersectionObserver";

export default function Testimonials() {
  const { ref, isVisible } = useInView();

  return (
    <section id="respaldo" className="py-16 sm:py-24 bg-bg">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 sm:mb-16 text-text">
          {TESTIMONIALS.sectionTitle}
        </h2>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {TESTIMONIALS.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-primary/5"
            >
              <span className="block text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
                {metric.value}
              </span>
              <span className="text-sm text-text-light">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS.quotes.map((quote, i) => (
            <blockquote
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-primary/5"
            >
              <svg aria-hidden="true" className="w-8 h-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <p className="text-text leading-relaxed italic mb-4">
                "{quote.text}"
              </p>
              <cite className="text-sm text-text-light not-italic font-semibold">
                — {quote.author}
              </cite>
            </blockquote>
          ))}
        </div>

        {/* Institutions */}
        <div className="bg-bg-alt rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold text-center mb-6 text-text">
            Instituciones donde he trabajado
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TESTIMONIALS.institutions.map((inst, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-text-light shadow-sm border border-primary/5"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
