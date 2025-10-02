-- Create assessment_requests table for logging
CREATE TABLE public.assessment_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT DEFAULT 'assessment_form',
  client_ip TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  error_message TEXT,
  resend_response JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.assessment_requests ENABLE ROW LEVEL SECURITY;

-- Admins can view all requests
CREATE POLICY "Admins can view all assessment requests"
ON public.assessment_requests
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster lookups
CREATE INDEX idx_assessment_requests_email ON public.assessment_requests(email);
CREATE INDEX idx_assessment_requests_created_at ON public.assessment_requests(created_at DESC);