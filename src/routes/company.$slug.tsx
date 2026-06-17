import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { InquiryDialog } from "@/components/InquiryDialog";
import { Building2, BadgeCheck, Star, MapPin, Globe, Mail, MessageCircle, Calendar, Users, Send, ShieldCheck } from "lucide-react";

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
      const { data } = await (supabase as any)
        .from("companies_public")
        .select("id,name,slug,type,category,country,city,year_established,employees,about,website,logo_url,cover_url,is_verified,is_featured,plan")
        .eq("slug", slug)
        .maybeSingle();
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
              <InquiryDialog
                companyId={c.id}
                companyName={c.name}
                channel="contact"
                trigger={<Button className="w-full"><Send className="mr-2 h-4 w-4" />Contact Supplier</Button>}
              />
              <InquiryDialog
                companyId={c.id}
                companyName={c.name}
                channel="inquiry"
                trigger={<Button variant="outline" className="w-full"><Mail className="mr-2 h-4 w-4" />Send Inquiry</Button>}
              />
              <InquiryDialog
                companyId={c.id}
                companyName={c.name}
                channel="whatsapp"
                defaultSubject={`WhatsApp contact request — ${c.name}`}
                trigger={
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />WhatsApp Contact
                  </Button>
                }
              />
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
            <h3 className="font-semibold flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" />Protected Contact</h3>
            <p className="text-xs text-muted-foreground">
              For supplier privacy and to prevent spam, direct email, phone and WhatsApp numbers are not displayed publicly.
              Use the buttons above to send a message — the supplier will respond directly.
            </p>
            {c.website && (
              <a href={c.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Globe className="h-4 w-4" /> {c.website.replace(/^https?:\/\//, "")}
              </a>
            )}
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
