# Architecture

## Overview

Single-page React application with no routing, no server-side rendering, and no external component libraries. Designed for maximum simplicity and performance.

## Stack Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Vite + React 19 | Fast dev experience, no SSR overhead for a static single-page |
| Styling | Tailwind CSS v4 | CSS-first config via `@theme`, no `tailwind.config.js` needed at runtime |
| Components | Custom only | Only need accordion + mobile nav — no library dependency justified |
| Contact | WhatsApp only | Primary real-world channel, eliminates need for backend/form handling |
| Fonts | 2 families | Playfair Display (headings) + Nunito (body) — reduced from 4 for performance |
| Content | Centralized `content.ts` | Single source of truth, editable without touching components |

## Component Architecture

```
App.tsx
├── Navbar          (sticky, Intersection Observer for active section)
├── main
│   ├── Hero        (static, no hooks)
│   ├── AboutMe     (useInView for fade-in)
│   ├── Services    (useInView for fade-in)
│   ├── HowItWorks  (useInView for fade-in)
│   ├── FAQ         (useState for accordion toggle)
│   └── Testimonials (useInView for fade-in)
├── Footer          (static)
└── WhatsAppButton  (fixed position, always visible)
```

## Data Flow

- All content comes from `src/data/content.ts` (imported as constants)
- No API calls, no state management library, no context providers
- Component state is local only (FAQ open/close, navbar menu toggle, scroll position)

## Hooks

### `useInView(threshold)`
- Returns `{ ref, isVisible }`
- Uses `IntersectionObserver` to detect when element enters viewport
- Triggers once (unobserves after first intersection)
- Used for fade-in animations on section entry

### `useActiveSection(sectionIds)`
- Returns the currently visible section ID
- Uses `IntersectionObserver` with `rootMargin: "-40% 0px -55% 0px"`
- Used by Navbar to highlight the active navigation link

## Performance

- **Font loading**: `font-display: swap` via Google Fonts URL parameter
- **Animations**: CSS transitions triggered by class toggle (no JS animation library)
- **Images**: Placeholder divs (to be replaced with optimized images)
- **Bundle**: ~72KB gzip JS, ~6KB gzip CSS
- **No lazy loading** needed — single page, all components render immediately
