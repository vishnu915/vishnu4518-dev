import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/loader";
import { Navbar } from "@/components/navbar";
import { CursorGlow } from "@/components/fx/cursor-glow";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Education } from "@/sections/education";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Achievements } from "@/sections/achievements";
import { Certifications } from "@/sections/certifications";
import { Services } from "@/sections/services";
import { Testimonials } from "@/sections/testimonials";
import { Marquee } from "@/sections/marquee";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const TITLE = "Vishnu Vardhan — Agentic AI Engineer & Full Stack Developer";
const DESCRIPTION =
  "Portfolio of Vishnu Vardhan, Agentic AI Engineer building multi-agent systems with LangGraph, MCP, RAG, FastAPI and React.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vishnu Vardhan",
          jobTitle: "Agentic AI Engineer",
          description: DESCRIPTION,
          knowsAbout: [
            "Agentic AI",
            "LangGraph",
            "LangChain",
            "RAG",
            "FastAPI",
            "React",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        aria-hidden
        className="fixed top-0 right-0 left-0 z-[70] h-[2px] origin-left"
        style={{ scaleX: progress, background: "var(--gradient-brand)" }}
      />

      <CursorGlow />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.main>

      <Toaster position="bottom-right" />
    </div>
  );
}
