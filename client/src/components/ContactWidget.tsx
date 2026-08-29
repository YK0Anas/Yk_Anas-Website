/*
 * Soft Utility design reminder: contact is an open door, not a loud pop-up.
 * Keep the floating control compact, coral, keyboard-friendly, bilingual, and honest
 * about the lightweight email service handling the form submission.
 */
import { type FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Send, X } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

const DISCORD_URL = "https://discord.com/users/1542793027456606281";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/anastayl560@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error";
type ContactMode = "options" | "form";
type ServiceKey = "website" | "discord" | "drawing" | "another";

const SERVICE_KEYS: ServiceKey[] = ["website", "discord", "drawing", "another"];
const CONTACT_OPEN_EVENT = "yk-anas:open-contact";

type ContactOpenDetail = { service?: string };

function isServiceKey(value: string): value is ServiceKey {
  return SERVICE_KEYS.includes(value as ServiceKey);
}

function getRequestedService(): string {
  if (typeof window === "undefined") return "";
  const requestedService = new URLSearchParams(window.location.search).get("service") ?? "";
  return isServiceKey(requestedService) ? requestedService : "";
}

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const initialValues: FormValues = { name: "", email: "", service: "", message: "" };

export default function ContactWidget() {
  const [location] = useLocation();
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const requestedService = getRequestedService();
  const [isOpen, setIsOpen] = useState(() => Boolean(requestedService));
  const [mode, setMode] = useState<ContactMode>(() => requestedService ? "form" : "options");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [values, setValues] = useState<FormValues>(() => ({ ...initialValues, service: requestedService }));

  useEffect(() => {
    const serviceFromLink = getRequestedService();
    if (serviceFromLink) {
      setIsOpen(true);
      setMode("form");
      setStatus("idle");
      setValues((current) => ({ ...current, service: serviceFromLink }));
    }

    function handleContactOpen(event: Event) {
      const serviceFromEvent = (event as CustomEvent<ContactOpenDetail>).detail?.service ?? "";
      if (!isServiceKey(serviceFromEvent)) return;
      setIsOpen(true);
      setMode("form");
      setStatus("idle");
      setValues((current) => ({ ...current, service: serviceFromEvent }));
    }

    window.addEventListener(CONTACT_OPEN_EVENT, handleContactOpen);
    return () => window.removeEventListener(CONTACT_OPEN_EVENT, handleContactOpen);
  }, [location]);

  function closeWidget() {
    setIsOpen(false);
    setMode("options");
    setStatus("idle");
  }

  function openEmailForm() {
    setMode("form");
    setStatus("idle");
  }

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          service: serviceChoices.find((choice) => choice.value === values.service)?.label ?? values.service,
          _subject: `New portfolio message from ${values.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  const labels = isArabic
    ? {
        open: "تواصل مع أنس",
        close: "إغلاق خيارات التواصل",
        title: "لنتحدث",
        subtitle: "اختر الطريقة التي تناسبك.",
        discord: "تواصل عبر Discord",
        discordNote: "افتح محادثة مباشرة",
        email: "أرسل بريداً إلكترونياً",
        emailNote: "اكتب رسالة من الموقع",
        back: "العودة إلى الخيارات",
        name: "الاسم",
        emailField: "بريدك الإلكتروني",
        service: "الخدمة المطلوبة",
        servicePlaceholder: "اختر خدمة",
        message: "رسالتك",
        namePlaceholder: "اكتب اسمك",
        emailPlaceholder: "you@example.com",
        messagePlaceholder: "ما الذي تريد أن نبنيه؟",
        send: "إرسال الرسالة",
        sending: "جارٍ الإرسال…",
        success: "تم إرسال رسالتك بنجاح. شكراً لتواصلك!",
        sendAnother: "إرسال رسالة أخرى",
        error: "تعذر إرسال الرسالة الآن. حاول مرة أخرى أو تواصل عبر Discord.",
        serviceNote: "تصل الرسالة إلى anastayl560@gmail.com",
      }
    : {
        open: "Contact Anas",
        close: "Close contact options",
        title: "Let’s talk",
        subtitle: "Choose the route that feels right.",
        discord: "Contact through Discord",
        discordNote: "Open a direct conversation",
        email: "Send an email",
        emailNote: "Write a message from the site",
        back: "Back to choices",
        name: "Name",
        emailField: "Your email",
        service: "Service",
        servicePlaceholder: "Choose a service",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        messagePlaceholder: "What should we make?",
        send: "Send message",
        sending: "Sending…",
        success: "Your message was sent successfully. Thanks for reaching out!",
        sendAnother: "Send another message",
        error: "The message could not be sent. Try again or contact me through Discord.",
        serviceNote: "Delivered to anastayl560@gmail.com",
      };

  const serviceChoices = isArabic
    ? [
        { value: "website", label: "صناعة المواقع" },
        { value: "discord", label: "برمجة بوتات Discord" },
        { value: "drawing", label: "الرسم والتوضيح" },
        { value: "another", label: "شيء آخر" },
      ]
    : [
        { value: "website", label: "Making websites" },
        { value: "discord", label: "Programming Discord bots" },
        { value: "drawing", label: "Drawing" },
        { value: "another", label: "Another" },
      ];

  return (
    <div className="contact-widget">
      {isOpen && (
        <section className={`contact-popover ${mode === "form" ? "contact-popover--form" : ""}`} aria-label={labels.title}>
          <div className="contact-popover__header">
            <div>
              <span className="mono-label">{isArabic ? "باب مفتوح" : "OPEN CHANNEL"}</span>
              <h2>{labels.title}</h2>
            </div>
            <button className="contact-popover__close" type="button" onClick={closeWidget} aria-label={labels.close}>
              <X size={17} aria-hidden="true" />
            </button>
          </div>

          {mode === "options" ? (
            <>
              <p className="contact-popover__subtitle">{labels.subtitle}</p>
              <div className="contact-options">
                <a className="contact-option" href={DISCORD_URL} target="_blank" rel="noreferrer" onClick={closeWidget}>
                  <span className="contact-option__icon"><MessageCircle size={18} aria-hidden="true" /></span>
                  <span><strong>{labels.discord}</strong><small>{labels.discordNote}</small></span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <button className="contact-option" type="button" onClick={openEmailForm}>
                  <span className="contact-option__icon"><Mail size={18} aria-hidden="true" /></span>
                  <span><strong>{labels.email}</strong><small>{labels.emailNote}</small></span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </>
          ) : status === "success" ? (
            <div className="contact-success" role="status" aria-live="polite">
              <span className="contact-success__mark" aria-hidden="true">✓</span>
              <span className="mono-label">{isArabic ? "تم التسليم" : "DELIVERED"}</span>
              <p>{labels.success}</p>
              <button className="contact-form__submit contact-success__again" type="button" onClick={() => setStatus("idle")}>
                <Send size={15} aria-hidden="true" /> {labels.sendAnother}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <button className="contact-form__back" type="button" onClick={() => setMode("options")}>
                <ArrowUpRight size={14} aria-hidden="true" /> {labels.back}
              </button>
              <label>
                <span>{labels.name}</span>
                <input required value={values.name} onChange={(event) => updateField("name", event.target.value)} placeholder={labels.namePlaceholder} autoComplete="name" />
              </label>
              <label>
                <span>{labels.emailField}</span>
                <input required type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} placeholder={labels.emailPlaceholder} autoComplete="email" />
              </label>
              <label>
                <span>{labels.service}</span>
                <select required value={values.service} onChange={(event) => updateField("service", event.target.value)}>
                  <option value="">{labels.servicePlaceholder}</option>
                  {serviceChoices.map((choice) => <option value={choice.value} key={choice.value}>{choice.label}</option>)}
                </select>
              </label>
              <label>
                <span>{labels.message}</span>
                <textarea required rows={4} value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder={labels.messagePlaceholder} />
              </label>
              <button className="contact-form__submit" type="submit" disabled={status === "sending"}>
                <Send size={15} aria-hidden="true" /> {status === "sending" ? labels.sending : labels.send}
              </button>
              <p className="contact-form__note">{labels.serviceNote}</p>
              {status === "error" && <p className="contact-form__status contact-form__status--error" role="alert">{labels.error}</p>}
            </form>
          )}
        </section>
      )}

      <button className="contact-toggle" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? labels.close : labels.open} title={labels.open}>
        {isOpen ? <X size={19} aria-hidden="true" /> : <Mail size={19} aria-hidden="true" />}
      </button>
    </div>
  );
}
