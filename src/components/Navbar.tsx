"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown, Shield, Cpu, Headset } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import ThemeToggle from "@/components/ThemeToggle";

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

  const linkClass = (href: string) =>
    cn(
      "flex items-center gap-1.5 transition-colors hover:text-link",
      pathname === href ? "text-link" : "text-text-secondary"
    );

  const activeDot = <span className="w-1.5 h-1.5 rounded-full bg-link" />;

  return (
    <div ref={navRef} style={{ opacity: 0 }} className="sticky top-4 z-40 px-4 sm:px-6 mb-2">
      <header
        className={cn(
          "max-w-7xl mx-auto backdrop-blur-2xl border border-border rounded-2xl sm:rounded-full shadow-lg shadow-black/5 dark:shadow-black/30 transition-all duration-300",
          scrolled ? "bg-surface/95" : "bg-surface/80"
        )}
      >
        <div className="px-6 h-20 flex items-center justify-between">
          {/* Logo — the wordmark is dark blue, so it sits on a light plate in dark mode */}
          <Link
            href="/"
            aria-label="RCS Arabia Homepage"
            className="flex items-center rounded-xl py-1 dark:bg-white dark:px-3"
          >
            <Image
              className="h-[66.6px] w-45"
              src="/Rcs_Logo.png"
              alt="RCS Arabia"
              width={180}
              height={66.6}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-heading text-[15px] font-semibold">
            <Link href="/" className={linkClass("/")}>
              <span>{t("home")}</span>
              {pathname === "/" && activeDot}
            </Link>
            <Link href="/who-we-are" className={linkClass("/who-we-are")}>
              <span>{t("about")}</span>
              {pathname === "/who-we-are" && activeDot}
            </Link>

            {/* Services mega dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
              }}
            >
              <Link
                href="/what-we-offer"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className={linkClass("/what-we-offer")}
              >
                <span>{t("services")}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-text-muted transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
                {pathname === "/what-we-offer" && activeDot}
              </Link>

              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 transition-all duration-200",
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                )}
              >
                <div className="glass-card rcs-card-spectrum rounded-2xl p-3 pt-4">
                  {MEGA_LINKS.map(({ icon: Icon, titleKey, subtitleKey, href }) => (
                    <Link
                      key={titleKey}
                      href={href}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-brand transition-colors"
                    >
                      <Icon className="w-5 h-5 text-link shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-text-primary">{t(titleKey)}</div>
                        {t(subtitleKey) && (
                          <div className="text-xs text-text-secondary">{t(subtitleKey)}</div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className={linkClass("/contact")}>
              <span>{t("contact")}</span>
              {pathname === "/contact" && activeDot}
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:920088800"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-text-primary bg-surface hover:bg-surface-muted border border-border transition-colors"
            >
              <svg
                className="w-4 h-4 text-link"
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
              <span dir="ltr" className="font-bold tabular-nums">920088800</span>
            </a>

            <Link
              href="/contact"
              className="rcs-button rcs-button-primary group rounded-full px-5 text-xs sm:text-sm"
            >
              <span>{t("schedule_advisory")}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <ThemeToggle />

            {/* Language toggle */}
            <Link
              href={pathname}
              locale={altLocale}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-text-secondary hover:border-border-brand hover:text-link transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {lt("lang_toggle")}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-text-secondary hover:bg-surface-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 glass-card rcs-card-spectrum rounded-2xl px-4 pb-4 pt-1">
          <ul className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-text-primary hover:text-link hover:bg-surface-brand rounded-xl transition-colors"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-border flex items-center justify-between gap-3">
            <a href="tel:920088800" dir="ltr" className="text-sm font-bold text-text-primary tabular-nums">
              920088800
            </a>
            <ThemeToggle />
            <Link
              href={pathname}
              locale={altLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-text-secondary"
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
