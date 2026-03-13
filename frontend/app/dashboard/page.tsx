import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      <section className="mb-12 border-b-8 border-slate-900 pb-8 dark:border-slate-100">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white md:text-6xl">
          Dashboard <span className="text-teal-600 dark:text-teal-400">User</span>
        </h1>
        <p className="mt-4 text-lg font-bold text-slate-600 dark:text-slate-400">
          Halo, {user.email}! Selamat datang di area kerja Lingkar Visioner.
        </p>
      </section>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-4 border-slate-900 bg-amber-400 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
          <h2 className="mb-4 text-2xl font-black uppercase text-slate-900">Program Saya</h2>
          <p className="font-bold text-slate-900">Kamu belum terdaftar di program apapun.</p>
        </div>
        
        <div className="border-4 border-slate-900 bg-teal-400 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
          <h2 className="mb-4 text-2xl font-black uppercase text-slate-900">Aspirasi</h2>
          <p className="font-bold text-slate-900">1 Aspirasi terkirim.</p>
        </div>
      </div>
      
      <form action="/auth/signout" method="post" className="mt-12">
        <button className="border-4 border-slate-900 px-6 py-3 font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-100 dark:border-slate-100 dark:text-white dark:hover:bg-slate-800">
          Keluar Sesi
        </button>
      </form>
    </main>
  );
}
