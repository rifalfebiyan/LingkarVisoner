"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Eye, ArrowLeft, Image as ImageIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import MarkdownEditor from "@/components/MarkdownEditor";
import { createPost, updatePost } from "@/lib/actions/posts";
import { Post, CreatePostInput, PostType, PostStatus } from "@/lib/types/post";
import { createClient } from "@/lib/supabase/client";

interface BeritaFormProps {
  initialData?: Post;
}

export default function BeritaForm({ initialData }: BeritaFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CreatePostInput>({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    summary: initialData?.summary || "",
    content: initialData?.content || "",
    image_url: initialData?.image_url || "",
    category: initialData?.category || "Umum",
    type: initialData?.type || "regular",
    author: initialData?.author || "Admin",
    author_role: initialData?.author_role || "Dewan Pakar",
    status: initialData?.status || "draft",
    published_at: initialData?.published_at || null,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    
    setFormData((prev) => ({ ...prev, title, slug }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const supabase = createClient();
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `posts/${fileName}`;

    try {
      const { error: uploadError, data } = await supabase.storage
        .from('news-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('news-images')
        .getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, image_url: publicUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Gagal mengunggah gambar. Pastikan Anda sudah menjalankan SQL terbaru.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (initialData) {
        // @ts-ignore - Update dynamic fields
        await updatePost(initialData.id, formData);
      } else {
        await createPost(formData);
      }
      router.push("/dashboard/admin/berita");
      router.refresh();
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Gagal menyimpan berita. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center border-b-4 border-slate-900 pb-6 dark:border-slate-100">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/admin/berita"
            className="flex h-12 w-12 items-center justify-center border-4 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:bg-slate-100 dark:border-slate-100 dark:bg-slate-800"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
            {initialData ? "Edit Berita" : "Tulis Berita Baru"}
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 border-4 border-slate-900 bg-teal-500 px-6 py-3 font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] disabled:opacity-50 dark:border-slate-100"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
            Simpan
          </button>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500">Judul Berita</label>
            <input
              required
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full border-4 border-slate-900 bg-white p-4 text-xl font-black text-slate-900 placeholder:text-slate-300 focus:outline-none dark:border-slate-100 dark:bg-slate-900 dark:text-white"
              placeholder="Masukkan Judul yang Menarik..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500">Slug (URL)</label>
            <input
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full border-4 border-slate-900 bg-slate-50 p-3 text-sm font-bold text-slate-600 focus:outline-none dark:border-slate-100 dark:bg-slate-800 dark:text-slate-400"
              placeholder="judul-berita-otomatis"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500">Ringkasan Singkat</label>
            <textarea
              value={formData.summary || ""}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full border-4 border-slate-900 bg-white p-4 text-base font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none dark:border-slate-100 dark:bg-slate-900 dark:text-white h-24"
              placeholder="Berikan ringkasan 1-2 kalimat untuk preview..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500">Konten (Markdown)</label>
            <MarkdownEditor
              value={formData.content}
              onChange={(val) => setFormData({ ...formData, content: val })}
              placeholder="Tuliskan isi berita di sini..."
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-4 border-slate-900 bg-amber-50 p-6 dark:border-slate-100 dark:bg-slate-800 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <h3 className="mb-4 text-lg font-black uppercase tracking-widest border-b-2 border-slate-900 pb-2 dark:border-slate-100">Info Publikasi</h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as PostStatus })}
                  className="w-full border-2 border-slate-900 bg-white p-2 font-bold dark:bg-slate-900"
                >
                  <option value="draft">Draft (Drafting)</option>
                  <option value="published">Published (Tayang)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500">Kategori</label>
                <input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border-2 border-slate-900 bg-white p-2 font-bold dark:bg-slate-900"
                  placeholder="Leadership, Ekonomi..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500">Tipe Tampilan</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as PostType })}
                  className="w-full border-2 border-slate-900 bg-white p-2 font-bold dark:bg-slate-900"
                >
                  <option value="regular">Regular (Daftar Utama)</option>
                  <option value="feature">Feature (Banner Besar Top)</option>
                  <option value="trending">Trending (Sidebar Kanan)</option>
                  <option value="editorial">Editorial (Kolom Opini)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-4 border-slate-900 bg-slate-50 p-6 dark:border-slate-100 dark:bg-slate-800 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <h3 className="mb-4 text-lg font-black uppercase tracking-widest border-b-2 border-slate-900 pb-2 dark:border-slate-100">Hero Image</h3>
            <div className="space-y-4">
              <div className="relative aspect-video w-full border-2 border-dashed border-slate-400 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                {formData.image_url ? (
                  <img src={formData.image_url} className="h-full w-full object-cover" alt="Preview" />
                ) : (
                  <ImageIcon className="h-12 w-12 text-slate-300" />
                )}
                {loading && (
                    <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex items-center justify-center">
                        <Loader2 className="h-10 w-10 animate-spin text-slate-900 dark:text-white" />
                    </div>
                )}
              </div>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={loading}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />
                <div className="flex items-center justify-center gap-2 border-4 border-slate-900 bg-white px-4 py-3 font-black uppercase tracking-widest text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:bg-slate-50 dark:border-slate-100 dark:bg-slate-900 dark:text-white">
                   <ImageIcon className="h-5 w-5" />
                   {formData.image_url ? "Ganti Gambar" : "Pilih Gambar"}
                </div>
              </div>

              {formData.image_url && (
                  <input
                    value={formData.image_url}
                    readOnly
                    className="w-full border-2 border-slate-200 bg-slate-100 p-2 text-[10px] font-mono dark:bg-slate-900 dark:border-slate-700 text-slate-500"
                  />
              )}
              <p className="text-[10px] text-slate-500 italic">* Unggah gambar (JPG/PNG) maksimal 5MB.</p>
            </div>
          </div>

          <div className="border-4 border-slate-900 bg-white p-6 dark:border-slate-100 dark:bg-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <h3 className="mb-4 text-lg font-black uppercase tracking-widest border-b-2 border-slate-900 pb-2 dark:border-slate-100">Penulis</h3>
             <div className="space-y-4">
               <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-500">Nama Penulis</label>
                  <input
                    value={formData.author || ""}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full border-2 border-slate-900 bg-white p-2 font-bold dark:bg-slate-900"
                  />
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-500">Jabatan/Peran</label>
                  <input
                    value={formData.author_role || ""}
                    onChange={(e) => setFormData({ ...formData, author_role: e.target.value })}
                    className="w-full border-2 border-slate-900 bg-white p-2 font-bold dark:bg-slate-900"
                  />
               </div>
             </div>
          </div>
        </div>
      </div>
    </form>
  );
}
