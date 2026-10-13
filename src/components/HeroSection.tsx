"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Narrative column — staggered entrance
      tl.fromTo(badgeRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3")
        .fromTo(descRef.current,     { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6  }, "-=0.35")
        .fromTo(ctaRef.current,      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
        .fromTo(statsRef.current,    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5  }, "-=0.25");

      // HUD card slides in from the right
      tl.fromTo(
        hudRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.8"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative pt-12 sm:pt-20 lg:pt-24 pb-20 lg:pb-32 overflow-hidden mesh-gradient"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Narrative Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div
              ref={badgeRef}
              style={{ opacity: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/25 text-slate-800 text-xs font-mono font-semibold mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
              </span>
              <span className="tracking-wide text-slate-800">{t("badge")}</span>
            </div>

            {/* H1 */}
            <h1
              ref={headlineRef}
              style={{ opacity: 0 }}
              className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              {t("headline")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-600 to-brand-green-dark">
                {t("headline_gradient")}
              </span>{" "}
              {t("headline_suffix")}
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              style={{ opacity: 0 }}
              className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-10"
            >
              {t("subheadline")}
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              style={{ opacity: 0 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-[family-name:var(--font-manrope)] font-bold text-sm tracking-wide text-center shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>{t("cta_primary")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full glass-card text-slate-800 font-[family-name:var(--font-manrope)] font-bold text-sm tracking-wide text-center hover:bg-white hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 border border-slate-200"
              >
                <LayoutDashboard className="w-5 h-5 text-brand-orange" />
                <span>{t("cta_secondary")}</span>
              </Link>
            </div>

            {/* Stats pillars */}
            <div
              ref={statsRef}
              style={{ opacity: 0 }}
              className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-6 text-left"
            >
              <div>
                <div className="font-[family-name:var(--font-manrope)] text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t("stat1_value")}{" "}
                  <span className="text-brand-green text-lg font-bold">{t("stat1_suffix")}</span>
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                  {t("stat1_label")}
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-manrope)] text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t("stat2_value")}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                  {t("stat2_label")}
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-manrope)] text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t("stat3_value")}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                  {t("stat3_label")}
                </div>
              </div>
            </div>
          </div>

          {/* ── Telemetry HUD Column ── */}
          <div ref={hudRef} style={{ opacity: 0 }} className="lg:col-span-5 relative">
            {/* Glow halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-brand-orange/15 to-emerald-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

            <div className="relative glass-card rounded-3xl p-3.5 sm:p-4 border border-white/90 shadow-2xl overflow-hidden">
              {/* Datacenter image frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                <Image
                  src="/hero_1.avif"
                  alt="office"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
                  width={640}
                  height={480}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/40" />

                {/* Top telemetry pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {t("telemetry_status")}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-bold font-mono">
                    {t("telemetry_badge")}
                  </span>
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] uppercase tracking-widest text-emerald-300 font-mono font-bold mb-1">
                    {t("telemetry_node")}
                  </div>
                  <div className="font-[family-name:var(--font-manrope)] text-base sm:text-lg font-bold leading-tight">
                    {t("telemetry_title")}
                  </div>
                </div>
              </div>

              {/* HUD metrics strip */}
              <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-brand-green shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">{t("metric1_label")}</div>
                    <div className="text-sm font-extrabold text-slate-900">{t("metric1_value")}</div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-brand-orange shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">{t("metric2_label")}</div>
                    <div className="text-sm font-extrabold text-slate-900">{t("metric2_value")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent: Zero Breaches */}
            <div className="hidden sm:block absolute -top-6 -right-6 glass-card p-4 rounded-2xl shadow-xl border border-white animate-[floatSlow_6s_ease-in-out_infinite] max-w-[210px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-green text-white flex items-center justify-center shadow-md shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t("float_card1_title")}</div>
                  <div className="text-[11px] text-slate-500">{t("float_card1_desc")}</div>
                </div>
              </div>
            </div>

            {/* Floating accent: Hardware Swap */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl shadow-xl border border-white animate-[floatDelayed_7s_ease-in-out_infinite] max-w-[230px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-md shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t("float_card2_title")}</div>
                  <div className="text-[11px] text-slate-500">{t("float_card2_desc")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
