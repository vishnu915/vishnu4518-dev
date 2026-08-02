import { motion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export type FlowNode = {
  label: string;
  detail?: string;
  kind?: "start" | "agent" | "tool" | "human" | "data" | "end";
};

export type FlowAccent = "violet" | "cyan" | "emerald" | "amber" | "rose";
export type FlowMotion = "pulse" | "wave" | "orbit" | "trace" | "cascade";

/** Each accent is a distinct multi-hue palette so every node gets its own color. */
const PALETTES: Record<FlowAccent, string[]> = {
  violet: [
    "oklch(0.55 0.245 296)",
    "oklch(0.62 0.23 315)",
    "oklch(0.66 0.2 340)",
    "oklch(0.7 0.17 20)",
    "oklch(0.74 0.15 60)",
    "oklch(0.76 0.14 120)",
    "oklch(0.74 0.14 175)",
    "oklch(0.76 0.135 233)",
    "oklch(0.66 0.2 268)",
  ],
  cyan: [
    "oklch(0.76 0.135 233)",
    "oklch(0.74 0.14 205)",
    "oklch(0.74 0.15 180)",
    "oklch(0.74 0.16 158)",
    "oklch(0.78 0.16 135)",
    "oklch(0.82 0.16 108)",
    "oklch(0.72 0.15 255)",
    "oklch(0.64 0.2 285)",
  ],
  emerald: [
    "oklch(0.75 0.17 155)",
    "oklch(0.8 0.17 128)",
    "oklch(0.84 0.16 100)",
    "oklch(0.82 0.16 78)",
    "oklch(0.74 0.16 195)",
    "oklch(0.7 0.16 230)",
  ],
  amber: [
    "oklch(0.84 0.16 92)",
    "oklch(0.8 0.17 68)",
    "oklch(0.74 0.19 42)",
    "oklch(0.68 0.21 20)",
    "oklch(0.7 0.19 350)",
    "oklch(0.7 0.16 300)",
  ],
  rose: [
    "oklch(0.68 0.22 12)",
    "oklch(0.66 0.23 350)",
    "oklch(0.64 0.24 325)",
    "oklch(0.62 0.23 295)",
    "oklch(0.66 0.19 265)",
    "oklch(0.74 0.15 225)",
  ],
};

function nodeVariants(motionStyle: FlowMotion, i: number): Variants {
  switch (motionStyle) {
    case "wave":
      return {
        hidden: { opacity: 0, y: i % 2 === 0 ? 22 : -22, rotate: -3 },
        show: { opacity: 1, y: 0, rotate: 0 },
      };
    case "orbit":
      return {
        hidden: { opacity: 0, scale: 0.6, rotate: -18 },
        show: { opacity: 1, scale: 1, rotate: 0 },
      };
    case "trace":
      return {
        hidden: { opacity: 0, x: -28, skewX: 8 },
        show: { opacity: 1, x: 0, skewX: 0 },
      };
    case "cascade":
      return {
        hidden: { opacity: 0, y: -26, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    default:
      return {
        hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
        show: { opacity: 1, scale: 1, filter: "blur(0px)" },
      };
  }
}

function nodeTransition(motionStyle: FlowMotion, i: number): Transition {
  switch (motionStyle) {
    case "orbit":
      return {
        type: "spring",
        stiffness: 260,
        damping: 16,
        delay: i * 0.07,
      };
    case "trace":
      return { duration: 0.42, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] };
    case "cascade":
      return { duration: 0.55, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] };
    case "wave":
      return { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] };
    default:
      return { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] };
  }
}

function glowAnimation(motionStyle: FlowMotion, color: string, i: number) {
  const soft = `0 0 18px -2px color-mix(in oklch, ${color} 55%, transparent)`;
  const none = `0 0 0px 0px color-mix(in oklch, ${color} 0%, transparent)`;
  const hard = `0 0 26px -1px color-mix(in oklch, ${color} 75%, transparent)`;

  switch (motionStyle) {
    case "wave":
      return {
        animate: { boxShadow: [none, hard, none], y: [0, -3, 0] },
        transition: {
          duration: 3,
          repeat: Infinity,
          delay: i * 0.18,
          ease: "easeInOut" as const,
        },
      };
    case "orbit":
      return {
        animate: { boxShadow: [none, soft, none], scale: [1, 1.035, 1] },
        transition: {
          duration: 2.4,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut" as const,
        },
      };
    case "trace":
      return {
        animate: { boxShadow: [none, hard, none] },
        transition: {
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 0.2,
          delay: i * 0.32,
          ease: "easeInOut" as const,
        },
      };
    case "cascade":
      return {
        animate: { boxShadow: [none, soft, none], opacity: [0.92, 1, 0.92] },
        transition: {
          duration: 2,
          repeat: Infinity,
          delay: i * 0.12,
          ease: "easeInOut" as const,
        },
      };
    default:
      return {
        animate: { boxShadow: [none, soft, none] },
        transition: {
          duration: 2.6,
          repeat: Infinity,
          delay: i * 0.25,
          ease: "easeInOut" as const,
        },
      };
  }
}

