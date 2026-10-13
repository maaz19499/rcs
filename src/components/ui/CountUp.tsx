"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  /** The target number to count up to */
  to: number;
  /** Text rendered before the number (e.g. "") */
  prefix?: string;
  /** Text rendered after the number (e.g. "+", "%") */
  suffix?: string;
  /** Duration of the count-up animation in seconds. Default 1.8 */
  duration?: number;
  /** Number of decimal places. Default 0 */
  decimals?: number;
  className?: string;
}

/**
 * Renders a number that counts up from 0 when it scrolls into view.
 * Designed to sit inside stat cards as a drop-in for the raw value.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const proxy = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        val: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate() {
          el.textContent =
            prefix + proxy.val.toFixed(decimals) + suffix;
        },
        onComplete() {
          // ensure final value is exact
          el.textContent = prefix + to.toFixed(decimals) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [to, prefix, suffix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
