import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { incoterms } from "@/data/content";
import shipImg from "@/assets/ship.jpg";

export const Route = createFileRoute("/incoterms")({
  head: () => ({
    meta: [
      { title: "Incoterms 2020 Explained | EXW, FOB, CIF, DDP & More" },
      { name: "description", content: "Detailed breakdown of all 11 Incoterms 2020 rules — definition, seller and buyer responsibilities, risk transfer, advantages and real examples." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ICC Rules"
        title="Incoterms 2020 — All 11 Rules"
        subtitle="The international standard for defining who pays for what, who bears risk and where it transfers in a global sale. Master each term with examples."
        image={shipImg}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {incoterms.map((i) => (
            <article key={i.code} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-baseline gap-3">
                <span className="rounded-md bg-navy px-3 py-1 text-sm font-bold text-primary-foreground">{i.code}</span>
                <h3 className="text-xl font-bold">{i.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{i.def}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <Row label="Seller" value={i.seller} />
                <Row label="Buyer" value={i.buyer} />
                <Row label="Risk Transfer" value={i.risk} />
                <Row label="Pros" value={i.pros} />
                <Row label="Cons" value={i.cons} />
                <Row label="Example" value={i.example} />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3">
      <dt className="font-semibold text-navy dark:text-brand-light">{label}</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </div>
  );
}
