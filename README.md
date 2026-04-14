# Mónica Toro Muñetón — Psicóloga Clínica

Professional website for Mónica Toro Muñetón, a clinical psychologist with a Master's degree and 23+ years of experience based in Caucasia, Antioquia, Colombia. Virtual and in-person therapy for individuals, couples, and families.

## Tech Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first configuration via `@theme`)
- No external component libraries — custom components only

## Getting Started

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # Production build → dist/
npm run preview # Preview production build
```

## Project Structure

```
src/
├── App.tsx                  # Main layout composing all sections
├── main.tsx                 # Entry point
├── index.css                # Tailwind imports + design tokens (@theme)
├── data/
│   └── content.ts           # All copy centralized (hero, bio, services, FAQ, etc.)
├── components/
│   ├── Navbar.tsx            # Sticky navbar with active section highlight
│   ├── Hero.tsx              # Hero section with CTAs and trust badges
│   ├── AboutMe.tsx           # 3-block narrative + credentials
│   ├── Services.tsx          # 6 service cards with responsive grid
│   ├── HowItWorks.tsx        # 4-step timeline + session details
│   ├── FAQ.tsx               # Custom accordion with 12 questions
│   ├── Testimonials.tsx      # Metrics + institutional logos + quotes
│   ├── Footer.tsx            # Contact info, legal, crisis line
│   └── WhatsAppButton.tsx    # Floating WhatsApp button
└── hooks/
    └── useIntersectionObserver.ts  # Fade-in animations + active section tracking
```

## Editing Content

All text content lives in `src/data/content.ts`. Edit this file to update any copy without touching components. See [`docs/content-guide.md`](./docs/content-guide.md) for detailed instructions.

## Deployment

Static site — deploy to any CDN:

```bash
npm run build
# Upload dist/ to Vercel, Netlify, or any static host
```

## Documentation

| Document | Description |
|----------|-------------|
| [`docs/architecture.md`](./docs/architecture.md) | Stack decisions, component tree, data flow, hooks |
| [`docs/design-system.md`](./docs/design-system.md) | Colors, typography, spacing, shadows, animations |
| [`docs/seo.md`](./docs/seo.md) | Meta tags, Schema markup, heading hierarchy, accessibility |
| [`docs/content-guide.md`](./docs/content-guide.md) | How to edit text, add FAQs, replace photos, tone of voice |
