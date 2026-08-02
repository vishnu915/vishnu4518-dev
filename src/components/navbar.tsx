import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { Magnetic } from "@/components/fx/magnetic";
import { cn } from "@/lib/utils";

export function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 left-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6",
          scrolled ? "glass" : "border border-transparent bg-transparent",
        )}
      >
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2.5"
          aria-label="Go to top"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-primary-foreground transition-transform duration-500 group-hover:rotate-[18deg]"
            style={{ background: "var(--gradient-brand)" }}
          >
            VV
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Vishnu<span className="text-muted-foreground">.dev</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:block">
            <button
              onClick={() => go("contact")}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-12px_var(--glow)] transition-shadow hover:shadow-[0_16px_50px_-10px_var(--glow)]"
              style={{ background: "var(--gradient-brand)" }}
            >
              Hire Me
            </button>
          </Magnetic>
          <button
            className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl p-3 lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(link.id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
