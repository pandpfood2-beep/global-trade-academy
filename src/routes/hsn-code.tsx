import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import docsImg from "@/assets/docs.jpg";
import globalImg from "@/assets/global-trade.jpg";
import customsImg from "@/assets/customs.jpg";
import containersImg from "@/assets/containers.jpg";
import policyImg from "@/assets/policy.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import financeImg from "@/assets/finance.jpg";
import { Hash, BookOpen, Search, ShieldCheck, Layers, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hsn-code")({
  head: () => ({
    meta: [
      { title: "HSN Code Guide | HS Code Classification for Export Import" },
      { name: "description", content: "Complete guide to HSN/HS Code — what it is, structure, chapters, how to find HSN code for your product, GST and customs use, with step-by-step examples." },
    ],
  }),
  component: Page,
});

const structure = [
  { len: "2-digit", name: "Chapter", desc: "Broad category of product (Chapter 09 = Coffee, Tea, Spices)." },
  { len: "4-digit", name: "Heading", desc: "Group within chapter (0902 = Tea)." },
  { len: "6-digit", name: "Sub-heading", desc: "International HS code (090230 = Black Tea in packets ≤3kg)." },
  { len: "8-digit", name: "Tariff Item (ITC-HS)", desc: "Indian extension for customs (09023010)." },
];

const chapters = [
  ["01-05", "Live animals & animal products"],
  ["06-14", "Vegetable products"],
  ["15", "Animal/Vegetable fats & oils"],
  ["16-24", "Prepared foodstuffs, beverages, tobacco"],
  ["25-27", "Mineral products"],
  ["28-38", "Chemicals & allied industries"],
  ["39-40", "Plastics & Rubber"],
  ["41-43", "Leather & fur"],
  ["44-49", "Wood, paper, printed books"],
  ["50-63", "Textiles & garments"],
  ["64-67", "Footwear, headgear"],
  ["68-70", "Stone, ceramics, glass"],
  ["71", "Gems, jewellery, precious metals"],
  ["72-83", "Base metals & articles"],
  ["84-85", "Machinery & electronics"],
  ["86-89", "Vehicles, aircraft, ships"],
  ["90-92", "Optical, medical, musical instruments"],
  ["93", "Arms & ammunition"],
  ["94-96", "Miscellaneous manufactured articles"],
  ["97", "Works of art & antiques"],
];

const steps = [
  { t: "Identify product nature", d: "Material, function, processing stage and end-use. Example: leather wallet for men.", img: globalImg },
  { t: "Locate the Chapter", d: "Use the HS book or DGFT ITC-HS list to find the chapter (Leather = 42).", img: docsImg },
  { t: "Drill down to Heading", d: "Within the chapter, identify 4-digit heading (4202 = trunks, bags, wallets).", img: containersImg },
  { t: "Find 6-digit sub-heading", d: "International code (420231 = Articles with outer surface of leather).", img: warehouseImg },
  { t: "Pick 8-digit tariff item", d: "Indian classification used in shipping bill / bill of entry (42023110).", img: customsImg },
  { t: "Cross-check on ICEGATE/CBIC", d: "Verify duty rate, GST rate, RoDTEP, restrictions and SCOMET status.", img: policyImg },
  { t: "Confirm with CHA", d: "Avoid misclassification — wrong HSN can lead to penalty and detention.", img: financeImg },
];

