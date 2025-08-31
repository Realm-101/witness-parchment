-- Tighten logs read access while preserving optional public visibility
-- 1) Add is_public flag (default true to avoid breaking any existing behavior)
ALTER TABLE public.logs
  ADD COLUMN IF NOT EXISTS is_public boolean NOT NULL DEFAULT true;

-- 2) Replace overly broad public SELECT policy
DROP POLICY IF EXISTS "Public can view logs" ON public.logs;

-- 3) Fine-grained policies
-- Public can only read rows explicitly marked public
CREATE POLICY "Public can view public logs"
ON public.logs
FOR SELECT
USING (is_public = true);

-- Admins can read everything
CREATE POLICY "Admins can view all logs"
ON public.logs
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));