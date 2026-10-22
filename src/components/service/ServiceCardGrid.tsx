"use client";

import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceCardItem {
  title: string;
  description: string;
  /** Locale-less path, e.g. "/services/ai-data/genai-solutions". Omit for a non-link card. */
  href?: string;
}

export interface ServiceCardGridProps {
  /** Unique section id (used for aria-labelledby) */
  id: string;
  badge?: string;
  headline?: string;
  subheadline?: string;
  items: ServiceCardItem[];
  /** Label for the link on cards that have an href */
  linkLabel?: string;
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

/**
 * Responsive grid of title + description cards.
 * Cards with an `href` link to a nested service page; cards without one are
 * plain (used for use cases and for the member services of a category).
 */
export default function ServiceCardGrid({
  id,
  badge,
  headline,
  subheadline,
  items,
  linkLabel,
}: ServiceCardGridProps) {
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 28, start: "top 84%" });

  if (!items.length) return null;

  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headline ? headingId : undefined}
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-20 lg:py-28"
    >
      {(badge || headline || subheadline) && (
        <ScrollReveal className="flex flex-col items-center text-center mb-14 space-y-3 max-w-3xl mx-auto" y={20}>
          {badge && <div className="rcs-tag">{badge}</div>}
          {headline && (
            <h2
              id={headingId}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
            >
              {headline}
            </h2>
          )}
          {subheadline && (
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{subheadline}</p>
          )}
        </ScrollReveal>
      )}

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => {
          const body = (
            <>
              <div>
                <h3 className="font-display font-bold text-base text-text-primary mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
              {item.href && linkLabel && (
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-link">
                  <span>{linkLabel}</span>
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </span>
              )}
            </>
          );

          return item.href ? (
            <Link
              key={item.title}
              href={item.href}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive group p-6 rounded-xl flex flex-col justify-between"
            >
              {body}
            </Link>
          ) : (
            <div
              key={item.title}
              style={{ opacity: 0 }}
              className="rcs-card p-6 rounded-xl flex flex-col justify-between"
            >
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
