import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Glass card with 3D tilt + pointer-tracked glow. */
export function TiltCard({
  children,
  className,
  max = 9,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50, on: false });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        setTilt({ rx: (0.5 - py) * max * 2, ry: (px - 0.5) * max * 2 });
        setSpot({ x: px * 100, y: py * 100, on: true });
      }}
      onMouseLeave={() => {
        setTilt({ rx: 0, ry: 0 });
        setSpot((s) => ({ ...s, on: false }));
      }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={cn(
        "glass glow-border group relative overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_30px_90px_-30px_var(--glow)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${spot.x}% ${spot.y}%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)`,
          opacity: spot.on ? 1 : 0,
        }}
      />
      <div className="relative" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
