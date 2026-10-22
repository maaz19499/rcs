"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Threads from "./ui/Thread-Bg";

// Logo spectrum, in the same order as --spectrum-gradient in globals.css
const SPECTRUM = ["#D91F26", "#F18A26", "#F0C21A", "#319B50", "#00A5D8", "#0874C9"];

// Threads are desktop/tablet only (md and up): no WebGL context is created on phones
const THREADS_QUERY = "(min-width: 768px)";
const subscribeThreads = (onChange: () => void) => {
  const mql = window.matchMedia(THREADS_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};
const getThreadsSnapshot = () => window.matchMedia(THREADS_QUERY).matches;
const getThreadsServerSnapshot = () => false;

const STATS = [
  { valueKey: "stat1_value", suffixKey: "stat1_suffix", labelKey: "stat1_label" },
  { valueKey: "stat2_value", suffixKey: null, labelKey: "stat2_label" },
  { valueKey: "stat3_value", suffixKey: null, labelKey: "stat3_label" },
] as const;

export default function HeroSection() {
  const t = useTranslations("hero");
  const showThreads = useSyncExternalStore(subscribeThreads, getThreadsSnapshot, getThreadsServerSnapshot);

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(introRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(mediaRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 overflow-hidden mesh-gradient"
    >
      {/* Animated threads in the logo spectrum, top area only, behind the headline */}
      {showThreads && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-104 lg:h-120 mask-[linear-gradient(to_bottom,black_55%,transparent)]"
          aria-hidden="true"
        >
          <Threads
            colors={SPECTRUM}
            lineCount={43}
            thickness={0.6}
            softness={1.3}
            amplitude={1.7}
            distance={0.2}
            waves={1.05}
            speed={0.6}
            split={0.04}
            fray={0.5}
            angle={25}
            taper={0.85}
            brightness={1.4}
            parting={0}
            enableMouseInteraction={true}
            fade={0}
            opacity={1}
          />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline: full width */}

        <h1
          ref={headlineRef}
          style={{ opacity: 0 }}
          className="max-w-5xl font-extrabold"
        >
          {t("headline")}
        </h1>

        {/* Intro: supporting copy and actions */}
        <div
          ref={introRef}
          style={{ opacity: 0 }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          <p className="lg:col-span-7 max-w-2xl text-text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link href="/contact" className="rcs-button rcs-button-primary group rounded-full px-7">
              <span>{t("cta_primary")}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link href="/what-we-offer" className="rcs-button rcs-button-secondary rounded-full px-7">
              {t("cta_secondary")}
            </Link>
          </div>
        </div>

        {/* Photo with the stats band attached underneath */}
        <div
          ref={mediaRef}
          style={{ opacity: 0 }}
          className="relative mt-12 lg:mt-16 overflow-hidden rounded-3xl border border-border bg-surface shadow-(--shadow-card-raised)"
        >
          <hr className="spectrum-gradient-rule absolute inset-x-0 top-0 z-10" aria-hidden="true" />

          <div className="relative aspect-4/3 sm:aspect-video lg:aspect-2/1 bg-surface-muted">
            <Image
              src="/hero_2.jpg"
              alt={t("image_alt")}
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[center_70%]"
            />

            {/* Location chip: floats gently, with a pulsing status dot */}
            <div className="absolute bottom-4 start-4 sm:bottom-6 sm:start-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[calc(100%-2rem)] animate-[floatSlow_6s_ease-in-out_infinite]">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <MapPin className="w-4 h-4 text-link shrink-0" aria-hidden="true" />
              <span className="text-sm font-semibold text-text-primary">{t("image_caption")}</span>
            </div>
          </div>

          {/* Stats band */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border bg-surface">
            {STATS.map(({ valueKey, suffixKey, labelKey }) => (
              <div key={valueKey} className="px-6 py-5 sm:px-8 sm:py-6">
                <p className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight text-text-primary">
                  {t(valueKey)}
                  {suffixKey && (
                    <span className="ms-1.5 text-lg font-bold text-link">{t(suffixKey)}</span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-text-secondary">{t(labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
