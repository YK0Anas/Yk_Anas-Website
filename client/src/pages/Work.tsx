/*
 * Soft Utility design reminder: Work reads like a pinned build board—structured,
 * useful, and a little tactile. Keep ink rules, colored project panels, mono metadata,
 * and bilingual copy grounded in the public repositories.
 */
import type { ReactNode } from "react";
import { ArrowUpRight, Braces, ChevronRight, Code2, Github, MessageCircle, Terminal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span className="section-label__index">{index}</span><span>{children}</span></div>;
}

const projects = [
  { number: "01", title: "3adun", enType: "Python project", arType: "مشروع Python", enDescription: "A public Python repository from the 3A2DUN project family.", arDescription: "مستودع Python عام من عائلة مشاريع 3A2DUN.", href: "https://github.com/YK0Anas/3adun", icon: <Terminal size={19} strokeWidth={1.8} />, accent: "project-card--coral" },
  { number: "02", title: "3a2dun_tele_Bot", enType: "Bot project", arType: "مشروع بوت", enDescription: "A Python bot repository built as part of the 3A2DUN experiments.", arDescription: "مستودع بوت Python بُني كجزء من تجارب 3A2DUN.", href: "https://github.com/YK0Anas/3a2dun_tele_Bot", icon: <MessageCircle size={19} strokeWidth={1.8} />, accent: "project-card--cobalt" },
  { number: "03", title: "3a2dun_bot", enType: "Bot project", arType: "مشروع بوت", enDescription: "A public bot codebase and one of the projects in the GitHub portfolio.", arDescription: "قاعدة كود بوت عامة وأحد مشاريع معرض GitHub.", href: "https://github.com/YK0Anas/3a2dun_bot", icon: <Braces size={19} strokeWidth={1.8} />, accent: "project-card--mint" },
  { number: "04", title: "Portofilo-Page", enType: "HTML project", arType: "مشروع HTML", enDescription: "An earlier HTML portfolio page, kept as part of the build trail.", arDescription: "صفحة معرض HTML سابقة، محفوظة ضمن سجل البناء.", href: "https://github.com/YK0Anas/Portofilo-Page", icon: <Code2 size={19} strokeWidth={1.8} />, accent: "project-card--ink" },
];

export default function Work() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <>
      <section className="page-intro section-wrap page-intro--work" aria-labelledby="work-title">
        <div className="page-intro__rail" aria-hidden="true"><span>{isArabic ? "03 / الأعمال" : "03 / WORK"}</span></div>
        <div className="page-intro__copy">
          <SectionLabel index="01">{isArabic ? "مشاريع مختارة" : "Selected builds"}</SectionLabel>
          <p className="mono-label">{isArabic ? "من المستودع العام" : "FROM THE PUBLIC REPO"}</p>
          <h1 id="work-title">{isArabic ? <>الأشياء التي<br /><span>أصنعها.</span></> : <>Things I've<br /><span>been making.</span></>}</h1>
          <p className="page-intro__description">{isArabic ? "محطات من سجل البناء: تجارب Python، وكود البوتات، وصفحة معرض HTML سابقة." : "A few public stops from the build trail: Python experiments, bot code, and an early HTML portfolio page."}</p>
        </div>
        <div className="page-intro__note page-intro__note--work"><Github size={22} strokeWidth={1.7} /><span>{isArabic ? "تصفح المصدر" : "Browse the source"}</span><small>{isArabic ? "كل بطاقة تفتح مباشرة على GitHub." : "Each card opens directly on GitHub."}</small></div>
      </section>

      <section className="work-section section-wrap work-section--page" aria-labelledby="repository-title">
        <div className="work-section__subhead"><div><p className="mono-label">{isArabic ? "04 مستودعات / عامة على GitHub" : "04 REPOSITORIES / 05 PUBLIC ON GITHUB"}</p><h2 id="repository-title">{isArabic ? <>لوحة<br /><em>البناء.</em></> : <>The current<br /><em>board.</em></>}</h2></div><p className="work-section__aside">{isArabic ? "الأسماء واللغات والأوصاف قريبة مما يظهر في الملف العام." : "Names, languages, and descriptions stay close to what is visible in the public profile."}</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-card__meta"><span>{project.number} / 04</span><ArrowUpRight size={17} strokeWidth={1.8} /></div>
              <div className="project-card__icon">{project.icon}</div>
              <div className="project-card__body"><span className="project-card__type">{isArabic ? project.arType : project.enType}</span><h3>{project.title}</h3><p>{isArabic ? project.arDescription : project.enDescription}</p></div>
              <span className="project-card__cta">{isArabic ? "فتح على GitHub" : "Open on GitHub"} <ChevronRight size={16} /></span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
