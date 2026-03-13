"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Aspiration } from "@/lib/types/aspirasi";
import { Loader2, Search, Filter, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SemuaAspirasiPage() {
  const supabase = createClient();
  const [aspirations, setAspirations] = useState<Aspiration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const fetchAspirations = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("aspirations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAspirations(data || []);
    } catch (error) {
      console.error("Error fetching aspirations:", error);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchAspirations();
  }, [fetchAspirations]);

  const filteredAspirations = aspirations.filter((asp) => {
    const matchesSearch =
      asp.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asp.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || asp.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(aspirations.map((asp) => asp.category)));

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-24">
      <Link 
        href="/aspirasi" 
        className="mb-8 inline-flex items-center font-black uppercase tracking-widest text-slate-900 transition-transform hover:-translate-x-1 dark:text-white"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Kembali
      </Link>

      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl dark:text-white">
          Arsip <span className="text-teal-600">Suara</span> Rakyat
        </h1>
        <p className="max-w-2xl font-bold text-slate-600 dark:text-slate-400">
          Telusuri seluruh aspirasi, kritik, dan gagasan yang telah disampaikan oleh publik untuk transformasi kolektif.
        </p>
      </section>

      {/* Filters & Search */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="relative md:col-span-2">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari aspirasi atau nama pengirim..."
            className="w-full border-4 border-slate-900 p-4 pl-12 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <select
            className="w-full border-4 border-slate-900 p-4 pl-12 font-bold outline-none appearance-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Semua Kategori</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Aspirations List */}
      <section>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="h-12 w-12 animate-spin text-teal-600" />
            <p className="mt-4 font-black uppercase tracking-widest text-slate-500">Memuat aspirasi...</p>
          </div>
        ) : filteredAspirations.length === 0 ? (
          <div className="border-4 border-slate-900 p-12 text-center shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <p className="text-xl font-black uppercase tracking-widest text-slate-500">Tidak ada aspirasi ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredAspirations.map((asp) => (
              <div 
                key={asp.id} 
                className="group border-4 border-slate-900 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:hover:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="border-2 border-slate-900 bg-teal-600 px-3 py-1 text-xs font-black uppercase tracking-widest text-white dark:border-slate-100">
                    {asp.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {new Date(asp.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <blockquote className="mb-6 relative">
                  <span className="absolute -left-2 -top-4 text-6xl font-black text-teal-600/20 italic select-none">"</span>
                  <p className="relative z-10 font-bold leading-relaxed text-slate-800 dark:text-slate-200">
                    {asp.message}
                  </p>
                </blockquote>
                <div className="flex items-center pt-4 border-t-2 border-slate-100 dark:border-slate-800">
                  <div className="h-8 w-8 border-2 border-slate-900 bg-amber-400 flex items-center justify-center font-black text-slate-900 dark:border-slate-100">
                    {asp.full_name.charAt(0)}
                  </div>
                  <p className="ml-3 text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white">
                    {asp.full_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
