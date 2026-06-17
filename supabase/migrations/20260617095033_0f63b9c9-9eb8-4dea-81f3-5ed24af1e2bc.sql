
-- Restrict direct reads on companies to owner/admin
DROP POLICY IF EXISTS "public read companies" ON public.companies;
CREATE POLICY "owner or admin read companies"
  ON public.companies FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id OR public.has_role(auth.uid(), 'admin'));

-- Public-safe view (definer view; intentionally exposes only non-sensitive columns)
DROP VIEW IF EXISTS public.companies_public;
CREATE VIEW public.companies_public
WITH (security_invoker = off) AS
SELECT id, owner_id, name, slug, type, category, country, city,
       year_established, employees, about, website,
       logo_url, cover_url, is_verified, is_featured, plan,
       created_at, updated_at
FROM public.companies;

GRANT SELECT ON public.companies_public TO anon, authenticated;

-- Inquiries
CREATE TABLE IF NOT EXISTS public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  sender_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  sender_name text NOT NULL,
  sender_email text NOT NULL,
  sender_phone text,
  subject text,
  message text NOT NULL,
  channel text NOT NULL DEFAULT 'inquiry',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.inquiries TO anon;
GRANT SELECT, INSERT ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can submit inquiry"
  ON public.inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (length(sender_name) > 0 AND length(sender_email) > 0 AND length(message) > 0);

CREATE POLICY "company owner or admin can read inquiries"
  ON public.inquiries FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.companies c
      WHERE c.id = inquiries.company_id
        AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
    )
  );
