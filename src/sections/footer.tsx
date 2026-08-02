import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";
import { Magnetic } from "@/components/fx/magnetic";

const SOCIALS = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
  { icon: MessageCircle, href: PROFILE.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-10">
      <div
        aria-hidden
        className="h-px w-full"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='120'%3E%3Cpath d='M0 60 Q150 0 300 60 T600 60 T900 60 T1200 60 V120 H0Z' fill='%237C3AED'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-x",
          animation: "wave-move 14s linear infinite",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 pt-10 text-center">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          VV
        </span>
        <p className="max-w-md text-sm text-muted-foreground">
          Designing and engineering agentic AI products from 0 → 1.
        </p>
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <Magnetic>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glass glow-border inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </Magnetic>

        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {PROFILE.name}. Crafted with obsessive detail.
        </p>
      </div>
    </footer>
  );
}
