"use client";

import { useGsapFadeUp } from "@/lib/hooks/useGsapFadeUp";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Render as a different tag. Default "div" */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Wraps children in a container that fades-up when it enters the viewport.
 * Use this as a drop-in wrapper for any section or element.
 *
 * @example
 * <ScrollReveal delay={0.1}>
 *   <h2>Hello</h2>
 * </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useGsapFadeUp<HTMLDivElement>({ delay, y });

  return (
    // @ts-expect-error — polymorphic ref is safe here
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
