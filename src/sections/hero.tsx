import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Counter } from "@/components/fx/counter";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import portraitAsset from "@/assets/vishnu-profile.jpg";
import { PROFILE, STATS } from "@/constants/portfolio";
import { Aurora } from "@/components/fx/aurora";
import { ParticleField } from "@/components/fx/particle-field";
import { Magnetic } from "@/components/fx/magnetic";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        );
      },
      done ? 1600 : deleting ? 45 : 85,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const SOCIALS = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
  { icon: MessageCircle, href: PROFILE.whatsapp, label: "WhatsApp" },
];

const FLOATING_BADGES = [
  { text: "LangGraph", top: "12%", left: "4%", delay: "0s" },
  { text: "MCP", top: "68%", left: "0%", delay: "-2s" },
  { text: "RAG", top: "26%", right: "2%", delay: "-1s" },
  { text: "FastAPI", top: "78%", right: "6%", delay: "-3s" },
];

export function Hero() {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section
      id="home"
      className="noise relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <Aurora />
      <ParticleField />

      {FLOATING_BADGES.map((b) => (
        <span
          key={b.text}
          aria-hidden
          className="glass animate-float font-mono absolute hidden rounded-full px-4 py-2 text-xs text-muted-foreground lg:block"
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            animationDelay: b.delay,
          }}
        >
          {b.text}
        </span>
      ))}

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted-foreground"
          >
            <Sparkles size={13} className="text-accent" />
            Available for AI engineering roles &amp; freelance builds
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[0.95] font-semibold text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">
              Hi, I&apos;m
            </span>
            <span className="text-gradient">Vishnu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="font-mono mt-5 text-lg text-accent sm:text-2xl"
            aria-live="polite"
          >
            {typed}
            <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base"
          >
            {PROFILE.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_16px_50px_-16px_var(--glow)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                View Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="glass glow-border inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                <Download size={16} /> Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
              >
                Hire Me
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground hover:shadow-[0_12px_30px_-12px_var(--glow)]"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-gradient font-display text-3xl font-semibold">
                  <Counter end={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[42px] opacity-60 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="glass animate-float relative overflow-hidden rounded-[36px] p-2">
            <img
              src={portraitAsset}
              alt="Portrait of Vishnu Vardhan, Agentic AI Engineer"
              className="h-full w-full rounded-[28px] object-cover"
            />
            <div className="glass absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Building agents since 2023
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
