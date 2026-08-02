import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/constants/portfolio";
import { Reveal, SectionHeading } from "@/components/fx/reveal";
import { Magnetic } from "@/components/fx/magnetic";
import { TiltCard } from "@/components/fx/tilt-card";
import { cn } from "@/lib/utils";

const CHANNELS = [
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Github, label: "GitHub", value: "vishnu915", href: PROFILE.github },
  { icon: Linkedin, label: "LinkedIn", value: "in/vishnu", href: PROFILE.linkedin },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: PROFILE.whatsapp },
];

function Field({
  id,
  label,
  type = "text",
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const shared = {
    id,
    name: id,
    value,
    required: true,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: { target: { value: string } }) => setValue(e.target.value),
    className:
      "peer w-full rounded-2xl border border-border bg-white/[0.03] px-4 pt-6 pb-2 text-sm outline-none transition-all duration-300 focus:border-primary/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_14%,transparent)]",
  };

  return (
    <div className="relative">
      {textarea ? (
        <textarea rows={4} {...shared} />
      ) : (
        <input type={type} autoComplete="off" {...shared} />
      )}
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 origin-left text-muted-foreground transition-all duration-300",
          active ? "top-2 text-[11px] text-accent" : "top-4 text-sm",
        )}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent — I'll reply within 24 hours.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[50vh] w-[50vh] rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something rare"
          subtitle="Roles, freelance builds or a quick agent architecture review — my inbox is open."
        />

        <div
          className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          style={{ perspective: 1400 }}
        >
          <Reveal>
            <TiltCard max={4} className="p-7 md:p-9">
              <form onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Your name" />
                  <Field id="email" label="Email address" type="email" />
                </div>
                <div className="mt-4">
                  <Field id="subject" label="Subject" />
                </div>
                <div className="mt-4">
                  <Field id="message" label="Tell me about your project" textarea />
                </div>
                <Magnetic className="mt-6 block">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_16px_50px_-16px_var(--glow)]"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    Send message <Send size={15} />
                  </motion.button>
                </Magnetic>
              </form>
            </TiltCard>
          </Reveal>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {CHANNELS.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <Reveal key={channel.label} delay={i * 0.05}>
                    <TiltCard max={10} className="h-full">
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-4"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-accent">
                          <Icon size={16} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] tracking-wide text-muted-foreground uppercase">
                            {channel.label}
                          </span>
                          <span className="block truncate text-sm">{channel.value}</span>
                        </span>
                      </a>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="glass overflow-hidden rounded-3xl">
                <div className="flex items-center gap-2 px-5 py-4 text-sm">
                  <MapPin size={15} className="text-accent" />
                  {PROFILE.location}
                </div>
                <iframe
                  title="Location map"
                  loading="lazy"
                  className="h-56 w-full border-0 opacity-80 grayscale"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.45%2C12.85%2C77.75%2C13.10&layer=mapnik&marker=12.9716%2C77.5946"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
