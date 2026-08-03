"use client";

import { motion } from "framer-motion";
import SoundVisualizer from "./SoundVisualizer";
import { useLanguage } from "../i18n/LanguageContext";

const charVariants = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1 },
};

function LineText({
  line,
  lineIndex,
}: {
  line: string;
  lineIndex: number;
}) {
  const offset = lineIndex * 10;
  return (
    <>
      {line.split("").map((ch, i) => (
        <span
          key={`${lineIndex}-${ch}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            variants={charVariants}
            transition={{
              delay: 0.3 + (offset + i) * 0.06,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className={`inline-block ${
              lineIndex === 1
                ? "bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const lines = t.hero.lines;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <SoundVisualizer />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/5" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="max-w-2xl text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 m-2 text-xs uppercase tracking-[0.25em] text-accent md:text-sm"
          >
            {"     " + t.hero.greeting}
          </motion.p>

          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl m-2 font-bold uppercase tracking-widest text-muted md:text-2xl"
          >
          {t.hero.name}
          </motion.h2>

          <motion.h1
            initial="hidden"
            animate="show"
            aria-label={lines.join(" ")}
            className="mt-6 text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl"
          >
            {lines.map((line, lineIndex) => (
              <span key={line} className="block">
                <LineText line={line} lineIndex={lineIndex} />
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-6 h-1.5 w-64 origin-left bg-gradient-to-r from-accent to-accent-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-6 text-sm uppercase tracking-widest text-muted md:text-base"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-accent bg-accent px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:border-accent-2 hover:bg-accent-2"
            >
              {t.hero.viewWork}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-foreground px-8 py-3 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {t.hero.contactMe}
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm text-accent"
        >
          {"▼"}
        </motion.div>
      </motion.div>
    </section>
  );
}
