"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "8", label: "Technologies" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-gradient py-24 border-t-2 border-line"
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold uppercase tracking-widest md:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center text-sm uppercase tracking-widest text-muted"
        >
          {"// The developer behind the screen"}
        </motion.p>

        <div className="space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base leading-relaxed text-foreground md:text-lg"
          >
            I'm a self taugh Front End Developer based in Venezuela who loves turning ideas into fast,
            accessible and beautiful interfaces. My journey started with a
            simple curiosity for how websites work, and it grew into a passion
            for building products that people enjoy using every day.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed text-muted md:text-lg"
          >
            When I'm not coding, you'll find me exploring new tools, sharing
            what I learn and always looking for the next challenge. 
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-2 border-line bg-surface px-4 py-6 text-center"
            >
              <div className="text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
