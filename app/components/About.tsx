"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const stats = t.about.stats;

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
          {t.about.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center text-sm uppercase tracking-widest text-muted"
        >
          {t.about.subtitle}
        </motion.p>

        <div className="space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base leading-relaxed text-foreground md:text-lg"
          >
            {t.about.paragraphs[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed text-muted md:text-lg"
          >
            {t.about.paragraphs[1]}
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
