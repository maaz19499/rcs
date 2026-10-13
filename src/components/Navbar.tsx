"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown, Shield, Cpu, Headset } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

const NAV_LINKS = [
  { key: "about",    href: "/who-we-are" },
  { key: "services", href: "/what-we-offer"   },
  { key: "contact",  href: "/contact"    },
] as const;

const MEGA_LINKS = [
  { icon: Cpu,     titleKey: "mega_link1_title", subtitleKey: "mega_link1_subtitle", href: "/services/ict-system-integration" },
  { icon: Shield,  titleKey: "mega_link2_title", subtitleKey: "mega_link2_subtitle", href: "/services/ai-digital-twin" },
  { icon: Headset, titleKey: "mega_link3_title", subtitleKey: "mega_link3_subtitle", href: "/services/data-centers" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const lt = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide-down entrance on first mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -24 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, []);

  const altLocale = locale === "en" ? "ar" : "en";

  return (
    <div ref={navRef} style={{ opacity: 0 }} className="sticky top-4 z-40 px-4 sm:px-6 mb-2">
      <header
        className={cn(
          "max-w-7xl mx-auto backdrop-blur-2xl border border-white/90 rounded-2xl sm:rounded-full shadow-lg shadow-slate-900/5 transition-all duration-300",
          scrolled ? "bg-white/95" : "bg-white/80"
        )}
      >
        <div className="px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="RCS Arabia Homepage" className="flex items-center gap-3 group py-2">
            {/* <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-navy to-brand-slate border border-slate-700/60 flex items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-[family-name:var(--font-manrope)] font-extrabold text-white text-base tracking-wider">
                R<span className="text-brand-green">C</span>
                <span className="text-brand-orange">S</span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-[family-name:var(--font-manrope)] font-extrabold text-slate-900 text-lg tracking-tight">
                  {t("brand_name")}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-green" />
              </div>
              <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase font-mono">
                {t("brand_tagline")}
              </span>
            </div> */}
            <Image 
            className="dark:invert h-[60px] w-[300px]"
              src="/Rcs_Logo.png"
              alt="Next.js logo"
              width={300}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-[family-name:var(--font-manrope)] text-[15px] font-semibold text-slate-700">
            <Link href="/" className={cn("hover:text-brand-green font-bold flex items-center gap-1.5", pathname=="/" && "text-brand-green")}>
              <span>{t("home")}</span>
              {
                pathname=="/" &&
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              }
             
              <span/>
            </Link>
            <Link href="/who-we-are" className={cn("hover:text-brand-green  flex items-center gap-1.5 transition-colors", pathname=="/who-we-are" && "text-brand-green")}>
              <span>
                {t("about")}
                </span>
              {
                pathname=="/who-we-are" &&
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              }
            </Link>

            {/* Services mega dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/what-we-offer"
                className={cn("flex items-center gap-1 text-slate-700 hover:text-brand-green transition-colors", pathname=="/what-we-offer" && "text-brand-green")}
              >
                <span>{t("services")}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-slate-400 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
                {
                pathname=="/what-we-offer" &&
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              }
              </Link>

              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 transition-all duration-200",
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                )}
              >
                <div className="glass-card rounded-2xl p-3 shadow-2xl border border-white">
                  {MEGA_LINKS.map(({ icon: Icon, titleKey, subtitleKey, href }) => (
                    <Link
                      key={titleKey}
                      href={href}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-brand-green shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{t(titleKey)}</div>
                        <div className="text-[11px] text-slate-500">{t(subtitleKey)}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className={cn("hover:text-brand-green  flex items-center gap-1.5 transition-colors", pathname=="/contact" && "text-brand-green")}>
             <span>
              {t("contact")}
              </span> 
              {
                pathname=="/contact" &&
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              }
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:920088800"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white/90 hover:bg-white border border-slate-200 shadow-sm transition-all"
            >
              <svg
                className="w-4 h-4 text-brand-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="font-mono tracking-tight font-bold">920088800</span>
            </a>

            <Link
              href="/contact"
              className="relative group overflow-hidden rounded-full p-[1px] shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-emerald-600 transition-all duration-300 group-hover:scale-105" />
              <div className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-[family-name:var(--font-manrope)] font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2 group-hover:shadow-lg transition-all">
                <span>{t("schedule_advisory")}</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>

            {/* Language toggle */}
            <Link
              href={pathname}
              locale={altLocale}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {lt("lang_toggle")}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 glass-card rounded-2xl border border-white px-4 pb-4 shadow-xl">
          <ul className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-green hover:bg-emerald-50/50 rounded-xl transition-colors"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
            <a href="tel:920088800" className="text-sm font-bold text-slate-900 font-mono">
              920088800
            </a>
            <Link
              href={pathname}
              locale={altLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              <Globe className="w-3.5 h-3.5" />
              {lt("lang_toggle")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
