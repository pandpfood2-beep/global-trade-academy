import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { incoterms } from "@/data/content";
import { incotermsLong } from "@/data/extended";
import shipImg from "@/assets/ship.jpg";
import containersImg from "@/assets/containers.jpg";
import aircargoImg from "@/assets/aircargo.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import portImg from "@/assets/hero-port.jpg";
import customsImg from "@/assets/customs.jpg";
import globalImg from "@/assets/global-trade.jpg";
import docsImg from "@/assets/docs.jpg";
import financeImg from "@/assets/finance.jpg";
import policyImg from "@/assets/policy.jpg";
import { PackageCheck, Truck, ShieldCheck, FileCheck, Globe, Ship, Plane, ArrowRight } from "lucide-react";

const imgs = [shipImg, containersImg, portImg, aircargoImg, warehouseImg, customsImg, globalImg];

// Step-by-step process map for every Incoterm (seller → buyer hand-off)
const stepImgs = [docsImg, warehouseImg, containersImg, customsImg, shipImg, globalImg, portImg, financeImg];

const termSteps: Record<string, string[]> = {
  EXW: ["Seller packages goods at premises","Buyer arranges pickup truck","Buyer handles export clearance","Buyer pays main carriage","Buyer pays insurance","Buyer handles import clearance","Buyer pays import duty","Buyer takes final delivery"],
  FCA: ["Seller packs & invoices","Seller does export clearance","Seller delivers to nominated carrier","Risk transfers at carrier","Buyer arranges main carriage","Buyer insures cargo","Buyer clears import","Buyer takes delivery"],
  CPT: ["Seller packs & exports","Seller hands to first carrier (risk transfers)","Seller pays carriage to destination","Buyer arranges insurance","Cargo in transit","Buyer clears import","Buyer pays duty","Buyer takes delivery"],
  CIP: ["Seller packs & exports","Seller hands to first carrier (risk transfers)","Seller pays carriage to destination","Seller pays all-risk insurance","Cargo in transit","Buyer clears import","Buyer pays duty","Buyer takes delivery"],
  DAP: ["Seller packs & exports","Seller arranges main carriage","Seller bears transit risk","Goods arrive at named place","Buyer unloads","Buyer clears import","Buyer pays duty","Buyer uses goods"],
  DPU: ["Seller packs & exports","Seller arranges main carriage","Seller bears risk in transit","Seller unloads at named place","Risk transfers after unloading","Buyer clears import","Buyer pays duty","Buyer takes delivery"],
  DDP: ["Seller packs & exports","Seller arranges main carriage","Seller insures cargo","Seller clears import in buyer country","Seller pays all duties & taxes","Seller delivers to named place","Buyer simply receives goods","Transaction complete"],
  FAS: ["Seller packs & exports","Seller delivers alongside vessel","Risk transfers at quayside","Buyer arranges loading","Buyer pays freight","Buyer insures cargo","Buyer clears import","Buyer takes delivery"],
  FOB: ["Seller packs & exports","Seller delivers cargo to port","Seller loads on board vessel","Risk transfers on board","Buyer pays sea freight","Buyer insures cargo","Buyer clears import","Buyer takes delivery"],
  CFR: ["Seller packs & exports","Seller loads on board (risk transfers)","Seller pays ocean freight","Cargo in transit","Buyer arranges insurance","Cargo arrives destination port","Buyer clears import","Buyer takes delivery"],
  CIF: ["Seller packs & exports","Seller loads on board (risk transfers)","Seller pays ocean freight","Seller arranges marine insurance","Cargo in transit","Cargo arrives destination port","Buyer clears import","Buyer takes delivery"],
};

const groups = [
  { title: "Any Mode of Transport", icon: Globe, codes: ["EXW","FCA","CPT","CIP","DAP","DPU","DDP"], color: "bg-brand/10 text-brand" },
  { title: "Sea & Inland Waterway Only", icon: Ship, codes: ["FAS","FOB","CFR","CIF"], color: "bg-navy text-primary-foreground" },
];

