import { useState, useEffect } from "react";
import { NAV_LINKS, CONTACT } from "../data/content";
import { useActiveSection } from "../hooks/useIntersectionObserver";

const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Name */}
          <a href="#inicio" className="flex flex-col no-underline">
            <span className="font-display text-lg sm:text-xl font-bold text-primary">
              Mónica Toro M.
            </span>
            <span className="text-[10px] sm:text-xs text-text-light tracking-wide">
              Psicóloga Clínica · Magíster
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors no-underline ${
                  activeId === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-text-light hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-cta text-white text-sm font-bold rounded-full hover:bg-cta-hover transition-colors no-underline"
            >
              Escríbeme
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text rounded-lg hover:bg-bg-alt"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="flex flex-col items-center gap-2 pt-8 px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center px-4 py-3 text-lg font-semibold rounded-xl transition-colors no-underline ${
                  activeId === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-text hover:bg-bg-alt"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 px-6 py-4 bg-cta text-white text-lg font-bold rounded-xl text-center hover:bg-cta-hover transition-colors no-underline"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
