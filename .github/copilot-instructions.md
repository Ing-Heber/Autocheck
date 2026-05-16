# Copilot Instructions — autocheck-landing

> This file is the machine-readable counterpart of `COPILOT_INSTRUCTIONS.md` at the repo root.
> Keep both files in sync when making structural changes.

## Project at a Glance

- **Product:** Autocheck — auto-parts retail and service provider, Colima, Mexico.
- **Stack:** Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion 12 · Swiper 12.
- **Language:** All UI copy and aria labels are in **Spanish**.
- **Routes:** `/` (main landing, 9 sections) and `/nosotros` (about + locations).

## Critical Rules

1. **All copy lives in `src/content/strings.ts`** — never hardcode Spanish text in components.
2. **Reuse `<Button>` and animation variants** from `src/components/ui/` and `src/components/shared/animations/variants.ts` before creating new primitives.
3. **`LocationsSection` and `FormSection` are shared** across both routes — edits impact both pages.
4. **Section anchor IDs in use:** `locations` · `cta` · `contact-form` — check for conflicts.
5. **New routes** must add `pt-16` on `<main>` to clear the fixed Navbar.
6. Every `<section>` needs an `aria-label` from `strings`; every interactive element needs an `aria-label` or `<label>`.

## Known Bugs to Fix

- `html lang="en"` in `layout.tsx` should be `lang="es"`.
- `strings.footer.copyright` reads "AutoCare Pro" — should be "Autocheck".
- CTA `onClick` handlers in `HeroSection` and `CTASection` only `console.log`.
- `FormSection` form is not wired to any backend.
- Mobile hamburger menu in `Navbar` has no open/close panel implemented.

## Data Sources

| File | Active? |
|---|---|
| `src/data/hero.ts` | ✅ Used by `HeroSection` |
| `src/data/locations.ts` | ✅ Used by `LocationsSection` |
| `src/data/products.ts` | ❌ Unused |
| `src/data/services.ts` | ❌ Unused |
| `src/data/testimonials.ts` | ❌ Unused |

See `PROJECT_CONTEXT.md` for full architecture details.

