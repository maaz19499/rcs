# i18n Content Migration Plan
## Move all page content into `messages/` JSON files

---

## Overview

All user-visible content across the RCS Arabia website must be served from `messages/en.json` and `messages/ar.json` via `next-intl`, with no (or minimal) hardcoded strings in React components.

**Scope:**
- Services detail page (`/services/[slug]`) — 8 slugs, ~1,000 lines of hardcoded content in `SERVICE_REGISTRY`
- Navbar mega-menu service links (3 hardcoded items)
- Component default prop values (CTA labels, section headings, breadcrumb "Home")
- Remaining hardcoded strings in `RegionalPresence.tsx` (who-we-are), `ServiceCTA.tsx`, `WhatWeOfferCTA.tsx`, `Footer.tsx`

**Out of scope (agreed):**
- `aria-label` attributes
- `error.tsx` error messages
- `actions.ts` server-side validation messages
- `src/app/page.tsx` (default Next.js template)
- Tailwind classes, icon names, SVG paths, `href` URLs

**Approach:**
- `next-intl` v4 is already wired up — all new content uses `useTranslations` (client) or `getTranslations` (server)
- The `SERVICE_REGISTRY` object in `page.tsx` is replaced by a lookup against translated JSON
- Service components that have prop/data mismatches (chips, headlineGradient, phaseLabel vs stageLabel, num, metric, callout, headlineAccent, pillars vs items) are updated so the rendered output exactly matches the data the registry currently provides
- Arabic translations for the services section are left as placeholder stubs in `ar.json` (to be completed manually later)

---

## Sub-Tasks

---

### Sub-Task 1: Add a `common` namespace and extend `messages/en.json` + `messages/ar.json`

**Status:** `[x] done`

**Intent:**
Introduce a `common` namespace for shared UI strings used by multiple components (breadcrumb "Home", CTA defaults, section-level labels). Also add a `nav_mega` key block inside the `nav` namespace for the three Navbar mega-menu service items.

**Expected Outcomes:**
- `messages/en.json` contains a top-level `"common"` key with at minimum: `home`, `talk_to_experts`, `call_cta`, `discover_solution`, `holistic_ecosystem`, `related_services_headline`, `executive_consultation`, `service_image`, `schedule_briefing`, `gcc_express`, `strategic_footprint`
- `messages/en.json` contains `nav.mega_link1_title`, `nav.mega_link1_subtitle`, `nav.mega_link2_title`, `nav.mega_link2_subtitle`, `nav.mega_link3_title`, `nav.mega_link3_subtitle`
- `messages/ar.json` has the same keys (translated or placeholder-copied)
- `en.json` and `ar.json` remain structurally identical

**Todo List:**
1. [x] Add `"common": { ... }` block to `messages/en.json` with all shared UI strings
2. [x] Add `nav.mega_link1_*`, `nav.mega_link2_*`, `nav.mega_link3_*` keys inside the existing `nav` block in `messages/en.json`
3. [x] Mirror the same keys into `messages/ar.json` (Arabic translations or English stubs)

**Relevant Context:**
- `messages/en.json` — currently 36 top-level namespaces, all with AR parity
- Strings sourced from: `ServiceHero.tsx` line 71/120, `ServiceCTA.tsx` lines 75/78/80, `RelatedServices.tsx` lines 46/47/111, `who-we-are/RegionalPresence.tsx` lines 78/233/237, `Navbar.tsx` lines 19–34

**Notes for Next Sub-Tasks:**
- Keys added in `common`:
  - `common.home`: `"Home"` / `"الرئيسية"`
  - `common.talk_to_experts`: `"Talk to Our Experts"` / `"تحدث مع خبرائنا"`
  - `common.executive_consultation`: `"Executive Consultation"` / `"استشارة تنفيذية"`
  - `common.call_cta`: `"Call 920088800"` / `"اتصل 920088800"`
  - `common.holistic_ecosystem`: `"Holistic Ecosystem"` / `"منظومة متكاملة"`
  - `common.related_services_headline`: `"Explore Related Enterprise Solutions"` / `"استكشف حلول المؤسسات ذات الصلة"`
  - `common.discover_solution`: `"Discover Solution"` / `"اكتشف الحل"`
  - `common.service_image`: `"Service Image"` / `"صورة الخدمة"`
  - `common.schedule_briefing`: `"Schedule Briefing"` / `"جدولة إحاطة"`
  - `common.gcc_express`: `"GCC Express"` / `"خدمة الخليج السريعة"`
  - `common.strategic_footprint`: `"STRATEGIC GEOGRAPHIC FOOTPRINT"` / `"البصمة الجغرافية الاستراتيجية"`
