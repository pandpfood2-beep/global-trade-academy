import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Building2, BadgeCheck, Star, LogOut, Plus, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard | B2B Hub" }] }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      setEmail(u.user.email ?? "");
      const { data } = await supabase.from("companies").select("*").eq("owner_id", u.user.id).maybeSingle();
      setCompany(data);
      setLoading(false);
    })();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold">Supplier Dashboard</h1>
            <p className="text-sm text-muted-foreground">Signed in as {email}</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-muted-foreground">Loading…</div>
        ) : !company ? (
          <div className="mt-10 rounded-xl border bg-card p-10 text-center">
            <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">Register your company</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              List your business in the global exporter & importer directory.
            </p>
            <Button asChild className="mt-6">
              <Link to="/company/new"><Plus className="mr-2 h-4 w-4" />Create Company Profile</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-xl border bg-card p-6">
              <div className="flex items-start gap-4">
                {company.logo_url ? (
                  <img src={company.logo_url} alt="" className="h-16 w-16 rounded-lg object-cover" />
                ) : (
                  <div className="grid h-16 w-16 place-items-center rounded-lg bg-secondary">
                    <Building2 className="h-7 w-7 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-2xl font-bold">{company.name}</h2>
                    {company.is_verified && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        <BadgeCheck className="h-3 w-3" /> Verified
                      </span>
                    )}
                    {company.plan === "premium" && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        <Star className="h-3 w-3" /> Premium
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground capitalize">
                    {company.type} · {company.category || "—"} · {company.city ? `${company.city}, ` : ""}{company.country || "—"}
                  </p>
                  <p className="mt-3 text-sm">{company.about}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <Button asChild size="sm">
                      <Link to="/company/edit">Edit Profile</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link to="/company/$slug" params={{ slug: company.slug }}>
                        View Public Page <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Listing Plan</h3>
              <p className="mt-1 text-sm text-muted-foreground capitalize">Current: {company.plan}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                Premium listings, featured placement, and verification badges coming soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
