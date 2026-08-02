import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { AWARDS, CERTIFICATIONS } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { TiltCard } from "@/components/fx/tilt-card";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & Awards"
          subtitle="Verified credentials and recognition for the work."
        />

        <div
          className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]"
          style={{ perspective: 1200 }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.05}>
                <TiltCard max={7} className="h-full">
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start gap-3 p-5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-accent">
                      <BadgeCheck size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{cert.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {cert.issuer}
                      </span>
                      <span className="font-mono mt-2 inline-flex items-center gap-1 text-[11px] text-accent">
                        View <ExternalLink size={11} />
                      </span>
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="space-y-3">
            {AWARDS.map((award, i) => (
              <Reveal key={award.title} delay={i * 0.08}>
                <TiltCard className="h-full p-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl text-primary-foreground"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Award size={18} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{award.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{award.issuer}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{award.text}</p>
                  <p className="font-mono mt-3 text-xs text-accent">{award.year}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