- Keys added in `nav`:
  - `nav.mega_link1_title`: `"Datacenter & HCI Architecture"` / `"هندسة مراكز البيانات والبنية التحتية المتقاربة (HCI)"`
  - `nav.mega_link1_subtitle`: `"Tier-3 Facility & Nutanix"` / `"منشأة من الفئة الثالثة (Tier-3) وحلول Nutanix"`
  - `nav.mega_link2_title`: `"Sovereign Cyber Security & SOC"` / `"الأمن السيبراني السيادي ومركز العمليات الأمنية (SOC)"`
  - `nav.mega_link2_subtitle`: `"NCA ECC & SAMA CSF Ready"` / `"جاهزية لضوابط NCA ECC وSAMA CSF"`
  - `nav.mega_link3_title`: `"24/7 Managed AMC & Insourcing"` / `"عقود صيانة وإدارة 24/7 وتوفير الكفاءات"`
  - `nav.mega_link3_subtitle`: `"Guaranteed 4-Hour Spares SLA"` / `"اتفاقية مستوى خدمة لقطع الغيار خلال 4 ساعات مضمونة"`

---

### Sub-Task 2: Add `services` namespace to `messages/en.json` and stub `ar.json`

**Status:** `[x] done`

**Intent:**
Add the full content for all 8 service pages into `messages/en.json` under a `"services"` top-level key, nested by slug (using underscore slugs as keys, e.g. `services.ict_system_integration.hero.headline`). Each service entry mirrors the exact shape of `ServicePageData` in `page.tsx`.

**Expected Outcomes:**
- `messages/en.json` has `"services": { "ict_system_integration": {...}, "ai_digital_twin": {...}, ... }` — 8 service blocks, each containing `meta`, `hero`, `overview`, `capabilities`, `benefits`, `industries`, `advantage`, `approach`, `related`, `cta`
- `messages/ar.json` has the same `services` structure with stub placeholder text (can be copies of EN)
- All field names in JSON correspond 1-to-1 with what the service components accept (after Sub-Task 3 reconciles props)
- Arrays (chips, capabilities, benefits, industries, steps, related services) are stored as JSON arrays
- Style/color tokens (`accentColor`, `color`, `iconBg`, `iconColor`, `valueColor`, `tagColor`) are kept in JSON since they are design values, not translated strings — they remain in JSON but can be hardcoded in the component if they never change per locale

