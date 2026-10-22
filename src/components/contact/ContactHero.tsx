"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ClipboardCheck, Globe, ShieldCheck, Users, type LucideIcon } from "lucide-react";

type ChipKey = "chip1" | "chip2" | "chip3" | "chip4";

const CHIPS: { key: ChipKey; Icon: LucideIcon }[] = [
  { key: "chip1", Icon: ShieldCheck },
  { key: "chip2", Icon: Users },
  { key: "chip3", Icon: Globe },
  { key: "chip4", Icon: ClipboardCheck },
];

export default function ContactHero() {
  const t = useTranslations("contact_hero");

  const pillRef  = useRef<HTMLDivElement>(null);
  const h1Ref    = useRef<HTMLHeadingElement>(null);
  const subRef   = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(pillRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(h1Ref.current,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3")
        .fromTo(subRef.current,   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6  }, "-=0.35")
        .fromTo(
          chipsRef.current ? Array.from(chipsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.25"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28 flex flex-col items-center text-center relative"
    >
      {/* Eyebrow pill */}
      <div
        ref={pillRef}
        style={{ opacity: 0 }}
        className="rcs-tag mb-8"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
        </span>
        <span>{t("eyebrow")}</span>
      </div>

      {/* H1 */}
      <h1
        id="contact-hero-heading"
        ref={h1Ref}
        style={{ opacity: 0 }}
        className="font-display text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-text-primary leading-[1.08] tracking-tight max-w-4xl mb-6"
      >
        {t("headline")} {t("headline_gradient")}
      </h1>

      {/* Subtitle */}
      <p
        ref={subRef}
        style={{ opacity: 0 }}
        className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
      >
        {t("subheadline")}
      </p>

      {/* Credibility chips */}
      <div
        ref={chipsRef}
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {CHIPS.map(({ key, Icon }) => (
          <div
            key={key}
            style={{ opacity: 0 }}
            className="rcs-card p-3.5 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-surface-raised border border-border flex items-center justify-center shrink-0 text-brand-blue">
              <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
            </div>
            <div className="flex flex-col text-left rtl:text-right min-w-0">
              <span className="font-mono text-[11px] font-bold text-text-primary truncate">
                {t(`${key}_title` as Parameters<typeof t>[0])}
              </span>
              <span className="text-[11px] text-text-secondary">
                {t(`${key}_desc` as Parameters<typeof t>[0])}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
