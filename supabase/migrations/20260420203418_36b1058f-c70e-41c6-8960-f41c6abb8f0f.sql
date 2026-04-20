CREATE TABLE public.lead_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  why TEXT NOT NULL,
  birth_date DATE,
  life_path_number INTEGER,
  source TEXT NOT NULL DEFAULT 'landing_page',
  email_notification_status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT lead_submissions_name_length CHECK (char_length(trim(name)) >= 2),
  CONSTRAINT lead_submissions_phone_length CHECK (char_length(trim(phone)) >= 7),
  CONSTRAINT lead_submissions_why_length CHECK (char_length(trim(why)) >= 5),
  CONSTRAINT lead_submissions_life_path_range CHECK (life_path_number IS NULL OR life_path_number BETWEEN 1 AND 9)
);

CREATE INDEX idx_lead_submissions_created_at ON public.lead_submissions (created_at DESC);
CREATE INDEX idx_lead_submissions_email ON public.lead_submissions (email);

ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit lead forms"
ON public.lead_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);