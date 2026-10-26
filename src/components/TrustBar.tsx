"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * bg: optional pill background class — used when the SVG/image colours
 *     require a specific surface to be visible.
 *   "dark"  → bg-gray-800  (for white-path SVGs like AppHelix)
 *   "light" → bg-white     (for dark-path logos on dark theme)
 *    none   → transparent
 *
 * svg: true → use <img> tag (Next.js Image pipeline breaks SVGs)
 *      false → use Next.js <Image> (raster files)
 */
type LogoDef = {
  src: string;
  alt: string;
  w: number;
  h: number;
  svg: boolean;
  bg?: "dark" | "light";
};

const PARTNERS: LogoDef[] = [
  { src: "/InfoServices.png",  alt: "Info Services",  w: 120, h: 40, svg: false },
  { src: "/Frontline.png",     alt: "Frontline",      w: 120, h: 40, svg: false },
  // All paths fill:#fff → needs dark pill
  { src: "/Apphelix.svg",      alt: "AppHelix",       w: 130, h: 40, svg: true,   },
  { src: "/Techdata.jpeg",     alt: "Techdata",       w: 110, h: 40, svg: false },
  // Text paths fill:white, icon fill:#0054FF → needs dark pill for text
  { src: "/Sectona.svg",       alt: "Sectona",        w: 120, h: 40, svg: true,   },
  // fill:#FF5500 inline style — SVG tag needed, no bg pill required
  { src: "/BeyondTrust.svg",   alt: "BeyondTrust",    w: 150, h: 40, svg: true  },
];

function bgClass(bg?: "dark" | "light"): string {
  if (bg === "dark")  return "px-4 py-2 rounded-xl bg-gray-800";
  if (bg === "light") return "px-4 py-2 rounded-xl bg-white dark:bg-gray-800";
  return "";
}

function LogoItem({ logo, id }: { logo: LogoDef; id: string }) {
  const { src, alt, w, h, svg, bg } = logo;

  return (
    <div className={`flex items-center justify-center shrink-0 h-12 ${bgClass(bg)}`}>
      {svg ? (
        // Plain <img> — Next.js Image pipeline doesn't handle SVGs reliably
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={id}
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          style={{ maxHeight: 40, width: "auto" }}
          loading="lazy"
        />
      ) : (
        <Image
          key={id}
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          style={{ maxHeight: 40, width: "auto" }}
        />
      )}
    </div>
  );
}

export default function TrustBar() {
  const t = useTranslations("trust_bar");

  return (
    <section
      className="relative py-10 border-y border-border bg-surface/70 backdrop-blur-md overflow-hidden"
      aria-label={t("heading")}
    >
      {/* Heading */}
      <ScrollReveal>
        <p className="text-center text-sm font-semibold text-link mb-8">
          {t("heading")}
        </p>
      </ScrollReveal>

      {/* Marquee track — two identical sets for a seamless loop */}
      <div className="relative flex" aria-hidden="true">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface/70 to-transparent" />

        <div className="flex items-center gap-16 animate-marquee">
          {/* Set A */}
          {PARTNERS.map((p) => (
            <LogoItem key={`a-${p.alt}`} id={`a-${p.alt}`} logo={p} />
          ))}
          {/* Set B — exact duplicate for seamless wrap */}
          {PARTNERS.map((p) => (
            <LogoItem key={`b-${p.alt}`} id={`b-${p.alt}`} logo={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
