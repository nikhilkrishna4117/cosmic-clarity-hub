DROP POLICY IF EXISTS "Anyone can submit lead forms" ON public.lead_submissions;

CREATE POLICY "Visitors can submit valid lead forms"
ON public.lead_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) >= 2
  AND char_length(trim(phone)) >= 7
  AND char_length(trim(why)) >= 5
  AND email = lower(trim(email))
  AND source = 'landing_page'
  AND (life_path_number IS NULL OR life_path_number BETWEEN 1 AND 9)
);