const uses = [
  { icon: ShieldCheck, t: "Customs Duty", d: "BCD, IGST, Cess and Anti-dumping duty rates are tied to HSN." },
  { icon: FileText, t: "GST Compliance", d: "HSN must appear on invoices (4/6/8 digits based on turnover)." },
  { icon: Layers, t: "Export Incentives", d: "Schemes like RoDTEP, DBK, Advance Auth are calculated by HSN." },
  { icon: Search, t: "Trade Statistics", d: "Governments track imports/exports country-wise by HSN code." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Classification"
        title="HSN Code — Complete Guide"
        subtitle="Harmonised System of Nomenclature (HSN/HS Code) is the universal 6–8 digit classification used in every country to identify traded goods for customs and tax."
        image={docsImg}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 space-y-16">
        {/* What is */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={globalImg} alt="HSN globally" loading="lazy" className="h-48 w-full object-cover" />
            <div className="p-8">
              <Hash className="h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">What is HSN Code?</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The Harmonised System (HS) is an international product nomenclature developed by the
                World Customs Organisation (WCO). 200+ countries use it. India calls it HSN — Harmonised
                System of Nomenclature — and extends the 6-digit HS to 8 digits (ITC-HS) for finer
                customs and trade classification. Every product traded globally has one correct HSN.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={policyImg} alt="HSN structure" loading="lazy" className="h-48 w-full object-cover" />
            <div className="p-8">
              <BookOpen className="h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">Why HSN Matters</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                HSN code decides customs duty, IGST, GST rate, eligibility for FTAs and incentives,
                import-export restrictions and statistical reporting. Misclassification is the #1
                reason for customs disputes, demurrage and lost incentives. Getting HSN right is the
                first step of every successful shipment.
              </p>
            </div>
          </div>
        </section>

        {/* Structure */}
        <section>
          <h2 className="text-3xl font-bold">HSN Code Structure</h2>
          <p className="mt-3 text-muted-foreground">An 8-digit Indian tariff item read left to right narrows from broad to specific.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {structure.map((s, i) => (
              <div key={s.len} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="rounded-md bg-navy px-3 py-1 text-xs font-bold text-primary-foreground">{s.len}</span>
                <h4 className="mt-3 font-semibold">{i + 1}. {s.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/40 p-8">
            <p className="text-sm font-semibold text-navy dark:text-brand-light">Example: 09023010 — Black tea in packets ≤ 3 kg</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-mono">
              <span className="rounded bg-card px-3 py-2 shadow-card">09 <span className="text-muted-foreground">Chapter — Coffee, Tea, Spices</span></span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="rounded bg-card px-3 py-2 shadow-card">0902 <span className="text-muted-foreground">Heading — Tea</span></span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="rounded bg-card px-3 py-2 shadow-card">090230 <span className="text-muted-foreground">Sub-heading — Black tea, small pack</span></span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="rounded bg-card px-3 py-2 shadow-card">09023010 <span className="text-muted-foreground">Tariff Item — Leaf tea</span></span>
            </div>
          </div>
        </section>

        {/* Step by step */}
        <section>
          <h2 className="text-3xl font-bold">Step-by-Step: How to Find HSN Code</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {steps.map((s, i) => (
              <article key={s.t} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={s.img} alt={s.t} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <h4 className="font-semibold">{s.t}</h4>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Chapters reference */}
        <section>
          <h2 className="text-3xl font-bold">HSN Chapter Reference (Sections)</h2>
          <p className="mt-3 text-muted-foreground">The HS has 21 Sections and 99 Chapters. Quick lookup:</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map(([c, d]) => (
              <div key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                <span className="rounded bg-navy px-2 py-0.5 text-xs font-bold text-primary-foreground">{c}</span>
                <span className="text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Uses */}
        <section>
          <h2 className="text-3xl font-bold">Where HSN Code Is Used</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {uses.map((u) => (
              <div key={u.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <u.icon className="h-8 w-8 text-brand" />
                <h4 className="mt-3 font-semibold">{u.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{u.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GST turnover */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
            <h3 className="text-xl font-bold">HSN on GST Invoices (India)</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>• Turnover up to ₹5 Cr (B2B): 4-digit HSN</li>
              <li>• Turnover above ₹5 Cr: 6-digit HSN</li>
              <li>• Exports / Imports: 8-digit HSN mandatory</li>
              <li>• E-invoice & E-way bill require correct HSN</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-xl font-bold">Resources to Verify HSN</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• CBIC Tariff: cbic.gov.in</li>
              <li>• DGFT ITC-HS Schedule: dgft.gov.in</li>
              <li>• ICEGATE Customs Tariff Search</li>
              <li>• GST Portal HSN Lookup</li>
              <li>• WCO HS Database (international)</li>
            </ul>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
