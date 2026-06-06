import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import docsImg from "@/assets/docs.jpg";
import { Package, TrendingDown, TrendingUp, Globe, ShoppingCart, Factory, Truck, FileCheck } from "lucide-react";

export const Route = createFileRoute("/about-export-import")({
  head: () => ({
    meta: [
      { title: "About Export Import Business — Global Trade Process" },
      { name: "description", content: "Understand what export and import means, their benefits, business models and the complete step-by-step global trade process." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Foundations"
        title="About Export & Import Business"
        subtitle="Understand the engine of global trade — what exports and imports are, the benefits, opportunities and the step-by-step process to start your own international business."
        image={docsImg}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 space-y-16">
        <section className="grid gap-8 md:grid-cols-2">
          {[
            { icon: TrendingUp, title: "What is Export?", body: "Export is the sale of goods or services produced in one country to buyers in another country. Exporters bring in foreign currency, expand market reach beyond domestic limits, and benefit from various government incentives such as duty drawback, RoDTEP and GST refunds." },
            { icon: TrendingDown, title: "What is Import?", body: "Import is the procurement of goods or services from outside the country for domestic use, resale, or as raw material for manufacturing. Importing fills gaps in the domestic supply, gives access to better technology, and enables competitive pricing." },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-navy text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">{c.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <h3 className="text-xl font-bold">Benefits of Export</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Foreign exchange earnings","Access to larger global markets","Government incentives & schemes","Better profit margins","Reduced dependence on domestic demand","Brand recognition globally","Economies of scale in production"].map((b) => <li key={b}>• {b}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <h3 className="text-xl font-bold">Benefits of Import</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Access to raw materials not locally available","Advanced technology and machinery","Wider product variety for consumers","Competitive pricing through global sourcing","Enable manufacturing & re-export","Quality upgrades","Meet local demand-supply gaps"].map((b) => <li key={b}>• {b}</li>)}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold">Global Trade Process</h2>
          <p className="mt-3 text-muted-foreground">A simplified flow of how goods move from a seller in one country to a buyer in another.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShoppingCart, t: "Inquiry & Quotation", d: "Buyer sends RFQ; seller responds with proforma invoice and Incoterms." },
              { icon: FileCheck, t: "Order & Contract", d: "Purchase order issued, payment terms (LC/TT) agreed, sales contract signed." },
              { icon: Factory, t: "Production & QC", d: "Goods manufactured, inspected, packed and marked per buyer's specs." },
              { icon: Truck, t: "Logistics & Customs", d: "Booking, export clearance, loading and shipment via sea/air/road." },
              { icon: Globe, t: "Transit", d: "Carrier moves goods, tracking shared with buyer, documents couriered/transferred." },
              { icon: FileCheck, t: "Import Clearance", d: "Buyer files Bill of Entry, pays duty, completes customs clearance." },
              { icon: Package, t: "Delivery", d: "Goods released, transported to buyer's warehouse, GRN issued." },
              { icon: TrendingUp, t: "Payment & Realisation", d: "Funds settled via bank; BRC/eBRC issued; incentives claimed." },
            ].map((s, i) => (
              <li key={i} className="rounded-2xl border border-border bg-card p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 font-semibold">{i + 1}. {s.t}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold">Export-Import Business Models</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              ["Manufacturer Exporter", "Produce goods in-house and export under own brand or buyer's brand."],
              ["Merchant Exporter", "Buy goods from manufacturers and export without owning a factory."],
              ["Trading House", "Bulk traders dealing in multiple commodities and markets."],
              ["Service Exporter", "Export of services like IT, consultancy, education and healthcare."],
              ["E-commerce Exporter", "Cross-border B2C/B2B selling on Amazon Global, eBay, Etsy."],
              ["Import Trader", "Source goods abroad, clear customs and sell domestically."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h4 className="font-semibold text-navy">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-navy p-10 text-primary-foreground lg:p-14">
          <h2 className="text-3xl font-bold">International Market Opportunities</h2>
          <p className="mt-3 max-w-3xl text-white/85">
            With FTAs, e-commerce and digital payments, even small businesses can reach buyers in 100+ countries.
            India alone targets $1 trillion in merchandise exports by 2030, opening huge opportunities in textiles,
            engineering goods, agri-products, pharma, gems & jewellery and electronics.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
