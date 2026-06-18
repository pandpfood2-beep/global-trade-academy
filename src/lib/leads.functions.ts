import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const trainingSchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  mobile: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(160),
  city: z.string().trim().min(2).max(80),
  country: z.string().trim().min(2).max(80),
});

const consultancySchema = trainingSchema.extend({
  business_details: z.string().trim().min(5).max(2000),
});

type Kind = "training" | "consultancy";

async function postToWebhook(url: string | undefined, payload: unknown) {
  if (!url) return { ok: false, skipped: true as const };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    console.error("[leads] webhook error", e);
    return { ok: false, error: String(e) };
  }
}

async function notifyEmail(kind: Kind, payload: Record<string, unknown>) {
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!to) return { skipped: true as const };
  // Use Lovable Emails app-email endpoint if configured; otherwise no-op.
  try {
    const origin = process.env.PUBLIC_APP_URL || "";
    if (!origin) return { skipped: true as const };
    const res = await fetch(`${origin}/lovable/email/transactional/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        templateName: kind === "training" ? "training-lead" : "consultancy-lead",
        recipientEmail: to,
        idempotencyKey: `${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        templateData: payload,
      }),
    });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    console.error("[leads] email error", e);
    return { ok: false, error: String(e) };
  }
}

async function insertAndForward(table: "training_leads" | "consultancy_leads", row: Record<string, unknown>) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from(table).insert({ ...row, source: "website" });
  if (error) throw new Error(error.message);
}

export const submitTrainingLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => trainingSchema.parse(input))
  .handler(async ({ data }) => {
    await insertAndForward("training_leads", data);
    const sheet = await postToWebhook(process.env.TRAINING_SHEET_WEBHOOK_URL, { kind: "training", ...data, submitted_at: new Date().toISOString() });
    const email = await notifyEmail("training", data);
    return { ok: true, sheet, email };
  });

export const submitConsultancyLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => consultancySchema.parse(input))
  .handler(async ({ data }) => {
    await insertAndForward("consultancy_leads", data);
    const sheet = await postToWebhook(process.env.CONSULTANCY_SHEET_WEBHOOK_URL, { kind: "consultancy", ...data, submitted_at: new Date().toISOString() });
    const email = await notifyEmail("consultancy", data);
    return { ok: true, sheet, email };
  });
