/*
 * Soft Utility design reminder: language switching should feel like a small notebook
 * tab, not a settings panel. Keep the control compact, circular, high-contrast, and
 * make Arabic a first-class RTL reading experience across every route.
 */
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  if (requestedLanguage === "ar") return "ar";
  if (requestedLanguage === "en") return "en";
  return window.localStorage.getItem("yk-anas-language") === "ar" ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("yk-anas-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
