# Content Editing Guide

## Where to Edit

All website text lives in one file: `src/data/content.ts`

After editing, the dev server (`npm run dev`) hot-reloads changes automatically.

## File Structure

```typescript
CONTACT     // Phone, WhatsApp link, email, address, social URLs
HERO        // Headlines, CTAs, trust badges
ABOUT       // 3 narrative blocks + credentials list
SERVICES    // 6 service cards with title, phrase, description
HOW_IT_WORKS // 4 steps + session details (duration, payment, etc.)
FAQ         // 12 questions with answers
TESTIMONIALS // Metrics, quotes, institution names
LEGAL       // Crisis disclaimer, privacy note, crisis line number
NAV_LINKS   // Navigation labels and anchor links
```

## Common Edits

### Update WhatsApp number
```typescript
// In CONTACT object:
phone: "3148750448",
whatsappLink: "https://wa.me/573148750448?text=...",
```

### Add a new FAQ question
```typescript
// Add to FAQ.items array:
{
  question: "Your new question?",
  answer: "The answer text here.",
},
```

### Add a new service
```typescript
// Add to SERVICES.items array:
{
  title: "Service Name",
  phrase: "Empathetic phrase for the visitor.",
  description: "What this service involves.",
  forWhom: "Who this service is for.",
  modality: "Virtual y presencial",
  icon: "user", // Options: user, heart, family, star, compass, shield
},
```

### Update social media links
```typescript
// In CONTACT object:
instagram: "https://www.instagram.com/your_handle/",
facebook: "https://www.facebook.com/your_page/",
```

## Adding a Real Photo

1. Place the image in `public/images/` (e.g., `monica-profile.jpg`)
2. Edit `src/components/Hero.tsx`
3. Replace the placeholder `<div>` with an `<img>` tag:
```tsx
<img
  src="/images/monica-profile.jpg"
  alt="Mónica Toro Muñetón, Psicóloga Clínica"
  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2rem] object-cover shadow-lg"
/>
```

## Tone of Voice

- Warm, empathetic, approachable
- Professional without being cold
- Use "tú" (informal you) to address visitors
- Validate pain before offering solutions
- No clinical jargon without explanation
- No absolute promises ("I'll cure you")
- 80% about the visitor's needs, 20% about credentials