export const Route = createFileRoute("/incoterms")({
  head: () => ({
    meta: [
      { title: "Incoterms 2020 Complete Guide | All 11 Rules Step by Step" },
      { name: "description", content: "Complete step-by-step guide to all 11 Incoterms 2020 — EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF with seller/buyer duties, risk transfer, real examples and visuals." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ICC Rules"
        title="Incoterms 2020 — All 11 Rules, Step by Step"
        subtitle="The international standard that defines who pays for what, who bears risk and where it transfers in a global sale. Each term below is fully explained with seller/buyer obligations, risk transfer point, pros, cons, a real-world example and a step-by-step process flow with visuals."
        image={shipImg}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 space-y-16">
        {/* Intro overview */}
        <section className="grid gap-6 md:grid-cols-4">
          {[
            { icon: FileCheck, t: "Cost Split", d: "Who pays freight, insurance, duties at every leg." },
            { icon: ShieldCheck, t: "Risk Transfer", d: "Exact point where risk passes from seller to buyer." },
            { icon: Truck, t: "Carriage Duty", d: "Who arranges transport — buyer or seller." },
            { icon: PackageCheck, t: "Clearance", d: "Who handles export and import customs formalities." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <b.icon className="h-8 w-8 text-brand" />
              <h4 className="mt-3 font-semibold">{b.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </section>

        {/* Groupings */}
        <section className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-lg ${g.color}`}><g.icon className="h-5 w-5" /></span>
                <h3 className="text-lg font-bold">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.codes.map((c) => <span key={c} className="rounded-md bg-secondary px-3 py-1 text-xs font-bold">{c}</span>)}
              </div>
            </div>
          ))}
        </section>

        {/* Every term, fully expanded */}
        <section className="space-y-10">
          {incoterms.map((i, idx) => (
            <article key={i.code} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <img src={imgs[idx % imgs.length]} alt={`${i.code} ${i.name}`} loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-7 lg:p-10">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="rounded-md bg-navy px-3 py-1 text-sm font-bold text-primary-foreground">{i.code}</span>
                  <h3 className="text-2xl font-bold">{i.name}</h3>
                  <span className="ml-auto rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">Incoterms 2020</span>
                </div>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{i.def}</p>

                <dl className="mt-6 grid gap-4 md:grid-cols-2">
                  <Row label="Seller Duties" value={i.seller} />
                  <Row label="Buyer Duties" value={i.buyer} />
                  <Row label="Risk Transfer" value={i.risk} />
                  <Row label="Real Example" value={i.example} />
                  <Row label="Pros" value={i.pros} />
                  <Row label="Cons" value={i.cons} />
                </dl>

                {/* Step-by-step process */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-brand" /> Step-by-Step Process — {i.code}
                  </h4>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {(termSteps[i.code] || []).map((s, n) => (
                      <div key={s} className="overflow-hidden rounded-xl border border-border bg-secondary/30">
                        <img src={stepImgs[n % stepImgs.length]} alt={s} loading="lazy" className="h-24 w-full object-cover" />
                        <div className="p-3">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-[10px] font-bold text-primary-foreground">{n + 1}</span>
                          <p className="mt-2 text-xs text-foreground">{s}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Quick comparison */}
        <section className="rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="text-2xl font-bold">Quick Selection Guide</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-card p-5">
              <Plane className="h-7 w-7 text-brand" />
              <h4 className="mt-2 font-semibold">First-time exporter, sea freight</h4>
              <p className="mt-1 text-sm text-muted-foreground">Use <b>FOB</b> or <b>CIF</b> — buyer controls main carriage, simpler for you.</p>
            </div>
            <div className="rounded-xl bg-card p-5">
              <Globe className="h-7 w-7 text-brand" />
              <h4 className="mt-2 font-semibold">E-commerce / door delivery</h4>
              <p className="mt-1 text-sm text-muted-foreground">Use <b>DDP</b> — buyer pays nothing extra, you handle all duties.</p>
            </div>
            <div className="rounded-xl bg-card p-5">
              <PackageCheck className="h-7 w-7 text-brand" />
              <h4 className="mt-2 font-semibold">Containerised cargo</h4>
              <p className="mt-1 text-sm text-muted-foreground">Use <b>FCA, CPT or CIP</b> instead of FOB/CFR/CIF — risk passes correctly at terminal.</p>
            </div>
            <div className="rounded-xl bg-card p-5">
              <ShieldCheck className="h-7 w-7 text-brand" />
              <h4 className="mt-2 font-semibold">Need maximum insurance cover</h4>
              <p className="mt-1 text-sm text-muted-foreground">Use <b>CIP</b> — all-risks (ICC A) cover is mandatory under Incoterms 2020.</p>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-4">
      <dt className="text-xs font-semibold uppercase tracking-wider text-brand">{label}</dt>
      <dd className="mt-1 text-sm text-foreground">{value}</dd>
    </div>
  );
}
