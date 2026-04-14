# Design System

## Color Palette

Based on color psychology for mental health websites. Calm tones that increase session duration by ~27% vs high-energy palettes.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#4A7C7E` | Headings, nav highlights, icon backgrounds, trust elements |
| `primary-light` | `#5E9799` | Hover states, lighter accents |
| `primary-dark` | `#3B6364` | Active states |
| `secondary` | `#E8D5B7` | Decorative gradients, warm accents |
| `secondary-light` | `#F0E2CC` | Lighter warm tones |
| `accent` | `#C4956A` | Service phrases, certificate icons, terracotta warmth |
| `accent-light` | `#D4AA84` | Hover states for accent elements |
| `cta` | `#5B8A6E` | Primary CTA buttons (green = growth, positive action) |
| `cta-hover` | `#4A7359` | CTA hover state |
| `text` | `#2D3436` | Body text, headings |
| `text-light` | `#636E72` | Secondary text, descriptions |
| `bg` | `#FAFAF8` | Main background (warm white) |
| `bg-alt` | `#F0EDE8` | Alternating section backgrounds (cream) |
| `whatsapp` | `#25D366` | WhatsApp button |

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display/Headings | Playfair Display | 700 | Section titles, navbar name, metric values |
| Body/CTA | Nunito | 400, 600, 700 | Paragraphs, buttons, labels, navigation |

## Spacing

4px base scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`

Tailwind tokens: `spacing-1` through `spacing-24`

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Small buttons, badges |
| `radius-md` | 12px | Cards, input fields |
| `radius-lg` | 16px | Large cards, modals |
| `radius-xl` | 24px | Hero image, feature sections |
| `radius-full` | 9999px | Pills, CTA buttons, circular elements |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 3px rgba(45,52,54,0.08)` | Cards, badges |
| `shadow-md` | `0 4px 12px rgba(45,52,54,0.1)` | Elevated cards, navbar on scroll |
| `shadow-lg` | `0 8px 24px rgba(45,52,54,0.12)` | Modals, hero image, WhatsApp button |

## Animations

- **Fade-in-up**: `opacity 0→1, translateY 20px→0` over 600ms ease-out
- **Trigger**: Intersection Observer at 15% threshold
- **Once only**: Elements animate in and stay visible
- **Philosophy**: Subtle and calm — no bouncing, no rapid motion

## Implementation

All tokens are defined in `src/index.css` under the `@theme` directive (Tailwind CSS v4). No separate config file needed. Use tokens as Tailwind classes: `text-primary`, `bg-bg-alt`, `rounded-lg`, `shadow-md`, etc.
