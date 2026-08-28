/*
 * Soft Utility design reminder: Connect is an open-tabs page—friendly and direct,
 * with bright platform cards, ink rules, clear external-link affordances, and the
 * same editorial spacing and bilingual typography as the rest of the portfolio.
 */
import type { ReactNode } from "react";
import { ArrowUpRight, ExternalLink, Github, MessageCircle, Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span className="section-label__index">{index}</span><span>{children}</span></div>;
}

const socials = [
  { label: "Discord", enHandle: "Message Anas", arHandle: "راسل أنس", enDescription: "Say hi, talk bots, or start a build conversation.", arDescription: "قل مرحباً، تحدث عن البوتات، أو ابدأ محادثة حول مشروع.", href: "https://discord.com/users/1542793027456606281", icon: <MessageCircle size={24} strokeWidth={1.7} />, accent: "social-card--discord" },
  { label: "GitHub", enHandle: "@YK0Anas", arHandle: "@YK0Anas", enDescription: "Browse public repositories and the code behind the experiments.", arDescription: "تصفح المستودعات العامة والكود خلف التجارب.", href: "https://github.com/YK0Anas", icon: <Github size={24} strokeWidth={1.7} />, accent: "social-card--github" },
  { label: "YouTube", enHandle: "@YK_Anas", arHandle: "@YK_Anas", enDescription: "Animation content, shorts, and the latest visual uploads.", arDescription: "محتوى الرسوم المتحركة والمقاطع القصيرة وآخر الأعمال البصرية.", href: "https://www.youtube.com/channel/UCy_fElum559ZY5NyTdMcB-g", icon: <Youtube size={24} strokeWidth={1.7} />, accent: "social-card--youtube" },
];

export default function Connect() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <>
      <section className="page-intro section-wrap page-intro--connect" aria-labelledby="connect-title">
        <div className="page-intro__rail" aria-hidden="true"><span>{isArabic ? "05 / تواصل" : "05 / CONNECT"}</span></div>
        <div className="page-intro__copy"><SectionLabel index="01">{isArabic ? "تبويبات مفتوحة" : "Open tabs"}</SectionLabel><p className="mono-label">{isArabic ? "الإنترنت هو العنوان" : "THE INTERNET IS THE ADDRESS"}</p><h1 id="connect-title">{isArabic ? <>ألقِ نظرة على الكود،<br /><span>ثم قل مرحباً.</span></> : <>Peek at the code,<br /><span>then say hey.</span></>}</h1><p className="page-intro__description">{isArabic ? "آخر مشروع أو تحميل أو محادثة على بُعد نقرة واحدة. اختر المكان المناسب لك." : "The latest build, upload, or conversation is only a click away. Pick the place that feels right."}</p></div>
        <div className="page-intro__note page-intro__note--connect"><ExternalLink size={22} strokeWidth={1.7} /><span>{isArabic ? "ثلاث طرق للدخول" : "Three ways in"}</span><small>{isArabic ? "تفتح الروابط الخارجية في تبويب جديد." : "External links open in a new tab."}</small></div>
      </section>

      <section className="connect-section section-wrap connect-section--page" aria-labelledby="social-title">
        <SectionLabel index="02">{isArabic ? "تجدني على الإنترنت" : "Find me online"}</SectionLabel>
        <div className="connect-heading"><div><p className="mono-label">{isArabic ? "اختر منصة" : "PICK A PLATFORM"}</p><h2 id="social-title">{isArabic ? <>واصل<br /><span>المحادثة.</span></> : <>Keep the<br /><span>conversation going.</span></>}</h2></div><p className="connect-heading__aside">{isArabic ? "ديسكورد للترحيب. GitHub للكود. يوتيوب للرسوم المتحركة وآخر التحميلات." : "Discord for a hello. GitHub for the code. YouTube for animation content and the latest uploads."}</p></div>
        <div className="social-grid">
          {socials.map((social) => <a className={`social-card ${social.accent}`} href={social.href} target="_blank" rel="noreferrer" key={social.label}><div className="social-card__topline"><span className="social-card__icon">{social.icon}</span><ExternalLink size={17} strokeWidth={1.7} /></div><div><h3>{social.label}</h3><span className="social-card__handle">{isArabic ? social.arHandle : social.enHandle}</span><p>{isArabic ? social.arDescription : social.enDescription}</p></div><span className="social-card__arrow"><ArrowUpRight size={20} /></span></a>)}
        </div>
      </section>

      <section className="connect-note section-wrap" aria-label={isArabic ? "ملاحظة تواصل" : "Connection note"}><span className="connect-note__line" /><p>{isArabic ? "قل مرحباً أينما تجدني. غالباً ما أفكر في الشيء الصغير التالي." : "Say hello wherever you find me. I’m usually thinking about the next small thing."}</p></section>
    </>
  );
}
