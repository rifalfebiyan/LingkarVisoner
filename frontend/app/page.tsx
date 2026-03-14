import { createClient } from "@/lib/supabase/server";
import type { Program } from "@/lib/types/program";
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const supabase = await createClient();

  const { data: programs } = await supabase
    .from("programs")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(3);

  const activePrograms: Program[] = programs || [];

  const categoryColors: Record<string, { bg: string; text: string; accent: string; hover: string }> = {
    Leadership: { bg: "bg-amber-400", text: "text-slate-900", accent: "decoration-amber-400", hover: "hover:bg-amber-400" },
    Entrepreneurship: { bg: "bg-teal-400", text: "text-slate-900", accent: "decoration-teal-400", hover: "hover:bg-teal-400" },
    "Public Policy": { bg: "bg-indigo-400", text: "text-slate-900", accent: "decoration-indigo-400", hover: "hover:bg-indigo-400" },
    Digital: { bg: "bg-blue-400", text: "text-slate-900", accent: "decoration-blue-400", hover: "hover:bg-blue-400" },
    Mentoring: { bg: "bg-rose-400", text: "text-slate-900", accent: "decoration-rose-400", hover: "hover:bg-rose-400" },
    Webinar: { bg: "bg-purple-400", text: "text-slate-900", accent: "decoration-purple-400", hover: "hover:bg-purple-400" },
    Workshop: { bg: "bg-emerald-400", text: "text-slate-900", accent: "decoration-emerald-400", hover: "hover:bg-emerald-400" },
  };

  const getColors = (category: string) =>
    categoryColors[category] || { bg: "bg-amber-400", text: "text-slate-900", accent: "decoration-amber-400", hover: "hover:bg-amber-400" };

  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="group relative flex min-h-[500px] items-center justify-center overflow-hidden border-4 border-slate-900 bg-slate-900 p-8 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 to-teal-900/60 mix-blend-multiply"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Tm271z-8NUFeJvtEGgq4Wen-s7gEMlWz-wKc6RruccKcBMrf3vIvcx6RJqkaHfBf3Hl3NWt6G29Uf5gSGiCRIhySN3myp4jE9OpEzpsctwgLr3d0ARfzDm6NqYFHzscX-CtnCgzEHOucICG5Ue1JXMh3VxH9UVRabAwTY9A25l-UWy8S_PK_MbaKQCB2vusbFr5zqunYO_RYnEGLwZIsZpkFmV6yPw8m7CrV6llMMKu-7nTYa0ytVRea6aKBAxP7H7yEOS7osd_3")',
            }}
          ></div>
          <div className="relative z-20 mx-auto max-w-3xl">
            <span className="mb-6 inline-block border-2 border-white bg-teal-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              Kepemimpinan & Perubahan Sosial
            </span>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl tracking-tighter">
              SATU LINGKAR <span className="text-teal-400">SERIBU VISI</span>
            </h1>
            <p className="mb-10 text-lg font-bold leading-relaxed text-slate-200 md:text-xl border-l-4 border-teal-400 pl-4 bg-slate-900/50 py-2 text-left md:text-center">
              Lingkar Visioner adalah wadah kolaborasi untuk mengasah kepemimpinan, keterampilan organisasi, kepekaan politik, dan jiwa kewirausahaan demi dampak sosial yang nyata.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/program" className="inline-block">
                  <button className="flex items-center gap-3 border-4 border-white bg-teal-600 px-8 py-4 font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-teal-500 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                    Lihat Program <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </Link>
              </div>
              <Link href="https://chat.whatsapp.com/D7g6WKGbfDIHU8UYS7AMIs">
                <button className="border-4 border-white bg-transparent px-8 py-4 font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white hover:text-slate-900 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                  Gabung Komunitas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Activities Section */}
      <section className="mb-24">
        <div className="mb-12 flex flex-col items-start justify-between border-b-8 border-slate-900 pb-6 dark:border-slate-100 md:flex-row md:items-end gap-6">
          <div>
            <h2 className="mb-2 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              Program Aktif
            </h2>
            <p className="text-lg font-bold text-slate-600 dark:text-slate-400 border-l-4 border-amber-500 pl-3">
              Jejak langkah kami dalam memberdayakan masyarakat dan mencetak inovator baru.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/program">
              <button className="flex items-center gap-2 border-4 border-slate-900 bg-white px-6 py-2 font-black uppercase text-slate-900 transition-all hover:bg-amber-400 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
                Lihat Semua <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </Link>
          </div>
        </div>
        
        {activePrograms.length === 0 ? (
          <div className="border-4 border-slate-900 bg-slate-50 p-12 text-center dark:border-slate-100 dark:bg-slate-800">
            <p className="text-xl font-bold text-slate-500">Belum ada program aktif saat ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {activePrograms.map((program) => {
              const colors = getColors(program.category);
              return (
                <div key={program.id} className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
                  <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                    {program.image_url ? (
                      <img
                        className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        alt={program.title}
                        src={program.image_url}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                        <span className="material-symbols-outlined text-6xl text-slate-400">image</span>
                      </div>
                    )}
                    <div className={`absolute left-4 top-4 border-2 border-slate-900 ${colors.bg} px-3 py-1.5 text-[10px] font-black uppercase tracking-widest ${colors.text} shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]`}>
                      {program.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center gap-2 border-l-2 border-slate-900 pl-2 dark:border-slate-100 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">calendar_month</span>
                      <span>
                        {program.start_date
                          ? new Date(program.start_date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
                          : "Segera Hadir"}
                      </span>
                    </div>
                    <h3 className={`mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline ${colors.accent}`}>
                      {program.title}
                    </h3>
                    <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300 line-clamp-3">
                      {program.description}
                    </p>
                    <Link href={`/program`} className="mt-auto">
                      <button className={`w-full border-4 border-slate-900 bg-slate-900 px-6 py-3 font-black uppercase text-white transition-all ${colors.hover} hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] ${colors.hover}`}>
                        Baca Selengkapnya
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Instagram Feed Section (Commented for now)
      <section className="mb-24">
        <div className="mb-12 flex flex-col items-start justify-between border-b-8 border-slate-900 pb-6 dark:border-slate-100 md:flex-row md:items-end gap-6">
          <div>
            <h2 className="mb-2 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl">photo_camera</span> Kabar Lingkar
            </h2>
            <p className="text-lg font-bold text-slate-600 dark:text-slate-400 border-l-4 border-rose-500 pl-3">
              Ikuti perjalanan dan aksi nyata kami melalui Instagram @lingkarvisioner.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://instagram.com/lingkarvisioner" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 border-4 border-slate-900 bg-white px-6 py-2 font-black uppercase text-slate-900 transition-all hover:bg-rose-400 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-rose-500 dark:hover:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
                Follow IG <span className="material-symbols-outlined">external_link</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 1,
              img: "https://images.unsplash.com/photo-1540910419892-f7ef7173fdd4?q=80&w=2070&auto=format&fit=crop",
              caption: "Aksi nyata untuk perubahan sosial yang lebih berdampak.",
              date: "2 Hari yang lalu"
            },
            {
              id: 2,
              img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
              caption: "Membangun ekosistem kepemimpinan bagi masa depan.",
              date: "4 Hari yang lalu"
            },
            {
              id: 3,
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
              caption: "Kolaborasi adalah kunci inovasi di era digital.",
              date: "1 Minggu yang lalu"
            }
          ].map((post) => (
            <div key={post.id} className="group relative border-4 border-slate-900 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
              <div className="relative aspect-square overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                <img 
                  src={post.img} 
                  alt="Instagram Post" 
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900 pb-12 opacity-0 transition-opacity duration-300 group-hover:opacity-40">
                  <span className="material-symbols-outlined text-4xl text-white">favorite</span>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-sm font-bold text-slate-700 dark:text-slate-300 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    {post.date}
                  </span>
                  <Link href="https://instagram.com/lingkarvisioner" target="_blank" className="text-slate-900 dark:text-white transition-colors hover:text-rose-500 dark:hover:text-rose-400">
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Latest Announcements Section */}
      <section className="mb-24 px-4 py-16 bg-slate-100 dark:bg-slate-800 border-x-0 border-y-8 border-slate-900 dark:border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center border-b-8 border-slate-900 dark:border-slate-100 pb-8 mx-auto max-w-2xl">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-4xl">campaign</span> Pengumuman Terkini
            </h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Announcement 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6 border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center border-4 border-slate-900 bg-teal-400 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <span className="text-3xl font-black">01</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Juni</span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="mb-3 text-xl font-black uppercase text-slate-900 dark:text-white">
                  Pendaftaran 'Future Leaders Cohort 2026' Dibuka
                </h4>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 border-l-4 border-teal-500 pl-4 py-1">
                  Kesempatan bagi mahasiswa untuk mengikuti program mentoring eksklusif selama 6 bulan.
                </p>
              </div>
              <button className="w-full md:w-auto border-4 border-slate-900 bg-slate-900 px-6 py-4 font-black uppercase text-white transition-all hover:bg-teal-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-teal-400">
                <span className="material-symbols-outlined text-2xl">open_in_new</span>
              </button>
            </div>

            {/* Announcement 2 */}
            <div className="flex flex-col md:flex-row items-center gap-6 border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center border-4 border-slate-900 bg-amber-400 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <span className="text-3xl font-black">20</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Mei</span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="mb-3 text-xl font-black uppercase text-slate-900 dark:text-white">
                  Rilis Buku Panduan Keorganisasian Modern
                </h4>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 border-l-4 border-amber-500 pl-4 py-1">
                  Download panduan teknis mengelola organisasi yang efektif dan agile di era digital.
                </p>
              </div>
              <button className="w-full md:w-auto border-4 border-slate-900 bg-slate-900 px-6 py-4 font-black uppercase text-white transition-all hover:bg-amber-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-amber-400">
                <span className="material-symbols-outlined text-2xl">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
