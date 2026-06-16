import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Building2, BadgeCheck, Star, MapPin, Globe, Mail, Phone, MessageCircle, Calendar, Users } from "lucide-react";

export const Route = createFileRoute("/company/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} | Company Profile` },
      { name: "description", content: "Verified company profile on the Global B2B Hub." },
    ],
  }),
  component: CompanyPage,
  errorComponent: () => (
    <SiteLayout><div className="mx-auto max-w-3xl px-4 py-20 text-center"><h1 className="text-2xl font-bold">Could not load company</h1></div></SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout><div className="mx-auto max-w-3xl px-4 py-20 text-center"><h1 className="text-2xl font-bold">Company not found</h1></div></SiteLayout>
  ),
});

function CompanyPage() {
  const { slug } = Route.useParams();
  const [c, setC] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("companies").select("*").eq("slug", slug).maybeSingle();
      setC(data);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) return <SiteLayout><div className="mx-auto max-w-4xl px-4 py-20 text-center text-muted-foreground">Loading…</div></SiteLayout>;
  if (!c) throw notFound();

  return (
    <SiteLayout>
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-navy via-brand-blue to-brand-light">
        {c.cover_url && <img src={c.cover_url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />}
      </div>
      <div className="mx-auto -mt-16 max-w-5xl px-4 lg:px-8">
        <div className="rounded-xl border bg-card p-6 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            {c.logo_url ? (
              <img src={c.logo_url} alt={c.name} className="h-24 w-24 rounded-xl object-cover border" />
            ) : (
              <div className="grid h-24 w-24 place-items-center rounded-xl bg-secondary border">
                <Building2 className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-3xl font-bold">{c.name}</h1>
                {c.is_verified && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </span>
                )}
                {c.plan === "premium" && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    <Star className="h-3 w-3" /> Premium
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground capitalize">
                {c.type} · {c.category || "—"}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {(c.city || c.country) && <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{[c.city, c.country].filter(Boolean).join(", ")}</span>}
                {c.year_established && <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />Est. {c.year_established}</span>}
                {c.employees && <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.employees} employees</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:w-56">
              {c.whatsapp && (
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              )}
              {c.email && (
                <Button asChild variant="outline">
                  <a href={`mailto:${c.email}`}><Mail className="mr-2 h-4 w-4" /> Email</a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border bg-card p-6">
            <h2 className="text-xl font-bold">About</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {c.about || "No description provided."}
            </p>
          </div>
          <aside className="rounded-xl border bg-card p-6 space-y-3 text-sm">
            <h3 className="font-semibold">Contact</h3>
            {c.website && <a href={c.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Globe className="h-4 w-4" /> {c.website.replace(/^https?:\/\//, "")}</a>}
            {c.email && <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="h-4 w-4" /> {c.email}</a>}
            {c.phone && <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Phone className="h-4 w-4" /> {c.phone}</a>}
            {!c.website && !c.email && !c.phone && <p className="text-muted-foreground">No public contact info.</p>}
          </aside>
        </div>

        <div className="mt-10 text-center">
          <Link to="/directory" className="text-sm text-muted-foreground hover:text-foreground">← Back to directory</Link>
        </div>
        <div className="h-16" />
      </div>
    </SiteLayout>
  );
}
