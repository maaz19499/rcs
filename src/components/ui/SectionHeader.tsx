import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "green" | "orange" | "slate";
  className?: string;
}

export function SectionBadge({ children, variant = "green", className }: SectionBadgeProps) {
  const variantStyles = {
    green: "bg-emerald-50 text-brand-green border-emerald-200",
    orange: "bg-amber-50 text-brand-orange border-amber-200",
    slate: "bg-slate-100 text-slate-500 border-slate-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  badge?: React.ReactNode;
  headline: React.ReactNode;
  subheadline?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  headline,
  subheadline,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center mx-auto" : "", className)}>
      {badge && <div className="mb-4">{badge}</div>}
      <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {headline}
      </h2>
      {subheadline && (
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">{subheadline}</p>
      )}
    </div>
  );
}
