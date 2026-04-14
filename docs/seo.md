# SEO & Structured Data

## Meta Tags

Defined in `index.html`:

- `<title>`: "Mónica Toro Muñetón — Psicóloga Clínica | Terapia Virtual y Presencial"
- `<meta description>`: Includes keywords, location, and services
- `<meta keywords>`: Target search terms
- **Open Graph**: title, description, type, locale (es_CO)

## Target Keywords

| Priority | Keyword |
|----------|---------|
| Primary | psicóloga online Colombia |
| Secondary | psicóloga clínica Caucasia |
| Secondary | terapia virtual Colombia |
| Secondary | psicóloga de pareja online |
| Secondary | terapia familiar virtual Colombia |
| Secondary | coaching PNL Colombia |

## Schema Markup (JSON-LD)

Type: `Physician` with `medicalSpecialty: Psychology`

Includes:
- Name, description, contact info
- Address (Caucasia, Antioquia, CO)
- 6 `availableService` entries (MedicalTherapy type)
- 2 `hasCredential` entries (Master's + Psychology degree)
- Language: Spanish

Located in `index.html` as `<script type="application/ld+json">`.

## Heading Hierarchy

```
h1 — Hero headline (one per page)
  h2 — Section titles (Sobre Mí, Servicios, etc.)
    h3 — Subsection titles (service cards, credential groups)
      h4 — Footer section headers
```

## Accessibility (WCAG AA)

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on WhatsApp button and hamburger menu
- `aria-expanded` on accordion and mobile menu toggles
- Keyboard navigable (all interactive elements are `<a>` or `<button>`)
- Color contrast ratios meet AA standards (dark text on light backgrounds)
- `font-display: swap` prevents invisible text during font load

## Future Improvements

- Add `<link rel="canonical">` once domain is set
- Add `sitemap.xml` and `robots.txt` for crawlers
- Register Google Business Profile for local SEO
- Add `og:image` with a professional photo of Mónica