function Connector({
  delay,
  from,
  to,
  motionStyle,
}: {
  delay: number;
  from: string;
  to: string;
  motionStyle: FlowMotion;
}) {
  const gradient = `linear-gradient(90deg, ${from}, ${to})`;
  const isTrace = motionStyle === "trace" || motionStyle === "orbit";

  return (
    <div
      aria-hidden
      className="relative mx-auto h-6 w-px overflow-hidden bg-border sm:h-px sm:w-8"
    >
      {isTrace ? (
        <motion.span
          className="absolute inset-0 block"
          style={{ background: gradient }}
          initial={{ scaleX: 0, opacity: 0.3 }}
          animate={{ scaleX: [0, 1, 1], opacity: [0.3, 1, 0.2] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        />
      ) : (
        <motion.span
          className="absolute inset-0 block"
          style={{ background: gradient }}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{
            duration: motionStyle === "cascade" ? 1.6 : 2.2,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

export type FlowLayout =
  | "linear"
  | "zigzag"
  | "ring"
  | "spiral"
  | "constellation";

/** Normalised [0..1] coordinates per layout — deliberately non-linear. */
function positions(layout: FlowLayout, n: number): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0.5 : i / (n - 1);
    switch (layout) {
      case "ring": {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        out.push({
          x: 0.5 + Math.cos(a) * 0.34,
          y: 0.5 + Math.sin(a) * 0.36,
        });
        break;
      }
      case "spiral": {
        const a = i * 1.05 - Math.PI / 2;
        const r = 0.13 + (i / Math.max(n - 1, 1)) * 0.3;
        out.push({ x: 0.5 + Math.cos(a) * r * 1.5, y: 0.5 + Math.sin(a) * r });
        break;
      }
      case "constellation": {
        const cols = Math.ceil(n / 2);
        const col = i % cols;
        const row = Math.floor(i / cols);
        const jitter = ((i * 37) % 11) / 11 - 0.5;
        out.push({
          x: 0.12 + (col / Math.max(cols - 1, 1)) * 0.76,
          y: (row === 0 ? 0.26 : 0.74) + jitter * 0.16,
        });
        break;
      }
      case "zigzag":
      default: {
        const amp = 0.26;
        out.push({
          x: 0.1 + t * 0.8,
          y: 0.5 + (i % 2 === 0 ? -amp : amp) - Math.sin(t * Math.PI) * 0.05,
        });
        break;
      }
    }
  }
  // Fit into a safe frame so no node overflows the canvas.
  const xs = out.map((o) => o.x);
  const ys = out.map((o) => o.y);
  const fit = (v: number[], lo: number, hi: number) => {
    const min = Math.min(...v);
    const max = Math.max(...v);
    const span = max - min || 1;
    return (x: number) => lo + ((x - min) / span) * (hi - lo);
  };
  const fx = fit(xs, 0.13, 0.87);
  const fy = fit(ys, 0.16, 0.84);
  return out.map((o) => ({ x: fx(o.x), y: fy(o.y) }));
}

function ScatterFlow({
  nodes,
  layout,
  motionStyle,
  colorAt,
}: {
  nodes: FlowNode[];
  layout: FlowLayout;
  motionStyle: FlowMotion;
  colorAt: (i: number) => string;
}) {
  const pts = positions(layout, nodes.length);
  const closed = layout === "ring";
  const links = pts.map((p, i) => {
    const next = pts[(i + 1) % pts.length]!;
    return { from: p, to: next, i };
  });
  const usable = closed ? links : links.slice(0, -1);

  return (
    <div className="relative h-[330px] w-full sm:h-[380px] lg:h-[420px]">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {usable.map(({ i }) => (
            <linearGradient key={i} id={`fl-${layout}-${i}`}>
              <stop offset="0%" stopColor={colorAt(i)} />
              <stop offset="100%" stopColor={colorAt(i + 1)} />
            </linearGradient>
          ))}
        </defs>
        {usable.map(({ from, to, i }) => {
          const mx = (from.x + to.x) / 2;
          const my = (from.y + to.y) / 2 + (i % 2 === 0 ? -0.08 : 0.08);
          const d = `M ${from.x * 100} ${from.y * 100} Q ${mx * 100} ${my * 100} ${to.x * 100} ${to.y * 100}`;
          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke={`url(#fl-${layout}-${i})`}
                strokeWidth={1}
                strokeOpacity={0.22}
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d={d}
                fill="none"
                stroke={`url(#fl-${layout}-${i})`}
                strokeWidth={2}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="14 120"
                initial={{ strokeDashoffset: 134, opacity: 0 }}
                animate={{ strokeDashoffset: [134, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: motionStyle === "trace" ? 1.8 : 2.6,
                  repeat: Infinity,
                  delay: i * 0.24,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}
      </svg>

      {nodes.map((node, i) => {
        const color = colorAt(i);
        const p = pts[i]!;
        const glow = glowAnimation(motionStyle, color, i);
        return (
          <motion.div
            key={`${node.label}-${i}`}
            className="absolute w-[124px] -translate-x-1/2 -translate-y-1/2 sm:w-[144px]"
            style={{ left: `${p.x * 100}%`, top: `${p.y * 100}%` }}
            variants={nodeVariants(motionStyle, i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={nodeTransition(motionStyle, i)}
          >
            <motion.div
              whileHover={{ scale: 1.07 }}
              className={cn(
                "relative rounded-xl border px-2.5 py-2 text-center backdrop-blur-md",
                node.kind === "human" && "border-dashed",
              )}
              style={{
                borderColor: `color-mix(in oklch, ${color} 60%, transparent)`,
                background: `color-mix(in oklch, ${color} 14%, transparent)`,
              }}
            >
              <span
                className="font-mono block text-[11px] leading-tight font-medium tracking-tight"
                style={{ color: `color-mix(in oklch, ${color} 75%, white)` }}
              >
                {node.label}
              </span>
              {node.detail ? (
                <span className="mt-0.5 block text-[10px] leading-tight text-muted-foreground">
                  {node.detail}
                </span>
              ) : null}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl"
                animate={glow.animate}
                transition={glow.transition}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function FlowDiagram({
  nodes,
  className,
  accent = "violet",
  motionStyle = "pulse",
  layout = "linear",
}: {
  nodes: FlowNode[];
  className?: string;
  accent?: FlowAccent | undefined;
  motionStyle?: FlowMotion | undefined;
  layout?: FlowLayout | undefined;
}) {
  const palette = PALETTES[accent];
  const colorAt = (i: number) => palette[i % palette.length] as string;

  if (layout !== "linear") {
    return (
      <div className={className}>
        {/* Stacked, still fully animated on small screens */}
        <div className="flex flex-col gap-2 md:hidden">
          {nodes.map((node, i) => {
            const color = colorAt(i);
            const glow = glowAnimation(motionStyle, color, i);
            return (
              <motion.div
                key={`${node.label}-${i}`}
                variants={nodeVariants(motionStyle, i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={nodeTransition(motionStyle, i)}
                className={cn(
                  "relative rounded-xl border px-3 py-2",
                  node.kind === "human" && "border-dashed",
                )}
                style={{
                  borderColor: `color-mix(in oklch, ${color} 55%, transparent)`,
                  background: `color-mix(in oklch, ${color} 12%, transparent)`,
                }}
              >
                <span
                  className="font-mono block text-[11px] leading-tight font-medium"
                  style={{ color: `color-mix(in oklch, ${color} 78%, white)` }}
                >
                  {node.label}
                </span>
                {node.detail ? (
                  <span className="mt-0.5 block text-[10px] text-muted-foreground">
                    {node.detail}
                  </span>
                ) : null}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  animate={glow.animate}
                  transition={glow.transition}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="hidden md:block">
          <ScatterFlow
            nodes={nodes}
            layout={layout}
            motionStyle={motionStyle}
            colorAt={colorAt}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      {nodes.map((node, i) => {
        const color = colorAt(i);
        const isGate = node.kind === "human";
        const glow = glowAnimation(motionStyle, color, i);
        return (
          <div
            key={`${node.label}-${i}`}
            className="flex flex-col items-center sm:flex-row sm:items-center"
          >
            <motion.div
              variants={nodeVariants(motionStyle, i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={nodeTransition(motionStyle, i)}
              className={cn(
                "group/node relative rounded-xl border px-3 py-2 text-center backdrop-blur-sm transition-shadow sm:text-left",
                isGate && "border-dashed",
              )}
              style={{
                borderColor: `color-mix(in oklch, ${color} 55%, transparent)`,
                background: `color-mix(in oklch, ${color} 12%, transparent)`,
              }}
            >
              <span
                className="font-mono block text-[11px] leading-tight font-medium tracking-tight"
                style={{ color: `color-mix(in oklch, ${color} 78%, white)` }}
              >
                {node.label}
              </span>
              {node.detail ? (
                <span className="mt-0.5 block text-[10px] leading-tight text-muted-foreground">
                  {node.detail}
                </span>
              ) : null}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl"
                animate={glow.animate}
                transition={glow.transition}
              />
            </motion.div>
            {i < nodes.length - 1 ? (
              <Connector
                delay={i * (motionStyle === "trace" ? 0.3 : 0.22)}
                from={color}
                to={colorAt(i + 1)}
                motionStyle={motionStyle}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

