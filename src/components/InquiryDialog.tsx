import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Props = {
  companyId: string;
  companyName: string;
  channel?: "inquiry" | "contact" | "whatsapp";
  trigger: React.ReactNode;
  defaultSubject?: string;
};

export function InquiryDialog({ companyId, companyName, channel = "inquiry", trigger, defaultSubject }: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    sender_name: "",
    sender_email: "",
    sender_phone: "",
    subject: defaultSubject ?? `Inquiry for ${companyName}`,
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data: u } = await supabase.auth.getUser();
      const { error } = await (supabase as any).from("inquiries").insert({
        company_id: companyId,
        channel,
        sender_user_id: u.user?.id ?? null,
        sender_name: form.sender_name,
        sender_email: form.sender_email,
        sender_phone: form.sender_phone || null,
        subject: form.subject || null,
        message: form.message,
      });
      if (error) throw error;
      toast.success("Inquiry sent! The supplier will contact you shortly.");
      setOpen(false);
      setForm({ sender_name: "", sender_email: "", sender_phone: "", subject: defaultSubject ?? `Inquiry for ${companyName}`, message: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to send");
    } finally {
      setSubmitting(false);
    }
  };

  const title =
    channel === "whatsapp" ? `WhatsApp ${companyName}` :
    channel === "contact" ? `Contact ${companyName}` :
    `Send inquiry to ${companyName}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Your message is delivered privately to the supplier. Contact details are never publicly displayed.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <Label className="text-xs">Your name *</Label>
              <Input value={form.sender_name} onChange={(e) => set("sender_name", e.target.value)} required maxLength={120} />
            </div>
            <div>
              <Label className="text-xs">Your email *</Label>
              <Input type="email" value={form.sender_email} onChange={(e) => set("sender_email", e.target.value)} required maxLength={160} />
            </div>
          </div>
          <div>
            <Label className="text-xs">Phone / WhatsApp (optional)</Label>
            <Input value={form.sender_phone} onChange={(e) => set("sender_phone", e.target.value)} maxLength={40} />
          </div>
          <div>
            <Label className="text-xs">Subject</Label>
            <Input value={form.subject} onChange={(e) => set("subject", e.target.value)} maxLength={200} />
          </div>
          <div>
            <Label className="text-xs">Message *</Label>
            <Textarea value={form.message} onChange={(e) => set("message", e.target.value)} required rows={5} maxLength={2000} placeholder="Describe your requirement, quantity, target price, delivery terms…" />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
