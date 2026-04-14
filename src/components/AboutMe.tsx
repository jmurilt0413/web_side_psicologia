import { ABOUT } from "../data/content";
import { useInView } from "../hooks/useIntersectionObserver";

function CredentialIcon({ type }: { type: string }) {
  if (type === "graduation") {
    return (
      <svg aria-hidden="true" className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

export default function AboutMe() {
  const { ref, isVisible } = useInView();

  return (
    <section id="sobre-mi" className="py-16 sm:py-24 bg-bg">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 sm:mb-16 text-text">
          {ABOUT.sectionTitle}
        </h2>

        {/* Narrative Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {ABOUT.blocks.map((block, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-primary/5">
              <h3 className="font-display text-xl font-bold text-primary mb-4">
                {block.title}
              </h3>
              {block.text.split("\n\n").map((paragraph, j) => (
                <p key={j} className="text-text-light leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="bg-bg-alt rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-center mb-6 text-text">
            Formación y Certificaciones
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {ABOUT.credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
              >
                <CredentialIcon type={cred.icon} />
                <span className="text-sm text-text leading-snug">{cred.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
