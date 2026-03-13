import Image from "next/image";
import Link from 'next/link';

export default function Home() {
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
              Kegiatan Strategis
            </h2>
            <p className="text-lg font-bold text-slate-600 dark:text-slate-400 border-l-4 border-amber-500 pl-3">
              Jejak langkah kami dalam memberdayakan masyarakat dan mencetak inovator baru.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border-4 border-slate-900 bg-white px-6 py-2 font-black uppercase text-slate-900 transition-all hover:bg-amber-400 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
              Lihat Semua <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
            <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
              <img
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                alt="Social Work"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANiM87MG1FEUiSI_SjVsr3Ic1F4E8uPWmjfub6bpl6zIFZo8puUGbfc6gh1TLbekhaxgysId_j-n8z_QYp2dL3S8DGgY5yWAT_HStIdLA7YMSoEDb2pSq9hWIdD7B4JArJUSJvu-lEZ2bw07JFK4pgktAaug345d-t8Aaif-9eb12oIrXqMYEIZG31kaGNTOOoD0p-0e6lMjPe2SQ6zZwdx3_wBCPaji2m-9Vn6MOLLdqfeAUlJPn1WWnQ1lcGczGYBPqjeaLBcdEQ"
              />
              <div className="absolute left-4 top-4 border-2 border-slate-900 bg-amber-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                Social Work
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-2 border-l-2 border-slate-900 pl-2 dark:border-slate-100 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                <span>15 Mei 2026</span>
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline decoration-amber-400">
                Aksi Literasi Desa Terpadu
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Penyaluran sarana belajar dan pelatihan keterampilan dasar bagi masyarakat di daerah tertinggal sebagai bagian dari misi sosial.
              </p>
              <button className="mt-auto border-4 border-slate-900 bg-slate-900 px-6 py-3 font-black uppercase text-white transition-all hover:bg-amber-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-amber-400">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
            <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
              <img
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                alt="Entrepreneurship"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_BRaEosEOrIL5OFI7A2JPZUARFydippQRhTR7ATxJ2IGJq2lMjxVf_W_ojR5YghRJwLfSBvPws5Yi0SsXrxPXwzJ3oedaXi64xlQb-GBNPBaOWk8mc9v-oGH53zFMXFtAvpUwp1p2Vb6XTKMDPoWj6tIiOt4PkDIu9XPuyPz7XUgdfOsNOV3itBflYTsAMCgXdoGBbogzYLE2ONmrTNJz9sw-3XFULrewE8Hky0vA9Psca9E5MtODJ6WOwz1JXp1SX3ZnHRBjH-L"
              />
              <div className="absolute left-4 top-4 border-2 border-slate-900 bg-teal-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                Entrepreneurship
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-2 border-l-2 border-slate-900 pl-2 dark:border-slate-100 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                <span>10 Mei 2026</span>
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline decoration-teal-400">
                Startup Leadership Bootcamp
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Pelatihan intensif bagi wirausahawan muda untuk membangun pondasi organisasi yang kuat dan strategi bisnis berkelanjutan.
              </p>
              <button className="mt-auto border-4 border-slate-900 bg-slate-900 px-6 py-3 font-black uppercase text-white transition-all hover:bg-teal-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-teal-400">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
            <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
              <img
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                alt="Politics"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJsAF7TKzjty7tsZHw70DmC_mCdBYqnQgXhAi9FrP0L3qTotz0EoCYkm_TU7NP0mpGhpjWFXuZJZtoe6sn90bvv7gjlhKnyT0AE4gHOHFBHON98G3NJ7Z-iHPRmuHWns8RoSY_83KnhMmdcoPJZxf5X2TFPXrFmpQwKgdjFinek1QTBW2SjSE2e4LcWgioz1htxfXEoP-m837GYJqCrje7NZanRKrTGsElVwuqdLDeUxCyKHcks5nrl1wiFdYJsESE2HZe2t8vG69e"
              />
              <div className="absolute left-4 top-4 border-2 border-slate-900 bg-indigo-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                Politics
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-2 border-l-2 border-slate-900 pl-2 dark:border-slate-100 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                <span>02 Mei 2026</span>
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline decoration-indigo-400">
                Forum Dialektika Kebijakan
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Diskusi kritis mengenai peran pemuda dalam mengawal kebijakan publik demi transparansi dan keadilan sosial.
              </p>
              <button className="mt-auto border-4 border-slate-900 bg-slate-900 px-6 py-3 font-black uppercase text-white transition-all hover:bg-indigo-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-indigo-400">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </section>

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
