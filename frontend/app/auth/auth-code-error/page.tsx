import Link from "next/link";

export default function AuthCodeError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light px-4 py-12 dark:bg-background-dark">
      <div className="w-full max-w-md border-4 border-slate-900 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
        <div className="mb-8 text-center">
          <div className="mb-6 inline-block border-4 border-slate-900 bg-rose-500 p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
            <span className="material-symbols-outlined text-4xl text-white">warning</span>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Konfirmasi Gagal
          </h1>
          <p className="mt-4 font-bold text-slate-600 dark:text-slate-400">
            Tautan konfirmasi email kamu sudah kedaluwarsa atau sudah pernah digunakan sebelumnya.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-amber-500 bg-amber-50 p-4 text-sm font-bold text-amber-900 dark:bg-amber-900/20 dark:text-amber-400">
            <p className="font-black uppercase tracking-widest mb-1">Tips untuk Developer:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pastikan URL `http://localhost:3000/auth/callback` sudah ditambahkan ke "Redirect URLs" di Dashboard Supabase.</li>
              <li>Tautan email hanya bisa diklik satu kali. Coba daftar kembali jika perlu.</li>
              <li>Matikan fitur "Secure Email Links" di Supabase Dashboard untuk menghindari pre-fetch otomatis.</li>
            </ul>
          </div>

          <Link
            href="/login"
            className="block w-full border-4 border-slate-900 bg-teal-500 py-4 text-center text-base font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
}
