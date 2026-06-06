import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Global Export Import Academy" },
      { name: "description", content: "Get in touch with Global Export Import Academy. Phone +91 8698569314, email pandpfood2@gmail.com." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk global trade"
        subtitle="Have a question about exports, imports or our courses? Send us a message — we usually reply within one business day."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Info icon={Phone} title="Phone" lines={["+91 8698569314"]} href="tel:+918698569314" />
            <Info icon={Mail} title="Email" lines={["pandpfood2@gmail.com"]} href="mailto:pandpfood2@gmail.com" />
            <Info icon={MapPin} title="Office" lines={["Global Export Import Academy", "India"]} />
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=India&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 5000);
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-border bg-card p-7 shadow-card space-y-4"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Subject" name="subject" required />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                required
                rows={5}
                name="message"
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="text-sm font-medium text-brand">Thank you! We've received your message.</p>}
          </form>
        </div>
      </div>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...rest}
        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
      />
    </div>
  );
}

function Info({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
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
