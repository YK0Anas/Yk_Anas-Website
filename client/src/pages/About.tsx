/*
 * Soft Utility design reminder: About should feel like an annotated notebook page—
 * direct, warm, and practical. Keep the mint/ink/coral/cobalt system, visible rules,
 * mono labels, and bilingual maker voice without adding unsupported claims.
 */
import type { ReactNode } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

const botOrbitUrl = "/manus-storage/yk-anas-bot-orbit_63f7c653.png";

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span className="section-label__index">{index}</span><span>{children}</span></div>;
}

const skills = [
  { enName: "HTML", arName: "HTML", enDetail: "Structure that gives ideas a place to live.", arDetail: "هيكل يمنح الأفكار مكاناً لتعيش فيه." },
  { enName: "CSS", arName: "CSS", enDetail: "Layouts, color, and the small details people feel.", arDetail: "التنسيقات والألوان والتفاصيل الصغيرة التي يشعر بها الناس." },
  { enName: "Python", arName: "Python", enDetail: "The everyday language behind experiments and bots.", arDetail: "اللغة اليومية وراء التجارب والبوتات." },
  { enName: "Discord bots", arName: "بوتات ديسكورد", enDetail: "Useful commands for busy, human communities.", arDetail: "أوامر مفيدة للمجتمعات النشطة والبشرية." },
  { enName: "Art & animation", arName: "الفن والتحريك", enDetail: "Visual ideas, characters, and motion with personality.", arDetail: "أفكار بصرية وشخصيات وحركة مليئة بالشخصية." },
];

export default function About() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <>
      <section className="page-intro section-wrap page-intro--about" aria-labelledby="about-title">
        <div className="page-intro__rail" aria-hidden="true"><span>{isArabic ? "04 / نبذة" : "04 / ABOUT"}</span></div>
        <div className="page-intro__copy">
          <SectionLabel index="01">{isArabic ? "النسخة المختصرة" : "The short version"}</SectionLabel>
          <p className="mono-label">{isArabic ? "فنان ومحرّك ومبرمج" : "ARTIST / ANIMATOR / PROGRAMMER"}</p>
          <h1 id="about-title">{isArabic ? <>كود عملي.<br /><span>مشاريع إنسانية.</span></> : <>Practical code.<br /><span>Human projects.</span></>}</h1>
          <p className="page-intro__description">{isArabic ? "أنا أنس، المعروف باسم YK_Anas. أحب تحويل الفكرة من «ماذا لو؟» إلى شيء يمكنك النقر عليه أو تشغيله أو مشاركته مع الأصدقاء." : "I’m Anas, known online as YK_Anas. I’m an artist, animator, and programmer who likes taking an idea from “what if?” to something you can click, run, or share with friends."}</p>
        </div>
        <div className="page-intro__note page-intro__note--about"><span className="page-intro__note-mark">YK_</span><span>{isArabic ? "فضولي بطبيعتي." : "Curious by default."}</span><small>{isArabic ? "أبني وأنشئ وأحرّك، فكرة صغيرة في كل مرة." : "Building, creating, and animating one small idea at a time."}</small></div>
      </section>

      <section className="about-skills section-wrap" aria-labelledby="skills-title">
        <SectionLabel index="02">{isArabic ? "الأدوات" : "The toolkit"}</SectionLabel>
        <div className="about-skills__heading"><div><p className="mono-label">{isArabic ? "ما أستخدمه حالياً" : "CURRENTLY IN THE TOOLBOX"}</p><h2 id="skills-title">{isArabic ? <>مجموعة صغيرة،<br /><em>مجال كبير للاستكشاف.</em></> : <>A small stack,<br /><em>lots to explore.</em></>}</h2></div><p className="about-skills__aside">{isArabic ? "الأدوات واضحة. المتعة في ما يمكنها صنعه معاً." : "The tools are straightforward. The fun is in what they can do together."}</p></div>
        <div className="skills-list">
          {skills.map((skill, index) => <div className="skill-row-card" key={skill.enName}><span className="skill-row-card__number">0{index + 1}</span><span className="skill-row-card__check"><Check size={17} /></span><h3>{isArabic ? skill.arName : skill.enName}</h3><p>{isArabic ? skill.arDetail : skill.enDetail}</p></div>)}
        </div>
      </section>

      <section className="bot-band section-wrap" aria-labelledby="bot-title">
        <div className="bot-band__copy"><SectionLabel index="03">{isArabic ? "تفصيل إضافي" : "A little more specific"}</SectionLabel><p className="mono-label">{isArabic ? "مبرمج بوتات ديسكورد" : "DISCORD BOT PROGRAMMER"}</p><h2 id="bot-title">{isArabic ? <>أبني أدوات<br /><em>تبقى المجتمعات فاتحة لها.</em></> : <>I build the tools<br /><em>communities keep open.</em></>}</h2><p className="bot-band__description">{isArabic ? "البوتات هي المكان الذي يلتقي فيه الكود بالناس: أوامر مفيدة ولحظات مرحة وأنظمة تجعل إدارة الخادم أسهل." : "Bots are where code meets people: useful commands, playful moments, and systems that make a busy server easier to run."}</p><Link className="text-link text-link--light" href="/connect">{isArabic ? "تحدث معي عن البوتات" : "Talk bots with me"} <ArrowUpRight size={16} strokeWidth={2} /></Link></div>
        <div className="bot-band__visual"><img src={botOrbitUrl} alt={isArabic ? "رسم توضيحي لبوت" : "Abstract bot illustration"} /><span className="bot-band__scribble">{isArabic ? "دائماً أمر إضافي" : "always one more command"}</span></div>
      </section>

      <section className="about-next section-wrap" aria-label={isArabic ? "تابع الاستكشاف" : "Continue exploring"}><div className="about-next__icon"><MessageCircle size={22} strokeWidth={1.7} /></div><p>{isArabic ? "هل تريد رؤية الكود خلف الأفكار؟" : "Want to see the code behind the ideas?"}</p><Link className="text-link" href="/work">{isArabic ? "اذهب إلى الأعمال" : "Go to the work"} <ArrowUpRight size={16} /></Link></section>
    </>
  );
}
