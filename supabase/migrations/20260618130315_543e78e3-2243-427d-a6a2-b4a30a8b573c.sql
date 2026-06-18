CREATE TABLE public.training_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.consultancy_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  business_details TEXT NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.training_leads TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.training_leads TO authenticated;
GRANT ALL ON public.training_leads TO service_role;

GRANT INSERT ON public.consultancy_leads TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.consultancy_leads TO authenticated;
GRANT ALL ON public.consultancy_leads TO service_role;

ALTER TABLE public.training_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultancy_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit training leads"
  ON public.training_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins view training leads"
  ON public.training_leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update training leads"
  ON public.training_leads FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete training leads"
  ON public.training_leads FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can submit consultancy leads"
  ON public.consultancy_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins view consultancy leads"
  ON public.consultancy_leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update consultancy leads"
  ON public.consultancy_leads FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete consultancy leads"
  ON public.consultancy_leads FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));