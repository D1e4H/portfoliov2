"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import {
  DEFAULT_LANG,
  getInitialLang,
  isSupportedLang,
  LANG_STORAGE_KEY,
  type Lang,
} from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Lang, Dictionary> = { en, es };

let currentLang: Lang = DEFAULT_LANG;
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return currentLang;
}

function getServerSnapshot() {
  return DEFAULT_LANG;
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const initial = getInitialLang();
    if (initial !== currentLang) {
      currentLang = initial;
      document.documentElement.lang = initial;
      emitChange();
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    if (!isSupportedLang(next)) return;
    if (next === currentLang) return;
    currentLang = next;
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // localStorage no disponible, el cambio solo afecta la sesión
    }
    emitChange();
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: dictionaries[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
