# Project Context — autocheck-landing

## Purpose
Multi-page marketing / lead-generation site for **Autocheck**, an auto-parts retail and service
provider based in Colima, Mexico.  
Core offerings: oil changes, air filters, spark plugs, and related automotive consumables.  
Business goals: brand trust, product visibility, multi-location discovery, and lead capture via
a contact form.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) — `next dev --turbopack` |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Carousel / Slider | Swiper 12 |
| Font | Montserrat (Google Fonts) via `next/font/google`, CSS var `--font-montserrat` |

---

## Routes

### `/` — Home (main landing page)
Entry: `src/app/page.tsx` (marked `"use client"`)  
Section render order:

| # | Component | Section `id` |
|---|---|---|
| 1 | `HeroSection` | _(no id)_ |
| 2 | `ServicesSection` | _(no id)_ |
| 3 | `ProductsSection` | _(no id)_ |
| 4 | `HowItWorksSection` | _(no id)_ |
| 5 | `TestimonialsSection` | _(no id)_ |
| 6 | `LocationsSection` | `locations` |
| 7 | `CTASection` | `cta` |
| 8 | `FormSection` | `contact-form` |
| 9 | `Footer` | _(no id)_ |

### `/nosotros` — About page
Entry: `src/app/nosotros/page.tsx` (marked `"use client"`)  
Section render order:

| # | Component | Notes |
|---|---|---|
| 1 | `AboutStorySection` | Brand history + mission paragraphs |
| 2 | Inline `<section>` | Wraps `LocationsSection` with a map intro heading |
| 3 | `AboutCTASection` | CTA pointing user to the contact form |
| 4 | `FormSection` | Reused contact form |
| 5 | `Footer` | Reused footer |

> **Note:** The `nosotros` page adds `pt-16` on its `<main>` to compensate for the fixed Navbar.

### `src/app/default/`
Empty directory — reserved, purpose unknown. Do not delete without checking with the team.

---

## Global Layout — `src/app/layout.tsx`

- Mounts `<Navbar />` globally (above `{children}`) so it appears on every route.
- Sets `<html lang="en">` — **⚠️ bug**: all content is Spanish; should be `lang="es"`.
- Applies the `--font-montserrat` variable to `<body>` via the `antialiased` class.
- Exports `Metadata`: `title: "Autocheck"`, `description: "Lo mejor para tu auto en lubricantes y filtros"`.

---

## Navbar — `src/components/shared/Navbar.tsx`

- Fixed, full-width, `z-50`.
- **Transparent** when on `/` and user has not scrolled past the hero viewport height.
- **Solid white** (`bg-white/95 backdrop-blur-md shadow-md`) on all other routes or after scroll.
- Desktop links: "Nosotros" → `/nosotros` | "Ubicaciones" → smooth-scroll `#locations` |
  "Contáctanos" → smooth-scroll `#cta`.
- Mobile: renders a hamburger icon button — **⚠️ gap**: no open/close state implemented; the mobile menu panel does not exist yet.

---

## Content and Data Sources

### Primary copy — `src/content/strings.ts`
Single exported `strings` object with keys:
`navbar` · `about` · `hero` · `services` · `products` · `locations` · `howItWorks` · `testimonials` · `cta` · `form` · `footer` · `common`

All copy is in **Spanish**. This is the source of truth for UI text and `aria-label` values.

> **⚠️ Bug:** `strings.footer.copyright` reads `"AutoCare Pro — Todos los derechos reservados."`  
> The brand name is **Autocheck** — needs correction.

### Structured data — `src/data/`

| File | Type | Used by UI? |
|---|---|---|
| `hero.ts` | `HeroSlide[]` | ✅ `HeroSection` |
| `locations.ts` | `Location[]` | ✅ `LocationsSection` |
| `products.ts` | `Product[]` | ❌ Not imported by any section |
| `services.ts` | `Service[]` | ❌ Not imported by any section |
| `testimonials.ts` | `Testimonial[]` | ❌ Not imported by any section |

> `products.ts`, `services.ts`, and `testimonials.ts` exist but are **not consumed**.  
> `ProductsSection`, `ServicesSection`, and `TestimonialsSection` all read directly from `strings.ts`.  
> This dual-source inconsistency should be resolved — see Improvement ideas below.

### Hero slide images — `public/images/`
`hero-image-md-res.jpg` · `total-energies-hero.png` · `rack-with-filters.png`  
Other product images: `aceite-mobil-5-30-sintetico.jpg` · `mann-air-filter.jpg` · `bujia-iridium-ngk.jpg`  
CTA/form image: `car-cta-md-res.jpg`  
Brand assets: `autocheck-logo.png`

---

## Shared Building Blocks

### UI Primitives — `src/components/ui/`
- **`Button`** — `motion.button` wrapper; props: `variant` (`primary`|`secondary`), `size` (`sm`|`md`|`lg`), all Framer Motion props pass-through. Default hover/tap scale effects built-in.
- **`Accordion`** — generic accordion (currently not used by any section).

### Animation Presets — `src/components/shared/animations/variants.ts`
| Export | Description |
|---|---|
| `fadeInUp` | `y: 60→0`, opacity fade, 0.6 s |
| `staggerContainer` | Container for staggered children (0.1 s stagger) |
| `slideInLeft` | `x: -60→0`, opacity fade, 0.8 s |
| `scaleIn` | `scale: 0.8→1`, opacity fade, 0.6 s |
| `slideFromSides(isEven)` | Alternates left/right entry based on index parity |

### Shared Types — `src/components/shared/types/index.ts`
`HeroSlide` · `Service` · `Product` · `Testimonial` · `Location`

---

## UX and Accessibility Patterns

- All interactive sections carry `aria-label` values sourced from `strings`.
- Sections use `whileInView` + `viewport={{ once: true }}` so animations fire once on scroll-into-view.
- `HeroSection` and `TestimonialsSection` import Swiper CSS directly inside the component file.
- `HeroSection` autoplay: 20 000 ms delay, `pauseOnMouseEnter: true`.

---

## Known Gaps and Bugs

| # | Issue | Location |
|---|---|---|
| 1 | CTA `onClick` handlers only `console.log` | `HeroSection`, `CTASection` |
| 2 | Form `onSubmit` calls `e.preventDefault()` — no backend integration | `FormSection` |
| 3 | Mobile hamburger menu renders but has no open/close panel | `Navbar` |
| 4 | `html lang="en"` should be `lang="es"` | `layout.tsx` |
| 5 | `strings.footer.copyright` says "AutoCare Pro" — wrong brand name | `strings.ts` |
| 6 | `products.ts`, `services.ts`, `testimonials.ts` unused by any section | `src/data/` |
| 7 | `ProductsSection` imports `Button` but does not render one | `ProductsSection.tsx` |
| 8 | `Accordion` component exists but is not used anywhere | `src/components/ui/` |
| 9 | `app/default/` directory is empty | `src/app/default/` |

---

## Practical Editing Guidance

- **Copy-only changes** → update `src/content/strings.ts`; no need to touch components.
- **New section** → create in `src/components/sections/`, export from `sections/index.ts`, add to the relevant route page.
- **New data entity** → add type to `src/components/shared/types/index.ts`, add data file in `src/data/`, update all consumers.
- **Animations** → prefer existing variants in `variants.ts` before creating new ones.
- **Buttons** → always reuse `<Button>` from `src/components/ui/`.
- **Responsive breakpoints** → follow existing `sm:` / `md:` / `lg:` / `xl:` patterns already in sections.
- **Section anchor IDs** → when adding a new section that the Navbar should link to, add `id="..."` to the outermost element and update `Navbar.tsx`.
