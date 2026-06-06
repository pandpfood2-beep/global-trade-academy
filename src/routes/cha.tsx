import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import customsImg from "@/assets/customs.jpg";
import portImg from "@/assets/hero-port.jpg";
import docsImg from "@/assets/docs.jpg";
import containersImg from "@/assets/containers.jpg";
import policyImg from "@/assets/policy.jpg";
import { Shield, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cha")({
  head: () => ({
    meta: [
      { title: "CHA — Custom House Agent | Role, Process & Documents" },
      { name: "description", content: "Complete guide to Custom House Agents, customs clearance process for import & export, required documents and responsibilities." },
    ],
  }),
  component: Page,
});

const exportSteps = ["Receive shipping instructions","Prepare Shipping Bill on ICEGATE","Pay export duties (if any)","Goods examination by customs","Let Export Order (LEO) issued","Loading onto vessel/aircraft","Submit EGM & Bill of Lading to exporter"];
const importSteps = ["Receive Arrival Notice & documents","File Bill of Entry on ICEGATE","Pay applicable customs duty / IGST","Goods examination by customs","Out of Charge (OOC) issued","Delivery order from shipping line","Transport to importer's warehouse"];
const docs = ["IEC Certificate","Commercial Invoice","Packing List","Bill of Lading / AWB","Insurance Certificate","Certificate of Origin","Purchase Order","GST/PAN documents","Authorisation letter to CHA"];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Customs"
        title="Custom House Agent (CHA)"
        subtitle="Licensed professionals who handle customs formalities on behalf of importers and exporters — saving you time, money and compliance headaches."
        image={customsImg}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 space-y-14">
        <section className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={customsImg} alt="Custom House Agent" loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-8">
              <Shield className="h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">What is a CHA?</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A Custom House Agent (now formally called Customs Broker) is a person licensed under the
                Customs Brokers Licensing Regulations, 2018 to transact business at customs on behalf of
                importers and exporters. They file shipping bills/bills of entry, coordinate examination
                and ensure compliance with customs law.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={docsImg} alt="Role of a CHA" loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-8">
              <FileText className="h-10 w-10 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">Role of a CHA</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {["Documentation & classification of goods","Filing on ICEGATE / EDI","Liaison with customs officers","Coordinating with shipping lines & CFS","Claiming duty drawbacks/incentives","Advising on changes in policy"].map((p) => (
                  <li key={p} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Process title="Export Customs Procedure" steps={exportSteps} image={portImg} />
          <Process title="Import Customs Procedure" steps={importSteps} image={containersImg} />
        </section>

        <section className="rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="text-2xl font-bold">Documents Required by CHA</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map((d) => (
              <div key={d} className="flex items-center gap-2 rounded-lg bg-card px-4 py-3 text-sm">
                <FileText className="h-4 w-4 text-brand" /> {d}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
            <h3 className="text-xl font-bold">Benefits of CHA Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>• Faster clearance with minimal errors</li>
              <li>• Cost optimisation through correct HS classification</li>
              <li>• Compliance with ever-changing customs rules</li>
              <li>• Expertise in duty exemptions and schemes</li>
              <li>• End-to-end coordination at ports/airports</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-xl font-bold">Duties & Responsibilities</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Verify client's identity & antecedents (KYC)</li>
              <li>• Provide true & complete information to customs</li>
              <li>• Maintain proper records for 5 years</li>
              <li>• Not subcontract work without permission</li>
              <li>• Act in the best interest of the principal</li>
            </ul>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Process({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
      <h3 className="text-xl font-bold">{title}</h3>
      <ol className="mt-5 space-y-3">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3 text-sm">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand/10 text-xs font-bold text-brand">{i + 1}</span>
            <span className="pt-0.5">{s}</span>
            {i < steps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-border" />}
          </li>
        ))}
      </ol>
    </div>
  );
}
