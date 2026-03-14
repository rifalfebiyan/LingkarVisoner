-- Create posts table
CREATE TABLE IF NOT EXISTS public.posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    summary TEXT,
    content TEXT NOT NULL, -- Markdown content
    image_url TEXT,
    category TEXT NOT NULL DEFAULT 'Umum', -- e.g., 'Leadership', 'Entrepreneurship', 'Sosial'
    type TEXT NOT NULL DEFAULT 'regular', -- e.g., 'feature', 'regular', 'trending', 'editorial'
    author TEXT,
    author_role TEXT,
    status TEXT NOT NULL DEFAULT 'draft', -- 'draft', 'published'
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Policies for posts
-- Allow everyone to read published posts
CREATE POLICY "Allow public read for published posts" ON public.posts
    FOR SELECT USING (status = 'published');

-- Allow admins to manage all posts
-- Note: Assuming there's a simple way to check admin role, 
-- but for now keeping it open for authenticated users for easier development, 
-- or you might want to restrict it further if you have a roles table.
CREATE POLICY "Allow authenticated full access to posts" ON public.posts
    FOR ALL TO authenticated USING (true);

-- Function to handle updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
CREATE TRIGGER update_posts_updated_at
    BEFORE UPDATE ON public.posts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- =============================================
-- Storage Bucket: news-images
-- Untuk menyimpan gambar berita (maks 5MB)
-- =============================================

INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('news-images', 'news-images', true, 5242880)
ON CONFLICT (id) DO NOTHING;

-- Policy: Anyone can view images
DROP POLICY IF EXISTS "Public can view news images" ON storage.objects;
CREATE POLICY "Public can view news images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'news-images');

-- Policy: Admins can upload images
DROP POLICY IF EXISTS "Admins can upload news images" ON storage.objects;
CREATE POLICY "Admins can upload news images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'news-images'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- Policy: Admins can update images
DROP POLICY IF EXISTS "Admins can update news images" ON storage.objects;
CREATE POLICY "Admins can update news images"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'news-images'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- Policy: Admins can delete images
DROP POLICY IF EXISTS "Admins can delete news images" ON storage.objects;
CREATE POLICY "Admins can delete news images"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'news-images'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );
