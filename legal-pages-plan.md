# Legal Pages Plan — Privacy Policy & Terms of Service

## Overview

Create two new locale-aware static pages:
- `/en/privacy-policy` and `/ar/privacy-policy`
- `/en/terms-of-service` and `/ar/terms-of-service`

The footer already links to `/privacy-policy` and `/terms-of-service` (added in the previous session). Both pages need:
1. English and Arabic translation content in `messages/en.json` and `messages/ar.json`
2. A reusable layout component for rendering legal prose
3. A Next.js page file for each route following the existing page pattern

---

## Sub-Tasks

---

### Sub-Task 1 — Add English translations for both pages

**Intent:** Add all English-language content for Privacy Policy and Terms of Service into `messages/en.json` under two new namespaces: `privacy_policy` and `terms_of_service`.

**Expected Outcomes:**
- `messages/en.json` contains `privacy_policy_meta`, `privacy_policy`, `terms_of_service_meta`, `terms_of_service` namespaces.
- Each namespace has: page meta title/description, hero headline + intro, and an array of sections (each with a `heading` and `body` string).
- Content is generic but relevant — references RCS Arabia, the Saudi Arabia jurisdiction, and standard IT-company data handling practices.

**Todo List:**
- [ ] Append `privacy_policy_meta` namespace (title, description)
- [ ] Append `privacy_policy` namespace with: `badge`, `headline`, `intro`, `last_updated`, and `sections` array (8–10 sections covering: information collected, how it is used, cookies, data sharing, data retention, security, user rights, third-party links, changes to policy, contact)
- [ ] Append `terms_of_service_meta` namespace (title, description)
- [ ] Append `terms_of_service` namespace with: `badge`, `headline`, `intro`, `last_updated`, and `sections` array (8–10 sections covering: acceptance, services description, use restrictions, intellectual property, disclaimers, limitation of liability, governing law, changes to terms, contact)

**Relevant Context:**
- File: `messages/en.json` — append after the last key before the closing `}`
- Company name: RCS Arabia
- Jurisdiction: Saudi Arabia
- Contact email: info@rcsarabia.com

**Status:** [ ] pending

---

### Sub-Task 2 — Add Arabic translations for both pages

**Intent:** Add Arabic-language equivalents of all content added in Sub-Task 1 into `messages/ar.json`.

**Expected Outcomes:**
- `messages/ar.json` contains `privacy_policy_meta`, `privacy_policy`, `terms_of_service_meta`, `terms_of_service` namespaces with full Arabic text.
- All section headings and body text are in Arabic.
- Jurisdiction references mention Saudi Arabia / المملكة العربية السعودية.

**Todo List:**
- [ ] Append `privacy_policy_meta` in Arabic
- [ ] Append `privacy_policy` in Arabic (badge, headline, intro, last_updated, sections array)
- [ ] Append `terms_of_service_meta` in Arabic
- [ ] Append `terms_of_service` in Arabic (badge, headline, intro, last_updated, sections array)

**Relevant Context:**
- File: `messages/ar.json` — same structure as en.json, append before closing `}`
- Layout automatically applies `dir="rtl"` and Arabic font when locale is `ar`
- No special RTL markers needed in the JSON strings

**Status:** [ ] pending

---

### Sub-Task 3 — Build the shared LegalPage component

**Intent:** Create a single reusable React component `src/components/LegalPage.tsx` that renders the structured legal content (hero + section list) for both Privacy Policy and Terms of Service pages.

**Expected Outcomes:**
- Component accepts a `namespace` prop (`"privacy_policy"` | `"terms_of_service"`)
- Renders: a hero section (badge, headline, last-updated date, intro paragraph)
- Renders: a list of accordion-style or stacked prose sections, each with a numbered heading and body text
- Styled consistently with the rest of the site: `rcs-card`, `text-text-primary`, `text-text-secondary`, `ScrollReveal`, max-width container
- Works in both LTR (en) and RTL (ar) without any extra code — layout handles direction

**Relevant Context:**
- Pattern: `src/components/who-we-are/OurApproach.tsx` (stacked section cards)
- Pattern: `src/components/who-we-are/VisionMission.tsx` (ScrollReveal sections)
- CSS classes: `rcs-card`, `rcs-card-interactive`, `rcs-tag`, `text-text-primary`, `text-text-secondary`
- Use `"use client"` and `useTranslations` from `next-intl`
- ScrollReveal: `import ScrollReveal from "@/components/ui/ScrollReveal"`

**Status:** [ ] pending

---

### Sub-Task 4 — Create the page files for both routes

**Intent:** Create two Next.js page files following the established pattern (generateMetadata + default export).

**Expected Outcomes:**
- `src/app/[locale]/privacy-policy/page.tsx` exists with metadata and renders `<LegalPage namespace="privacy_policy" />`
- `src/app/[locale]/terms-of-service/page.tsx` exists with metadata and renders `<LegalPage namespace="terms_of_service" />`
- Visiting `/en/privacy-policy` and `/ar/privacy-policy` renders the correct content in the correct language
- Visiting `/en/terms-of-service` and `/ar/terms-of-service` renders the correct content in the correct language

**Relevant Context:**
- Pattern: `src/app/[locale]/who-we-are/page.tsx` (metadata + component render)
- Metadata namespace keys: `privacy_policy_meta` and `terms_of_service_meta`
- Canonical URL base: `https://rcsarabia.com`
- Alternates: en ↔ ar for each page
- No `setRequestLocale` is needed if the component uses `useTranslations` (it inherits from layout)

**Status:** [ ] pending

---

## Conventions to Follow

| Convention | Value |
|---|---|
| Page file location | `src/app/[locale]/<route>/page.tsx` |
| Component location | `src/components/LegalPage.tsx` |
| Translation namespaces | `privacy_policy_meta`, `privacy_policy`, `terms_of_service_meta`, `terms_of_service` |
| Footer routes (already set) | `/privacy-policy`, `/terms-of-service` |
| Locale list | `en`, `ar` |
| RTL | Automatic via layout — no extra code |
| Shared component | One `LegalPage` component, `namespace` prop selects content |
