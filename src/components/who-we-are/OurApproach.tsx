"use client";

import { useTranslations } from "next-intl";
import { Clock, ClipboardCheck, MapPin, Wallet, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

type ApproachKey = keyof ReturnType<typeof useTranslations<"our_approach">>;

// Five "Why RCS Arabia" points: independent principles, not a sequence
const POINTS: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: Clock,          titleKey: "pillar1", descKey: "pillar1_desc" },
  { icon: ClipboardCheck, titleKey: "pillar2", descKey: "pillar2_desc" },
  { icon: MapPin,         titleKey: "pillar3", descKey: "pillar3_desc" },
  { icon: Wallet,         titleKey: "pillar4", descKey: "pillar4_desc" },
  { icon: Layers,         titleKey: "pillar5", descKey: "pillar5_desc" },
];

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

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {POINTS.map(({ icon: Icon, titleKey, descKey }, i) => (
          <div
            key={titleKey}
            style={{ opacity: 0 }}
            className={`rcs-card rcs-card-interactive p-6 ${
              i < 3 ? "lg:col-span-2" : "lg:col-span-3"
            } ${i === POINTS.length - 1 ? "md:col-span-2" : ""}`}
          >
            <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center mb-5">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-lg text-text-primary mb-2">
              {t(titleKey as ApproachKey)}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t(descKey as ApproachKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
