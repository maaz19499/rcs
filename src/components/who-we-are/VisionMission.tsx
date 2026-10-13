"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconShieldLock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconExplore({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

// ── Static card definitions ───────────────────────────────────────────────────
// Translated body text comes from messages; presentational chrome is static.
const CARDS = [
  {
    id:          "vision",
    glowColor:   "bg-brand-green/10",
    iconBg:      "bg-emerald-500/10",
    iconColor:   "text-brand-green",
    icon:        IconShieldLock,
    cardLabel:   "Strategic North Star",
    accentColor: "text-brand-green",
    titleKey:    "vision_label",
    bodyKey:     "vision_body",
    tags: [
      "National Digital Sovereignty",
      "Autonomous Cloud Resilience",
      "Institutional Security",
    ],
  },
  {
    id:          "mission",
    glowColor:   "bg-brand-orange/10",
    iconBg:      "bg-amber-500/10",
    iconColor:   "text-brand-orange",
    icon:        IconExplore,
    cardLabel:   "Execution Mandate",
    accentColor: "text-brand-orange",
    titleKey:    "mission_label",
    bodyKey:     "mission_body",
    tags: [
      "4-Hour On-Site SLA",
      "Cleared In-Kingdom Engineering",
      "Direct Factory Escalation",
    ],
  },
] as const;

type VMKey = keyof ReturnType<typeof useTranslations<"vision_mission">>;

// ── Component ─────────────────────────────────────────────────────────────────
export default function VisionMission() {
  const t = useTranslations("vision_mission");

  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 relative"
    >
      {/* Section header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-14" y={28}>
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-green mb-3">
          PURPOSE &amp; DIRECTION
        </span>
        <h2
          id="vision-mission-heading"
          className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Guiding Principles of Sovereign Integration
        </h2>
      </ScrollReveal>

      {/* Vision + Mission cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {CARDS.map(({ id, glowColor, iconBg, iconColor, icon: Icon, cardLabel, accentColor, titleKey, bodyKey, tags }, i) => (
          <ScrollReveal key={id} delay={i * 0.15} y={36}>
            <div className="h-full p-8 sm:p-10 rounded-3xl glass-card border border-white shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative glow */}
              <div className={`absolute -top-16 -right-16 w-48 h-48 ${glowColor} rounded-full blur-3xl pointer-events-none`} />

              <div>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>

                {/* Card label */}
                <div className={`font-mono text-[11px] font-bold uppercase tracking-wider mb-1 ${accentColor}`}>
                  {cardLabel}
                </div>

                {/* Card title (from messages) */}
                <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900 tracking-tight mb-5">
                  {t(titleKey as VMKey)}
                </h3>

                {/* Body (from messages) */}
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {t(bodyKey as VMKey)}
                </p>
              </div>

              {/* Tag pills */}
              <div className="pt-5 border-t border-slate-200/60 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
