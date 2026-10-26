"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

const PROJECTS = [
  { titleKey: "project1_title", descKey: "project1_desc", tagKey: "project1_tag" },
  { titleKey: "project2_title", descKey: "project2_desc", tagKey: "project2_tag" },
  { titleKey: "project3_title", descKey: "project3_desc", tagKey: "project3_tag" },
  { titleKey: "project4_title", descKey: "project4_desc", tagKey: "project4_tag" },
  { titleKey: "project5_title", descKey: "project5_desc", tagKey: "project5_tag" },
  { titleKey: "project6_title", descKey: "project6_desc", tagKey: "project6_tag" },
] as const;

type RefsKey = keyof ReturnType<typeof useTranslations<"project_references">>;

export default function ProjectReferences() {
  const t = useTranslations("project_references");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.09, y: 36, start: "top 82%" });

  return (
    <section
      id="project-references"
      aria-labelledby="project-references-heading"
      className="py-24 lg:py-32 relative bg-surface/50 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="max-w-3xl mb-12">
          <div className="rcs-tag mb-4">{t("badge")}</div>
          <h2
            id="project-references-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-3"
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
          <p className="mt-3 text-xs font-semibold text-text-muted italic">
            {t("attribution")}
          </p>
        </ScrollReveal>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(({ titleKey, descKey, tagKey }) => (
            <div
              key={titleKey}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-text-primary leading-snug mb-2">
                  {t(titleKey as RefsKey)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(descKey as RefsKey)}
                </p>
              </div>
              <div>
                <span className="rcs-tag rcs-tag-brand">{t(tagKey as RefsKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
