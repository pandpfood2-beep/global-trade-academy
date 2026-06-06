import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Global Export Import Academy" },
      { name: "description", content: "Terms and Conditions for using the Global Export Import Academy website and learning resources." },
    ],
  }),
  component: Page,
});

const sections = [
  { t: "Website Usage", d: "By accessing this website you agree to these terms. The content is provided for educational purposes and does not constitute legal, financial or professional advice." },
  { t: "User Responsibilities", d: "You agree to use this site lawfully, not to attempt unauthorised access, scrape content or disrupt the service, and to provide accurate information when submitting forms." },
  { t: "Intellectual Property Rights", d: "All content — text, graphics, logos, illustrations, downloadable templates — is owned by Global Export Import Academy and protected by copyright. You may not reproduce or redistribute without written consent." },
  { t: "Disclaimer", d: "While we strive for accuracy, we make no warranties about the completeness or reliability of the information. Government policies, duties and schemes change frequently — verify with official sources before acting." },
  { t: "Limitation of Liability", d: "We are not liable for any direct, indirect, incidental or consequential damages arising from the use or inability to use the site or its content." },
  { t: "Privacy Terms", d: "Use of personal data is governed by our Privacy Policy. By using the site you consent to those practices." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="The rules of engagement for using our website and educational resources." />
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
