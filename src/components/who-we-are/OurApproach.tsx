"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconIntegration({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
  );
}
function IconEngineering({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}
function IconChecklist({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconChip({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  );
}
function IconMilitary({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  );
}
function IconSnowflake({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
    </svg>
  );
}
function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconNetwork({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

type ApproachKey = keyof ReturnType<typeof useTranslations<"our_approach">>;

const PILLARS = [
  { icon: IconIntegration, titleKey: "pillar1", descKey: "pillar1_desc", noteKey: "pillar1_note" },
  { icon: IconEngineering, titleKey: "pillar2", descKey: "pillar2_desc", noteKey: "pillar2_note" },
  { icon: IconChecklist,   titleKey: "pillar3", descKey: "pillar3_desc", noteKey: "pillar3_note" },
] as const;

const TECH_ITEMS = [
  { icon: IconSnowflake, key: "pillar4_item1" },
  { icon: IconLock,      key: "pillar4_item2" },
  { icon: IconNetwork,   key: "pillar4_item3" },
] as const;

const CARD = "rcs-card rcs-card-interactive p-6 flex flex-col justify-between";
const ICON_BOX = "w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center mb-5";

// ── Component ─────────────────────────────────────────────────────────────────
export default function OurApproach() {
  const t = useTranslations("our_approach");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.11, y: 32, start: "top 82%" });

  return (
    <section
      id="our-approach"
      aria-labelledby="our-approach-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 relative"
    >
      <ScrollReveal className="flex flex-col items-center text-center mb-14" y={28}>
        <h2
          id="our-approach-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mt-3 leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      {/* Five disciplines, not a sequence, so no numbering */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {PILLARS.map(({ icon: Icon, titleKey, descKey, noteKey }) => (
          <div key={titleKey} style={{ opacity: 0 }} className={CARD}>
            <div>
              <div className={ICON_BOX}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                {t(titleKey as ApproachKey)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(descKey as ApproachKey)}
              </p>
            </div>
            <div className="pt-4 text-sm font-semibold text-link">
              {t(noteKey as ApproachKey)}
            </div>
          </div>
        ))}

        {/* Specialized technology: wide card */}
        <div style={{ opacity: 0 }} className="rcs-card rcs-card-interactive rcs-card-spectrum p-6 pt-8 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className={ICON_BOX}>
                <IconChip className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                {t("pillar4")}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t("pillar4_desc")}
              </p>
            </div>

            <ul className="flex flex-col justify-center gap-3 p-4 rounded-xl bg-surface-muted border border-border">
              {TECH_ITEMS.map(({ icon: Icon, key }) => (
                <li key={key} className="flex items-center gap-2 text-text-primary text-sm font-semibold">
                  <Icon className="w-4 h-4 text-link shrink-0" />
                  <span>{t(key as ApproachKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strategic partnerships */}
        <div style={{ opacity: 0 }} className={CARD}>
          <div>
            <div className={ICON_BOX}>
              <IconMilitary className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-text-primary mb-2">
              {t("pillar5")}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t("pillar5_desc")}
            </p>
          </div>
          <div className="pt-4 text-sm font-semibold text-link">
            {t("pillar5_note")}
          </div>
        </div>

      </div>
    </section>
  );
}
