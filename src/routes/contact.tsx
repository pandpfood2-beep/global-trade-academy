import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle, Loader2, CheckCircle2, Facebook, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Global Export Import Academy" },
      { name: "description", content: "Get in touch with Global Export Import Academy. WhatsApp, Instagram @bala__62, phone +91 8698569314, or email us." },
      { property: "og:title", content: "Contact Global Export Import Academy" },
      { property: "og:description", content: "Reach out for export-import training, consultancy and partnerships." },
    ],
  }),
  component: Page,
});

const PHONE = "+918698569314";
const PHONE_DISPLAY = "+91 86985 69314";
const EMAIL = "pandpfood2@gmail.com";
const INSTAGRAM_HANDLE = "bala__62";
const WHATSAPP_TEXT = "Hello! I'm interested in your Export-Import services.";

function Page() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(fd.get("subject") || "Website inquiry"));
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone") || "-"}\n\n${fd.get("message")}`
    );
    // Open user's mail client as a delivery fallback. Backend lead capture is on /training-inquiry and /consultancy-inquiry.
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 6000);
    }, 600);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk global trade"
        subtitle="Reach us on WhatsApp, Instagram, email or this form. We usually reply within one business day."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left column */}
          <div className="space-y-5">
            <a
              href={`https://wa.me/${PHONE.replace(/[^\d]/g, "")}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-to-br from-emerald-50 to-white p-5 shadow-card transition-transform hover:-translate-y-0.5 dark:from-emerald-950/30 dark:to-card"
            >
              <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-emerald-500 text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">WhatsApp us</p>
                <p className="text-sm text-muted-foreground">Tap to chat instantly · {PHONE_DISPLAY}</p>
              </div>
            </a>

            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 text-white">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Follow on Instagram</p>
                <p className="text-sm text-muted-foreground">@{INSTAGRAM_HANDLE}</p>
              </div>
            </a>

            <Info icon={Phone} title="Phone" lines={[PHONE_DISPLAY]} href={`tel:${PHONE}`} />
            <Info icon={Mail} title="Email" lines={[EMAIL]} href={`mailto:${EMAIL}`} />
            <Info icon={MapPin} title="Office" lines={["Global Export Import Academy", "India"]} />

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect with us</p>
              <div className="flex flex-wrap gap-2">
                <SocialBtn href={`https://instagram.com/${INSTAGRAM_HANDLE}`} icon={Instagram} label="Instagram" />
                <SocialBtn href={`https://wa.me/${PHONE.replace(/[^\d]/g, "")}`} icon={MessageCircle} label="WhatsApp" />
                <SocialBtn href="https://www.facebook.com/" icon={Facebook} label="Facebook" />
                <SocialBtn href="https://www.linkedin.com/" icon={Linkedin} label="LinkedIn" />
                <SocialBtn href="https://www.youtube.com/" icon={Youtube} label="YouTube" />
              </div>
            </div>
          </div>

          {/* Right column — email form */}
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-sm text-muted-foreground">
              For training enrolment use the <a href="/training-inquiry" className="font-medium text-brand underline">Training form</a>,
              for consultancy use the <a href="/consultancy-inquiry" className="font-medium text-brand underline">Consultancy form</a>.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required maxLength={120} />
              <Field label="Email" name="email" type="email" required maxLength={160} />
              <Field label="Phone" name="phone" type="tel" maxLength={30} />
              <Field label="Subject" name="subject" required maxLength={120} />
            </div>
            <div>
              <Label className="text-sm font-medium">Message *</Label>
              <Textarea required minLength={5} maxLength={2000} rows={5} name="message" className="mt-1" />
            </div>
            <Button type="submit" disabled={sending} className="bg-navy text-primary-foreground hover:opacity-90">
              {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              {sending ? "Opening your mail app…" : "Send Message"}
            </Button>
            {sent && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <CheckCircle2 className="h-4 w-4" /> Your mail app should now be open with the message prefilled.
              </p>
            )}
          </form>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=India&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label className="text-sm font-medium">{label} {rest.required && "*"}</Label>
      <Input {...rest} className="mt-1" />
    </div>
  );
}

function Info({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-lg bg-navy text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}

function SocialBtn({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}
