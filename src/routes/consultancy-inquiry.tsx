import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { Briefcase, Globe2, ShieldCheck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/consultancy-inquiry")({
  head: () => ({
    meta: [
      { title: "Export Import Consultancy | Global Export Import Academy" },
      { name: "description", content: "End-to-end export-import consultancy: buyer search, documentation, INCOTERMS, customs clearance, shipping and payments." },
      { property: "og:title", content: "Export Import Consultancy" },
      { property: "og:description", content: "Hands-on consultancy to launch and grow your export-import business." },
    ],
  }),
  component: Page,
});

const SERVICES = [
  { icon: Globe2, title: "Buyer & Supplier Sourcing", text: "Verified international buyers and reliable suppliers, vetted for your product." },
  { icon: ShieldCheck, title: "Documentation & Compliance", text: "Invoice, packing list, BL, COO, customs, IEC, AD code — handled end-to-end." },
  { icon: TrendingUp, title: "Pricing & Negotiation", text: "INCOTERMS-based pricing, payment terms, and negotiation playbooks." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Consultancy"
        title="Export-Import Consultancy that gets results"
        subtitle="Whether you're launching your first export or scaling to new markets, our consultants guide you through buyer search, documentation, shipping and payments."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-primary-foreground">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">How we work with you</h2>
              <p className="text-sm text-muted-foreground">A clear, milestone-based engagement.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <s.icon className="h-6 w-6 text-brand" />
                <p className="mt-3 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <ol className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-card text-sm">
            <li><strong>1. Discovery call</strong> — we understand your product, market and goals.</li>
            <li><strong>2. Market & buyer research</strong> — qualified international leads.</li>
            <li><strong>3. Documentation setup</strong> — IEC, AD code, banking, invoicing.</li>
            <li><strong>4. First shipment</strong> — guided customs, logistics and payment collection.</li>
            <li><strong>5. Scale</strong> — repeat orders, new markets, optimised margins.</li>
          </ol>
        </div>
        <div>
          <LeadForm kind="consultancy" />
        </div>
      </div>
    </SiteLayout>
  );
}
