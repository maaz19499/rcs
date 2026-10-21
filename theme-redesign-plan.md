# RCS Arabia – Theme Redesign Plan

## Top-Level Overview

**Goal:** Apply the new blue-based design system in [`src/app/globals.css`](src/app/globals.css) across the whole site. This covers shared chrome, home, Who we are, What we offer, Services and Contact, in light and dark themes.

**Subject / audience:** RCS Arabia is an ICT, data center, system integration and AI digital twin provider in Saudi Arabia and the GCC. The site is bilingual (English and Arabic/RTL). The primary audience is enterprise and government procurement and technical decision-makers (CIOs, IT directors).

**Confirmed decisions**

| Area | Decision |
|---|---|
| Scope | Everything: shared chrome, then Home, Who we are, What we offer, Services, Contact. One sub-task per area. |
| Typography | Manrope for headings, Inter for body, Noto Sans Arabic for RTL. Update `globals.css` to match (it currently aliases Manrope to Inter). |
| Theme | Light and dark. A theme toggle goes in the Navbar. Every component works in both themes. Default is **dark** on first visit. The choice is saved in `localStorage` and applied before first paint (no flash). |
| Spectrum gradient | Used as section markers: a spectrum rule on the top edge of key cards and on section dividers. Blue is the main accent. Not used for text, buttons or backgrounds. |
| Hero | Rethought: full-width headline over a large photo, with the stats in a quiet band underneath. Uses `public/hero_1.avif` for now (to be swapped later). |
| Visual language | Keep the soft look: floating Navbar and rounded cards stay, recolored to the blue tokens. `AmbientOrbs` recolored to blue and cyan. |
| Headline / label treatment | Remove the single highlighted word in headlines (`headline_gradient`, `headlineGradient`). Plain single-color headlines. Replace the uppercase mono `SectionBadge` labels with sentence-case Inter labels, and only where they add information. Edit `messages/*.json` as needed. |
| Motion | Keep the existing GSAP scroll reveals and card hover-lift. Keep all floating and pulsing decorations. |

## Design Tokens (from `globals.css`)

- **Color:** Brand blue `#0350A3`, deep blue `#00366F`, bright blue `#2A7BC4`, soft blue `#E8F2FC`. Light background `#F6F8FB`. Dark background `#071426`, dark surface `#0D1D33`. Spectrum (red, orange, yellow, green, cyan, blue) is reserved for rules. Status colors are separate from the spectrum.
- **Type:** Manrope (headings), Inter (body), Noto Sans Arabic (RTL). Scale from the `--heading-*` and `--text-*` tokens.
- **Shape / elevation:** `--radius-*` and `--shadow-card*` tokens. Cards are rounded and soft.
- **Principles:** Blue carries the brand. The spectrum rule is the single memorable signature. Everything else stays quiet and disciplined. Components use semantic tokens, so no hard-coded `slate-*`, `emerald-*`, `amber-*` or `bg-white`, and both themes work.

## Layout Concept (Hero)

```
+--------------------------------------------------+
| (floating Navbar)                                |
+--------------------------------------------------+
|  Headline, plain single color, left aligned      |
|  (RTL: right aligned)                            |
|  Subheadline + primary/secondary CTA             |
|  [        large full-width photo               ] |
|  [        hero_1.avif, spectrum rule on top    ] |
+--------------------------------------------------+
|  quiet stats band:  stat 1 | stat 2 | stat 3     |
+--------------------------------------------------+
```

## Sub-Tasks

### 1. Foundations: `globals.css`, fonts, theme infrastructure
- **Intent:** Make the token file the single source of truth, and add the dark-default theme mechanism.
- **Expected Outcomes:**
  - Manrope, Inter and Noto Sans Arabic resolve correctly (no Inter-for-everything alias).
  - The page loads in dark with no flash.
  - A saved choice persists across visits.
