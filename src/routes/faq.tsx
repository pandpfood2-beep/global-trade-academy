import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { faqs } from "@/data/content";
import { ChevronDown, Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | 50 Export Import Business Questions Answered" },
      { name: "description", content: "Frequently asked questions about export-import business, IEC, GST, LC, incoterms, customs clearance and shipping." },
    ],
  }),
  component: Page,
});

function Page() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const list = faqs.filter((f) =>
    (f.q + f.a).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help Centre"
        title="Frequently Asked Questions"
        subtitle="50 of the most common questions on export-import business answered in plain language."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
        <div className="mb-8 flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search questions…"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="space-y-3">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-none transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
          {list.length === 0 && <p className="text-center text-sm text-muted-foreground">No matches found.</p>}
        </div>
      </div>
    </SiteLayout>
  );
}
