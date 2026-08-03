"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/config";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1 border-2 border-line bg-background/80 px-2 py-2 backdrop-blur"
      role="group"
      aria-label="Change language / Cambiar idioma"
    >
      {options.map((opt, i) => (
        <div key={opt.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted">{"|"}</span>}
          <motion.button
            type="button"
            onClick={() => setLang(opt.code)}
            whileTap={{ scale: 0.9 }}
            aria-pressed={lang === opt.code}
            className={`cursor-pointer px-2 py-1 text-xs font-bold tracking-widest transition-colors ${
              lang === opt.code
                ? "text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {opt.label}
          </motion.button>
        </div>
      ))}
    </motion.div>
  );
}
