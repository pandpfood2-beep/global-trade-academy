import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import customsImg from "@/assets/customs.jpg";
import policyImg from "@/assets/policy.jpg";
import financeImg from "@/assets/finance.jpg";
import globalImg from "@/assets/global-trade.jpg";
import portImg from "@/assets/hero-port.jpg";
import containersImg from "@/assets/containers.jpg";
import docsImg from "@/assets/docs.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import shipImg from "@/assets/ship.jpg";
import { Award, Building2, FileBadge, Globe2, Landmark, ScrollText, ShieldCheck, Sparkles, Receipt } from "lucide-react";

const polImgs = [policyImg, docsImg, financeImg, customsImg, globalImg, containersImg, portImg, warehouseImg, shipImg];

export const Route = createFileRoute("/government-policies")({
  head: () => ({
    meta: [
      { title: "Government Policies | DGFT, IEC, GST, RoDTEP, SEZ" },
      { name: "description", content: "Indian government policies and schemes for exporters and importers — DGFT, IEC, GST, RoDTEP, SEZ benefits and compliance requirements." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Landmark, t: "DGFT", d: "Directorate General of Foreign Trade — formulates and implements India's Foreign Trade Policy (FTP)." },
  { icon: FileBadge, t: "IEC Registration", d: "10-digit code mandatory for cross-border trade. Apply online on the DGFT portal with PAN, Aadhaar & bank details." },
  { icon: Receipt, t: "GST in Export Import", d: "Exports zero-rated under GST. Export with LUT (no IGST) or pay IGST and claim refund. Imports attract IGST under reverse charge." },
  { icon: ShieldCheck, t: "Customs Regulations", d: "Customs Act 1962 governs duty, prohibited/restricted items, valuation and clearance." },
  { icon: Sparkles, t: "RoDTEP Scheme", d: "Remission of Duties and Taxes on Exported Products — refunds embedded central, state & local taxes via duty credit scrip." },
  { icon: Building2, t: "SEZ Benefits", d: "Special Economic Zones: duty-free imports, 100% FDI, single-window clearance and tax exemptions on exports." },
  { icon: Award, t: "Export Promotion Schemes", d: "EPCG, Advance Authorisation, Duty Drawback, EOU, Interest Equalisation Scheme." },
  { icon: Globe2, t: "Government Incentives", d: "Market Access Initiative, Transport & Marketing Assistance, TIES and product-specific PLI schemes." },
  { icon: ScrollText, t: "Compliance Requirements", d: "BRC/eBRC, RBI/FEMA filings, GST returns, AD code registration, RCMC from EPCs." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Policy"
        title="Government Policies & Schemes"
        subtitle="Decoding DGFT, customs and GST rules along with the incentives that make Indian exports globally competitive."
        image={customsImg}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article key={i.t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-primary-foreground">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
