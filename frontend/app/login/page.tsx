"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat masuk.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light px-4 py-12 dark:bg-background-dark">
      <div className="w-full max-w-md border-4 border-slate-900 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
        <div className="mb-8 text-center">
          <Link href="/" className="mb-6 inline-block">
            <Image src="/logo-livi.png" alt="Logo" width={180} height={45} className="h-10 w-auto dark:brightness-0 dark:invert" />
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Masuk ke <span className="text-teal-600 dark:text-teal-400">Lingkar</span>
          </h1>
          <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            Akses dashboard aspirasi dan program kamu.
          </p>
        </div>

        {error && (
          <div className="mb-6 border-4 border-rose-600 bg-rose-50 p-4 font-bold text-rose-700 dark:bg-rose-900/20 dark:text-rose-400">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
              Alamat Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-4 border-slate-900 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-700"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
              Kata Sandi
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-4 border-slate-900 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-700"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full border-4 border-slate-900 bg-teal-500 py-4 text-base font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:bg-teal-400 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 dark:border-slate-100 dark:shadow-[6px_6px_0px_0px_rgba(241,245,249,1)]"
          >
            {loading ? "Menghubungkan..." : "Masuk Sekarang"}
          </button>
        </form>

        <div className="mt-8 border-t-4 border-slate-100 pt-6 text-center dark:border-slate-800">
          <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
            Belum punya akun?{" "}
            <Link href="/daftar" className="text-teal-600 underline decoration-2 dark:text-teal-400">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
