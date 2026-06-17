import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/company/edit")({
  head: () => ({ meta: [{ title: "Edit Company | B2B Hub" }] }),
  component: EditCompany,
});

function EditCompany() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      const { data } = await (supabase as any).from("companies").select("*").eq("owner_id", u.user.id).maybeSingle();
      if (!data) { navigate({ to: "/company/new" }); return; }
      const { data: contacts } = await (supabase as any).from("company_contacts").select("email,phone,whatsapp").eq("company_id", data.id).maybeSingle();
      setId(data.id);
      setForm({ ...data, email: contacts?.email ?? "", phone: contacts?.phone ?? "", whatsapp: contacts?.whatsapp ?? "" });
      setLoading(false);
    })();
  }, [navigate]);

  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    try {
      const { error } = await (supabase as any).from("companies").update({
        name: form.name, type: form.type, category: form.category, country: form.country,
        city: form.city, year_established: form.year_established ? parseInt(form.year_established) : null,
        employees: form.employees, about: form.about, website: form.website,
        logo_url: form.logo_url, cover_url: form.cover_url,
      }).eq("id", id);
      if (error) throw error;
      const { error: cErr } = await (supabase as any).from("company_contacts").upsert({
        company_id: id,
        email: form.email || null,
        phone: form.phone || null,
        whatsapp: form.whatsapp || null,
      }, { onConflict: "company_id" });
      if (cErr) throw cErr;
      toast.success("Saved");
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      toast.error(err.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !form) {
    return <SiteLayout><div className="mx-auto max-w-3xl px-4 py-20 text-center text-muted-foreground">Loading…</div></SiteLayout>;
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <h1 className="text-3xl font-bold">Edit company</h1>
        <form onSubmit={onSubmit} className="mt-8 rounded-xl border bg-card p-6 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <F label="Company name *"><Input value={form.name ?? ""} onChange={(e) => set("name", e.target.value)} required maxLength={200} /></F>
            <F label="Business type *">
              <select value={form.type} onChange={(e) => set("type", e.target.value)} className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm">
                <option value="exporter">Exporter</option><option value="importer">Importer</option><option value="both">Both</option>
              </select>
            </F>
            <F label="Category"><Input value={form.category ?? ""} onChange={(e) => set("category", e.target.value)} maxLength={100} /></F>
            <F label="Year established"><Input type="number" value={form.year_established ?? ""} onChange={(e) => set("year_established", e.target.value)} /></F>
            <F label="Country"><Input value={form.country ?? ""} onChange={(e) => set("country", e.target.value)} maxLength={80} /></F>
            <F label="City"><Input value={form.city ?? ""} onChange={(e) => set("city", e.target.value)} maxLength={80} /></F>
            <F label="Employees"><Input value={form.employees ?? ""} onChange={(e) => set("employees", e.target.value)} maxLength={40} /></F>
            <F label="Website"><Input value={form.website ?? ""} onChange={(e) => set("website", e.target.value)} maxLength={200} /></F>
            <F label="Email"><Input value={form.email ?? ""} onChange={(e) => set("email", e.target.value)} maxLength={120} /></F>
            <F label="Phone"><Input value={form.phone ?? ""} onChange={(e) => set("phone", e.target.value)} maxLength={30} /></F>
            <F label="WhatsApp"><Input value={form.whatsapp ?? ""} onChange={(e) => set("whatsapp", e.target.value)} maxLength={30} /></F>
            <F label="Logo URL"><Input value={form.logo_url ?? ""} onChange={(e) => set("logo_url", e.target.value)} maxLength={400} /></F>
          </div>
          <F label="About"><Textarea value={form.about ?? ""} onChange={(e) => set("about", e.target.value)} rows={5} maxLength={2000} /></F>
          <div className="flex gap-3">
            <Button type="submit" disabled={saving}>{saving ? "Saving…" : "Save changes"}</Button>
            <Button type="button" variant="outline" onClick={() => navigate({ to: "/dashboard" })}>Cancel</Button>
          </div>
        </form>
      </div>
    </SiteLayout>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</Label>{children}</div>;
}
