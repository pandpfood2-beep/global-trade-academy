import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitTrainingLead, submitConsultancyLead } from "@/lib/leads.functions";

type Kind = "training" | "consultancy";

const COUNTRIES = [
  "India", "United States", "United Kingdom", "United Arab Emirates", "Saudi Arabia",
  "Singapore", "Germany", "Australia", "Canada", "China", "Japan", "Malaysia", "Other",
];

export function LeadForm({ kind }: { kind: Kind }) {
  const submitT = useServerFn(submitTrainingLead);
  const submitC = useServerFn(submitConsultancyLead);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isConsultancy = kind === "consultancy";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const base = {
      full_name: String(fd.get("full_name") || ""),
      mobile: String(fd.get("mobile") || ""),
      email: String(fd.get("email") || ""),
      city: String(fd.get("city") || ""),
      country: String(fd.get("country") || ""),
    };
    try {
      if (isConsultancy) {
        await submitC({ data: { ...base, business_details: String(fd.get("business_details") || "") } });
      } else {
        await submitT({ data: base });
      }
      setDone(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 text-2xl font-bold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          Your {isConsultancy ? "consultancy" : "training"} inquiry has been received. Our team will contact you within one business day.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>Submit another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="full_name" required maxLength={120} />
        <Field label="Mobile Number" name="mobile" type="tel" required maxLength={30} />
        <Field label="Email" name="email" type="email" required maxLength={160} />
        <Field label="City" name="city" required maxLength={80} />
        <div className="sm:col-span-2">
          <Label className="text-sm font-medium">Country *</Label>
          <select
            name="country"
            required
            defaultValue=""
            className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-brand"
          >
            <option value="" disabled>Select country</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {isConsultancy && (
          <div className="sm:col-span-2">
            <Label className="text-sm font-medium">Business / Product Details *</Label>
            <Textarea name="business_details" required minLength={5} maxLength={2000} rows={5}
              placeholder="Tell us about your products, target markets, quantities, and what you need help with…"
              className="mt-1" />
          </div>
        )}
      </div>
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
      <Button type="submit" disabled={loading} className="w-full bg-navy text-primary-foreground hover:opacity-90">
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {loading ? "Submitting…" : isConsultancy ? "Request Consultancy" : "Request Training Info"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Your details are stored securely and never shared.
      </p>
    </form>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label className="text-sm font-medium">{label} {rest.required && "*"}</Label>
      <Input {...rest} className="mt-1" />
    </div>
  );
}
