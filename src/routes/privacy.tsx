import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Global Export Import Academy" },
      { name: "description", content: "Privacy Policy of Global Export Import Academy — how we collect, use and protect your information." },
    ],
  }),
  component: Page,
});

const sections = [
  { t: "Data Collection", d: "We collect information you provide directly — name, email, phone, message — when you contact us, subscribe to our newsletter or register for a course. We also collect non-personal data such as browser type, device and pages visited." },
  { t: "Information Usage", d: "Your information is used to respond to inquiries, deliver requested content, send updates you opted into, improve our services and comply with legal obligations. We never sell your data." },
  { t: "Cookies Policy", d: "We use cookies and similar technologies to analyse traffic, remember preferences and personalise content. You may disable cookies in your browser, though some features may not work." },
  { t: "Security Measures", d: "We use industry-standard safeguards including HTTPS encryption, restricted access and periodic reviews to protect your data from unauthorised access, disclosure or destruction." },
  { t: "User Rights", d: "You have the right to access, correct, delete or port your personal data, and to withdraw consent at any time. Email us to exercise any of these rights." },
  { t: "Contact Information", d: "For privacy-related queries, email pandpfood2@gmail.com or call +91 8698569314." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we collect, use and protect the information you share with us." />
      <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8 space-y-8">
        <p className="text-sm text-muted-foreground">Last updated: June 6, 2026</p>
        {sections.map((s) => (
          <section key={s.t}>
            <h2 className="text-xl font-bold">{s.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
