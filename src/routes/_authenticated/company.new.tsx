import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/company/new")({
  head: () => ({ meta: [{ title: "Register Company | B2B Hub" }] }),
  component: NewCompany,
});

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

function NewCompany() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", type: "exporter", category: "", country: "", city: "",
    year_established: "", employees: "", about: "", website: "", email: "", phone: "", whatsapp: "",
    logo_url: "", cover_url: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Not signed in");
      const baseSlug = slugify(form.name) || "company";
      const slug = `${baseSlug}-${Math.random().toString(36).slice(2, 7)}`;
      const { error } = await (supabase as any).from("companies").insert({
        owner_id: u.user.id,
        name: form.name,
        slug,
        type: form.type as any,
        category: form.category || null,
        country: form.country || null,
        city: form.city || null,
        year_established: form.year_established ? parseInt(form.year_established) : null,
        employees: form.employees || null,
        about: form.about || null,
        website: form.website || null,
        email: form.email || null,
        phone: form.phone || null,
        whatsapp: form.whatsapp || null,
        logo_url: form.logo_url || null,
        cover_url: form.cover_url || null,
      });
      if (error) throw error;
      toast.success("Company registered!");
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      toast.error(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <h1 className="text-3xl font-bold">Register your company</h1>
        <p className="mt-2 text-sm text-muted-foreground">List your business in the global B2B directory.</p>

        <form onSubmit={onSubmit} className="mt-8 rounded-xl border bg-card p-6 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company name *">
              <Input value={form.name} onChange={(e) => set("name", e.target.value)} required maxLength={200} />
            </Field>
            <Field label="Business type *">
              <select
                value={form.type}
                onChange={(e) => set("type", e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="exporter">Exporter</option>
                <option value="importer">Importer</option>
                <option value="both">Both</option>
              </select>
            </Field>
            <Field label="Product category">
              <Input value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="e.g. Agro, Textile, Engineering" maxLength={100} />
            </Field>
            <Field label="Year established">
              <Input type="number" value={form.year_established} onChange={(e) => set("year_established", e.target.value)} min={1900} max={2030} />
            </Field>
            <Field label="Country">
              <Input value={form.country} onChange={(e) => set("country", e.target.value)} maxLength={80} />
            </Field>
            <Field label="City">
              <Input value={form.city} onChange={(e) => set("city", e.target.value)} maxLength={80} />
            </Field>
            <Field label="Employees">
              <Input value={form.employees} onChange={(e) => set("employees", e.target.value)} placeholder="e.g. 11-50" maxLength={40} />
            </Field>
            <Field label="Website">
              <Input type="url" value={form.website} onChange={(e) => set("website", e.target.value)} placeholder="https://" maxLength={200} />
            </Field>
            <Field label="Business email">
              <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={120} />
            </Field>
            <Field label="Phone">
              <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={30} />
            </Field>
            <Field label="WhatsApp">
              <Input value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+91..." maxLength={30} />
            </Field>
            <Field label="Logo URL">
              <Input type="url" value={form.logo_url} onChange={(e) => set("logo_url", e.target.value)} maxLength={400} />
            </Field>
          </div>
          <Field label="About your company">
            <Textarea value={form.about} onChange={(e) => set("about", e.target.value)} rows={5} maxLength={2000} />
          </Field>
          <div className="flex gap-3">
            <Button type="submit" disabled={loading}>{loading ? "Saving…" : "Register Company"}</Button>
            <Button type="button" variant="outline" onClick={() => navigate({ to: "/dashboard" })}>Cancel</Button>
          </div>
        </form>
      </div>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
