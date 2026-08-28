/*
 * Soft Utility design reminder: the shared shell is the portfolio's notebook spine.
 * Keep navigation compact and editorial, with the coral/cobalt mark, thin ink rules,
 * DM Mono labels, clear focus states, and an always-available language tab.
 */
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";

const markUrl = "https://raw.githubusercontent.com/YK0Anas/Yk_Anas-Website/main/assets/yk-anas-mark.png";

const navigation = [
  { href: "/work", en: "Work", ar: "الأعمال" },
  { href: "/about", en: "About", ar: "نبذة" },
  { href: "/connect", en: "Connect", ar: "تواصل" },
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {isArabic ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>

      <header className="topbar">
        <Link className="brand-lockup" href="/" aria-label={isArabic ? "الرئيسية YK_Anas" : "YK_Anas home"}>
          <span className="brand-mark">
            <img src={markUrl} alt="" aria-hidden="true" />
          </span>
          <span className="brand-name">YK_Anas</span>
        </Link>
        <nav className="topnav" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={location === item.href ? "is-active" : undefined}
              aria-current={location === item.href ? "page" : undefined}
            >
              {isArabic ? item.ar : item.en}
            </Link>
          ))}
        </nav>
        <span className="topbar-note">EST. 2026 / ANAS</span>
      </header>

      <main id="main-content">{children}</main>

      <footer className="footer section-wrap">
        <Link className="footer__mark" href="/" aria-label={isArabic ? "العودة إلى الرئيسية" : "Back to YK_Anas home"}>
          <img src={markUrl} alt="" aria-hidden="true" />
          <span>YK_Anas</span>
        </Link>
        <span className="footer__note">
          {isArabic ? "صُمم وطُوّر بدافع الفضول." : "Designed, coded, and shipped with curiosity."}
        </span>
        <div className="footer__links">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {isArabic ? item.ar : item.en}
            </Link>
          ))}
          <Link className="footer__top" href="/">
            {isArabic ? "الرئيسية" : "Home"} <ArrowUpRight size={15} />
          </Link>
        </div>
      </footer>
      <LanguageToggle />
    </div>
  );
}
