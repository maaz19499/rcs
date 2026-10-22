# RCS Arabia – Five-Pillar Content Migration Plan

## Top-Level Overview

**Goal.** Migrate the Next.js (next-intl, `en`/`ar`) site from the legacy "engineering + construction consultancy + 8 technology solutions" positioning to the five-pillar technology and managed-services portfolio defined in `RCS Arabia – Services & Solutions Website Content (1).pdf`, using `RCS-Arabia Profile 2026.pdf` only for verified company facts.

**Scope (English first; `ar.json` is a later, separate sub-task).**
- Five pillar pages plus 28 sub-pages (option A): 21 individual-service pages for the four non-Managed pillars and 7 Managed Services category pages. The other 34 Managed Services items are listed on their category page and do not get their own pages.
- Remove legacy services (construction, PMO, claims, Civil/MEP, solar, airport) and unsupported claims sitewide.
- Old service URLs redirect permanently to the new structure.
- Home, What We Offer, Who We Are, Contact, navigation, footer, FAQ and SEO metadata all reinforce the same five pillars.

**Pillars and slugs (confirmed).**

| Pillar | Slug | Sub-pages |
|---|---|---|
| AI & Data | `ai-data` | 2 services |
| Software & Cloud Engineering | `software-cloud-engineering` | 7 services |
| ICT & Audio Visual Systems | `ict-audio-visual-systems` | 6 services |
| Managed Services | `managed-services` | 7 categories (34 services listed inside them) |
| Cybersecurity | `cybersecurity` | 6 services |

**Approach.**
- Structure lives in code ([`src/lib/services-data.ts`](src/lib/services-data.ts)); all copy lives in `messages/en.json`.
- Two page templates: a shared pillar page and a lighter sub-page. Managed Services category pages reuse the sub-page template with a member-service list.
- Reuse the existing `src/components/service/*` building blocks (hero, capabilities, related, CTA) instead of building new visuals.
- `ar.json` and `en1.json` are not touched in this plan. A fallback merge keeps Arabic routes from breaking until Arabic is written.

**Content rules (apply to every sub-task).**
1. Service descriptions come only from the services PDF. Do not invent capabilities, stats or benefits.
2. Leadership-track-record figures are shown only with attribution: "Programmes led by our leadership team have…".
3. Claims softened (decided):

   | PDF wording | Site wording |
   |---|---|
   | SLAs as fast as 4 hours | SLA-backed response and resolution |
   | 20–30% savings vs staff augmentation | Predictable monthly costs |
   | Aligned with NCA, SAMA and sector regulations | Supports your regulatory and audit requirements |
   | ISO-aligned quality | ITIL v4-aligned processes and documented quality procedures |
   | Field teams cover thousands of sites | Kingdom-wide field support |
   | Hot spares and replacement parts | Field support and hardware break-fix |
   | 98% SLA compliance | Not used as a headline stat |
   | SLAs aligned to SAMA requirements | SLA-backed support for branch and ATM environments |

4. Remove, because neither PDF supports them: OEM partner tiers and "direct escalation" claims, NCA-ECC verified, "zero breaches", "< 2 hours" or "guaranteed" response times, "13 provinces", "500+ projects", Tier-3, liquid-cooled AI, spares depots, and "Platinum/Gold" partner status.
5. HCIS certification is supported by the profile (certificate page) and may be stated.
6. Legacy removals: construction consultancy and PMO, planning and controls, claims, commercial management, Civil/MEP, real estate PM, master planning, solar and renewable, airport. ELV and physical security stay only as the Managed Services category "ELV & Physical Security Systems".
7. Use cases the documents support: banking (Managed Services category), healthcare (Managed Services category plus IMC Hospital and Security Forces Medical City references), hospitality (Dubai hotel cabling and CCTV references), telecom, and facilities.

**Redirects (already done in `next.config.ts`).**

| Old slug | New destination |
|---|---|
| `ict-system-integration`, `audio-visual`, `data-centers` | `/services/ict-audio-visual-systems` |
| `ai-digital-twin` | `/services/ai-data` |
| `elv-smart-solutions`, `healthcare-hospitality` | `/services/managed-services/industry-specialized-services` |
| `smart-airport`, `solar-renewable` | `/what-we-offer` |

---

## Sub-Task 0 – Foundations

**Intent.** Establish the URL structure and permanent redirects before any content work.

**Expected Outcomes.**
- `next.config.ts` has permanent redirects for both locale-prefixed and unprefixed legacy URLs.
- `src/lib/services-data.ts` defines the pillars, children, Managed Services category-to-service map and route helpers.

**Todo List.**
1. [x] Add `redirects()` to `next.config.ts`.
2. [x] Create `src/lib/services-data.ts` (pillars, children, category map, helpers).
3. [ ] Verify during Sub-Task 10 that redirects fire with locale prefix and without it, since `src/proxy.ts` runs next-intl middleware.

**Relevant Context.** [`next.config.ts`](next.config.ts), [`src/lib/services-data.ts`](src/lib/services-data.ts), [`src/i18n/routing.ts`](src/i18n/routing.ts) (default locale prefix behaviour), [`src/proxy.ts`](src/proxy.ts).

**Status.** `[x] done` (redirect behaviour is verified in Sub-Task 10).

---

## Sub-Task 1 – English content: pillars and catalog in `messages/en.json`

**Intent.** Author all new service copy once, in the structure the templates will read.

**Expected Outcomes.**
- A `pillars` namespace with one entry per pillar: meta, hero, overview, services section heading, use cases, related heading and CTA.
- A `catalog` namespace with `{ title, description }` for every sub-page and every Managed Services member service (28 children + 34 member services = 62 entries, text taken verbatim or lightly condensed from the PDF).
- A small shared namespace for template labels (breadcrumb "Services", "What this covers", "Services in this category", "Use cases", etc.).
- The eight `services.*` blocks are deleted.

