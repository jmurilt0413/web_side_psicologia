# Monica Toro — Website Project

## Quick Context

Professional single-page website for a clinical psychologist. Vite + React + Tailwind CSS v4. No routing, no backend, no external component libraries.

## Documentation

Read these before making changes:

- **Architecture & decisions**: `docs/architecture.md`
- **Design tokens (colors, fonts, spacing)**: `docs/design-system.md`
- **SEO & accessibility**: `docs/seo.md`
- **Content editing guide**: `docs/content-guide.md`
- **Original requirements prompt**: `~/Downloads/PROMPT_WEB_PSICOLOGA_MONICA_TORO.md`

## Key Conventions

- All website copy lives in `src/data/content.ts` — never hardcode text in components
- Design tokens are defined in `src/index.css` under `@theme` (Tailwind v4 CSS-first config)
- Components use `useInView()` hook for fade-in animations (Intersection Observer)
- Only 2 font families: Playfair Display (headings) + Nunito (body)
- WhatsApp is the sole contact channel — no forms, no Calendly
- Mobile-first responsive design (breakpoints: 375, 768, 1024, 1440)

## Commands

```bash
npm run dev     # Dev server at localhost:5173
npm run build   # Production build (tsc + vite build)
npm run preview # Preview production build
```

## Content Structure

| Section | Component | Content Key |
|---------|-----------|-------------|
| Hero | `Hero.tsx` | `HERO` |
| About | `AboutMe.tsx` | `ABOUT` |
| Services | `Services.tsx` | `SERVICES` |
| Process | `HowItWorks.tsx` | `HOW_IT_WORKS` |
| FAQ | `FAQ.tsx` | `FAQ` |
| Testimonials | `Testimonials.tsx` | `TESTIMONIALS` |
| Footer | `Footer.tsx` | `CONTACT`, `LEGAL`, `NAV_LINKS` |
