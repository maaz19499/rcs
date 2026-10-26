"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

const PEOPLE = [
  {
    nameKey: "person1_name",
    roleKey: "person1_role",
    bioKey:  "person1_bio",
    tags: ["person1_tag1", "person1_tag2", "person1_tag3"],
  },
  {
    nameKey: "person2_name",
    roleKey: "person2_role",
    bioKey:  "person2_bio",
    tags: ["person2_tag1", "person2_tag2", "person2_tag3"],
  },
] as const;

type LeadershipKey = keyof ReturnType<typeof useTranslations<"leadership">>;

export default function Leadership() {
  const t = useTranslations("leadership");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.15, y: 36, start: "top 82%" });

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="py-24 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="max-w-3xl mb-12">
          <div className="rcs-tag mb-4">{t("badge")}</div>
          <h2
            id="leadership-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-3"
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </ScrollReveal>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PEOPLE.map(({ nameKey, roleKey, bioKey, tags }) => (
            <div
              key={nameKey}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive rcs-card-spectrum rounded-3xl p-8 flex flex-col gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                  <IconUser className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-text-primary leading-snug">
                    {t(nameKey as LeadershipKey)}
                  </div>
                  <div className="text-sm font-semibold text-link mt-0.5">
                    {t(roleKey as LeadershipKey)}
                  </div>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {t(bioKey as LeadershipKey)}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rcs-tag">
                    {t(tag as LeadershipKey)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
