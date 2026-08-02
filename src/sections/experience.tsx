import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Calendar } from "lucide-react";
import { EXPERIENCE } from "@/constants/portfolio";
import { SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";
import { cn } from "@/lib/utils";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const glow = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="Internships with real shipped systems"
          subtitle="Every role ended with something in production — not a slide deck."
        />

        <div ref={ref} className="relative">
          <div className="absolute top-0 left-4 h-full w-px bg-border md:left-1/2" />
          <motion.div
            className="absolute top-0 left-4 h-full w-px origin-top md:left-1/2"
            style={{ scaleY, background: "var(--gradient-brand)", opacity: glow }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: left ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative pl-12 md:w-1/2 md:pl-0",
                    left ? "md:pr-12" : "md:ml-auto md:pl-12",
                  )}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className={cn(
                      "absolute top-8 left-[9px] z-10 h-3.5 w-3.5 rounded-full ring-4 ring-background md:left-auto",
                      left ? "md:-right-[7px]" : "md:-left-[7px]",
                    )}
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <TiltCard max={5} className="p-6">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                        <Building2 size={15} className="text-accent" />
                        {item.company}
                      </span>
                      <span className="font-mono inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={13} /> {item.duration}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.location}
                      </span>
                    </div>
                    <h3 className="text-gradient mt-2 text-xl font-semibold">
                      {item.role}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs font-medium transition-colors hover:bg-primary/15"
                    >
                      <Award size={14} /> View Certificate
                    </a>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
