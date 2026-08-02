import { Counter } from "@/components/fx/counter";
import { motion } from "framer-motion";
import portraitAsset from "@/assets/vishnu-walmart.png";
import { STATS, TIMELINE } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About"
          title="Engineering autonomy, end to end"
          subtitle="I design agentic systems that reason, act and ship value — then wrap them in interfaces people actually enjoy using."
        />

        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[36px] opacity-40 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="glass relative overflow-hidden rounded-[32px] p-2"
            >
              <img
                src={portraitAsset}
                alt="Vishnu Vardhan working on agentic AI systems"
                loading="lazy"
                className="w-full rounded-3xl object-cover"
              />
            </motion.div>
            <div className="glass absolute -right-4 -bottom-6 rounded-2xl px-5 py-4 text-center shadow-[0_20px_60px_-20px_var(--glow)]">
              <p className="text-gradient font-display text-3xl font-semibold">
                <Counter end={5} />
              </p>
              <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                Internships
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
                I&apos;m a{" "}
                <span className="font-medium text-foreground">Agentic AI Engineer</span>{" "}
                focused on taking products from{" "}
                <span className="font-medium text-accent">0 → 1</span>. My work sits at the
                intersection of{" "}
                <span className="font-medium text-foreground">
                  multi-agent orchestration
                </span>
                , retrieval systems and pragmatic backend engineering — LangGraph and MCP
                on one side, FastAPI, vector databases and clean React on the other. I care
                about evals, latency and the last 10% of polish that makes software feel
                inevitable.
              </p>
            </Reveal>

            <div
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
              style={{ perspective: 1000 }}
            >
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <TiltCard max={12} className="px-4 py-5 text-center">
                    <p className="text-gradient font-display text-2xl font-semibold">
                      <Counter end={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{s.label}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <ol
              className="relative mt-12 space-y-6 border-l border-border pl-8"
              style={{ perspective: 1200 }}
            >
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <li className="relative">
                    <span
                      className="absolute top-2 -left-[38px] z-10 grid h-3.5 w-3.5 place-items-center rounded-full"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-background" />
                    </span>
                    <TiltCard max={6} className="p-5">
                      <p className="font-mono text-xs text-accent">{item.year}</p>
                      <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </TiltCard>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
