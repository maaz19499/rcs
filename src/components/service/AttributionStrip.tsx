"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export interface AttributionItem {
  value: string;
  label: string;
}

export interface AttributionStripProps {
  /** Attribution sentence, e.g. "Programmes led by our leadership team have:" */
  note: string;
  items: AttributionItem[];
}

/**
 * Leadership track-record figures. The `note` must always be shown with the
 * figures so they are attributed to programmes led by the team, not to RCS Arabia.
 */
export default function AttributionStrip({ note, items }: AttributionStripProps) {
  if (!items.length) return null;

  return (
    <section
      aria-label={note}
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-12 lg:py-16"
    >
      <ScrollReveal y={24}>
        <div className="rcs-card rounded-2xl p-8 sm:p-10">
          <p className="text-text-secondary text-sm sm:text-base mb-6 text-center">{note}</p>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.value} className="flex flex-col items-center text-center gap-1.5">
                <dt className="font-display text-xl sm:text-2xl font-extrabold text-link leading-tight">
                  {item.value}
                </dt>
                <dd className="text-xs text-text-muted leading-snug">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ScrollReveal>
    </section>
  );
}
