import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

type TrackRecordKey = keyof ReturnType<typeof useTranslations<"track_record">>;
type Stat = { value: string; label: string };

/**
 * Proof strip shown right after the hero: delivery numbers, managed-services
 * outcome KPIs and credentials. Every figure is shown with its attribution note
 * so it reads as programmes led by the team, not as RCS Arabia totals.
 */
export default function TrackRecord() {
  const t = useTranslations("track_record");
  const tPillars = useTranslations("pillars");
  const items = t.raw("items" as TrackRecordKey) as Stat[];
  const credentials = t.raw("credentials" as TrackRecordKey) as string[];
  const kpis = (
    tPillars.raw("managed_services.attribution" as never) as { items: Stat[] }
  ).items;

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          className="max-w-3xl mb-12"
          headline={t("headline")}
          subheadline={t("subheadline")}
        />

        <p className="text-sm font-semibold text-text-secondary mb-5">{t("note")}</p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.value} className="rcs-card rcs-card-interactive rounded-2xl p-7">
              <dt className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-link mb-2">
                {item.value}
              </dt>
              <dd className="text-sm text-text-secondary leading-relaxed">{item.label}</dd>
            </div>
          ))}
        </dl>

        <p className="text-sm font-semibold text-text-secondary mt-10 mb-5">{t("kpi_note")}</p>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => (
            <div key={kpi.value} className="rcs-card rounded-2xl p-6">
              <dt className="font-display text-xl lg:text-2xl font-extrabold tracking-tight text-text-primary mb-1.5">
                {kpi.value}
              </dt>
              <dd className="text-sm text-text-secondary leading-relaxed">{kpi.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-text-secondary">
            {t("credentials_heading")}
          </span>
          {credentials.map((credential) => (
            <span key={credential} className="rcs-tag rcs-tag-brand inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              {credential}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