**Todo List.**
1. Draft pillar copy (headline, subheadline, overview) from the PDF pillar summaries. Do not use stats unless attributed.
2. Attach the attributed leadership figures to the Managed Services pillar (20% cost reduction vs staffing model, CSAT above 90%, 65% first-call resolution, 35% fewer tickets) and to the Cybersecurity pillar (80% of critical and high vulnerabilities closed, about 40% lower application-security spend).
3. Write `catalog` entries for all 5 pillars' children and for the 34 Managed Services member services.
4. Write per-pillar use cases limited to what the documents support (see rule 7). Add the profile's project references as examples inside the use-case sections of two pillars only, stating name, location and solution exactly as the profile does:
   - **ICT & Audio Visual Systems:** Neom Oxagon North East Reservoir (integrated ELV and security), Neom Oxagon Water Innovation Center (HCIS systems: ELV and integrated security), Serafi Mall Jeddah (CCTV security and advanced data network), IMC Hospital Jeddah (structured cabling for high-speed data transmission), Security Forces Medical City Riyadh (advanced integrated ICT systems), and the Dubai hotel projects (Palm Jumeirah Hotel, Premier INN Hotel Al Barsha, Dragon City Hotel: structured cabling, CCTV, data network, access control).
   - **Managed Services:** reference only the ELV and Physical Security Systems category with the same ELV/security projects. The profile has no managed-service engagements, so do not describe these as managed or ongoing.
   - Do not add project references to AI & Data, Software & Cloud, or Cybersecurity.
5. Write per-page `meta.title` and `meta.description` with search-oriented wording (service name plus "Saudi Arabia").
6. Delete `services.*` (lines from `"services": {` to the end of the file).
7. Validate that the JSON parses.

**Relevant Context.** `messages/en.json` (the `services` block starts at line 732); the services PDF sections 1–6 for text. Keys are underscore forms of the slugs (`toKey`/`toSlug` in `services-data.ts`).

**Status.** `[x] done`

**Notes for the next sub-task (Sub-Task 2 – i18n fallback).**

JSON paths and key names created in `messages/en.json`:

- `pillars.<pillar_key>` — one entry per pillar, with sub-keys: `meta.{title,description}`, `hero.{eyebrow,headline,subheadline}`, `overview.{badge,headline,body[]}`, `services.{badge,headline,subheadline}`, `useCases.{badge,headline,subheadline,items[{title,description}]}`, `related.{badge,headline,subheadline}`, `cta.{eyebrow,headline,subheadline}`. The `managed_services` and `cybersecurity` entries also have `attribution.{note,items[{value,label}]}`.
- Pillar keys used: `ai_data`, `software_cloud_engineering`, `ict_audio_visual_systems`, `managed_services`, `cybersecurity`.
- `catalog.<child_key>` — `{title,description}` for every key in PILLARS[*].children (28 entries) and every key in MANAGED_CATEGORY_SERVICES values (34 entries). Total 62 catalog entries.
- `service_page` — shared template labels: `breadcrumb_services`, `what_this_covers`, `services_in_category`, `use_cases`, `related_services`, `back_to_pillar` (uses `{pillar}` placeholder), `explore`, `overview`, `get_in_touch`, `contact_email`.
- The `services` top-level block (legacy 8 service pages, lines 732–3158 of the old file) has been deleted. The file now ends at line 1317.
- **One reference to `namespace: "services"` remains in `src/app/[locale]/services/[slug]/page.tsx` line 61. Do not fix it here — Sub-Task 4 rewrites that page.**
- Legacy keys (`common.chip_triage_*`, `contact_cta.metric*`, `who_we_are_*`, phone/WhatsApp/NCA/etc.) are still present in the non-new sections of `en.json` and will be cleaned up in Sub-Tasks 6–9 and 12 as planned.
- `ar.json` and `en1.json` are not touched. Sub-Task 2 should add a deep-merge fallback in `src/i18n/request.ts` so missing Arabic keys fall back to the new English content.

---

## Sub-Task 2 – i18n fallback for Arabic

**Intent.** Keep `/ar/...` routes functional while `ar.json` still holds only legacy keys.

**Expected Outcomes.**
- `src/i18n/request.ts` deep-merges the active locale's messages over the English messages, so any missing Arabic key falls back to English.
- No missing-message errors on `/ar/services/...`.

**Todo List.**
1. [x] Add a small deep-merge in `src/i18n/request.ts` (no new dependency).
2. [x] Confirm `ar.json` keys still override English where present.
3. [x] Remove or ignore stale `ar` service keys (do not edit `ar.json` in this plan). Ignored: the legacy `services` block stays in `ar.json` and is unused by the new pages.

**Relevant Context.** [`src/i18n/request.ts`](src/i18n/request.ts). `ar.json` is intentionally deferred (Sub-Task 11).

**Status.** `[x] done`

**Notes for the next sub-task (Sub-Task 3 – shared components).**
- `src/i18n/request.ts` now merges `messages/en.json` under the active locale's messages. Objects merge key by key; arrays and strings in the active locale replace English. `en` is returned unchanged.
- Verified against the real files: `ar.json` has no `pillars`, `catalog` or `service_page`, and the merged result contains all of them (62 catalog entries). Existing Arabic strings still win (`nav.home` stays "الرئيسية").
- `ar.json` still has the legacy `services` block. The merge keeps it, because it is not in `en.json` any more. Nothing reads it after Sub-Task 4.
- Arabic pages for new content render English text until Sub-Task 11.
- `npx tsc --noEmit -p tsconfig.json` passes (exit 0) after this change. Run it as a background command (`background: true`) and read its log: piping it through `Select-String` in the foreground hung and timed out. Use the same approach for `npm run lint` and `npm run build` in Sub-Task 10.

---

## Sub-Task 3 – Shared components for pillar and sub-pages

**Intent.** Build the common templates from existing building blocks with minimal new UI.

**Expected Outcomes.**
- A pillar-page layout: hero, overview, service cards grid, use cases, related pillars, CTA.
- A sub-page layout: hero, description, member-service list (for Managed Services categories only), related services, CTA.
- Cards link to the correct nested URLs.
- No component renders a removed claim.

**Todo List.**
1. Add a service-card grid component (title, description, link) for pillar pages and category pages.
2. Patch `RelatedServices` to accept a full `href` (currently builds `/services/${slug}`), so nested paths work.
3. Patch `ServiceCTA` default chips: remove the "Triage SLA / < 2 Hours" chip and drop the `common.chip_triage_*` keys.
4. Reuse `ServiceHero` (with breadcrumbs: Home › Services › Pillar › Service), `ServiceOverview` (without stats or fake HUD), `ServiceCapabilities` and `ServiceCTA`.
5. Decide whether `ServiceOverview`'s fake "HUD" overlay and progress bar are used (leave unused; the bar is hard-coded at 88%).
6. Add a JSON-LD helper component (Organization, Service, BreadcrumbList).