- **Todo List:**
  1. In `globals.css`, remove the `--font-manrope: Inter` and `--font-inter` alias overrides so the `next/font` variables set in the layout take effect. Keep the heading and body font tokens pointing at them.
  2. Decide the fate of the `prefers-color-scheme` block. It becomes dead code once `data-theme` is always set, so remove it.
  3. Server-render `data-theme="dark"` on `<html>` and add a small inline script in `<head>` that reads `localStorage` and sets `data-theme` before paint. Use `suppressHydrationWarning` on `<html>`.
  4. Replace the hard-coded `bg-[#FAF8F5] text-slate-900 selection:bg-brand-green/...` on `<body>` with token classes.
  5. Remove Space Grotesk loading if no longer used after the mono labels are gone (confirm after the later sub-tasks).
  6. Recolor [`src/components/AmbientOrbs.tsx`](src/components/AmbientOrbs.tsx) to blue and cyan with theme-aware opacity. Keep the pulse animation.
  7. Add a `ThemeToggle` client component (sun/moon icon, accessible label, persists to `localStorage`). Placement happens in sub-task 2.
- **Relevant Context:** [`src/app/globals.css`](src/app/globals.css), [`src/app/[locale]/layout.tsx`](src/app/[locale]/layout.tsx), [`src/app/layout.tsx`](src/app/layout.tsx) (verified: unused template leftover from create-next-app; all active routes live under `[locale]`), [`src/components/AmbientOrbs.tsx`](src/components/AmbientOrbs.tsx), [`src/components/ThemeToggle.tsx`](src/components/ThemeToggle.tsx).
- **Status:** `[x] done`

### 2. Shared chrome: Navbar, Footer, SectionHeader, UI primitives
- **Intent:** Establish the recolored patterns every page reuses.
- **Sub-task 1 follow-up fixes:** Deleted the unused create-next-app `src/app/layout.tsx` and `src/app/page.tsx`. The old root layout rendered a second `<html>`/`<body>` around the locale layout, so the body token classes never applied. `[locale]/layout.tsx` is now the only root. `ThemeToggle` is placed in the Navbar (desktop and mobile menu). Navbar colors are still the old green/slate classes, to be recolored in this sub-task.
- **Sub-task 1 Handoff Notes:**
- `ThemeToggle` component is implemented at [`src/components/ThemeToggle.tsx`](src/components/ThemeToggle.tsx) with Lucide Sun/Moon icons, accessible labels, DOM sync, and `localStorage` persistence. It is ready for insertion into `Navbar` beside the locale switcher (both desktop and mobile sheet).
- Dark mode is default with `data-theme="dark"` set on `<html>`, pre-paint hydration script running in `<head>`, and `@custom-variant dark` configured in `globals.css`.
- CSS variables (`--surface`, `--surface-raised`, `--border`, `--text-primary`, `--text-secondary`, etc.) dynamically switch tokens on `[data-theme="dark"]`.
- **Expected Outcomes:**
  - A floating blue-tokened Navbar with the theme toggle and the language toggle, correct in LTR and RTL.
  - A Footer that works in both themes.
  - `SectionHeader` renders a plain headline.
  - `SectionBadge` becomes a sentence-case Inter label, or is removed where it adds no information.
  - A shared spectrum rule pattern is available (`rcs-card-spectrum`, `spectrum-gradient-rule`).
- **Todo List:**
  1. Navbar: replace the green/slate classes with token classes. Add `ThemeToggle` next to the language toggle (desktop and mobile menu). Keep the floating rounded shape.
  2. Footer: recolor to tokens.
  3. `SectionHeader`: use heading tokens and text tokens. Drop the mono/uppercase badge styling.
  4. `SectionBadge`: change to a sentence-case Inter label. Drop its `green`/`orange`/`slate` variants for token-based ones.
  5. Review `TopRibbon`, `ScrollReveal`, `CountUp`, `useGsap*` for color or class dependencies (animations stay).
