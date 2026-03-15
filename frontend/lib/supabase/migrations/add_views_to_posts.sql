-- Add views column to posts table
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS views BIGINT DEFAULT 0;

-- Create function to increment views atomically
CREATE OR REPLACE FUNCTION increment_post_views(post_id uuid)
RETURNS void AS $$
BEGIN
    UPDATE public.posts
    SET views = views + 1
    WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
