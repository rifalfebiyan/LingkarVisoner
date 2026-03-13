-- =============================================
-- Tabel: programs
-- Kelola data program Lingkar Visioner
-- Jalankan SQL ini di Supabase SQL Editor
-- =============================================

CREATE TABLE IF NOT EXISTS programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'Leadership',
  image_url TEXT,
  start_date DATE,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'completed', 'archived')),
  location TEXT,
  max_participants INT DEFAULT 0,
  current_participants INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read active programs
CREATE POLICY "Public can view active programs"
  ON programs
  FOR SELECT
  USING (status = 'active');

-- Policy: Admins can do everything (using user metadata role)
-- Note: This checks user_metadata for role = 'admin'
CREATE POLICY "Admins can manage all programs"
  ON programs
  FOR ALL
  USING (
    (SELECT (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin')
  )
  WITH CHECK (
    (SELECT (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin')
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER programs_updated_at
  BEFORE UPDATE ON programs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- =============================================
-- Storage Bucket: program-images
-- Untuk menyimpan gambar program (maks 2MB)
-- =============================================

INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('program-images', 'program-images', true, 2097152)
ON CONFLICT (id) DO NOTHING;

-- Policy: Anyone can view images
CREATE POLICY "Public can view program images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'program-images');

-- Policy: Admins can upload images
CREATE POLICY "Admins can upload program images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'program-images'
    AND (SELECT (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin')
  );

-- Policy: Admins can update images
CREATE POLICY "Admins can update program images"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'program-images'
    AND (SELECT (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin')
  );

-- Policy: Admins can delete images
CREATE POLICY "Admins can delete program images"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'program-images'
    AND (SELECT (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin')
  );