**Relevant Context.** `src/components/service/*` (Hero, Overview, Capabilities, Related, CTA), `src/components/ui/*`, `src/lib/hooks/useGsapStagger.ts`. Look for existing patterns: `"use client"` components with GSAP and `ScrollReveal`.

**Status.** `[x] done`

**Notes for the next sub-task (Sub-Task 4 – routes).**
- New components in `src/components/service/`:
  - `ServiceCardGrid`: props `id`, `badge`, `headline`, `subheadline`, `items[{title, description, href?}]` and `linkLabel`. Cards with an `href` are links (`href` is locale-less, so use `childPath(...)`). Cards without one are plain. Use it for the child cards, the use cases and the member-service lists, and pass `linkLabel` only on linked cards.
  - `AttributionStrip`: props `note` and `items[{value, label}]`. Render it when `pillars.<key>.attribution` exists (Managed Services and Cybersecurity).
- `src/components/JsonLd.tsx` is a server-safe `<JsonLd data={...} />`.
- `src/lib/structured-data.ts` exports `SITE_URL`, `organizationSchema()`, `serviceSchema({name, description, path})` and `breadcrumbSchema([{name, path}])`. Paths must be locale-prefixed, e.g. `/en/services/ai-data`.
- `RelatedServices` now takes `services[].href` (full locale-less path) instead of `slug`. It still reads `common.holistic_ecosystem`, `related_services_headline` and `discover_solution` as defaults. Pass `badge`, `headline` and `subheadline` from `pillars.<key>.related`, and `ctaLabel` from `service_page.explore`.
- `ServiceCTA`: the default chips are now email only and the secondary button is `mailto:info@rcsarabia.com` with the `common.email_us` label. Pass `eyebrow`, `headline` and `subheadline` from `pillars.<key>.cta`.
- `ServiceOverview`: the image column is only rendered when `image` is passed. Without an image the text is centred and full-width. The HUD props remain but must stay unused.
- `ServiceHero`: pass `eyebrow`, `headline`, `subheadline` and `breadcrumbs` (the Home link is added automatically). Don't pass `metrics`. It anchors its primary button to `#service-cta`.
- Dead colour classes `text-primary` and `text-secondary` were replaced with `text-text-primary` and `text-text-secondary` in every file I touched. Other legacy files (`ServicesSection`, `ContactSection`, `contact/*`, `TopRibbon`, `error.tsx`, and the unused `ServiceAdvantage`/`Approach`/`Benefits`/`Industries`) still use the dead classes. Fix them when each is reworked.
- Removed from `en.json` `common`: `call_cta`, `chip_switchboard`, `chip_whatsapp`, `chip_triage_*`, `service_image`. Added: `email_us`. `schedule_briefing` is kept for `RegionalPresence`.
- Verified: `en.json` parses, `tsc --noEmit` exits 0 and a grep finds no references to the removed keys. Visual rendering is not verified yet; that happens when pages exist (Sub-Task 4/10).

---

## Sub-Task 4 – Routes, metadata and static params

**Intent.** Wire the templates to URLs and make them statically generated and SEO-ready.

**Expected Outcomes.**
- `/services/[slug]` renders pillar pages (5 slugs). Unknown slugs return 404.
- `/services/[slug]/[service]` renders the 28 sub-pages. Unknown combinations return 404.
- `generateStaticParams` covers all valid routes for both locales.
- Per-page `generateMetadata` with canonical and `hreflang` alternates, using the nested path.
- The leftover `console.log(t)` is removed.

**Todo List.**
1. Rewrite `src/app/[locale]/services/[slug]/page.tsx` for pillars (replace `SERVICE_SLUGS`).
2. Add `src/app/[locale]/services/[slug]/[service]/page.tsx`.
3. Use `getPillarBySlug` and `getChild` for validation and `ALL_CHILD_ROUTES` for params.
4. Embed JSON-LD for each page.
5. Add `src/app/sitemap.ts` covering static pages, 5 pillars and 28 sub-pages for both locales.
6. Add robots only if one does not already exist.

**Relevant Context.** [`src/app/[locale]/services/[slug]/page.tsx`](src/app/[locale]/services/[slug]/page.tsx); metadata pattern in `what-we-offer/page.tsx` (canonical, languages, openGraph, twitter, base URL `https://rcsarabia.com`).

**Status.** `[x] done`

**Notes for the next sub-task (Sub-Task 5 – navigation).**
- `src/app/[locale]/services/[slug]/page.tsx` renders the 5 pillar pages: hero, overview, child cards (link to nested pages), `AttributionStrip` (only if the pillar has `attribution`), use cases, related pillars and CTA. The new `[slug]/[service]/page.tsx` renders the 28 sub-pages: hero, member-service cards (Managed Services categories only), the next 3 sibling pages and the pillar's CTA block. The old `console.log` is gone.
- Both pages set `dynamicParams = false` and call `setRequestLocale(locale)`. Without `dynamicParams = false`, unknown slugs returned HTTP 200 with the home page's metadata instead of a 404. `setRequestLocale` is also called in `[locale]/layout.tsx`. The IDE flags it as deprecated in favour of `next/root-params`; it works in next-intl 4.14.8 and matches the static build.
- Both pages have per-page metadata (canonical and hreflang with the nested path, OpenGraph, Twitter) and render two JSON-LD blocks via one `<JsonLd>`: an array of Organization, Service and BreadcrumbList. Sub-page titles are `<Service> | <Pillar> | RCS Arabia`; descriptions come from `catalog.<key>.description`.
- Breadcrumb "Services" links to `/what-we-offer`, because no `/services` index page exists. Sub-Task 7 should keep `/what-we-offer` as the services hub.
- `src/app/sitemap.ts` lists 74 URLs: 37 paths × 2 locales, each with hreflang alternates. `src/app/robots.ts` allows all and points at the sitemap. Neither existed before. The next-intl matcher skips paths containing a dot, so `/sitemap.xml` and `/robots.txt` are not locale-redirected.
- Verified against `next build --webpack` (79 static pages, exit status OK) and `next start`: all sampled pillar and sub-pages return 200 with correct h1, title, canonical and JSON-LD; `/en/services/nope`, `/en/services/ai-data/nope` and a valid child under the wrong pillar all return 404; old URLs redirect 308 with and without a locale prefix; `/ar/...` returns `lang="ar" dir="rtl"` with English fallback text; no phone, WhatsApp, `tel:`, NCA, SAMA, Platinum, Tier-3 or 4-hour strings in the page content; the attribution note appears only on Managed Services and Cybersecurity. ESLint on the new files has 0 errors (one existing `<img>` warning in `ServiceOverview`, unused here).
- Unrelated issues noticed, not caused by this migration:
  - `HeroSection.tsx` imports `./ui/Thread-Bg` (a `.jsx` file) and `tsconfig.json` has a stray `"src/components/ui/Thread-Bg.jsx"` entry. A `next build` right after a clean `.next` once failed type-checking with `HeroSection.tsx(43,5)` "Type 'string' is not assignable to type 'number[]'" and passed on the next run, so it may be flaky. These were already modified before this task.
  - Every route still shows `ƒ` (dynamic) except the pillar and sub-pages, which are now `●` (SSG). Sub-Tasks 6–9 could call `setRequestLocale` in their pages if static output is wanted.
  - `src/app/[locale]/loading.tsx` uses the dead `text-secondary` class.
