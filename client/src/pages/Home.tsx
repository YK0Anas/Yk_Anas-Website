/*
 * Soft Utility design reminder: Home is the welcoming cover of a developer sketchbook.
 * Keep it left-anchored and asymmetric, with sea-glass mint, ink-black structure,
 * coral signals, the supplied avatar, and bilingual route cards that invite exploration.
 */
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Circle, Code2, Github, MessageCircle, Youtube } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

const avatarUrl = "/manus-storage/yk-anas-avatar_0b794908.webp";

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

const pageLinks = [
  {
    href: "/work",
    en: { label: "Work", title: "Public builds", text: "Browse the Python, bot, and HTML repositories I’ve been shaping." },
    ar: { label: "الأعمال", title: "مشاريعي العامة", text: "تصفح مستودعات بايثون والبوتات وHTML التي أعمل عليها." },
    icon: <Code2 size={21} strokeWidth={1.8} />,
    className: "home-link-card--coral",
  },
  {
    href: "/about",
    en: { label: "About", title: "What I make", text: "Meet the tools, skills, art, and community-first thinking behind the code." },
    ar: { label: "نبذة", title: "ما أصنعه", text: "تعرّف على أدواتي ومهاراتي وفني وطريقة تفكيري التي تضع المجتمع أولاً." },
    icon: <Circle size={21} strokeWidth={1.8} />,
    className: "home-link-card--mint",
  },
  {
    href: "/connect",
    en: { label: "Connect", title: "Find me online", text: "Open a conversation on Discord, GitHub, or YouTube." },
    ar: { label: "تواصل", title: "تجدني على الإنترنت", text: "ابدأ محادثة عبر ديسكورد أو GitHub أو يوتيوب." },
    icon: <MessageCircle size={21} strokeWidth={1.8} />,
    className: "home-link-card--yellow",
  },
];

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <>
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <aside className="margin-rail" aria-hidden="true">
          <span className="margin-rail__vertical">{isArabic ? "سجل البناء الشخصي" : "PERSONAL BUILD LOG"}</span>
          <span className="margin-rail__mark">YK / 01</span>
        </aside>

        <div className="hero-copy">
          <div className="eyebrow reveal reveal--one">
            <span className="eyebrow-dot" />
            <span>{isArabic ? "متاح للأفكار الجيدة" : "Available for good ideas"}</span>
          </div>
          <p className="hero-kicker reveal reveal--two">
            {isArabic ? "مرحباً، أنا أنس — فنان ومحرّك ومبرمج" : "Hello, I'm Anas — artist, animator, and programmer"}
          </p>
          <h1 id="hero-title" className="hero-title reveal reveal--three">
            YK_<span>Anas</span>
          </h1>
          <p className="hero-description reveal reveal--four">
            {isArabic ? (
              <>أصنع زوايا مفيدة على الإنترنت باستخدام <strong>HTML وCSS وPython</strong> وبوتات ديسكورد. فضولي بطبيعتي، وأصنع دائماً الشيء الصغير التالي.</>
            ) : (
              <>I build useful corners of the internet with <strong>HTML, CSS, Python,</strong> and Discord bots. Curious by default. Always making the next small thing.</>
            )}
          </p>
          <div className="hero-actions reveal reveal--four">
            <Link className="button button--primary" href="/work">
              {isArabic ? "شاهد الأعمال" : "See the work"} <ArrowDownRight size={18} strokeWidth={2} />
            </Link>
            <Link className="text-link" href="/connect">
              <span>{isArabic ? "تجدني على الإنترنت" : "Find me online"}</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </div>
          <div className="hero-proof reveal reveal--four">
            <span className="hero-proof__line" />
            <span>{isArabic ? "كود للمجتمعات، وتجارب بدافع الفضول." : "Code for communities, experiments for curiosity."}</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal--avatar">
          <div className="avatar-card">
            <div className="avatar-card__topline">
              <span>{isArabic ? "أنس / الصورة" : "ANAS / AVATAR"}</span>
              <span>01—01</span>
            </div>
            <div className="avatar-frame">
              <div className="avatar-frame__halo" />
              <img src={avatarUrl} alt={isArabic ? "صورة أنس الرمزية المرسومة" : "Illustrated avatar for Anas"} />
              <span className="avatar-sticker">YK_</span>
            </div>
            <div className="avatar-card__footer">
              <span className="status-pill"><Circle size={8} fill="currentColor" /> {isArabic ? "يبني الآن" : "BUILDING"}</span>
              <span className="avatar-card__code">HTML / CSS / PY</span>
            </div>
          </div>
          <div className="annotation annotation--hero">
            <span className="annotation__line" />
            <span>{isArabic ? "أدوات صغيرة، طاقة كبيرة" : "small tools, big energy"}</span>
          </div>
        </div>
      </section>

      <section className="home-paths section-wrap" aria-labelledby="paths-title">
        <SectionLabel index="02">{isArabic ? "اختر صفحة" : "Choose a page"}</SectionLabel>
        <div className="home-paths__heading">
          <div>
            <p className="mono-label">{isArabic ? "الطريق المختصر" : "THE SHORT ROUTE"}</p>
            <h2 id="paths-title">{isArabic ? <>ابدأ من<br /><span>الأشياء الجيدة.</span></> : <>Start with the<br /><span>good stuff.</span></>}</h2>
          </div>
          <p className="home-paths__aside">{isArabic ? "موقع صغير لسجل بناء ينمو. ألقِ نظرة حولك." : "A small site for a growing build log. Take a look around."}</p>
        </div>
        <div className="home-link-grid">
          {pageLinks.map((page) => {
            const text = isArabic ? page.ar : page.en;
            return (
              <Link className={`home-link-card ${page.className}`} href={page.href} key={page.href}>
                <div className="home-link-card__icon">{page.icon}</div>
                <span className="home-link-card__label">{text.label}</span>
                <h3>{text.title}</h3>
                <p>{text.text}</p>
                <span className="home-link-card__arrow"><ArrowUpRight size={19} /></span>
              </Link>
            );
          })}
        </div>
        <div className="home-social-note">
          <span>{isArabic ? "تبويبات مفتوحة" : "Open tabs"}</span>
          <Github size={16} />
          <Youtube size={16} />
          <MessageCircle size={16} />
          <span className="home-social-note__text">{isArabic ? "GitHub ويوتيوب وديسكورد — كلها مرتبطة هنا." : "GitHub, YouTube, Discord — all linked inside."}</span>
        </div>
      </section>
    </>
  );
}
