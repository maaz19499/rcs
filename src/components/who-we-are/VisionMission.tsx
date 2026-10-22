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

// ── Card definitions ──────────────────────────────────────────────────────────
const CARDS = [
  {
    id:       "vision",
    icon:     IconShieldLock,
    titleKey: "vision_label",
    bodyKey:  "vision_body",
    tagKeys:  ["vision_tag1", "vision_tag2"],
  },
  {
    id:       "mission",
    icon:     IconExplore,
    titleKey: "mission_label",
    bodyKey:  "mission_body",
    tagKeys:  ["mission_tag1", "mission_tag2", "mission_tag3"],
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
      <ScrollReveal className="flex flex-col items-center text-center mb-14" y={28}>
        <h2
          id="vision-mission-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight max-w-3xl"
        >
          {t("headline")}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {CARDS.map(({ id, icon: Icon, titleKey, bodyKey, tagKeys }, i) => (
          <ScrollReveal key={id} delay={i * 0.15} y={36}>
            <div className="rcs-card rcs-card-spectrum rcs-card-interactive h-full p-8 pt-10 sm:p-10 sm:pt-12 rounded-3xl relative flex flex-col justify-between">
              {/* Decorative glow */}
              <div className="absolute -top-16 -end-16 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-surface-brand text-link flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-display text-2xl font-bold text-text-primary tracking-tight mb-4">
                  {t(titleKey as VMKey)}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {t(bodyKey as VMKey)}
                </p>
              </div>

              <div className="relative pt-5 border-t border-border flex flex-wrap gap-2">
                {tagKeys.map((key) => (
                  <span key={key} className="rcs-tag">
                    {t(key as VMKey)}
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
