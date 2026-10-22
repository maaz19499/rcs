import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";

type TrackRecordKey = keyof ReturnType<typeof useTranslations<"track_record">>;

/**
 * Leadership track record. The attribution note is always shown with the
 * figures so they read as programmes led by the team, not as RCS Arabia totals.
 */
export default function TrackRecord() {
  const t = useTranslations("track_record");
  const items = t.raw("items" as TrackRecordKey) as { value: string; label: string }[];

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
      </div>
    </section>
  );
}
