 # Copilot Instructions — autocheck-landing

## Scope
AI-assisted edits for the **Autocheck** landing page — a Spanish-language, multi-page marketing
site for an auto-parts and service business in Colima, Mexico.

Primary goals for every change:
- Keep the site fast, clear, and conversion-focused.
- Preserve the existing visual style and Framer Motion animation language.
- Prioritize content consistency, accessibility, and Spanish-language correctness.

---

## Repository Conventions

### Directory roles
| Path | Purpose |
|---|---|
| `src/app/` | Next.js App Router pages and global layout |
| `src/app/page.tsx` | Home route `/` — assembles the 9-section main landing page |
| `src/app/nosotros/page.tsx` | About route `/nosotros` — assembles the about/locations page |
| `src/app/layout.tsx` | Global layout — Navbar, font, metadata |
| `src/components/sections/` | One file per page section; exported via `sections/index.ts` |
| `src/components/shared/` | Navbar, animation variants, shared TypeScript types |
| `src/components/ui/` | Reusable UI primitives (`Button`, `Accordion`) |
| `src/content/strings.ts` | **Single source of truth** for all UI copy and `aria-label` values |
| `src/data/` | Typed data arrays for hero slides and locations (and unused stubs) |
| `public/images/` | All site images — no CDN, served statically |

### Section anchor IDs already in use
`locations` · `cta` · `contact-form`  
Always check for ID conflicts before adding a new one.

---

## Preferred Change Workflow

1. **Read first** — scan the relevant section component and `strings.ts` before editing.
2. **Copy-only change** → update `strings.ts`; never hardcode text in component files.
3. **New section** → create file in `src/components/sections/`, export from `sections/index.ts`,
   mount in the correct route page.
4. **New data model** → add type to `src/components/shared/types/index.ts`, create file in
   `src/data/`, update all consumers in the same PR/commit.
5. **Reuse first** — use `<Button>`, `<Accordion>`, and animation variants before writing new abstractions.
6. **Clean up** — remove unused imports after edits (ESLint enforces this).

---

## Styling and Motion Rules

- Use Tailwind utility classes exclusively; avoid ad-hoc `style` props except for dynamic values
  already present (e.g., `backgroundImage`, `backgroundPosition`).
- Follow the existing breakpoint ladder: `sm:` → `md:` → `lg:` → `xl:`.
- Keep animations subtle and purposeful; prefer `variants.ts` exports (`fadeInUp`, `staggerContainer`,
  `slideInLeft`, `scaleIn`, `slideFromSides`).
- All scroll-triggered animations must use `whileInView` + `viewport={{ once: true }}`.
- Do not add `autoplay` to any media without pausing on interaction.

---

## Accessibility and UX Rules

- Every `<section>` must have an `aria-label` sourced from `strings`.
- All interactive elements (`<button>`, `<a>`, `<input>`) need an `aria-label` or associated `<label>`.
- Maintain keyboard navigability — never suppress focus outlines without providing a visible alternative.
- Preserve readable contrast over background images (overlay divs using `bg-black/50` or similar).
- The site language is **Spanish** — keep all copy, placeholders, and error messages in Spanish.

---

## Two-Route Awareness

- **`/`** assembles: `HeroSection` → `ServicesSection` → `ProductsSection` → `HowItWorksSection`
  → `TestimonialsSection` → `LocationsSection` → `CTASection` → `FormSection` → `Footer`.
- **`/nosotros`** assembles: `AboutStorySection` → `LocationsSection` (with intro wrapper) →
  `AboutCTASection` → `FormSection` → `Footer`.
- **`LocationsSection` and `FormSection` are shared** across both routes — edits affect both pages.
- The `/nosotros` `<main>` uses `pt-16` to clear the fixed Navbar; apply the same on any new routes.

---

## Data and Content Rules

- Language: all copy in **Spanish**.
- `strings.ts` is the single source of truth — if a section reads from `src/data/*` instead, note
  the inconsistency and prefer consolidating to `strings.ts` (or the `src/data/` file, but not both).
- Currently `products.ts`, `services.ts`, and `testimonials.ts` are **unused** — do not reference
  them without also wiring them to their respective section components.
- When adding locations, update `src/data/locations.ts` (this is the active source for
  `LocationsSection`).
- When adding hero slides, update `src/data/hero.ts` and add the image to `public/images/`.

---

## Definition of Done for AI Changes

- [ ] No TypeScript or ESLint errors introduced.
- [ ] No broken imports / exports.
- [ ] New copy added to `strings.ts`, not hardcoded in components.
- [ ] `aria-label` attributes present on every new interactive or landmark element.
- [ ] Responsive layout verified at `sm` / `md` / `lg` breakpoints.
- [ ] `PROJECT_CONTEXT.md` updated if the change affects app structure, known gaps, or data flow.

---

## High-Value Next Improvements

| Priority | Task | File(s) |
|---|---|---|
| 🔴 High | Implement mobile hamburger menu open/close panel | `Navbar.tsx` |
| 🔴 High | Wire CTA buttons to real actions (scroll to `#contact-form`, WhatsApp, or appointment link) | `HeroSection.tsx`, `CTASection.tsx` |
| 🔴 High | Wire `FormSection` submit to a backend (API route, email service, or WhatsApp redirect) | `FormSection.tsx` |
| 🟡 Medium | Fix `html lang="en"` → `lang="es"` | `layout.tsx` |
| 🟡 Medium | Fix `strings.footer.copyright` — replace "AutoCare Pro" with "Autocheck" | `strings.ts` |
| 🟡 Medium | Consolidate data strategy — have sections use `src/data/*` typed arrays instead of reading raw from `strings.ts` | all section components + `src/data/` |
| 🟢 Low | Remove unused `Button` import from `ProductsSection` | `ProductsSection.tsx` |
| 🟢 Low | Use or remove `Accordion` component | `src/components/ui/Accordion.tsx` |
| 🟢 Low | Clarify intent of `src/app/default/` (implement or delete) | `src/app/default/` |
