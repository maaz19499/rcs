"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerOptions {
  /** CSS selector for child items relative to the container. Default ":scope > *" */
  selector?: string;
  /** Distance in px each item travels upward. Default 36 */
  y?: number;
  /** Duration per item tween. Default 0.65 */
  duration?: number;
  /** Stagger interval between items. Default 0.1 */
  stagger?: number;
  /** Start trigger position. Default "top 85%" */
  start?: string;
}

/**
 * Attaches a staggered fade-up-on-scroll tween to matching children
 * of the returned container ref.
 */
export function useGsapStagger<T extends HTMLElement = HTMLElement>({
  selector = ":scope > *",
  y = 36,
  duration = 0.65,
  stagger = 0.1,
  start = "top 85%",
}: StaggerOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [selector, y, duration, stagger, start]);

  return ref;
}
