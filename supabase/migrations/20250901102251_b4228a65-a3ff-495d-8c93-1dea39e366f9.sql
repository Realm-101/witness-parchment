-- Fix security warnings by setting proper search_path for functions
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  RETURN lower(regexp_replace(trim(title), '[^a-zA-Z0-9\s]', '', 'g'));
END;
$$;

-- Fix search path for blog post slug update function
CREATE OR REPLACE FUNCTION public.update_blog_post_slug()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
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
$$;