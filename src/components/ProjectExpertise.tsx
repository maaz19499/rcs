import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "@/i18n/navigation";

type ExpertiseKey = keyof ReturnType<typeof useTranslations<"expertise">>;

const PRACTICES = [
  { titleKey: "p1_title", descKey: "p1_desc" },
  { titleKey: "p2_title", descKey: "p2_desc" },
  { titleKey: "p3_title", descKey: "p3_desc" },
  { titleKey: "p4_title", descKey: "p4_desc" },
  { titleKey: "p5_title", descKey: "p5_desc" },
  { titleKey: "p6_title", descKey: "p6_desc" },
] as const;

export default function ProjectExpertise() {
  const t = useTranslations("expertise");

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          className="max-w-3xl mb-16"
          headline={t("headline")}
          subheadline={t("subheadline")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICES.map((p) => (
            <div key={p.titleKey} className="rcs-card rcs-card-interactive rounded-2xl p-7">
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                {t(p.titleKey as ExpertiseKey)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(p.descKey as ExpertiseKey)}
              </p>
            </div>
          ))}

          {/* Feature card */}
          <div className="rcs-card rcs-card-spectrum rounded-2xl p-7 pt-8 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="rcs-tag rcs-tag-brand mb-3">{t("p7_badge")}</span>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                {t("p7_title")}
              </h3>
              <p className="text-sm text-text-secondary max-w-3xl leading-relaxed">
                {t("p7_desc")}
              </p>
            </div>
            <Link
              href="/contact"
              className="rcs-button rcs-button-primary group rounded-full px-6 whitespace-nowrap self-start md:self-center shrink-0"
            >
              <span>{t("p7_cta")}</span>
              <ArrowRight
                className="w-4 h-4 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}