**Todo List:**
1. For each of the 8 slugs, extract ALL content from `SERVICE_REGISTRY` in `page.tsx` into the corresponding `services.<slug_key>` block in `messages/en.json`
2. Ensure every field the component renders has a matching key (after consulting Sub-Task 3's prop reconciliation)
3. Add stub copies of the same `services` block to `messages/ar.json`

**Relevant Context:**
- Source data: `src/app/[locale]/services/[slug]/page.tsx` lines 68–1074 (`SERVICE_REGISTRY`)
- 8 slugs: `ict-system-integration` → `ict_system_integration`, `ai-digital-twin` → `ai_digital_twin`, `elv-smart-solutions` → `elv_smart_solutions`, `data-centers` → `data_centers`, `audio-visual` → `audio_visual`, `smart-airport` → `smart_airport`, `healthcare-hospitality` → `healthcare_hospitality`, `solar-renewable` → `solar_renewable`
- Key mismatches to resolve (see Sub-Task 3): `chips` vs `metrics`, `headlineGradient`, `phaseLabel` vs `stageLabel`, `num`/`metric` in benefits, `items` vs `pillars` in advantage, `callout`/`headlineAccent`

---

### Sub-Task 3: Reconcile service component props with registry data

**Status:** `[x] done`

**Intent:**
The 8 service sub-components (`ServiceHero`, `ServiceOverview`, `ServiceCapabilities`, `ServiceBenefits`, `ServiceIndustries`, `ServiceAdvantage`, `ServiceApproach`, `RelatedServices`, `ServiceCTA`) have interface/rendering drift vs what `SERVICE_REGISTRY` provides. Bring component interfaces and render logic into alignment so every field in the JSON is actually displayed.

**Expected Outcomes:**
- `ServiceHero` accepts and renders `headlineGradient` (gradient-colored second line of headline) and `chips` (labelled pill badges), removing the unused `metrics` prop (or keeping it optional)
- `ServiceBenefits` renders `num` (step number) and `metric` (highlighted stat)
- `ServiceAdvantage` accepts `items` (array) and `headlineAccent` (gradient word), and renders a `callout` (large stat + label + note)
- `ServiceApproach` field `stageLabel` is renamed to `phaseLabel` (or vice versa — pick one and use it consistently everywhere)
- `ServiceCapabilities` renders `pills` (tag badges on each capability card)
- `RelatedServices` renders `category` (service category label on each card)
- `ServiceCTA` default props are removed and replaced by `useTranslations("common")` lookups

**Todo List:**
1. Update `ServiceHero` interface and JSX to add `headlineGradient?: string` and `chips?: ServiceHeroChip[]`, remove/optional `metrics`
2. Update `ServiceBenefits` interface and JSX to render `num` and `metric`
3. Update `ServiceAdvantage` interface and JSX to use `items` (rename from `pillars`) and add `headlineAccent` + `callout`
4. Align `ServiceApproach` so field name is `phaseLabel` everywhere (update interface + any divergent usage)
5. Update `ServiceCapabilities` JSX to render `pills` (displayed as small tag chips on each card)
6. Update `RelatedServices` JSX to render `category` label and replace hardcoded defaults with `useTranslations("common")` equivalents
7. Update `ServiceCTA` to pull default `eyebrow`, `ctaPrimary`, `ctaSecondary` from `useTranslations("common")` instead of hardcoded string defaults
8. Update `ServiceHero` to pull "Home" breadcrumb label from `useTranslations("common")`

**Relevant Context:**
- `src/components/service/ServiceHero.tsx` — currently has `metrics`, no `chips`/`headlineGradient`
- `src/components/service/ServiceBenefits.tsx` — interface has no `num`/`metric`
- `src/components/service/ServiceAdvantage.tsx` — uses `pillars`, no `headlineAccent`/`callout`
- `src/components/service/ServiceApproach.tsx` — uses `stageLabel`, registry uses `phaseLabel`
- `src/components/service/ServiceCapabilities.tsx` — interface has no `pills` render
- `src/components/service/RelatedServices.tsx` — has hardcoded defaults at lines 46/47/111
- `src/components/service/ServiceCTA.tsx` — hardcoded defaults lines 75/78/80, DEFAULT_CHIPS const lines 67–72

---

### Sub-Task 4: Replace `SERVICE_REGISTRY` in `page.tsx` with `next-intl` lookups

**Status:** `[x] done`

**Intent:**
Remove the ~1,000-line hardcoded `SERVICE_REGISTRY` object from `src/app/[locale]/services/[slug]/page.tsx` and replace it with a lookup against `messages/en.json` via `getTranslations`. The page becomes a thin router that reads from JSON and passes typed props to components.

**Expected Outcomes:**
- `SERVICE_REGISTRY` constant is deleted
- `ServiceDetailPage` and `generateMetadata` use `getTranslations("services")` to read the active slug's data
- The slug-to-key mapping (hyphen → underscore) is handled by a small utility
- `generateStaticParams` derives slugs from a constant list (since we can't enumerate JSON keys at build time without importing the file)
- The page renders correctly in both `en` and `ar` locales

**Todo List:**
1. Add a `SERVICE_SLUGS` constant (array of the 8 slug strings) to replace `Object.keys(SERVICE_REGISTRY)` in `generateStaticParams`
2. Write a `slugToKey` helper (`"ict-system-integration"` → `"ict_system_integration"`)
3. In `generateMetadata`: call `getTranslations("services")`, look up `t.raw(\`${key}.meta\`)`, return typed Metadata
4. In `ServiceDetailPage`: call `getTranslations("services")`, look up `t.raw(\`${key}\`)`, spread to component props
5. Delete the `SERVICE_REGISTRY` constant and all its associated type imports that are no longer needed at page level
6. Verify `notFound()` is still called for unknown slugs

**Relevant Context:**
- `src/app/[locale]/services/[slug]/page.tsx` — `SERVICE_REGISTRY` at lines 68–1074
- `src/i18n/request.ts` — confirms messages loaded per locale, `t.raw()` returns unformatted value
- All 8 service slug strings are known at plan time

---

### Sub-Task 5: Patch remaining hardcoded strings outside the services page

**Status:** `[x] done`

**Intent:**
Fix all remaining hardcoded visible strings identified in the audit: Navbar mega-menu, `who-we-are/RegionalPresence.tsx`, `WhatWeOfferCTA.tsx`, `Footer.tsx`, `RegionalPresence.tsx` (homepage).

**Expected Outcomes:**
- `Navbar.tsx` `MEGA_LINKS` titles and subtitles read from `t("nav.mega_link*_title")` / `t("nav.mega_link*_subtitle")`
- `Navbar.tsx` `"RCS ARABIA"` and `"Rawabi Al Khaleej • Est. 1990"` strings moved to `nav` namespace in JSON (or `common`)
- `who-we-are/RegionalPresence.tsx` eyebrow "STRATEGIC GEOGRAPHIC FOOTPRINT", office names, address fragments, hours, CTA label "Schedule Briefing", and "GCC Express" tag are moved to `regional_presence` namespace in JSON
- `WhatWeOfferCTA.tsx` phone numbers read from `contact.phone_switchboard` / `contact.phone_emergency`
- `Footer.tsx` company subtitle "Rawabi Al Khaleej Computer Services Co." moved to `footer` namespace
- `RegionalPresence.tsx` (homepage) REGIONS array moved to `regional` namespace

**Todo List:**
1. Add missing keys to `messages/en.json` in `regional_presence`, `nav`, `footer`, `regional` namespaces as needed for the above strings
2. Mirror all new keys to `messages/ar.json` with translations
3. Update `Navbar.tsx` to read mega-menu labels from `t("nav")` and company name from i18n
4. Update `who-we-are/RegionalPresence.tsx` to replace all hardcoded JSX text with `t("regional_presence.*")` calls
5. Update `WhatWeOfferCTA.tsx` to read phone numbers from `useTranslations("contact")`
6. Update `Footer.tsx` to read company subtitle from `t("footer.*")`
7. Update `RegionalPresence.tsx` (homepage) to read region names from `t("regional")`

**Relevant Context:**
- `src/components/Navbar.tsx` lines 16–35, 88, 93, 178/241
- `src/components/who-we-are/RegionalPresence.tsx` lines 78, 106, 109, 124, 132, 136, 143–147, 155, 159, 165–169, 185, 188, 191, 206, 222, 233, 237
- `src/components/what-we-offer/WhatWeOfferCTA.tsx` lines 120, 140
- `src/components/Footer.tsx` line 46
- `src/components/RegionalPresence.tsx` (homepage) lines 4–6

---

## Execution Notes for Agent Mode

- Process one sub-task at a time; update this file's Status field to `[x] done` after each.
- Sub-Tasks 1 and 2 can be done together (both are JSON-only edits).
- Sub-Task 3 must come before Sub-Task 4 (components must accept the right props before the page tries to pass them).
- Sub-Task 5 is independent of 2/3/4 and can be done at any time after Sub-Task 1.
- After each sub-task, verify the build passes (`next build --webpack`) and there are no TypeScript errors.
- `t.raw(key)` returns untyped `unknown` — cast with a typed helper or `as SomeType` after validating the shape.