- The legacy `[locale]/services/[slug]` redirect targets (`/services/ict-audio-visual-systems`, `/services/ai-data`, `/services/managed-services/industry-specialized-services`) now resolve to real pages, which completes the Sub-Task 0 redirect check.

---

## Sub-Task 5 – Navigation: Navbar and Footer

**Intent.** Expose all five pillars and their sub-pages everywhere.

**Expected Outcomes.**
- The Navbar mega-menu lists the five pillars, each with its sub-pages. The mobile menu offers the same access.
- The Footer's two link columns are rebuilt: "Services" (five pillar links) and "Company" (Who We Are, What We Offer, Contact).
- Every link resolves to a real route.

**Todo List.**
1. **Re-read `src/components/Navbar.tsx` first. It was modified externally after my last read.**
2. Replace the 3-item `MEGA_LINKS` with data derived from `PILLARS`.
3. Add pillar and sub-page labels to `nav` in `en.json` (pull titles from `catalog`/`pillars` to avoid duplication).
4. Add the Services section to the mobile menu (currently only 3 top-level links).
5. Rebuild the Footer columns, remove the `link_managed*` PMO/claims/Civil keys, and link each item to its pillar.
6. Rewrite `nav.brand_tagline`, `footer.tagline` and `footer.cert*` (drop "30+ years of engineering").

