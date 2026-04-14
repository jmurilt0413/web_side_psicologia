import { HERO, CONTACT } from "../data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[90vh] flex items-center pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-bg-alt/60 to-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-primary tracking-wide mb-4">
              {HERO.preHeadline}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text leading-tight mb-6">
              {HERO.headline}
            </h1>
            <p className="text-xs sm:text-sm text-text-light mb-2 flex items-center justify-center lg:justify-start gap-1">
              <svg aria-hidden="true" className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Consultorio: {CONTACT.address}
            </p>
            <p className="text-base sm:text-lg text-text-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {HERO.subHeadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-cta text-white font-bold rounded-full hover:bg-cta-hover transition-all hover:shadow-lg no-underline text-base"
              >
                <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {HERO.ctaPrimary}
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-7 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all no-underline text-base"
              >
                {HERO.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center shadow-lg">
              <div className="text-center text-text-light">
                <svg aria-hidden="true" className="w-16 h-16 mx-auto mb-3 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className="text-sm font-semibold">Foto de Mónica</p>
                <p className="text-xs">(Placeholder)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-primary/10">
          <p className="text-xs text-text-light text-center mb-4 tracking-wide uppercase">
            Formación en las mejores universidades de Colombia
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {HERO.trustBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-primary/80 shadow-sm border border-primary/10"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
