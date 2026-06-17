
-- 1) New table for sensitive contact info
CREATE TABLE IF NOT EXISTS public.company_contacts (
  company_id uuid PRIMARY KEY REFERENCES public.companies(id) ON DELETE CASCADE,
  email text,
  phone text,
  whatsapp text,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.company_contacts TO authenticated;
GRANT ALL ON public.company_contacts TO service_role;

ALTER TABLE public.company_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "owner or admin read contacts"
  ON public.company_contacts FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.companies c WHERE c.id = company_contacts.company_id
                 AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))));

CREATE POLICY "owner or admin insert contacts"
  ON public.company_contacts FOR INSERT TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.companies c WHERE c.id = company_contacts.company_id
                      AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))));

CREATE POLICY "owner or admin update contacts"
  ON public.company_contacts FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.companies c WHERE c.id = company_contacts.company_id
                 AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))));

CREATE POLICY "owner or admin delete contacts"
  ON public.company_contacts FOR DELETE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.companies c WHERE c.id = company_contacts.company_id
                 AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))));

CREATE TRIGGER company_contacts_set_updated_at
  BEFORE UPDATE ON public.company_contacts
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- 2) Backfill existing contact data, then drop sensitive columns
INSERT INTO public.company_contacts (company_id, email, phone, whatsapp)
SELECT id, email, phone, whatsapp FROM public.companies
WHERE email IS NOT NULL OR phone IS NOT NULL OR whatsapp IS NOT NULL
ON CONFLICT (company_id) DO NOTHING;

-- 3) Drop the security-definer view (no longer needed)
DROP VIEW IF EXISTS public.companies_public;

-- 4) Remove sensitive columns from companies
ALTER TABLE public.companies DROP COLUMN IF EXISTS email;
ALTER TABLE public.companies DROP COLUMN IF EXISTS phone;
ALTER TABLE public.companies DROP COLUMN IF EXISTS whatsapp;

-- 5) Make companies publicly readable (no sensitive data remains)
DROP POLICY IF EXISTS "owner or admin read companies" ON public.companies;
DROP POLICY IF EXISTS "public read companies" ON public.companies;
CREATE POLICY "anyone can read companies"
  ON public.companies FOR SELECT
  TO anon, authenticated
  USING (true);

GRANT SELECT ON public.companies TO anon;

-- 6) Lock down user_roles: only admins can write (prevent privilege escalation)
CREATE POLICY "admins insert roles"
  ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "admins update roles"
  ON public.user_roles FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "admins delete roles"
  ON public.user_roles FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
