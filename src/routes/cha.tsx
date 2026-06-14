import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import customsImg from "@/assets/customs.jpg";
import portImg from "@/assets/hero-port.jpg";
import docsImg from "@/assets/docs.jpg";
import containersImg from "@/assets/containers.jpg";
import policyImg from "@/assets/policy.jpg";
import shipImg from "@/assets/ship.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import financeImg from "@/assets/finance.jpg";
import globalImg from "@/assets/global-trade.jpg";
import aircargoImg from "@/assets/aircargo.jpg";
import { Shield, FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/cha")({
  head: () => ({
    meta: [
      { title: "CHA — Custom House Agent | Step-by-Step Customs Clearance" },
      { name: "description", content: "Complete step-by-step guide to Custom House Agents, export and import customs clearance procedure with graphics, required documents and CBLR 2018 responsibilities." },
    ],
  }),
  component: Page,
});

const exportSteps = [
  { t: "Receive Shipping Instructions", d: "Exporter sends invoice, packing list, IEC, GST docs, PO/LC and authorisation letter to the CHA.", img: docsImg },
  { t: "Classify Goods (HSN/ITC-HS)", d: "CHA confirms 8-digit HSN, duty rate, RoDTEP, restrictions and SCOMET status.", img: policyImg },
  { t: "File Shipping Bill on ICEGATE", d: "Electronic Shipping Bill (Free/Drawback/DEEC/EPCG) filed via Indian Customs EDI portal.", img: customsImg },
  { t: "Carting & Move-in to Port/CFS", d: "Goods stuffed in container or moved to Container Freight Station; carting order generated.", img: containersImg },
  { t: "Customs Examination", d: "RMS (Risk Management System) decides green/red channel. Inspector verifies cargo if flagged.", img: warehouseImg },
  { t: "Let Export Order (LEO)", d: "Customs grants LEO once docs and goods are cleared — final permission to export.", img: shipImg },
  { t: "Loading on Vessel / Aircraft", d: "Goods loaded; Mate's Receipt or FCR issued by carrier.", img: portImg },
  { t: "Bill of Lading / AWB Issued", d: "Shipping line / airline issues BL or AWB and shares with CHA / exporter.", img: aircargoImg },
  { t: "EGM & Post-shipment Docs", d: "Export General Manifest filed; copy of Shipping Bill + BL handed over for bank realisation & incentives.", img: financeImg },
];

const importSteps = [
  { t: "Pre-Arrival Document Set", d: "Importer forwards invoice, packing list, BL/AWB, IEC, PO, insurance, CoO to the CHA.", img: docsImg },
  { t: "Arrival Notice & IGM Filing", d: "Carrier files Import General Manifest with customs; CHA tracks vessel/flight ETA.", img: shipImg },
  { t: "File Bill of Entry (BoE)", d: "Home Consumption / Warehouse / Ex-bond BoE filed on ICEGATE with HSN, value, duty.", img: customsImg },
  { t: "Assessment & Duty Calculation", d: "BCD + IGST + Cess + Anti-dumping calculated; system or appraiser may query.", img: financeImg },
  { t: "Duty Payment", d: "Duty paid online through ICEGATE / authorised bank challan.", img: globalImg },
  { t: "Examination of Goods", d: "RMS selects shipment; if red-channel, container destuffed for inspection at CFS.", img: containersImg },
  { t: "Out of Charge (OOC)", d: "Customs issues OOC after compliance; cargo legally released for clearance.", img: policyImg },
  { t: "Delivery Order from Liner", d: "Importer/CHA pays line charges; carrier issues DO to release container from port.", img: portImg },
  { t: "Transport to Warehouse", d: "Container/cargo moved to importer's warehouse; empty returned within free days.", img: warehouseImg },
];

const docs = ["IEC Certificate","Commercial Invoice","Packing List","Bill of Lading / AWB","Insurance Certificate","Certificate of Origin","Purchase Order / LC copy","GST / PAN documents","Authorisation Letter to CHA","Catalogue / Technical write-up","Test reports / BIS (if required)","KYC of importer/exporter"];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Customs"
        title="Custom House Agent (CHA) — Full Guide"
        subtitle="Licensed Customs Brokers who handle every customs formality on your behalf. Below: complete step-by-step clearance process with visuals for both export and import."
        image={customsImg}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 space-y-16">
        {/* What & Role */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={customsImg} alt="Custom House Agent" loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-8">
              <Shield className="h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">What is a CHA?</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A Custom House Agent — formally a <b>Customs Broker</b> under the
                Customs Brokers Licensing Regulations (CBLR) 2018 — is a person licensed by the
                Commissioner of Customs to transact business on behalf of importers and exporters.
                They are the bridge between the trader and customs authorities at every Indian
                port, ICD, CFS and airport.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={docsImg} alt="Role of a CHA" loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-8">
              <FileText className="h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">Role of a CHA</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {["Documentation & HSN classification","Filing Shipping Bill / Bill of Entry on ICEGATE","Liaison with Customs Appraiser & Examiner","Coordinating with shipping lines, CFS & terminals","Claiming duty drawbacks, RoDTEP, incentives","Advising on changes in Customs & DGFT policy","Cargo examination & sample handling","Refund and amendment applications"].map((p) => (
                  <li key={p} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Export step-by-step */}
        <section>
          <h2 className="text-3xl font-bold">Export Customs Clearance — Step by Step</h2>
          <p className="mt-3 text-muted-foreground">Visual walkthrough of every stage from receiving instructions to handing over post-shipment docs.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exportSteps.map((s, i) => (
              <article key={s.t} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={s.img} alt={s.t} loading="lazy" className="h-36 w-full object-cover" />
                <div className="p-5">
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

        {/* Import step-by-step */}
        <section>
          <h2 className="text-3xl font-bold">Import Customs Clearance — Step by Step</h2>
          <p className="mt-3 text-muted-foreground">From pre-arrival documents to final delivery at importer's warehouse.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {importSteps.map((s, i) => (
              <article key={s.t} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={s.img} alt={s.t} loading="lazy" className="h-36 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <h4 className="font-semibold">{s.t}</h4>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Docs */}
        <section className="rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="text-2xl font-bold">Documents You Must Provide to the CHA</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map((d) => (
              <div key={d} className="flex items-center gap-2 rounded-lg bg-card px-4 py-3 text-sm">
                <FileText className="h-4 w-4 text-brand" /> {d}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits / Duties */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
            <h3 className="text-xl font-bold">Benefits of Hiring a CHA</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>• Faster clearance with fewer errors</li>
              <li>• Cost saving through correct HSN classification</li>
              <li>• Compliance with ever-changing customs rules</li>
              <li>• Expertise in duty exemptions and DGFT schemes</li>
              <li>• End-to-end coordination at ports / airports / CFS</li>
              <li>• Handling demurrage, detention, refund cases</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-xl font-bold">CBLR 2018 — CHA Responsibilities</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Verify client's identity & antecedents (KYC)</li>
              <li>• Provide true & complete information to customs</li>
              <li>• Maintain records for 5 years</li>
              <li>• No sub-letting of licence without permission</li>
              <li>• Act in the best interest of the principal</li>
              <li>• Continuous professional education (CBLR Form A)</li>
            </ul>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
