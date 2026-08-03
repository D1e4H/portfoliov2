export const SUPPORTED_LANGS = ["en", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: Lang = "en";
export const LANG_STORAGE_KEY = "portfolio-language";

export function isSupportedLang(value: string): value is Lang {
  return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export function detectBrowserLang(): Lang {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const browserLang = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
  if (browserLang.startsWith("es")) return "es";
  return "en";
}

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && isSupportedLang(stored)) return stored;
  } catch {
    // localStorage no disponible, se ignora
  }
  return detectBrowserLang();
}
