"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import ThemeToggle from "@/components/ThemeToggle";
import { PILLARS, childPath, pillarPath } from "@/lib/services-data";

export default function Navbar() {
  const t = useTranslations("nav");
  const tPillars = useTranslations("pillars");
  const tCatalog = useTranslations("catalog");
  const lt = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openPillar, setOpenPillar] = useState<string | null>(null);
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

  const linkClass = (href: string, active = pathname === href) =>
    cn(
      "flex items-center gap-1.5 transition-colors hover:text-link",
      active ? "text-link" : "text-text-secondary"
    );

  const servicesActive = pathname === "/what-we-offer" || pathname.startsWith("/services");
  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const activeDot = <span className="w-1.5 h-1.5 rounded-full bg-link" />;

  return (
    <div ref={navRef} style={{ opacity: 0 }} className="sticky top-4 z-40 px-4 sm:px-6 mb-2">
      <header
        className={cn(
          "relative max-w-7xl mx-auto backdrop-blur-2xl border border-border rounded-2xl sm:rounded-full shadow-lg shadow-black/5 dark:shadow-black/30 transition-all duration-300",
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

            {/* Services mega dropdown — the hover target spans the full header height so the
                pointer never crosses a dead gap between the link and the panel. */}
            <div
              className="h-20 flex items-center"
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
                className={linkClass("/what-we-offer", servicesActive)}
              >
                <span>{t("services")}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-text-muted transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
                {servicesActive && activeDot}
              </Link>

              <div
                className={cn(
                  "absolute top-full -mt-0.5 inset-x-4 pt-3 transition-all duration-200",
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                )}
              >
                <div className="glass-card rcs-card-spectrum rounded-2xl p-6">
                  <div className="grid grid-cols-5 gap-6">
                    {PILLARS.map((pillar) => (
                      <div key={pillar.key} className="min-w-0">
                        <Link
                          href={pillarPath(pillar)}
                          onClick={closeMenus}
                          className="block text-sm font-bold text-text-primary hover:text-link transition-colors mb-3"
                        >
                          {tPillars(`${pillar.key}.hero.eyebrow`)}
                        </Link>
                        <ul className="space-y-1.5">
                          {pillar.children.map((childKey) => (
                            <li key={childKey}>
                              <Link
                                href={childPath(pillar, childKey)}
                                onClick={closeMenus}
                                className="block text-xs leading-snug text-text-secondary hover:text-link transition-colors"
                              >
                                {tCatalog(`${childKey}.title`)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-border">
                    <Link
                      href="/what-we-offer"
                      onClick={closeMenus}
                      className="text-xs font-semibold text-link hover:underline"
                    >
                      {t("all_services")}
                    </Link>
                  </div>
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

           <span className="hidden">
            <ThemeToggle  />
           </span>

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
        <div className="lg:hidden max-w-7xl mx-auto mt-2 glass-card rcs-card-spectrum rounded-2xl px-4 pb-4 pt-1 max-h-[75vh] overflow-y-auto">
          <ul className="flex flex-col gap-1 pt-3">
            <li>
              <Link
                href="/who-we-are"
                onClick={closeMenus}
                className="block px-3 py-2.5 text-sm font-semibold text-text-primary hover:text-link hover:bg-surface-brand rounded-xl transition-colors"
              >
                {t("about")}
              </Link>
            </li>

            {/* Services: What We Offer link + expandable pillars */}
            <li>
              <div className="flex items-center">
                <Link
                  href="/what-we-offer"
                  onClick={closeMenus}
                  className="flex-1 px-3 py-2.5 text-sm font-semibold text-text-primary hover:text-link hover:bg-surface-brand rounded-xl transition-colors"
                >
                  {t("services")}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  aria-label={t("toggle_services")}
                  className="p-2.5 rounded-xl text-text-secondary hover:bg-surface-brand transition-colors"
                >
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                </button>
              </div>

              {mobileServicesOpen && (
                <ul className="ms-3 ps-3 border-s border-border flex flex-col gap-0.5 py-1">
                  {PILLARS.map((pillar) => {
                    const expanded = openPillar === pillar.key;
                    const name = tPillars(`${pillar.key}.hero.eyebrow`);
                    return (
                      <li key={pillar.key}>
                        <div className="flex items-center">
                          <Link
                            href={pillarPath(pillar)}
                            onClick={closeMenus}
                            className="flex-1 px-3 py-2 text-sm font-medium text-text-primary hover:text-link rounded-lg transition-colors"
                          >
                            {name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setOpenPillar(expanded ? null : pillar.key)}
                            aria-expanded={expanded}
                            aria-label={t("toggle_pillar", { pillar: name })}
                            className="p-2 rounded-lg text-text-muted hover:text-link transition-colors"
                          >
                            <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", expanded && "rotate-180")} />
                          </button>
                        </div>
                        {expanded && (
                          <ul className="ms-3 ps-3 border-s border-border flex flex-col py-1">
                            {pillar.children.map((childKey) => (
                              <li key={childKey}>
                                <Link
                                  href={childPath(pillar, childKey)}
                                  onClick={closeMenus}
                                  className="block px-3 py-1.5 text-xs text-text-secondary hover:text-link transition-colors"
                                >
                                  {tCatalog(`${childKey}.title`)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMenus}
                className="block px-3 py-2.5 text-sm font-semibold text-text-primary hover:text-link hover:bg-surface-brand rounded-xl transition-colors"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
          <div className="mt-3 pt-3 border-t border-border flex items-center justify-between gap-3">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="rcs-button rcs-button-primary rounded-full px-5 text-xs"
            >
              <span>{t("schedule_advisory")}</span>
            </Link>
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
