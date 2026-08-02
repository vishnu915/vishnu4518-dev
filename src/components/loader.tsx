import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = [
  "Agentic AI Engineer",
  "AI & ML & Automation Engineer",
  "Full Stack Developer",
  "Software Development Engineer",
  "Forward Deployment Engineer",
];

const DIRECTIONS = [
  { x: 100, y: 0 },   // from right
  { x: -100, y: 0 },  // from left
  { x: 0, y: -100 },  // from top
  { x: 0, y: 100 },   // from bottom
  { x: 80, y: 80 },   // from bottom-right
];

// Each word has its own unique gradient colors
const WORD_GRADIENTS = [
  "from-red-500 via-pink-500 to-purple-500",        // Agentic AI Engineer
  "from-green-400 via-teal-400 to-blue-500",        // AI & ML & Automation Engineer
  "from-pink-400 via-rose-400 to-red-500",          // Full Stack Developer
  "from-orange-400 via-amber-400 to-yellow-500",    // Software Development Engineer
  "from-blue-400 via-indigo-400 to-violet-500",     // Forward Deployment Engineer
];

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    // ~4 seconds total
    const tick = setInterval(() => {
      setProgress((p) => {
        const next = p + 2.5; // 100/40 = 2.5 (40 intervals of 100ms = 4s)
        return next >= 100 ? 100 : next;
      });
    }, 100);

    const words = setInterval(() => {
      setWord((w) => (w + 1) % WORDS.length);
    }, 800); // Change word every 800ms (5 words * 800ms = 4s)

    return () => {
      clearInterval(tick);
      clearInterval(words);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const timer = setTimeout(() => {
      onDone();
    }, 300);

    return () => clearTimeout(timer);
  }, [progress, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.7 }}
    >
      {/* Floating Particles with Different Colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {Array.from({ length: 50 }).map((_, i) => {
          const colors = ['bg-red-500', 'bg-green-500', 'bg-pink-500', 'bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-cyan-500'];
          return (
            <motion.span
              key={i}
              className={`absolute h-2 w-2 rounded-full ${colors[i % colors.length]}`}
              initial={{
                opacity: 0,
                x: `${(i * 37) % 100}vw`,
                y: `${(i * 61) % 100}vh`,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [`${(i * 37) % 100}vw`, `${((i * 37) % 100) + 20}vw`, `${((i * 37) % 100) - 20}vw`],
                y: [`${(i * 61) % 100}vh`, `${((i * 61) % 100) - 15}vh`, `${((i * 61) % 100) + 15}vh`],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.06,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Logo with Gradient */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
        className="relative grid h-36 w-36 place-items-center"
      >
        <motion.div
          className="absolute inset-0 rounded-[32px] border border-violet-500/50"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-3 rounded-[24px] border border-cyan-400/40"
          animate={{ rotate: -360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-6 rounded-[16px] border border-pink-500/30"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <span className="text-gradient text-5xl font-bold font-display bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Vishnu
        </span>
      </motion.div>

      {/* Animated Role with Multi-Directional Entry and Unique Gradients */}
      <div className="mt-10 h-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={word}
            initial={{ 
              x: DIRECTIONS[word].x, 
              y: DIRECTIONS[word].y,
              opacity: 0,
              scale: 0.5,
              rotate: word % 2 === 0 ? -10 : 10,
            }}
            animate={{ 
              x: 0, 
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20,
              }
            }}
            exit={{ 
              x: DIRECTIONS[(word + 1) % DIRECTIONS.length].x * -1,
              y: DIRECTIONS[(word + 1) % DIRECTIONS.length].y * -1,
              opacity: 0,
              scale: 0.5,
              rotate: word % 2 === 0 ? 10 : -10,
              transition: {
                duration: 0.4,
                ease: "easeIn",
              }
            }}
            className={`text-2xl font-bold tracking-wide bg-gradient-to-r ${WORD_GRADIENTS[word]} bg-clip-text text-transparent`}
          >
            {WORDS[word]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Progress Bar with Animated Gradient */}
      <div className="mt-10 h-2.5 w-80 overflow-hidden rounded-full bg-white/10 md:w-[400px] relative">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff00ff, #ff8800, #ff0000)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            width: `${progress}%`,
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            width: { duration: 0.1, ease: "easeOut" },
            backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" },
          }}
        />
      </div>

      {/* Percentage with Color Pulse */}
      <motion.p
        className="mt-4 font-mono text-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
          color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ff6b6b'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {Math.floor(progress)
          .toString()
          .padStart(3, "0")}
        %
      </motion.p>

      {/* Loading Text with Animation */}
      <motion.p
        className="mt-2 text-xs text-white/50"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}