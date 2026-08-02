import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Agents", "Systems", "Interfaces", "Experience"];

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 9 + 3;
        return next >= 100 ? 100 : next;
      });
    }, 90);
    const words = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 550);
    return () => {
      clearInterval(tick);
      clearInterval(words);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(onDone, 600);
    return () => clearTimeout(t);
  }, [progress, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 26 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary"
            initial={{
              opacity: 0,
              x: `${(i * 37) % 100}vw`,
              y: `${(i * 61) % 100}vh`,
            }}
            animate={{ opacity: [0, 0.9, 0], y: `${((i * 61) % 100) - 12}vh` }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.08 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid h-24 w-24 place-items-center"
      >
        <motion.span
          className="absolute inset-0 rounded-[28px] border border-primary/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-3 rounded-[20px] border border-accent/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-gradient font-display text-3xl font-bold">VV</span>
      </motion.div>

      <div className="mt-10 h-7 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={word}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm tracking-[0.35em] text-muted-foreground uppercase"
          >
            Crafting {WORDS[word]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-8 h-px w-56 overflow-hidden bg-border md:w-72">
        <motion.div
          className="h-full"
          style={{ background: "var(--gradient-brand)" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>
      <p className="font-mono mt-4 text-xs text-muted-foreground tabular-nums">
        {Math.floor(progress).toString().padStart(3, "0")}%
      </p>
    </motion.div>
  );
}
