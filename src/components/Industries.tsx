import { useTranslations } from "next-intl";
import { Landmark, HeartPulse, Building, RadioTower, Building2, Hotel, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { sectorPathForIndKey } from "@/lib/sectors";

type IndustriesKey = keyof ReturnType<typeof useTranslations<"industries">>;

// `indKey` maps a homepage card to its sector page (see src/lib/sectors.ts), when one exists.
const SECTORS: { titleKey: string; descKey: string; Icon: LucideIcon; href?: string }[] = [
  { titleKey: "sector1_title", descKey: "sector1_desc", Icon: Landmark,   href: sectorPathForIndKey("ind1") },
  { titleKey: "sector2_title", descKey: "sector2_desc", Icon: HeartPulse, href: sectorPathForIndKey("ind2") },
  { titleKey: "sector3_title", descKey: "sector3_desc", Icon: Building,   href: sectorPathForIndKey("ind3") },
  { titleKey: "sector4_title", descKey: "sector4_desc", Icon: RadioTower, href: sectorPathForIndKey("ind4") },
  { titleKey: "sector5_title", descKey: "sector5_desc", Icon: Building2,  href: sectorPathForIndKey("ind5") },
  { titleKey: "sector6_title", descKey: "sector6_desc", Icon: Hotel,      href: sectorPathForIndKey("ind6") },
];

export default function Industries() {
  const t = useTranslations("industries");
  const tSectors = useTranslations("sectors");

  return (
    <section className="py-24 bg-surface-muted/60 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl">{t("headline")}</h2>
          <p className="text-text-secondary text-base mt-3">{t("subheadline")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map(({ titleKey, descKey, Icon, href }) => {
            const body = (
              <>
                <div className="w-11 h-11 rounded-xl bg-surface-brand text-link flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-base text-text-primary mb-1.5 leading-snug">
                  {t(titleKey as IndustriesKey)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(descKey as IndustriesKey)}
                </p>
                {href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                    <span>{tSectors("card_link")}</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </>
            );
            const card = "rcs-card rcs-card-interactive rounded-2xl p-6";
            return href ? (
              <Link key={titleKey} href={href} className={`${card} group block`}>
                {body}
              </Link>
            ) : (
              <div key={titleKey} className={card}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
