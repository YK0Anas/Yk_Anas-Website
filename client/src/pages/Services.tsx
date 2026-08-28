/*
 * Soft Utility design reminder: services should read like a clear studio menu.
 * Keep the three offers distinct, practical, and human, with ink rules, coral cues,
 * and enough whitespace for each craft to have its own voice.
 */
import type { ReactNode } from "react";
import { ArrowUpRight, Code2, MessageCircle, PencilRuler } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span className="section-label__index">{index}</span><span>{children}</span></div>;
}

const services = [
  {
    key: "website",
    icon: Code2,
    number: "01",
    en: { title: "Make websites", note: "Interfaces with personality", body: "Landing pages and portfolio sites that are clear, responsive, and made to feel like you." },
    ar: { title: "صناعة المواقع", note: "واجهات لها شخصية", body: "صفحات هبوط ومواقع شخصية واضحة ومتجاوبة ومصممة لتعكس هويتك." },
  },
  {
    key: "discord",
    icon: MessageCircle,
    number: "02",
    en: { title: "Program Discord bots", note: "Useful community tools", body: "Bots that automate the small things, keep communities moving, and make servers more fun to use." },
    ar: { title: "برمجة بوتات Discord", note: "أدوات مفيدة للمجتمعات", body: "بوتات تؤتمت التفاصيل الصغيرة، وتحافظ على نشاط المجتمعات، وتجعل الخوادم أكثر متعة." },
  },
  {
    key: "drawing",
    icon: PencilRuler,
    number: "03",
    en: { title: "Drawing & illustration", note: "Ideas with a visual voice", body: "Character sketches, visual concepts, and expressive drawings for projects that need a human touch." },
    ar: { title: "الرسم والتوضيح", note: "أفكار بصوت بصري", body: "رسومات شخصيات ومفاهيم بصرية ورسومات تعبيرية للمشاريع التي تحتاج لمسة إنسانية." },
  },
];

export default function Services() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="services-page">
      <section className="page-intro page-intro--services section-wrap" aria-labelledby="services-title">
        <div className="page-intro__rail" aria-hidden="true"><span>{isArabic ? "06 / الخدمات" : "06 / SERVICES"}</span></div>
        <div className="page-intro__copy">
          <SectionLabel index="01">{isArabic ? "ماذا أقدّم" : "What I can make"}</SectionLabel>
          <p className="mono-label">{isArabic ? "قائمة الاستوديو" : "THE STUDIO MENU"}</p>
          <h1 id="services-title">{isArabic ? <>أفكارك،<br /><span>بشكل ملموس.</span></> : <>Your idea,<br /><span>made tangible.</span></>}</h1>
          <p className="page-intro__description">{isArabic ? "من موقع صغير إلى بوت يعرف ما يحتاجه مجتمعك، أساعدك على تحويل الفكرة إلى شيء يمكن للناس استخدامه أو رؤيته أو مشاركته." : "From a small website to a bot that understands your community, I help turn an idea into something people can use, see, or share."}</p>
        </div>
        <div className="page-intro__note page-intro__note--services"><span className="services-note-mark">✦</span><span>{isArabic ? "ثلاث طرق للبدء" : "Three ways to start"}</span><small>{isArabic ? "اختر المسار الأقرب لفكرتك." : "Pick the route closest to your idea."}</small></div>
      </section>

      <section className="services-list section-wrap" aria-labelledby="services-list-title">
        <div className="services-list__heading">
          <SectionLabel index="02">{isArabic ? "الخدمات" : "The services"}</SectionLabel>
          <h2 id="services-list-title">{isArabic ? "أشياء يمكننا بناؤها معاً." : "Things we can build together."}</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            const copy = isArabic ? service.ar : service.en;
            return (
              <article className={`service-card service-card--${service.key}`} key={service.key}>
                <div className="service-card__top"><span className="service-card__number">{service.number}</span><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></div>
                <div className="service-card__body"><p className="mono-label">{copy.note}</p><h3>{copy.title}</h3><p>{copy.body}</p></div>
                <a
                  className="service-card__link"
                  href={`/connect?service=${service.key}`}
                  onClick={(event) => {
                    event.preventDefault();
                    window.dispatchEvent(new CustomEvent("yk-anas:open-contact", { detail: { service: service.key } }));
                  }}
                >
                  {isArabic ? "اسأل عن هذه الخدمة" : "Ask about this service"}<ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-cta section-wrap">
        <div><span className="mono-label">{isArabic ? "هل لديك شيء آخر؟" : "Have something else?"}</span><h2>{isArabic ? "اختر Another في نموذج البريد واشرح فكرتك." : "Choose Another in the email form and tell me about it."}</h2></div>
        <Link className="button button--dark" href="/connect">{isArabic ? "ابدأ محادثة" : "Start a conversation"} <ArrowUpRight size={16} /></Link>
      </section>
    </div>
  );
}
