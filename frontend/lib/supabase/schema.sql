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
  time_range TEXT,
  registration_url TEXT,
  max_participants INTEGER DEFAULT 0,
  current_participants INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read active programs
DROP POLICY IF EXISTS "Public can view active programs" ON programs;
CREATE POLICY "Public can view active programs"
  ON programs
  FOR SELECT
  USING (status = 'active');

-- Policy: Admins can do everything (using user metadata role)
-- Note: This checks user_metadata for role = 'admin'
DROP POLICY IF EXISTS "Admins can manage all programs" ON programs;
CREATE POLICY "Admins can manage all programs"
  ON programs
  FOR ALL
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS programs_updated_at ON programs;
CREATE TRIGGER programs_updated_at
  BEFORE UPDATE ON programs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- =============================================
-- Tabel: aspirations
-- Kelola data aspirasi dari publik
-- =============================================

CREATE TABLE IF NOT EXISTS aspirations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE aspirations ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert aspirations
DROP POLICY IF EXISTS "Public can insert aspirations" ON aspirations;
CREATE POLICY "Public can insert aspirations"
  ON aspirations
  FOR INSERT
  WITH CHECK (true);

-- Policy: Anyone can read aspirations (to display on the page)
DROP POLICY IF EXISTS "Public can view aspirations" ON aspirations;
CREATE POLICY "Public can view aspirations"
  ON aspirations
  FOR SELECT
  USING (true);

-- Policy: Admins can delete aspirations
DROP POLICY IF EXISTS "Admins can manage aspirations" ON aspirations;
CREATE POLICY "Admins can manage aspirations"
  ON aspirations
  FOR ALL
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- =============================================
-- Storage Bucket: program-images
-- Untuk menyimpan gambar program (maks 2MB)
-- =============================================

INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('program-images', 'program-images', true, 2097152)
ON CONFLICT (id) DO NOTHING;

-- Policy: Anyone can view images
DROP POLICY IF EXISTS "Public can view program images" ON storage.objects;
CREATE POLICY "Public can view program images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'program-images');

-- Policy: Admins can upload images
DROP POLICY IF EXISTS "Admins can upload program images" ON storage.objects;
CREATE POLICY "Admins can upload program images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'program-images'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- Policy: Admins can update images
DROP POLICY IF EXISTS "Admins can update program images" ON storage.objects;
CREATE POLICY "Admins can update program images"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'program-images'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- Policy: Admins can delete imagesa
DROP POLICY IF EXISTS "Admins can delete program images" ON storage.objects;
CREATE POLICY "Admins can delete program images"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'program-images'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

  
