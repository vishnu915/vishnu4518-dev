import { Counter } from "@/components/fx/counter";
import { ACHIEVEMENTS } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";

export function Achievements() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Achievements"
          title="Momentum, measured"
          subtitle="Numbers from the last two years of building in public."
        />
        <div
          className="grid grid-cols-2 gap-4 md:grid-cols-5"
          style={{ perspective: 1200 }}
        >
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <TiltCard max={12} className="px-4 py-8 text-center">
                <p className="text-gradient font-display text-4xl font-semibold">
                  <Counter end={item.value} suffix={item.suffix} separator />
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{item.label}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
