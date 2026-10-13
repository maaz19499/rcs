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
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t("headline")}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ titleKey, descKey, Icon }) => (
            <div
              key={titleKey}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors mb-5">
                <Icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