- **Relevant Context:** [`src/components/Navbar.tsx`](src/components/Navbar.tsx), [`src/components/Footer.tsx`](src/components/Footer.tsx), [`src/components/ui/SectionHeader.tsx`](src/components/ui/SectionHeader.tsx) (8 files use `SectionBadge` or `SectionHeader`), [`src/components/TopRibbon.tsx`](src/components/TopRibbon.tsx).
- **Sub-task 2 Handoff Notes (for sub-task 3 onward):**
  - **Validation:** lint, type-check and the final CSS check were skipped at the user's request; the user is verifying in the browser. One earlier build compiled successfully, before the last few edits.
  - **CSS layering:** In `globals.css`, base element styles (`html`, `body`, headings, `a`) are now in `@layer base` and the `.rcs-*`, `.glass-card`, `.spectrum-*` primitives are in `@layer components`. Tailwind utilities (`text-*`, `bg-*`) now override them. Before this change the unlayered styles beat utilities (for example `a { color: var(--link) }` overrode `text-white` on links). Watch for visual changes from this on pages not yet migrated.
  - **New Tailwind color utilities:** `text-link`, `text-link-hover`, `text-text-on-brand`, `border-border-brand`, `ring-focus-ring` map to the theme tokens. Existing ones: `bg-background`, `bg-surface`, `bg-surface-raised`, `bg-surface-muted`, `bg-surface-brand`, `text-text-primary`, `text-text-secondary`, `text-text-muted`, `border-border`, `border-border-strong`, `bg-brand-blue`, `text-brand-blue`, status colors.
  - **RTL fonts:** `html[dir="rtl"]` now overrides `--font-sans` and `--font-heading` with Noto Sans Arabic, so components should use the tokens (`font-sans`, `font-heading`, headings) rather than hard-coded `font-[family-name:var(--font-manrope)]`, which would stay Manrope in Arabic. `h1`-`h6` already use `--font-heading`. `SectionHeader` relies on this and no longer sets a font class.
  - **Logo:** `public/Rcs_Logo.png` is transparent with a dark-blue wordmark, so it is invisible on a dark background. Navbar and Footer put it on a white plate in dark mode with `dark:bg-white dark:px-3`. Reuse this wherever the logo appears.
  - **Spectrum rule:** `rcs-card-spectrum` (top-edge rule on a card, needs `position: relative; overflow: hidden`, already in the class) is used on the services dropdown and the mobile menu. `spectrum-gradient-rule` (3px full-width rule) is used on the Footer top edge. Use these two for "key cards" and "section dividers" on later pages.
  - **Navbar:** Tokenised. The primary CTA uses `rcs-button rcs-button-primary`. The phone number is `dir="ltr"` with `tabular-nums` (no mono font). Services dropdown now also opens on keyboard focus. The CTA arrow flips in RTL. The `ThemeToggle` sits in the desktop bar and the mobile menu.
  - **Footer:** Now a `bg-surface` footer with a spectrum rule at the top, using `rcs-tag` for the three credentials and `text-link` for phone numbers. The two link columns now point to `/what-we-offer` (they pointed to `/services`, which is not a page). The footer link lists still all point to the same page; per-service links would need slugs from the services data.
  - **SectionBadge:** Variants are now `brand` (default) and `neutral`. It renders sentence-case Inter text with no pill, border, mono or uppercase styling. Existing callers had `variant="green"`/`"orange"` removed, so they now use the default. The labels still render everywhere they were; trimming the ones that add no information, and the `//` strings, happens per page in sub-tasks 3-7.
  - **ThemeToggle:** Rewritten with `useSyncExternalStore` reading `<html data-theme>` (fixes the `react-hooks/set-state-in-effect` lint error). The `aria-label` is English only; it is not translated yet.
  - **Not done in this sub-task:** `TopRibbon` is still the old navy/green styling. It is not rendered (commented out in `[locale]/layout.tsx`), so it was left alone. Delete it in the final sweep or recolor it if you want it back. `ScrollReveal`, `CountUp` and `useGsap*` have no color or class dependencies, so they needed no changes.
  - **Still hard-coded:** `font-mono` / Space Grotesk and `font-[family-name:var(--font-manrope)]` remain in the page components and are removed per page in the later sub-tasks.