**Relevant Context.** `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `nav` and `footer` namespaces in `en.json`.

**Status.** `[x] done`

**Notes for the next sub-task (Sub-Task 6 – home page).**
- `Navbar.tsx`:
  - The desktop mega-menu is a full-width panel with five columns, one per pillar. Each shows the pillar link and its sub-page links, built from `PILLARS`, `pillars.<key>.hero.eyebrow` and `catalog.<key>.title`. A "View all services" link goes to `/what-we-offer`.
  - The hover target now spans the full header height, so the pointer never crosses a gap. The header gained `relative` so the panel anchors to it.
  - The Services item is highlighted on `/what-we-offer` and on any `/services/...` path.
  - The mobile menu has Who We Are, Services (link plus a chevron that expands the pillars, and each pillar expands to its sub-pages) and Contact. It scrolls (`max-h-[75vh]`) and keeps the "Talk to Our Experts" button.
  - The `tel:920088800` pill is removed from desktop and mobile (that part of Sub-Task 12 is done).
- `Footer.tsx`: columns are now Services (five pillar links), Company (Who We Are, What We Offer, Contact) and Contact Us (Riyadh — Headquarters, Dubai — Regional Office, `info@rcsarabia.com` as `mailto:`). The phone, WhatsApp and P.O. Box blocks are gone.
- `en.json`:
  - `nav`: removed `mega_link*`; added `all_services`, `toggle_services`, `toggle_pillar`.
  - `footer`: removed `stack_heading`, `managed_heading`, `hq_pobox`, `hq_country`, `toll_free_*`, `support_*`, `link_stack*` and `link_managed*`; added `services_heading`, `company_heading`, `office_riyadh`, `office_dubai` and `email`. Rewrote `tagline` and `cert3`.
  - `cert1` ("30+ Years Experience") is kept per the "30+ years" decision.
- `nav.brand_tagline` ("Reliance Comprehensive Solutions • Est. 1990") has no engineering wording and no component reads it, so I left it. Footer `legal1`–`legal4` still link to `/`, as before; there are no privacy or terms pages.
- Not touched, still on the old site structure: `footer.links_heading`, `legal_heading`, `privacy`, `terms` and `company_full_name` (unused by `Footer.tsx`; Sub-Task 10 can remove them), the `ribbon` namespace (only `TopRibbon`, which is commented out in the layout; Sub-Task 12 decides whether to delete it) and the `ar.json` footer/nav keys (Sub-Task 11).
- Verified: `en.json` parses, `tsc --noEmit` exits 0, ESLint on both files is clean, `next build --webpack` passes (79 pages), and in `next start` the header and footer on `/en/who-we-are`, `/en/services/ai-data` and `/ar/contact` contain 38 and 10 links. All 38 sampled header and footer links return 200, and no `tel:`, `wa.me`, `920088800`, `508453085` or `P.O.` appears. The visual look and the hover and mobile interactions have not been checked in a browser, since I can only fetch HTML; check them in `npm run dev`.
- Arabic note: `/ar/...` shows the Arabic footer tagline and certs and the new English Services/Company/Contact headings, until Sub-Task 11. The Arabic tagline still describes the old positioning.

---

## Sub-Task 6 – Home page

**Intent.** Make the homepage state the new positioning and link to the five pillars.

**Expected Outcomes.**
- Hero, supporting line and CTA follow the PDF home-page summary ("System integration, managed services, cybersecurity and AI for organisations in Saudi Arabia"; CTA "Talk to our team about your project").
- `SolutionsOverview` shows five pillar cards linking to their pillar pages.
- `ProjectExpertise` (PMO/claims/Civil cards) is replaced by an attributed leadership track-record block (200,000+ users, 960+ bank branches, 5,200+ ATMs, 55,000+ POS, 6,500+ telecom sites).
- `Industries` shows supported use cases only (no construction, real estate, oil and gas, airports).
- `WhyRCS` uses the PDF "Why RCS Arabia" points with softened claims.
- FAQ/`SEOContent` text and page metadata describe the new services. The home page emits Organization and FAQ JSON-LD.

**Todo List.**
1. Rewrite the `meta`, `hero`, `trust_bar`, `about`, `solutions`, `industries`, `why_rcs`, `regional`, `cta`, `faq` namespaces in `en.json`.
2. Update `SolutionsOverview.tsx` to five cards (links from `PILLARS`; remove the unused `print` and `sync` icons).
3. Repurpose or replace `ProjectExpertise.tsx` for the track-record block and update `app/[locale]/page.tsx` accordingly.
4. Update `Industries.tsx` (remove the construction icon and sector).
5. Update `FinalCTA.tsx` area-of-interest options to the five pillars (`domain_opt1–5`).
6. Leave `TrustBar` and its `trust_bar.*` keys unchanged (decided: placeholders stay until logos are supplied).

**Relevant Context.** `src/components/{HeroSection,TrustBar,AboutSection,SolutionsOverview,ProjectExpertise,Industries,WhyRCS,RegionalPresence,FinalCTA,SEOContent}.tsx`, `src/app/[locale]/page.tsx`.

**Status.** `[x] done`

**Notes for the next sub-task (Sub-Task 7 – What We Offer page).**
- `en.json` changes:
  - Rewrote `meta`, `hero`, `about`, `solutions`, `industries`, `why_rcs`, `regional`, `cta` and `faq`.
  - Renamed `expertise` to `track_record`, with the "Programmes led by our leadership team have…" note.
  - Removed `solutions.card1..8_*`, `industries.sector7/8`, `cta.phone_*`, `cta.whatsapp_*` and `cta.domain_opt*`.
  - Left `trust_bar`, `pillars`, `catalog`, `service_page`, `nav`, `footer` and `common` unchanged.
- Components:
  - `SolutionsOverview` shows five pillar cards from `PILLARS` and `pillarPath`.
  - New `TrackRecord`; `ProjectExpertise` is deleted.
  - `Industries` has six use-case sectors: banking, healthcare, government, telecom, facilities and hospitality.
  - `SEOContent` has four FAQs and FAQPage JSON-LD.
  - `FinalCTA` is email only, and its area-of-interest list comes from `PILLARS`.
  - `[locale]/page.tsx` is async, calls `setRequestLocale` and emits Organization JSON-LD.
- Reuse for Sub-Task 7: `SolutionsOverview` and the `solutions.desc_<pillar_key>` strings are a ready five-pillar overview. `TechnologySolutions` can follow the same pattern.
- Verified:
  - `tsc --noEmit` exits 0 and ESLint on the touched files is clean.
  - `next build --webpack` passes (79/79 pages).
  - In `next start`, `/en` and `/ar` return 200 with the new h1, five pillar links, the track-record note, and Organization and FAQPage JSON-LD.
  - Visible HTML on `/en` has none of `tel:`, `wa.me`, `920088800`, `508453085`, NCA, SAMA, Platinum, Tier-3, solar, airport, PMO, claims or construction.
- `/ar` still shows the old Arabic copy, including the word "PMO", until Sub-Task 11.
- A grep of `src` for removed keys finds only `ContactSection.tsx` (`phone_label`) and `contact/OfficeLocations.tsx` (`office1_phone_label`), both covered by Sub-Tasks 9 and 12.
- When checking served HTML for banned words, strip `<script>` tags first. The RSC payload carries the whole message bundle, including `ar.json` strings and the unused legacy keys.
- The `<main>` tag in the layout wraps almost nothing (about 360 characters); page content renders outside it. This is pre-existing and not addressed.

---

## Sub-Task 7 – What We Offer page

**Intent.** Turn the page into the services overview for the five pillars.

**Expected Outcomes.**
- Hero chips and text describe the five pillars.
- `TechnologySolutions` becomes a five-pillar overview with links to each pillar page. The solar icon and eight-card logic are removed.
- `ProjectServices` and `IntegratedEngineering` are deleted and removed from the page.
- `Industries` shows supported use cases.
- `DeliveryApproach` shows the PDF five-step approach: Assess, Design, Transition, Operate, Transform.
- The CTA no longer says "Guaranteed < 2 Hours".

**Todo List.**
1. Rewrite `what_we_offer_meta`, `what_we_offer_hero`, `what_we_offer_tech`, `what_we_offer_industries`, `what_we_offer_delivery`, `what_we_offer_cta` in `en.json`; delete `what_we_offer_projects` and `what_we_offer_engineering`.
2. Update the component arrays (5 pillars, icons) and delete the two legacy components.
3. Add the engagement and pricing models from the PDF ("How we deliver") to this page as a small section, if it fits the layout.

**Relevant Context.** `src/app/[locale]/what-we-offer/page.tsx`, `src/components/what-we-offer/*`.

**Status.** `[x] done (verified by user)`

**Notes for the next sub-task (Sub-Task 8 – Who We Are page).**
- `en.json`: rewrote `what_we_offer_meta`, `_hero`, `_tech`, `_industries`, `_delivery` and `_cta`. Added `what_we_offer_engagement` (five engagement models). Deleted `what_we_offer_projects` and `what_we_offer_engineering`.
- Components in `src/components/what-we-offer/`:
  - `WhatWeOfferHero`: code unchanged; the four chips are now Five Service Pillars, HCIS Certified, Saudi Talent and ITIL v4-aligned.
  - `TechnologySolutions`: five pillar cards (same 3 + 2 layout as the home page). Each card has a pillar link, its sub-page tags as links, and an "Explore pillar" link.
  - `Industries`: the same six sectors as the home page. Each card links to Managed Services › Industry & Specialised Services.
  - `DeliveryApproach`: Assess, Design, Transition, Operate, Transform (the old phase-label footer is removed).
  - `EngagementModels` (new): Dedicated on-site, Shared off-site, Hybrid, Leasing & buy-back, Pay-per-use. Pricing models are deliberately not shown (user decision).
  - `WhatWeOfferCTA`: tel, WhatsApp and the "Guaranteed < 2 Hours" line removed; email only.
  - `ProjectServices` and `IntegratedEngineering` are deleted and removed from the page.
- Decision: lint, build and browser checks are batched into Sub-Task 10 (user request). `tsc --noEmit` exits 0.

---

## Sub-Task 8 – Who We Are page

**Intent.** Align the company story with the profile and the new positioning without unsupported claims.

**Expected Outcomes.**
- Hero chips: remove "NCA-ECC verified", "Zero breaches", "Direct manufacturer access", "100% in-Kingdom". Replace with supported facts (HCIS-certified, Saudi talent, Kingdom-wide reach, ITIL v4-aligned).
- `CompanyJourney` keeps profile-supported eras (founding and project delivery, ELV and datacenter specialisation, PMO-era system integration, today) described briefly, without 4-hour spares, OEM tiers or liquid-cooled AI.
- `VisionMission` uses the profile vision and mission text; tags are replaced.
- `OurApproach`'s pillar copy is rewritten (remove "all engineers certified L1–L3", Tier-3, SCADA, zero downtime, direct level-3 line to manufacturers).
- `RegionalPresence` removes "13 provinces", "L1–L3 spares depot" and the NOC claim; keeps only verified offices.
- `WhoWeAreCTA` removes "response under 2 hours".

**Todo List.**
1. Rewrite `who_we_are_*`, `about_rcs`, `company_journey`, `vision_mission`, `regional_presence`, `our_approach`, `who_we_are_cta` in `en.json`.
2. Adjust component structures only where copy no longer fits (for example, the 5-pillar layout in `OurApproach`).

**Relevant Context.** `src/components/who-we-are/*`; the profile PDF (vision, mission, journey, HCIS certificate, global presence).

**Status.** `[x] done (verified by user)`

**Notes for the next sub-task (Sub-Task 9 – Contact page).**
- Decisions (user): journey keeps the profile's four eras, including the Mid 2010s PMO era naming Real Estate, Construction, Oil & Gas and Manufacturing, as history only. `OurApproach` shows the five softened "Why RCS Arabia" points. Vision and Mission tags are HCIS certified / Saudi Arabia & GCC and Saudi talent / ITIL v4-aligned / end-to-end capability. The second About differentiator is "Strategic Alliances with Technology Vendors" with no OEM or tier wording. Regional cards show city, role and one profile-based line each; India is deliberately not mentioned.
- `en.json` rewrote: `who_we_are_meta`, `_hero`, `about_rcs`, `company_journey`, `vision_mission`, `regional_presence`, `our_approach`, `who_we_are_cta`.
- Components in `src/components/who-we-are/`:
  - `WhoWeAreHero`: code unchanged; chips are HCIS Certified, Saudi Talent, Kingdom-wide Reach, ITIL v4-aligned.
  - `AboutRcs`: code unchanged. Third stat is now "5 Service Pillars" (was "End-to-End").
  - `CompanyJourney`: code unchanged. Era 2 is now "Early 2000s" and era 3 "Mid 2010s", matching the profile order.
  - `VisionMission`: vision now has 2 tags.
  - `OurApproach`: rewritten as five icon cards (3 + 2 layout). The wide tech card and the note lines are gone.
  - `RegionalPresence`: rewritten as two simple cards. Address, hours, phone, WhatsApp, P.O. Box, NOC and scope blocks are gone.
  - `WhoWeAreCTA`: tel, WhatsApp and the response-time line removed; email only.
- Removed `en.json` keys: all `regional_presence.*` address/hours/scope/logistics keys, `our_approach.*_note` and `pillar4_item*`, `who_we_are_cta.toll_free`, `whatsapp`, `response`.
- `tsc --noEmit` exits 0. Lint, build and browser checks are batched into Sub-Task 10.
- `<CompanyJourney>` icons (`IconShipping`, `IconHub`, `IconMemory`) still reflect the old eras (truck, network, chip). Swap them if you want them to match.

---

## Sub-Task 9 – Contact page

**Intent.** Remove unsupported promises from the contact flow and align service options.

**Expected Outcomes.**
- Hero chips drop "< 2 Hours Triage", "13/13 KSA provinces", "Bilateral NDA Shield" and "24/7/365 NOC".
- The form's focus areas match the five pillars (`service1–service5`); `service6–8` and the Civil/MEP option are removed. `SERVICE_KEYS` in `ContactForm.tsx` and its default selection are updated.
- Privacy note no longer claims "NCA ECC protocols" or "Sovereign In-Kingdom" encryption.
- Offices, details and CTA remove "guaranteed 2-hour acknowledgement" and "Zero third-party data leakage".

**Todo List.**
1. Rewrite `contact_meta`, `contact_hero`, `contact_form`, `contact_offices`, `contact_details`, `contact_cta` in `en.json`.
2. Update `SERVICE_KEYS` in `ContactForm.tsx` (it hard-codes 8 keys and pre-selects `service1` and `service2`).
3. Contact details are decided: only `info@rcsarabia.com` and the Riyadh and Dubai city names remain (see Sub-Task 12).

**Relevant Context.** `src/components/contact/*`, `src/app/[locale]/contact/page.tsx`, `src/app/actions.ts`.

**Status.** `[x] done (verified by user)`

**Notes for the next sub-task (Sub-Task 10 – Cleanup and verification).**
- Decisions (user): remove the "Direct Queue" badge; keep the phone field but optional; keep the RFP/BoQ upload; neutral timeline wording; keep the country list. Hero chips, service chips, offices, details and CTA were applied as proposed in the plan.
- `en.json` rewrote: `contact_meta`, `_hero`, `_form`, `_offices`, `_details`, `_cta`. Removed keys: `contact_form.queue_label`, `service6–8`, all office address/coordinate/hours/phone/scope/tz keys, `contact_details.ch2–ch4_*`, `contact_cta` phone/response metrics.
- Components in `src/components/contact/`:
  - `ContactHero`: chips are HCIS Certified, Saudi Talent, Kingdom-wide Reach, ITIL v4-aligned (lucide icons).
  - `ContactForm`: `SERVICE_KEYS` are the five pillars with nothing preselected; "Direct Queue" badge removed; phone optional; privacy note neutral.
  - `ContactDetails`: single email card (`info@rcsarabia.com`).
  - `OfficeLocations`: two cards, Riyadh (Headquarters) and Dubai (Regional Office), each with a note and an email link.
  - `ContactCTA`: primary "Talk to Our Team" (to the form), secondary "Email Us" (`mailto:`); the strip shows HCIS Certified, Saudi Talent, ITIL v4-aligned Processes.
- Dead `text-primary`/`text-secondary`/`text-muted` classes were replaced with `text-text-*` in all five contact components.
- A grep of `src/components/contact` for `tel:`, `wa.me`, `rfp@`, `dubai@`, `920088800`, `NCA`, `13 Prov`, `Tier-3`, `Sovereign` and `2 Hours` returns nothing. `tsc --noEmit` exits 0.
- Still open: `ContactForm` fakes submission (900 ms timeout) and `src/app/actions.ts` is not connected. Out of scope here; ask the user in Sub-Task 10.
- Still to handle in Sub-Task 12: `ContactSection.tsx`, `TopRibbon.tsx` and the unused `ribbon.*` keys (which still hold the 920088800 number).

---

## Sub-Task 10 – Cleanup and verification

**Intent.** Ensure the migration is complete and the build is clean.

**Expected Outcomes.**
- No remaining references to removed services, routes or claims.
- Unused components and keys are deleted.
- Lint, typecheck and production build pass; redirects and routes behave as specified.

**Todo List.**
1. Delete unused components: `ServiceBenefits`, `ServiceAdvantage`, `ServiceApproach`, `ServiceIndustries` if nothing imports them; plus `ProjectServices` and `IntegratedEngineering` (if not already deleted).
2. Grep `src/` and `messages/en.json` for: `solar`, `construction`, `PMO`, `claims`, `Civil`, `MEP`, `airport`, `NCA`, `Platinum`, `13 `, `500+`, `< 2`, `Guaranteed`, `Tier-3`, `liquid`, and old slugs.
3. Run `npm run lint`, a TypeScript check and `npm run build` (which uses `--webpack`).
4. Manually verify, in the dev server: all 5 pillar URLs, all 28 sub-page URLs, each legacy redirect with and without the locale prefix, the mobile menu, breadcrumbs, and `sitemap.xml`.
5. Verify RTL rendering with the English fallback on `/ar/...`.

**Relevant Context.** `package.json` scripts, `eslint.config.*`, `tsconfig.json`. Plan mode has no command execution, so this sub-task runs in Agent mode.

**Status.** `[-] partly done: code checks pass; production build and browser checks are left to the user`

**Notes for the next sub-task (Sub-Task 11 – Arabic).**
- Sub-Tasks 6, 7, 8, 9 and 12 were verified by the user with no feedback. Resend for form submission is planned but parked: both forms still do nothing real (`/contact` fakes success; home `FinalCTA` calls the `sendContactMessage` stub in `src/app/actions.ts`, which only logs).
- Deleted unused components: `service/ServiceAdvantage`, `ServiceApproach`, `ServiceBenefits`, `ServiceIndustries` and `ServicesSection`. `ProjectServices` and `IntegratedEngineering` were already gone. Kept `service/ServiceCapabilities` and `ui/CountUp`, which nothing imports now, since the plan names `ServiceCapabilities` as reusable; delete them if you don't want them.
- Removed the unused `en.json` keys: `nav.brand_*`, `footer.links_heading`, `legal_heading`, `company_full_name`, `what_we_offer_hero.eyebrow_primary`, and `service_page.use_cases`, `back_to_pillar`, `get_in_touch`, `contact_email`. `meta.keywords` is not read by the layout but was left in place.
- Banned-wording grep over `src/` and `en.json` (solar, PMO, Civil, MEP, airport, NCA, Platinum, 13 provinces, 500+, < 2 hours, Tier-3, liquid, sovereign, OEM) is clean. The only hits are the profile-based "PMO Excellence" journey era (a user decision), the "Network Operations Center" service title and the profile figure "6,500+ telecom sites". I reworded one code comment mentioning "Tier-3".
- A script confirmed that all 5 pillars, 28 sub-pages and 34 Managed Services members in `services-data.ts` have matching `en.json` content. `sitemap.ts` covers the 4 static pages, 5 pillars and 28 sub-pages in both locales.
- `tsc --noEmit` exits 0 and `eslint .` exits 0 with no output.
- Not done: `npm run build`. A dev server was running and shares `.next`, so the user will stop it and run the build later. Also not done: the manual browser checks in item 4 (pillar and sub-page URLs, legacy redirects with and without locale prefix, mobile menu, breadcrumbs, `sitemap.xml`) and item 5 (RTL with the English fallback on `/ar/...`).
- `ar.json` still has the legacy `services`, `ribbon` and `contact` blocks and the old nav/footer text. Sub-Task 11 must mirror the new `en.json` structure.

---

## Sub-Task 11 – Arabic (`ar.json`) — deferred

**Intent.** Translate all new content after the English structure is approved.

**Expected Outcomes.**
- `ar.json` mirrors the new `en.json` structure; legacy keys are removed; the fallback from Sub-Task 2 becomes a safety net only.

**Todo List.**
1. Produce Arabic copy for the new namespaces (professional translation review recommended).
2. Replace the legacy `services` block in `ar.json`.
3. Check RTL layout and Arabic metadata.

**Status.** `[x] done (all four stages verified by user)`

**Working notes.**
- Decision (user): four stages, reviewed one at a time. Write acronyms in Arabic where a standard Arabic term exists (for example "اتفاقية مستوى الخدمة (SLA)" on first use). Keep only the brand name "RCS Arabia" and standards such as ITIL v4 (and HCIS) in Latin.
- Stages: (1) site-wide namespaces: `meta`, `common`, `nav`, `hero`, `about`, `solutions`, `track_record`, `industries`, `why_rcs`, `regional`, `cta`, `faq`, `footer`. (2) Who We Are + What We Offer. (3) Contact + `service_page`. (4) `pillars` and `catalog` (the largest), then drop the legacy namespaces (`ribbon`, `contact`, `services`, `expertise`, `what_we_offer_projects`, `what_we_offer_engineering`) and do the RTL checks.
- Stage 1 is applied to `messages/ar.json` using `.bob/tmp/ar-apply.cjs` (merges a stage file, keeps `en.json` key order, checks key parity). `trust_bar` and `lang_toggle` already existed and were left unchanged.
- Stage 2 applied and verified by the user (same script, key parity ok): `who_we_are_*`, `about_rcs`, `company_journey`, `vision_mission`, `regional_presence`, `our_approach` and all `what_we_offer_*` namespaces. Decision (user): `who_we_are_hero.eyebrow_secondary` stays in Latin as "Reliance Comprehensive Solutions" (not translated, and the old "روابي الخليج" name is gone).
- Stage 3 applied (key parity ok): `contact_meta`, `contact_hero`, `contact_form`, `contact_offices`, `contact_details`, `contact_cta` and `service_page`. The phone placeholder `+966 5X XXX XXXX` and the email address are kept as is. "BoQ" is written as "جدول الكميات (BoQ)".

- Stage 4 applied (key parity ok, placeholder check clean, `tsc` exit 0): the full `pillars` namespace (5 pillars, leadership attribution kept) and `catalog` (62 entries). The legacy namespaces (`ribbon`, `expertise`, `contact`, `what_we_offer_projects`, `what_we_offer_engineering`, `services`) were dropped from `ar.json`; it now has exactly the same top-level namespaces as `en.json`.
- Remaining: browser check of `/ar/...` (RTL layout, Arabic metadata), native review of tone.

---

## Open Questions for the User

1. **Founding year. Decided:** keep "since 1990" and "30+ years" as they are on the site. The profile text is garbled ("1CC0") but states "over three decades".
2. **Offices and contact details. Decided:** keep only `info@rcsarabia.com` and the city names Riyadh and Dubai. Remove every other contact detail until it is verified: the 920088800 toll-free number, the WhatsApp number `+966 50 845 3085`, `rfp@rcsarabia.com`, the Riyadh P.O. Box, the Dubai street address, GPS coordinates and working hours. This applies sitewide (see Sub-Task 12).
3. **Client logos. Decided:** keep the `TrustBar` placeholders ("Brand 1 / Logo 1") as they are. Logos will be added soon. Do not touch `trust_bar.*` or `TrustBar.tsx`, except that `trust_bar.subheading` ("Trusted across Saudi Arabia and the GCC for over 30 years") is kept as is, consistent with the founding-year decision.
4. **Project references. Decided:** add the profile's real projects only as use-case examples inside the relevant pillar pages (ICT & Audio Visual Systems and Managed Services). There is no standalone "Selected projects" section. Use only what the profile states for each project (name, location, solution) and no outcomes or metrics. See Sub-Task 1.

## Sub-Task 12 – Remove unverified contact details sitewide

**Intent.** Apply the decision to keep only `info@rcsarabia.com` and the Riyadh and Dubai city names. The phone, WhatsApp and address data came from the old site and appear in neither PDF.

**Expected Outcomes.**
- No `tel:` links, `wa.me` links, phone numbers, P.O. Box, street address, coordinates or working hours remain in any component or message file.
- Email is the single contact channel (`mailto:info@rcsarabia.com`). Offices show city names only.
- Layouts still work: components no longer assume three contact channels or a call button.

**Todo List.**
1. Navbar: remove the `tel:` pill; keep the "Talk to our team" button to `/contact` (desktop and mobile menu).
2. Footer: remove the toll-free and direct-number blocks and `hq_pobox`; show city names and the email only.
3. `ServiceCTA`: remove the phone and WhatsApp default chips and the secondary "Call" button; keep an email chip and the primary button. Change the default secondary link to `mailto:`.
4. `FinalCTA` (home): keep only the email channel; keep the form.
5. `WhoWeAreCTA` and `WhatWeOfferCTA`: remove the toll-free, WhatsApp and response-time lines; keep email.
6. `ContactCTA` and `ContactDetails`: reduce four channels (email, switchboard, WhatsApp, tenders portal) to one email channel; remove the `rfp@` portal.
7. `OfficeLocations` and `who-we-are/RegionalPresence`: show Riyadh (headquarters) and Dubai (regional office) with city names only; remove P.O. Box, address, coordinates, hours, NOC and local-time lines.
8. `ContactSection.tsx` and `TopRibbon.tsx`: check whether anything imports them. `TopRibbon` is commented out in the layout. Delete either if unused; otherwise strip the details.
9. Remove the now-unused message keys: `common.call_cta`, `chip_switchboard`, `chip_whatsapp`, `chip_triage_*`, `footer.toll_free_*`, `support_*`, `cta.phone_*`, `whatsapp_*` and related keys.
10. Re-grep `src/` and `messages/en.json` for `920088800`, `508453085`, `rfp@`, `P.O.`, `tel:` and `wa.me`.

**Relevant Context.** 12 files matched the search: `Navbar.tsx`, `Footer.tsx`, `ContactSection.tsx`, `FinalCTA.tsx`, `TopRibbon.tsx`, `service/ServiceCTA.tsx`, `contact/{ContactCTA,ContactDetails,OfficeLocations}.tsx`, `who-we-are/{RegionalPresence,WhoWeAreCTA}.tsx`, `what-we-offer/WhatWeOfferCTA.tsx`. Also check `src/app/actions.ts` to see where form submissions go.

**Status.** `[x] done (verified by user). Items 1–7 were done inside Sub-Tasks 5–9. Items 8–10 were done later.`

**Notes for the next sub-task (Sub-Task 10).**
- Deleted `src/components/ContactSection.tsx` and `src/components/TopRibbon.tsx` (nothing used them; `TopRibbon` was only a commented-out layout entry). Removed the import and comment from `src/app/[locale]/layout.tsx`.
- Removed the unused `en.json` namespaces `ribbon` and `contact` (they held `920088800` and `+966 50 845 3085`).
- Re-grep of `src/` for `920088800`, `508453085`, `rfp@`, `dubai@`, `P.O.`, `tel:`, `wa.me`, `whatsapp`, `toll_free`, `call_cta`, `chip_switchboard`, `chip_whatsapp` and `chip_triage` returns nothing. In `en.json` the only hits are the `+966 5X XXX XXXX` phone-field placeholders.
- `FinalCTA` still imports `sendContactMessage` from `src/app/actions.ts` (the stub that only logs to the console). `ContactForm` on `/contact` does not use it. Ask the user whether to wire real submission.
- `ar.json` still has the old `ribbon` and `contact` blocks; clear them in Sub-Task 11.
- `tsc --noEmit` exits 0.

---

## Dependency Order

Sub-Task 0 → 1 → 2 → 3 → 4 gives working pillar and sub-pages. Sub-Tasks 5–9 and 12 then run independently of each other. Sub-Task 10 follows them, and Sub-Task 11 runs last.
