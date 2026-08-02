import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Github, Layers3, Sparkles, Workflow } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { FlowDiagram } from "@/components/fx/flow-diagram";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = useState<string | null>(PROJECTS[0]?.title ?? null);

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Architecture, not screenshots"
          subtitle="Each system below ships with its high-level architecture and an animated view of how work actually flows through it."
        />

        <div className="flex flex-col gap-6" style={{ perspective: 1400 }}>
          {PROJECTS.map((project, i) => {
            const isOpen = open === project.title;
            return (
              <Reveal key={project.title} delay={Math.min(i, 3) * 0.06}>
                <motion.article
                  whileHover={
                    isOpen ? { y: -2 } : { rotateX: 2, y: -6, scale: 1.006 }
                  }
                  transition={{ type: "spring", stiffness: 190, damping: 18 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={cn(
                    "glass group relative overflow-hidden rounded-3xl border border-border transition-shadow duration-500 hover:shadow-[0_36px_100px_-40px_var(--glow)]",
                    isOpen && "border-primary/35",
                  )}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
                    style={{ background: "var(--gradient-brand)" }}
                  />

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : project.title)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-4 p-6 text-left md:p-8"
                  >
                    <span
                      className="font-mono mt-1 hidden shrink-0 rounded-lg px-2.5 py-1 text-[11px] text-primary-foreground md:block"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold md:text-2xl">
                          {project.title}
                        </h3>
                        {project.featured ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] tracking-widest text-accent uppercase">
                            <Sparkles size={10} /> Flagship
                          </span>
                        ) : null}
                      </span>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {project.tagline}
                      </p>
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "mt-1.5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-primary",
                      )}
                    />
                  </button>

                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="rounded-2xl border border-border bg-white/[0.02] p-4 md:p-5">
                      <span className="font-mono mb-4 flex items-center gap-2 text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                        <Workflow size={12} className="text-accent" />
                        High-level architecture
                      </span>
                      <FlowDiagram
                        nodes={project.flow}
                        accent={project.accent}
                        motionStyle={project.motionStyle}
                        layout={project.layout}
                        className="gap-y-1"
                      />
                      {Array.isArray(project.architecture) ? (
                        <ul className="mt-4 grid gap-2.5">
                          {project.architecture.map((point) => (
                            <li
                              key={point}
                              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span
                                aria-hidden
                                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "var(--gradient-brand)" }}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {project.architecture}
                        </p>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6">
                            <p className="rounded-xl border border-destructive/25 bg-destructive/[0.07] p-4 text-sm leading-relaxed text-muted-foreground">
                              <span className="font-medium text-foreground">
                                Problem:{" "}
                              </span>
                              {project.problem}
                            </p>

                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                              {project.layers.map((layer, li) => (
                                <motion.div
                                  key={layer.title}
                                  initial={{ opacity: 0, y: 14 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.05 + li * 0.07,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="rounded-xl border border-border bg-white/[0.03] p-4"
                                >
                                  <span className="font-mono flex items-center gap-2 text-[10px] tracking-[0.2em] text-foreground uppercase">
                                    <Layers3
                                      size={12}
                                      className="text-primary"
                                    />
                                    {layer.title}
                                  </span>
                                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {layer.detail}
                                  </p>
                                </motion.div>
                              ))}
                            </div>

                            <ul className="mt-5 grid gap-3 md:grid-cols-2">
                              {project.highlights.map((point) => (
                                <li
                                  key={point}
                                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                                >
                                  <span
                                    aria-hidden
                                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                                    style={{
                                      background: "var(--gradient-brand)",
                                    }}
                                  />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs transition-colors hover:border-primary/50 hover:bg-primary/10"
                        >
                          <Github size={13} /> View code
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
