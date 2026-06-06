import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { payments } from "@/data/content";
import docsImg from "@/assets/docs.jpg";
import financeImg from "@/assets/finance.jpg";
import customsImg from "@/assets/customs.jpg";
import globalImg from "@/assets/global-trade.jpg";
import shipImg from "@/assets/ship.jpg";
import containersImg from "@/assets/containers.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

const payImgs = [financeImg, docsImg, customsImg, globalImg, shipImg, containersImg, warehouseImg];

export const Route = createFileRoute("/payment-terms")({
  head: () => ({
    meta: [
      { title: "Export Import Payment Terms | LC, TT, DP, Open Account" },
      { name: "description", content: "Detailed guide to international trade payment methods — Letter of Credit, TT, DP, Open Account, Consignment, with pros, risks and examples." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Finance"
        title="International Payment Terms"
        subtitle="Choosing the right payment method balances cash flow, risk and buyer relationship. Compare all major terms in one place."
        image={docsImg}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {payments.map((p, idx) => (
            <article key={p.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={payImgs[idx % payImgs.length]} alt={p.name} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-xl font-bold text-navy dark:text-brand-light">{p.name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="How it works" value={p.how} />
                  <Row label="Advantages" value={p.pros} />
                  <Row label="Risks" value={p.risks} />
                  <Row label="Example" value={p.example} />
                </dl>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-navy p-10 text-primary-foreground">
          <h2 className="text-2xl font-bold">Risk vs Security Spectrum</h2>
          <p className="mt-2 text-white/80 text-sm">Buyer-friendly on the left, seller-friendly on the right.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {["Open Account","Consignment","D/A","D/P","LC at sight","Confirmed LC","Advance Payment"].map((t, i) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                {i + 1}. {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-3">
      <dt className="font-semibold text-navy dark:text-brand-light">{label}</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </div>
  );
}
