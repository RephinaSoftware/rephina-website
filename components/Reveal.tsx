"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps children in a div that fades-and-slides up the first time it enters
 * the viewport. CSS does all the heavy lifting (see `.reveal` in globals.css)
 * so this stays small and SSR-friendly.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      el?.classList.add("is-visible");
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element = Tag as any;
  return (
    <Element
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Element>
  );
}
