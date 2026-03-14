"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { Aspiration, AspirationFormData } from '@/lib/types/aspirasi';
import { Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AspirasiPage() {
  const supabase = createClient();
  const [aspirations, setAspirations] = useState<Aspiration[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<AspirationFormData>({
    full_name: '',
    email: '',
    category: 'Kebijakan Publik',
    message: '',
  });

  const fetchAspirations = async () => {
    try {
      const { data, error } = await supabase
        .from('aspirations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) throw error;
      setAspirations(data || []);
    } catch (error) {
      console.error('Error fetching aspirations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAspirations();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('aspirations').insert([formData]);
      if (error) throw error;

      setSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        category: 'Kebijakan Publik',
        message: '',
      });
      fetchAspirations();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting aspiration:', error);
      alert('Gagal mengirim aspirasi. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Section: Aspirasi & Gagasan */}
      <section className="mb-16">
        <div className="group relative flex min-h-[400px] items-center justify-center overflow-hidden border-4 border-slate-900 bg-slate-900 p-8 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-indigo-900/90 to-slate-900/80 mix-blend-multiply"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale opacity-50"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEAmxm1alJOaePYqBYGeIdaKENssN6DWoIonwrNFEb7zvZibecnunYVNkRyH-dhyR4G8kIdm8iJAGv5RlxB2on7MAd7MG5HvvNwI13tk2mjugK1zeg-IVkORzAZYkbzVQHATVHLmLqHnRgZXzMPCkHAAN84cV4yfW8O1amU9on2DQjC3O-9tl4jCwz75_edd9anVKALiUlWqYh37jsWgi6FQwc9NqtBRZ8R9e8-bYuk2Kk_NCFscbafv-kWJ-DsGXi6Y6RsFSCpcSZ")',
            }}
          ></div>
          <div className="relative z-20 mx-auto max-w-3xl">
            <span className="mb-6 inline-block border-2 border-white bg-indigo-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              Suara Anda, Masa Depan Kita
            </span>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl tracking-tighter">
              Aspirasi <span className="text-teal-400">&</span> Gagasan
            </h1>
            <p className="mb-10 text-lg font-bold leading-relaxed text-slate-200 md:text-xl border-l-4 border-teal-400 pl-4 bg-slate-900/50 py-2 text-left md:text-center">
              Sampaikan aspirasi, kritik, atau ide inovatif Anda untuk membangun ekosistem kepemimpinan dan perubahan sosial yang lebih berdampak.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Form Section */}
        <section className="mb-24">
          <div className="border-4 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              Sampaikan Aspirasi
            </h2>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mb-4 h-16 w-16 text-teal-600" />
                <h3 className="mb-2 text-2xl font-black uppercase tracking-widest text-slate-900 dark:text-white">
                  Berhasil Terkirim!
                </h3>
                <p className="font-bold text-slate-600 dark:text-slate-400">
                  Terima kasih atas aspirasi Anda. Kami akan meninjau gagasan Anda segera.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border-4 border-slate-900 bg-slate-900 px-8 py-3 font-black uppercase text-white hover:bg-slate-800 dark:border-slate-100 dark:bg-white dark:text-slate-900"
                >
                  Kirim Aspirasi Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                    Kategori Aspirasi
                  </label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700 appearance-none"
                  >
                    <option>Kebijakan Publik</option>
                    <option>Kepemimpinan Muda</option>
                    <option>Inovasi Sosial</option>
                    <option>Kewirausahaan</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                    Pesan Aspirasi
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
                    placeholder="Tuliskan gagasan atau aspirasi Anda di sini..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center border-4 border-slate-900 bg-teal-600 py-4 font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-teal-500 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100"
                >
                  {submitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Kirim Aspirasi'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Featured Aspirations / Info */}
        <section className="space-y-10">
          <div className="border-4 border-slate-900 bg-amber-400 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
            <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-slate-900">
              Mengapa Beraspirasi?
            </h3>
            <p className="font-bold leading-relaxed text-slate-900">
              Setiap perubahan besar dimulai dari satu gagasan kecil. Aspirasi Anda membantu kami memetakan isu-isu krusial yang perlu diintervensi melalui program kerja kami.
            </p>
          </div>

          <div className="border-4 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <h3 className="mb-6 text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              Aspirasi Terkini
            </h3>
            <div className="space-y-6">
              {loading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
              ) : aspirations.length === 0 ? (
                <p className="text-center font-bold text-slate-500">Belum ada aspirasi masuk.</p>
              ) : (
                aspirations.map((asp) => (
                  <div key={asp.id} className="border-l-4 border-teal-600 pl-4 py-2">
                    <p className="mb-2 text-sm font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                      #{asp.category.replace(/\s+/g, '')}
                    </p>
                    <p className="font-bold text-slate-700 dark:text-slate-300 line-clamp-3">
                      "{asp.message}"
                    </p>
                    <p className="mt-2 text-xs font-bold text-slate-500">
                      - {asp.full_name.split(' ')[0]}, {new Date(asp.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                ))
              )}
            </div>
            <Link 
              href="/aspirasi/semua"
              className="mt-8 block w-full text-center border-4 border-slate-900 bg-slate-900 py-3 font-black uppercase tracking-widest text-white transition-all hover:bg-slate-800 dark:border-slate-100 dark:bg-white dark:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Lihat Semua Suara
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
