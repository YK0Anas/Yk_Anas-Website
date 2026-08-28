/*
 * Soft Utility design reminder: the language control is a tiny circular notebook tab.
 * Keep it fixed to the bottom-right, visibly focusable, and clear in both directions.
 */
import { Languages } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "ar" : "en";

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === "en" ? "Switch language to Arabic" : "تغيير اللغة إلى الإنجليزية"}
      title={language === "en" ? "العربية" : "English"}
    >
      <Languages size={15} strokeWidth={1.8} aria-hidden="true" />
      <span>{language === "en" ? "ع" : "EN"}</span>
    </button>
  );
}
