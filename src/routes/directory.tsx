import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2, BadgeCheck, Star, MapPin, Search } from "lucide-react";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Exporter & Importer Directory | Global B2B Hub" },
      { name: "description", content: "Browse verified exporters and importers worldwide. Search by product, country, and category." },
    ],
  }),
  component: Directory,
});

function Directory() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await (supabase as any)
        .from("companies")
        .select("id,name,slug,type,category,country,city,year_established,employees,about,website,logo_url,cover_url,is_verified,is_featured,plan,created_at")
        .order("is_featured", { ascending: false })
        .order("is_verified", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(200);
      setRows(data || []);
      setLoading(false);
    })();
  }, []);

  const countries = useMemo(() => Array.from(new Set(rows.map((r) => r.country).filter(Boolean))).sort(), [rows]);
  const categories = useMemo(() => Array.from(new Set(rows.map((r) => r.category).filter(Boolean))).sort(), [rows]);

  const filtered = rows.filter((r) => {
    if (type && r.type !== type) return false;
    if (country && r.country !== country) return false;
    if (category && r.category !== category) return false;
    if (q) {
      const hay = `${r.name} ${r.category ?? ""} ${r.country ?? ""} ${r.city ?? ""} ${r.about ?? ""}`.toLowerCase();
      if (!hay.includes(q.toLowerCase())) return false;
    }
    return true;
  });

  const featured = filtered.filter((r) => r.is_featured).slice(0, 6);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="B2B Marketplace"
        title="Exporter & Importer Directory"
        subtitle="Find verified global suppliers and buyers. Search by product, country and category."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-3 md:grid-cols-5 rounded-xl border bg-card p-4">
          <div className="md:col-span-2 flex items-center gap-2 rounded-md border border-input bg-background px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search company, product, city…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-transparent py-2 text-sm outline-none"
              maxLength={120}
            />
          </div>
          <select value={type} onChange={(e) => setType(e.target.value)} className="h-9 rounded-md border border-input bg-background px-3 text-sm">
            <option value="">All types</option>
            <option value="exporter">Exporters</option>
            <option value="importer">Importers</option>
            <option value="both">Both</option>
          </select>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="h-9 rounded-md border border-input bg-background px-3 text-sm">
            <option value="">All countries</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-9 rounded-md border border-input bg-background px-3 text-sm">
            <option value="">All categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {featured.length > 0 && (
          <>
            <h2 className="mt-10 text-xl font-bold flex items-center gap-2"><Star className="h-5 w-5 text-amber-500" /> Featured Suppliers</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((r) => <CompanyCard key={r.id} c={r} featured />)}
            </div>
          </>
        )}

        <h2 className="mt-10 text-xl font-bold">
          {loading ? "Loading…" : `${filtered.length} ${filtered.length === 1 ? "Company" : "Companies"}`}
        </h2>
        {!loading && filtered.length === 0 && (
          <div className="mt-6 rounded-xl border bg-card p-10 text-center">
            <p className="text-muted-foreground">No companies match your filters.</p>
            <Button asChild className="mt-4"><Link to="/auth">Register your business →</Link></Button>
          </div>
        )}
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => <CompanyCard key={r.id} c={r} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

function CompanyCard({ c, featured = false }: { c: any; featured?: boolean }) {
  return (
    <Link
      to="/company/$slug"
      params={{ slug: c.slug }}
      className={`group rounded-xl border bg-card p-5 transition-all hover:shadow-lg hover:-translate-y-0.5 ${featured ? "ring-1 ring-amber-300/60" : ""}`}
    >
      <div className="flex items-start gap-3">
        {c.logo_url ? (
          <img src={c.logo_url} alt="" className="h-14 w-14 rounded-lg object-cover" loading="lazy" />
        ) : (
          <div className="grid h-14 w-14 place-items-center rounded-lg bg-secondary">
            <Building2 className="h-6 w-6 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-semibold truncate group-hover:text-primary">{c.name}</h3>
            {c.is_verified && <BadgeCheck className="h-4 w-4 text-green-600" />}
            {c.plan === "premium" && <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />}
          </div>
          <p className="text-xs text-muted-foreground capitalize mt-0.5">{c.type} · {c.category || "—"}</p>
          {(c.city || c.country) && (
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {[c.city, c.country].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>
      {c.about && <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{c.about}</p>}
    </Link>
  );
}
