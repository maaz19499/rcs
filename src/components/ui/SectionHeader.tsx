import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  /** "brand" for the standard section label, "neutral" for secondary information. */
  variant?: "brand" | "neutral";
  className?: string;
}

/**
 * A short sentence-case label that names the section it introduces.
 * Use it only where it adds information the heading does not already carry.
 */
export function SectionBadge({ children, variant = "brand", className }: SectionBadgeProps) {
  const variantStyles = {
    brand: "text-link",
    neutral: "text-text-muted",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold",
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
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
        {headline}
      </h2>
      {subheadline && (
        <p className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed">{subheadline}</p>
      )}
    </div>
  );
}
