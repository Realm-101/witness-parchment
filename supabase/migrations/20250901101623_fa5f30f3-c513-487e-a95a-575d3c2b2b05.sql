-- Create blog posts table with comprehensive fields for content management
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  slug TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured_image TEXT,
  author_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog posts
CREATE POLICY "Admins can manage all blog posts" 
ON public.blog_posts 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view published posts" 
ON public.blog_posts 
FOR SELECT 
USING (status = 'published');

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(trim(title), '[^a-zA-Z0-9\s]', '', 'g'));
END;
$$ LANGUAGE plpgsql;

-- Create function to update slug automatically
CREATE OR REPLACE FUNCTION public.update_blog_post_slug()
RETURNS TRIGGER AS $$
BEGIN
  -- Only update slug if it's not manually set or if title changed
  IF NEW.slug IS NULL OR NEW.slug = '' OR (OLD.title IS DISTINCT FROM NEW.title AND NEW.slug = OLD.slug) THEN
    NEW.slug = replace(lower(regexp_replace(trim(NEW.title), '[^a-zA-Z0-9\s]', '', 'g')), ' ', '-');
    
    -- Ensure unique slug
    WHILE EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = NEW.slug AND id != NEW.id) LOOP
      NEW.slug = NEW.slug || '-' || extract(epoch from now())::integer;
    END LOOP;
  END IF;
  
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic slug generation and timestamp updates
CREATE TRIGGER update_blog_post_slug_trigger
BEFORE INSERT OR UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_post_slug();