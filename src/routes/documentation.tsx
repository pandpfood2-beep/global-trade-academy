import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { documents } from "@/data/content";
import docsImg from "@/assets/docs.jpg";
import customsImg from "@/assets/customs.jpg";
import financeImg from "@/assets/finance.jpg";
import portImg from "@/assets/hero-port.jpg";
import shipImg from "@/assets/ship.jpg";
import containersImg from "@/assets/containers.jpg";
import globalImg from "@/assets/global-trade.jpg";
import policyImg from "@/assets/policy.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import { FileText } from "lucide-react";

const docImgs = [docsImg, financeImg, customsImg, shipImg, containersImg, portImg, globalImg, warehouseImg, policyImg];

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Export Import Documentation | Trade Documents Guide" },
      { name: "description", content: "Complete reference of export-import documents: commercial invoice, packing list, bill of lading, LC, IEC, shipping bill and more." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Documents"
        title="Export-Import Documentation"
        subtitle="The paperwork that powers global trade. Learn what each document is, why it matters and who issues it."
        image={docsImg}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((d, idx) => (
            <article key={d.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <img src={docImgs[idx % docImgs.length]} alt={d.name} loading="lazy" className="h-36 w-full object-cover" />
              <div className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-primary-foreground">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-navy dark:text-brand-light">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-2xl bg-navy p-8 text-primary-foreground lg:p-12">
          <h2 className="text-2xl font-bold">Downloadable PDF Resources</h2>
          <p className="mt-2 text-white/80 text-sm">Free templates and checklists for traders (sample resources).</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Commercial Invoice Template","Packing List Template","LC Checklist","IEC Application Guide"].map((r) => (
              <a key={r} href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10">
                <span>{r}</span><span className="text-brand-light">PDF ↓</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
