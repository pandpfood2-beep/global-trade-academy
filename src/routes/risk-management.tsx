import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import shipImg from "@/assets/ship.jpg";
import financeImg from "@/assets/finance.jpg";
import customsImg from "@/assets/customs.jpg";
import globalImg from "@/assets/global-trade.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import policyImg from "@/assets/policy.jpg";
import containersImg from "@/assets/containers.jpg";
import docsImg from "@/assets/docs.jpg";
import { ShieldAlert, Coins, FileWarning, Ship, Globe2, Gavel, ShieldCheck, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/risk-management")({
  head: () => ({
    meta: [
      { title: "Risk Management in Export Import | Trade, Credit & Shipping Risks" },
      { name: "description", content: "Complete guide to risk management in international trade — payment, currency, transit, political, legal and compliance risks with mitigation tools like LC, ECGC, insurance and hedging." },
    ],
  }),
  component: Page,
});

const risks = [
  { icon: Coins, t: "Payment / Credit Risk", d: "Buyer fails to pay or delays payment. Largest risk for exporters on open account terms.", mitigation: "Insist on LC, advance TT, or ECGC policy. Verify buyer via D&B, credit report and references.", img: financeImg },
  { icon: Globe2, t: "Currency / FX Risk", d: "Exchange rate fluctuations between contract date and payment realisation erode margins.", mitigation: "Forward contracts, currency hedging, invoice in stable currency (USD/EUR), price escalation clauses.", img: globalImg },
  { icon: Ship, t: "Transit / Cargo Risk", d: "Damage, theft, fire, sinking, contamination or loss during sea/air/road movement.", mitigation: "Marine cargo insurance (ICC A/B/C), proper packaging, choose reputed carriers, monitor temperature for reefers.", img: shipImg },
  { icon: Gavel, t: "Political & Country Risk", d: "War, sanctions, coup, currency inconvertibility, sudden import bans in buyer's country.", mitigation: "ECGC political risk cover, diversify markets, monitor MEA & DGFT advisories.", img: policyImg },
  { icon: FileWarning, t: "Documentary Risk", d: "Discrepancies in LC documents, wrong HSN, missing CoO causing rejection or duty penalty.", mitigation: "Use a CHA, double-check docs before dispatch, follow UCP 600, pre-shipment inspection.", img: docsImg },
  { icon: ShieldAlert, t: "Compliance & Legal Risk", d: "Violation of export control, SCOMET, anti-dumping, IPR or sanctions can lead to penalty/blacklisting.", mitigation: "Screen buyers against sanctions lists, follow DGFT/FEMA, maintain records for 5 years.", img: customsImg },
  { icon: AlertTriangle, t: "Product / Quality Risk", d: "Goods rejected at destination due to spec mismatch, contamination, certification gaps.", mitigation: "Third-party inspection (SGS, BV, TUV), sample approval, written quality clause in contract.", img: warehouseImg },
  { icon: ShieldCheck, t: "Logistics & Carrier Risk", d: "Strikes, port congestion, container shortage, vessel delays, re-routing (e.g., Red Sea).", mitigation: "Build buffer transit times, alternate routings, multiple forwarders, demurrage-free clauses.", img: containersImg },
];

const tools = [
  ["Letter of Credit (LC)", "Bank-guaranteed payment subject to compliant docs."],
  ["ECGC Cover", "Insures exporters against buyer default and political risk."],
  ["Marine Insurance", "Covers physical loss/damage during international transit."],
  ["Forward Contract", "Locks the exchange rate for future receivables/payables."],
  ["Pre-shipment Inspection", "Independent QC at factory before dispatch."],
  ["Trade Credit Insurance", "Private cover for receivables across multiple buyers."],
  ["Bank Guarantee / SBLC", "Standby payment instrument when LC isn't used."],
  ["KYC & Sanctions Screening", "OFAC, UN, EU sanctions lists before onboarding buyers."],
];

const steps = [
  { t: "Identify Risk", d: "Map every risk in your trade lane — buyer, country, cargo, currency, mode.", img: globalImg },
  { t: "Assess Impact & Probability", d: "Score each risk on likelihood × financial impact. Prioritise top 5.", img: financeImg },
  { t: "Select Mitigation Tool", d: "Pick LC, ECGC, insurance, hedge or contract clause for each top risk.", img: policyImg },
  { t: "Implement Controls", d: "Document SOPs, train team, enforce KYC and document checklists.", img: docsImg },
  { t: "Monitor Continuously", d: "Track shipments, FX rates, geopolitics; review quarterly and after every claim.", img: customsImg },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trade Safety"
        title="Risk Management in International Trade"
        subtitle="Every cross-border shipment carries risk — payment, currency, transit, political, legal. Master the full toolkit to protect your margins and reputation."
        image={shipImg}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 space-y-16">
        {/* Risks list */}
        <section>
          <h2 className="text-3xl font-bold">Top 8 Risks in Export-Import</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {risks.map((r) => (
              <article key={r.t} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={r.img} alt={r.t} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-6">
                  <r.icon className="h-9 w-9 text-brand" />
                  <h3 className="mt-3 text-lg font-bold">{r.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                  <div className="mt-4 rounded-lg bg-secondary/50 p-3 text-xs">
                    <span className="font-semibold text-navy dark:text-brand-light">Mitigation: </span>
                    <span className="text-muted-foreground">{r.mitigation}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="text-2xl font-bold">Risk Mitigation Tools</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map(([t, d]) => (
              <div key={t} className="rounded-xl bg-card p-4 shadow-card">
                <h4 className="text-sm font-semibold text-navy dark:text-brand-light">{t}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold">Step-by-Step Risk Management Process</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <article key={s.t} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={s.img} alt={s.t} loading="lazy" className="h-32 w-full object-cover" />
                <div className="p-5">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <h4 className="mt-3 font-semibold">{s.t}</h4>
                  <p className="mt-2 text-xs text-muted-foreground">{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl gradient-hero p-10 text-primary-foreground lg:p-14">
          <h2 className="text-3xl font-bold">Golden Rule</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            Never ship goods without (1) a verified buyer, (2) a written contract with Incoterms,
            (3) a secure payment instrument and (4) marine insurance. The cost of these safeguards
            is a small fraction of one bad shipment.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
