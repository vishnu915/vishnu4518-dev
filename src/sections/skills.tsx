import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for shipping"
          subtitle="Eight disciplines, one workflow — from raw Python to autonomous agents running in production."
        />

        <div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.category} delay={i * 0.07}>
                <TiltCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-2xl text-primary-foreground"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold">{group.category}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.04, duration: 0.4 }}
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        className="cursor-default rounded-xl border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        {skill.name}
                        <span className="ml-1.5 text-[10px] text-accent/80">
                          {skill.level}
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
