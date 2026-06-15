import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { blogs } from "@/data/blogs";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Export Import Blog | 10+ SEO Guides on EXIM Business" },
      { name: "description", content: "In-depth SEO articles on export-import business, incoterms, LC, IEC, RoDTEP, HSN code, FCL vs LCL, documentation, risk management and more — written for Indian exporters." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Export Import Insights & SEO Guides"
        subtitle="10+ in-depth, SEO-optimised articles to help you start, grow and scale your international trade business."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{p.tag}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
