import { useTranslations } from "next-intl";
import { Landmark, HeartPulse, Building, RadioTower, Building2, Hotel } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IndustriesKey = keyof ReturnType<typeof useTranslations<"industries">>;

const SECTORS: { titleKey: string; descKey: string; Icon: LucideIcon }[] = [
  { titleKey: "sector1_title", descKey: "sector1_desc", Icon: Landmark },
  { titleKey: "sector2_title", descKey: "sector2_desc", Icon: HeartPulse },
  { titleKey: "sector3_title", descKey: "sector3_desc", Icon: Building },
  { titleKey: "sector4_title", descKey: "sector4_desc", Icon: RadioTower },
  { titleKey: "sector5_title", descKey: "sector5_desc", Icon: Building2 },
  { titleKey: "sector6_title", descKey: "sector6_desc", Icon: Hotel },
];

export default function Industries() {
  const t = useTranslations("industries");

  return (
    <section className="py-24 bg-surface-muted/60 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl">{t("headline")}</h2>
          <p className="text-text-secondary text-base mt-3">{t("subheadline")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map(({ titleKey, descKey, Icon }) => (
            <div key={titleKey} className="rcs-card rcs-card-interactive rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-surface-brand text-link flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary mb-1.5 leading-snug">
                {t(titleKey as IndustriesKey)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(descKey as IndustriesKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
