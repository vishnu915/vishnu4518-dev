import { useEffect } from "react";

/** Lenis smooth scrolling, initialised client-side only. */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let destroy = () => {};

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destroy = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });

    return () => destroy();
  }, []);
}