- **Status:** `[x] done` (pending user's browser check)

### 3. Home page
- **Intent:** Rebuild the hero and recolor every home section.
- **Expected Outcomes:**
  - The new full-width headline over photo hero with the stats band.
  - All home sections use tokens and the spectrum rule on key cards.
- **Todo List:**
  1. `HeroSection`: restructure to the layout above. Remove the highlighted-word span, the pill badge, the telemetry HUD and the card layout. Keep the GSAP entrance. Keep a floating or pulsing decoration somewhere in the new hero, since decorations are not to be removed. Use `/hero_1.avif`, and write meaningful alt text instead of "office".
  2. Update `messages/en.json` and `messages/ar.json` hero keys: merge `headline_gradient` into a single headline, and remove the unused telemetry and float-card keys if the new hero no longer uses them.
  3. Recolor and tidy `TrustBar`, `AboutSection`, `SolutionsOverview`, `ProjectExpertise`, `Industries`, `WhyRCS`, `RegionalPresence`, `FinalCTA`, `SEOContent`.
  4. Add the spectrum top rule to key cards.
  5. Replace uppercase mono badge labels with sentence-case labels, only where they add information.
- **Relevant Context:** [`src/app/[locale]/page.tsx`](src/app/[locale]/page.tsx), [`src/components/HeroSection.tsx`](src/components/HeroSection.tsx), the home section components, the `hero` namespace in [`messages/en.json`](messages/en.json) (line 49 onward).
- **Sub-task 3 Handoff Notes:**
  - **Not validated:** no lint, type-check or build was run (user asked to keep cost down); the user is verifying in the browser.
  - **Hero:** headline, then supporting copy and CTAs, then a full-width photo card with a spectrum rule on top and the stats band attached underneath. The photo is aerial Riyadh (600x473, so it is upscaled and soft at full width) with new alt text. A floating location chip with a pulsing dot keeps the existing floating/pulsing decoration. Secondary CTA now links to /what-we-offer (/services is not a page). Removed hero keys: badge, headline_gradient, headline_suffix, telemetry_*, metric*, float_card*. Added: image_alt, image_caption. The headline is now one string in both locales.
  - **New utility:** font-display (in globals.css, via @utility) reads the font token at runtime so it follows the Arabic override. Tailwind font-heading is inlined to Manrope and does NOT follow it, so use font-display (or plain h1-h6) in components. The editor shows an unknown-at-rule warning for @utility; it is valid Tailwind v4.
  - **Pattern used on all home sections:** rcs-card (+ rcs-card-interactive for hover lift, rcs-card-spectrum on key cards, add extra top padding like pt-8), text-text-secondary / text-link, bg-surface-brand for icon tiles, rcs-tag for chips, rcs-button + rcs-button-primary/secondary, rcs-input / rcs-select / rcs-label / rcs-error in forms, rtl:-scale-x-100 on directional arrows.
  - **Badges and markers removed:** SectionBadge labels and 01-08 / PMO-style number markers removed from the home sections (the lists are not sequences). Their message keys were deleted from en.json and ar.json (badge, card*_tag, p*_num, item*_num, trust_bar *_symbol and stat5_*). SectionBadge itself is still used by later pages.
  - **Other changes:** Project expertise CTA now links to /contact (was a #contact anchor that does not exist on that page); Solutions CTA links to /what-we-offer (was /contact). TrustBar now shows plain stat cards. Unused components: ContactSection and ServicesSection are not imported anywhere; left untouched, candidates for deletion in the final sweep.
- **Status:** `[x] done` (pending user's browser check)

### 4. Who we are
- **Intent:** Recolor and de-template the page.
- **Expected Outcomes:** Hero, About, Vision & Mission, Journey, Approach, Presence and CTA all use tokens and render well in both themes.
- **Todo List:**
  1. Recolor `WhoWeAreHero`, `AboutRcs`, `VisionMission`, `CompanyJourney`, `OurApproach`, `RegionalPresence`, `WhoWeAreCTA`.
  2. Remove the highlighted word (`headline_gradient`, e.g. "Excellence"). Update both locale files.
  3. Clean up labels such as `MILESTONE TRAJECTORY // 1990 — PRESENT` and the `eyebrow_*` keys.
  4. Keep numbering only where the content is a real sequence (the Journey timeline).
- **Relevant Context:** `src/components/who-we-are/*`, [`src/app/[locale]/who-we-are/page.tsx`](src/app/[locale]/who-we-are/page.tsx), the matching `messages` namespaces (around line 367 onward).
- **Status:** `[x] done` (pending user's browser check)
- **Handoff notes:**
  - All seven components use tokens (`rcs-card`, `rcs-card-spectrum`, `rcs-tag`, `rcs-button`, `font-display`). Spectrum rules sit on stat, era, vision/mission, technology, Riyadh and CTA cards.
  - Removed the highlighted word, the `//` labels and the uppercase mono labels. `WhoWeAreHero` keeps `eyebrow_secondary` (company legal name) as a quiet pill; `eyebrow_primary` is deleted.
  - Moved all hardcoded English into messages (EN + AR): `vision_mission.headline` and `*_tag1-3`, `our_approach.subheadline` and `pillar1-5_desc/_note`, `pillar4_item1-3`, `who_we_are_cta.toll_free/whatsapp/response`. Claims were kept as-is, as the user decided; wording was simplified. **Arabic copy needs native review.**
  - Deleted keys: `*.badge` (about, journey, vision, approach, CTA), `who_we_are_hero.eyebrow_primary/headline_gradient`, `our_approach.intro/outro`, `common.strategic_footprint/gcc_express`.
  - `AboutRcs` now uses `next/image` with `/hero_1.avif` instead of the Google-hosted image (swap in a better photo later).
  - `WhoWeAreCTA` and `RegionalPresence` use the i18n `Link` (fixes the lint error); the CTA is now a themed card, not a fixed navy panel. The "Schedule briefing" link goes to `/contact`.
  - `OurApproach` pillars are no longer numbered. `CompanyJourney` keeps its years.
  - Not run: lint, tsc, build (per the user's instruction).

### 5. What we offer
- **Intent:** Same treatment for the offerings page.
- **Expected Outcomes:** All sections recolored, plain headline, sentence-case labels.
- **Todo List:**
  1. Recolor `WhatWeOfferHero`, `TechnologySolutions`, `ProjectServices`, `IntegratedEngineering`, `Industries` (what-we-offer), `DeliveryApproach`, `WhatWeOfferCTA`.
  2. Remove `headline_gradient` ("Engineering Solutions") and the `eyebrow_secondary` middle-dot string. Update both locale files.
  3. Keep numbering only for `DeliveryApproach` if it is a real sequence.
- **Relevant Context:** `src/components/what-we-offer/*`, [`src/app/[locale]/what-we-offer/page.tsx`](src/app/[locale]/what-we-offer/page.tsx), `messages` (around line 483 onward).
- **Status:** `[x] done` (pending user's browser check)
- **Handoff notes:**
  - All seven components recolored with tokens (`rcs-card`, `rcs-card-interactive`, `rcs-card-spectrum`, `rcs-tag`, `rcs-button`, `font-display`).
  - Removed `headline_gradient` and merged headlines into a single string in both `en.json` and `ar.json`.
  - Removed uppercase mono tags and `//` labels (`PILLAR 01 // ...`, `MARKET ECOSYSTEM // ...`, `SYSTEMATIC LIFECYCLE`).
  - Numbering kept for `DeliveryApproach` (01–05 steps sequence) and removed elsewhere.
  - `WhatWeOfferCTA` uses `rcs-card-spectrum` with ambient lighting, token-based contact matrix, and `Link` from `@/i18n/navigation`.
  - Lint and build commands skipped per instructions; user is verifying in browser.

### 6. Services (dynamic `[slug]` pages)
- **Intent:** Recolor the shared service template used by all 8 services.
- **Expected Outcomes:** One template change updates every service page with design tokens and spectrum styling.
- **Todo List:**
  1. Recolor `ServiceHero`, `ServiceOverview`, `ServiceCapabilities`, `ServiceBenefits`, `ServiceIndustries`, `ServiceAdvantage`, `ServiceApproach`, `ServiceCTA`, `RelatedServices`.
  2. Maintain `messages/*.json` integrity (no removals/edits to content text; handle gradient removal and clean subtitle pill formatting inside components).
- **Relevant Context:** `src/components/service/*`, [`src/app/[locale]/services/[slug]/page.tsx`](src/app/[locale]/services/[slug]/page.tsx).
- **Status:** `[x] done` (pending user's browser check)
- **Handoff notes:**
  - All 9 service components updated to blue design tokens (`rcs-card`, `rcs-card-interactive`, `rcs-card-spectrum`, `rcs-tag`, `rcs-button`, `font-display`).
  - Headlines rendered as single-color plain headlines without gradient text clips.
  - Subtitle pills formatted cleanly with `//` replaced by `·`.
  - Directional icons configured with RTL mirroring.

### 7. Contact
- **Intent:** Recolor the contact flow and its form for both themes.
- **Expected Outcomes:** Form inputs, error/success states, office cards, and channels use semantic tokens.
- **Todo List:**
  1. Recolor `ContactHero`, `ContactForm`, `ContactDetails`, `OfficeLocations`, `ContactCTA`, `ContactSection`.
  2. Use `rcs-card`, `rcs-tag`, `rcs-button`, and theme-aware inputs and focus rings.
- **Relevant Context:** `src/components/contact/*`, [`src/components/ContactSection.tsx`](src/components/ContactSection.tsx), [`src/app/[locale]/contact/page.tsx`](src/app/[locale]/contact/page.tsx).
- **Status:** `[x] done` (pending user's browser check)
- **Handoff notes:**
  - `ContactHero`: recolored telemetry chips with pulse dot, plain single-color headline, `rcs-tag`.
  - `ContactDetails`: 4-channel matrix rendered as `rcs-card` with hover effects and blue accenting.
  - `ContactForm`: theme-aware form inputs (`bg-surface-raised border border-border text-primary`), multi-select service chips with blue active state, and animated submit state.
  - `OfficeLocations`: Saudi Arabia & Dubai cards styled with spectrum top rules, coordinate cards, and unified phone CTAs.
  - `ContactCTA`: `rcs-card-spectrum` with ambient glow and verified credentials.

### 8. Final sweep and validation
- **Intent:** Catch leftovers and verify.
- **Todo List:**
  1. Verified and updated `TopRibbon.tsx`, `error.tsx`, `loading.tsx`, `ServicesSection.tsx`, `ContactSection.tsx`.
  2. Replaced legacy color classes with semantic tokens (`bg-surface-raised`, `bg-background`, `text-primary`, `text-secondary`, `text-brand-blue`).
  3. User to verify in browser without running build/lint commands.
- **Relevant Context:** All pages and components.
- **Status:** `[x] done` (ready for user browser validation)

## Notes and Risks

- **Messages:** `ar.json` must be edited in step with `en.json` so both locales stay in sync. Arabic copy changes need a native review.
- **Remaining green/orange usage:** The legacy `--brand-green` and `--brand-orange` aliases currently still map to green and orange. They are removed in sub-task 8, after every component stops using them.
- **Decorations kept by request:** Floating and pulsing decorations (for example `floatSlow`, `floatDelayed`, `pulseSlow` and the orbs) stay, but are recolored.
- **Photo:** `hero_1.avif` is an office photo, used as a placeholder.
