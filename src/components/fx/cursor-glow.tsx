import { useEffect, useRef } from "react";
import { useHydrated } from "@/hooks/use-hydrated";

/** Cursor glow + spotlight follower (desktop only). */
export function CursorGlow() {
  const hydrated = useHydrated();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hydrated) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      document.documentElement.style.setProperty("--mx", `${x}px`);
      document.documentElement.style.setProperty("--my", `${y}px`);
    };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [hydrated]);

  if (!hydrated) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80] hidden md:block">
      <div
        ref={ring}
        className="absolute -ml-[22px] -mt-[22px] h-11 w-11 rounded-full border border-primary/50 opacity-70"
      />
      <div
        ref={dot}
        className="absolute -ml-[140px] -mt-[140px] h-[280px] w-[280px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 55%, transparent), transparent 65%)",
        }}
      />
    </div>
  );
}
