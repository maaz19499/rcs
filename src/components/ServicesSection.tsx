import { useTranslations } from "next-intl";
import {
  BarChart2,
  Cpu,
  DollarSign,
  Settings,
  Users,
  Code2,
} from "lucide-react";

const SERVICES = [
  { titleKey: "item1_title", descKey: "item1_desc", Icon: BarChart2 },
  { titleKey: "item2_title", descKey: "item2_desc", Icon: Cpu },
  { titleKey: "item3_title", descKey: "item3_desc", Icon: DollarSign },
  { titleKey: "item4_title", descKey: "item4_desc", Icon: Settings },
  { titleKey: "item5_title", descKey: "item5_desc", Icon: Users },
  { titleKey: "item6_title", descKey: "item6_desc", Icon: Code2 },
] as const;

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="rcs-tag mb-4">
            {t("badge")}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-tight">
            {t("headline")}
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ titleKey, descKey, Icon }) => (
            <div
              key={titleKey}
              className="rcs-card rcs-card-interactive group rounded-2xl p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-raised border border-border text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-primary mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
