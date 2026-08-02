import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Education"
          title="Education & Background"
          subtitle="Formal foundations behind the engineering work."
        />
        <div className="grid gap-5 md:grid-cols-3" style={{ perspective: 1200 }}>
          {EDUCATION.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08}>
              <TiltCard className="h-full p-6">
                <span
                  className="grid h-11 w-11 place-items-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <GraduationCap size={18} />
                </span>
                <h3 className="mt-5 text-base leading-snug font-semibold">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.institution}
                </p>
                <p className="font-mono mt-3 text-xs text-accent">{item.period}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
