import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import shipImg from "@/assets/ship.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import airImg from "@/assets/aircargo.jpg";
import docsImg from "@/assets/docs.jpg";
import customsImg from "@/assets/customs.jpg";
import heroImg from "@/assets/hero-port.jpg";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Export Import Blog | Insights, Tips & Industry Updates" },
      { name: "description", content: "Read the latest articles on international trade, incoterms, shipping, customs and government policies for Indian exporters." },
    ],
  }),
  component: Page,
});

const posts = [
  { img: heroImg, tag: "Trade", title: "How to start an export business in India in 2026", date: "Jun 1, 2026", read: "8 min", excerpt: "A practical 9-step roadmap from getting IEC to shipping your first container." },
  { img: shipImg, tag: "Shipping", title: "Ocean vs Air freight: choosing the right mode", date: "May 26, 2026", read: "6 min", excerpt: "Cost, transit, sustainability — how to pick the right freight for your product." },
  { img: docsImg, tag: "Documents", title: "Letter of Credit explained for first-time exporters", date: "May 18, 2026", read: "10 min", excerpt: "Decode the LC lifecycle, types, and the 7 mistakes that cause discrepancies." },
  { img: customsImg, tag: "Customs", title: "RoDTEP rates update — what exporters must know", date: "May 10, 2026", read: "5 min", excerpt: "Sector-wise rate changes and how to maximise your scrip realisation." },
  { img: warehouseImg, tag: "Logistics", title: "Warehouse selection for export-ready businesses", date: "Apr 30, 2026", read: "7 min", excerpt: "Bonded vs free, FTWZ benefits, and KPIs to evaluate 3PL partners." },
  { img: airImg, tag: "Air Cargo", title: "Air cargo surcharges decoded: FSC, SSC, X-Ray", date: "Apr 22, 2026", read: "4 min", excerpt: "What each charge means and how to negotiate with consolidators." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Insights on global trade"
        subtitle="Practical articles, news and tips on export-import business — written by industry practitioners."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{p.tag}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
