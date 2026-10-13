"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeUpOptions {
  /** Distance in px the element travels upward. Default 40 */
  y?: number;
  /** Animation duration in seconds. Default 0.7 */
  duration?: number;
  /** Delay before the tween starts (seconds). Default 0 */
  delay?: number;
  /** Start trigger position. Default "top 88%" */
  start?: string;
}

/**
 * Attaches a single fade-up-on-scroll tween to the returned ref.
 * The element is hidden with `visibility:hidden` in its initial state
 * (set via GSAP) so it doesn't flash before JS runs.
 */
export function useGsapFadeUp<T extends HTMLElement = HTMLElement>({
  y = 40,
  duration = 0.7,
  delay = 0,
  start = "top 88%",
}: FadeUpOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [y, duration, delay, start]);

  return ref;
}
