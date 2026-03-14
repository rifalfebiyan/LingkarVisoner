"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Kata sandi tidak cocok.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      if (data.user && data.session) {
        // Automatically signed in
        router.push("/dashboard");
        router.refresh();
      } else {
        // Confirmation email sent
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat mendaftar.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light px-4 py-12 dark:bg-background-dark">
        <div className="w-full max-w-md border-4 border-slate-900 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
          <div className="mb-8 text-center">
            <div className="mb-6 inline-block border-4 border-slate-900 bg-teal-400 p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <span className="material-symbols-outlined text-4xl text-slate-900">mark_email_read</span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              Cek Email Kamu
            </h1>
            <p className="mt-4 font-bold text-slate-600 dark:text-slate-400">
              Tautan konfirmasi telah dikirim ke <span className="text-slate-900 dark:text-white">{email}</span>. Silakan periksa kotak masuk kamu untuk mengaktifkan akun.
            </p>
          </div>
          <Link
            href="/login"
            className="block w-full border-4 border-slate-900 bg-amber-400 py-4 text-center text-base font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Kembali ke Masuk
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light px-4 py-12 dark:bg-background-dark">
      <div className="mb-6 w-full max-w-md">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 font-black uppercase tracking-widest text-slate-900 transition-colors hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
          Kembali ke Beranda
        </Link>
      </div>

      <div className="w-full max-w-md border-4 border-slate-900 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
        <div className="mb-8 text-center">
          <Link href="/" className="mb-6 inline-block">
            <Image src="/logo-livi.png" alt="Logo" width={180} height={45} className="h-10 w-auto dark:brightness-0 dark:invert" />
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Gabung <span className="text-teal-600 dark:text-teal-400">Gerakan</span>
          </h1>
          <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            Daftar untuk mulai berkontribusi dan berkolaborasi.
          </p>
        </div>

        {error && (
          <div className="mb-6 border-4 border-rose-600 bg-rose-50 p-4 font-bold text-rose-700 dark:bg-rose-900/20 dark:text-rose-400">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
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

          <div>
            <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-4 border-slate-900 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-700"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full border-4 border-slate-900 bg-teal-500 py-4 text-base font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:bg-teal-400 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 dark:border-slate-100 dark:shadow-[6px_6px_0px_0px_rgba(241,245,249,1)]"
          >
            {loading ? "Mendaftarkan..." : "Daftar Sekarang"}
          </button>
        </form>

        <div className="mt-8 border-t-4 border-slate-100 pt-6 text-center dark:border-slate-800">
          <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-teal-600 underline decoration-2 dark:text-teal-400">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
