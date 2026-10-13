"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconLan({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}
function IconNeurology({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}
function IconSensors({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function IconDns({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  );
}
function IconTv({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}
function IconFlight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}
function IconHospital({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M12 6.75h.008v.008H12V6.75zm0 3h.008v.008H12V9.75zm0 3h.008v.008H12v-.008zm3-6h.008v.008H15V6.75zm0 3h.008v.008H15V9.75zm0 3h.008v.008H15v-.008z" />
    </svg>
  );
}
function IconSolar({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

// ── Per-card colour config (icon default + hover, title hover) ─────────────────
const SOLUTIONS = [
  {
    icon: IconLan,
    iconColor:      "text-brand-green",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-brand-green",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-brand-green",
    tagKey: "sol1_tag", titleKey: "sol1_title", descKey: "sol1_desc",
    pills: ["sol1_pill1", "sol1_pill2", "sol1_pill3"],
  },
  {
    icon: IconNeurology,
    iconColor:      "text-violet-600",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-violet-600",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-violet-600",
    tagKey: "sol2_tag", titleKey: "sol2_title", descKey: "sol2_desc",
    pills: ["sol2_pill1", "sol2_pill2", "sol2_pill3"],
  },
  {
    icon: IconSensors,
    iconColor:      "text-brand-green",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-brand-green",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-brand-green",
    tagKey: "sol3_tag", titleKey: "sol3_title", descKey: "sol3_desc",
    pills: ["sol3_pill1", "sol3_pill2", "sol3_pill3"],
  },
  {
    icon: IconDns,
    iconColor:      "text-brand-orange",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-brand-orange",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-brand-orange",
    tagKey: "sol4_tag", titleKey: "sol4_title", descKey: "sol4_desc",
    pills: ["sol4_pill1", "sol4_pill2", "sol4_pill3"],
  },
  {
    icon: IconTv,
    iconColor:      "text-brand-green",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-brand-green",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-brand-green",
    tagKey: "sol5_tag", titleKey: "sol5_title", descKey: "sol5_desc",
    pills: ["sol5_pill1", "sol5_pill2", "sol5_pill3"],
  },
  {
    icon: IconFlight,
    iconColor:      "text-violet-600",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-violet-600",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-violet-600",
    tagKey: "sol6_tag", titleKey: "sol6_title", descKey: "sol6_desc",
    pills: ["sol6_pill1", "sol6_pill2", "sol6_pill3"],
  },
  {
    icon: IconHospital,
    iconColor:      "text-brand-orange",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-brand-orange",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-brand-orange",
    tagKey: "sol7_tag", titleKey: "sol7_title", descKey: "sol7_desc",
    pills: ["sol7_pill1", "sol7_pill2", "sol7_pill3"],
  },
  {
    icon: IconSolar,
    iconColor:      "text-brand-green",
    iconBg:         "bg-slate-100",
    iconHoverBg:    "group-hover:bg-brand-green",
    iconHoverText:  "group-hover:text-white",
    titleHover:     "group-hover:text-brand-green",
    tagKey: "sol8_tag", titleKey: "sol8_title", descKey: "sol8_desc",
    pills: ["sol8_pill1", "sol8_pill2", "sol8_pill3"],
  },
] as const;

type TechKey = keyof ReturnType<typeof useTranslations<"what_we_offer_tech">>;

export default function TechnologySolutions() {
  const t = useTranslations("what_we_offer_tech");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 32, start: "top 84%" });

  return (
    <section
      id="technology-solutions"
      aria-labelledby="tech-sol-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Section header — left-aligned, split layout ── */}
      <ScrollReveal
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        y={24}
      >
        {/* Left: eyebrow + h2 + subheadline */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-brand-green shrink-0" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-green">
              PILLAR 01 // ENTERPRISE ARCHITECTURE
            </span>
          </div>
          <h2
            id="tech-sol-heading"
            className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {t("headline")}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl">
            {t("subheadline")}
          </p>
        </div>

        {/* Right: domain count */}
        <div className="font-mono text-sm text-slate-400 shrink-0">
          8 Turnkey Computational Domains
        </div>
      </ScrollReveal>

      {/* ── Bento grid — 8 cards ── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {SOLUTIONS.map(({
          icon: Icon,
          iconColor, iconBg, iconHoverBg, iconHoverText, titleHover,
          tagKey, titleKey, descKey, pills,
        }) => (
          <div
            key={tagKey}
            style={{ opacity: 0 }}
            className="group relative flex flex-col justify-between p-6 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* ── Top block ── */}
            <div className="space-y-4">
              {/* Tag + icon row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
                  TECH // {t(tagKey as TechKey)}
                </span>
                <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} ${iconHoverBg} ${iconHoverText} transition-colors duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Title + description */}
              <div>
                <h3 className={`font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 leading-snug ${titleHover} transition-colors`}>
                  {t(titleKey as TechKey)}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {t(descKey as TechKey)}
                </p>
              </div>
            </div>

            {/* ── Pills tray ── */}
            <div className="mt-5 flex flex-wrap gap-1.5 bg-slate-100/60 rounded-lg p-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="px-2 py-0.5 rounded bg-white text-[11px] font-medium text-slate-500"
                >
                  {t(pill as TechKey)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
