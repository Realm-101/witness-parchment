-- Create the initial admin user
-- First, we need to insert into auth.users, but we can't do that directly
-- Instead, we'll create a function that can be called to set up the initial admin

-- Create the initial admin user with the specified credentials
-- Note: This will need to be done through the Supabase auth system
-- For now, we'll create the user role entry for when the user signs up

-- Insert the admin role for the user (this will be applied once they sign up)
-- We'll use a known UUID for the admin user
INSERT INTO public.user_roles (user_id, role) 
SELECT '00000000-0000-0000-0000-000000000001'::uuid, 'admin'::app_role
WHERE NOT EXISTS (
  SELECT 1 FROM public.user_roles 
  WHERE user_id = '00000000-0000-0000-0000-000000000001'::uuid 
  AND role = 'admin'::app_role
);

-- Create a function to promote users to admin (for the admin panel)
CREATE OR REPLACE FUNCTION public.promote_user_to_admin(target_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Check if current user is admin
  IF NOT has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can promote users';
  END IF;
  
  -- Add admin role to target user
  INSERT INTO public.user_roles (user_id, role)
  VALUES (target_user_id, 'admin'::app_role)
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RETURN true;
END;
$$;

-- Create a function to remove admin role
CREATE OR REPLACE FUNCTION public.remove_admin_role(target_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Check if current user is admin
  IF NOT has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can remove admin roles';
  END IF;
  
  -- Don't allow removing own admin role
  IF target_user_id = auth.uid() THEN
    RAISE EXCEPTION 'Cannot remove your own admin role';
  END IF;
  
  -- Remove admin role
  DELETE FROM public.user_roles 
  WHERE user_id = target_user_id AND role = 'admin'::app_role;
  
  RETURN true;
END;
$$;