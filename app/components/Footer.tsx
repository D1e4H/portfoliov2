"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-gradient border-t-2 border-line py-8 text-center text-xs uppercase tracking-widest text-muted">
      <div className="container mx-auto max-w-5xl px-4">{t.footer}</div>
    </footer>
  );
}
