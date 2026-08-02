import { SERVICES } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="What I build for teams"
          subtitle="Engagements scoped to ship something real within weeks, not quarters."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.07}>
                <TiltCard className="h-full p-7">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground shadow-[0_14px_40px_-14px_var(--glow)]"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
