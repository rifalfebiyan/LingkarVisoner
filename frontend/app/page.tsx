import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-6 py-8 md:px-10 lg:px-20 lg:py-12">
        <div className="group relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-3xl p-8 text-center md:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(15, 118, 110, 0.6), rgba(16, 25, 34, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Tm271z-8NUFeJvtEGgq4Wen-s7gEMlWz-wKc6RruccKcBMrf3vIvcx6RJqkaHfBf3Hl3NWt6G29Uf5gSGiCRIhySN3myp4jE9OpEzpsctwgLr3d0ARfzDm6NqYFHzscX-CtnCgzEHOucICG5Ue1JXMh3VxH9UVRabAwTY9A25l-UWy8S_PK_MbaKQCB2vusbFr5zqunYO_RYnEGLwZIsZpkFmV6yPw8m7CrV6llMMKu-7nTYa0ytVRea6aKBAxP7H7yEOS7osd_3")',
            }}
          ></div>
          <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Kepemimpinan & Perubahan Sosial
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Mencetak Pemimpin <span className="text-teal-400">Masa Depan</span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-200 md:text-lg">
              Lingkar Visioner adalah wadah kolaborasi untuk mengasah kepemimpinan, keterampilan organisasi, kepekaan
              politik, dan jiwa kewirausahaan demi dampak sosial yang nyata.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90">
                Lihat Program <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                Gabung Komunitas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Activities Section */}
      <section className="bg-white px-6 py-12 dark:bg-background-dark/50 md:px-10 lg:px-20">
        <div className="mx-auto w-full">
          <div className="mb-10 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Kegiatan Strategis
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Jejak langkah kami dalam memberdayakan masyarakat dan mencetak inovator baru.
              </p>
            </div>
            <a className="flex items-center gap-1 font-bold text-primary hover:underline" href="#">
              Lihat Semua <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Activity Card 1 */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-background-light transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50">
              <div className="relative aspect-video overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Community outreach and social work project"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANiM87MG1FEUiSI_SjVsr3Ic1F4E8uPWmjfub6bpl6zIFZo8puUGbfc6gh1TLbekhaxgysId_j-n8z_QYp2dL3S8DGgY5yWAT_HStIdLA7YMSoEDb2pSq9hWIdD7B4JArJUSJvu-lEZ2bw07JFK4pgktAaug345d-t8Aaif-9eb12oIrXqMYEIZG31kaGNTOOoD0p-0e6lMjPe2SQ6zZwdx3_wBCPaji2m-9Vn6MOLLdqfeAUlJPn1WWnQ1lcGczGYBPqjeaLBcdEQ"
                />
                <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold uppercase text-primary backdrop-blur dark:bg-slate-900/90">
                  Social Work
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>15 Mei 2024</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                  Aksi Literasi Desa Terpadu
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Penyaluran sarana belajar dan pelatihan keterampilan dasar bagi masyarakat di daerah tertinggal sebagai
                  bagian dari misi sosial.
                </p>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white dark:bg-primary/20">
                  Baca Selengkapnya
                </button>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-background-light transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50">
              <div className="relative aspect-video overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Leadership training and entrepreneurship workshop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_BRaEosEOrIL5OFI7A2JPZUARFydippQRhTR7ATxJ2IGJq2lMjxVf_W_ojR5YghRJwLfSBvPws5Yi0SsXrxPXwzJ3oedaXi64xlQb-GBNPBaOWk8mc9v-oGH53zFMXFtAvpUwp1p2Vb6XTKMDPoWj6tIiOt4PkDIu9XPuyPz7XUgdfOsNOV3itBflYTsAMCgXdoGBbogzYLE2ONmrTNJz9sw-3XFULrewE8Hky0vA9Psca9E5MtODJ6WOwz1JXp1SX3ZnHRBjH-L"
                />
                <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold uppercase text-primary backdrop-blur dark:bg-slate-900/90">
                  Entrepreneurship
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>10 Mei 2024</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                  Startup Leadership Bootcamp
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Pelatihan intensif bagi wirausahawan muda untuk membangun pondasi organisasi yang kuat dan strategi
                  bisnis berkelanjutan.
                </p>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white dark:bg-primary/20">
                  Baca Selengkapnya
                </button>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-background-light transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50">
              <div className="relative aspect-video overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Political discussion forum and leadership seminar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJsAF7TKzjty7tsZHw70DmC_mCdBYqnQgXhAi9FrP0L3qTotz0EoCYkm_TU7NP0mpGhpjWFXuZJZtoe6sn90bvv7gjlhKnyT0AE4gHOHFBHON98G3NJ7Z-iHPRmuHWns8RoSY_83KnhMmdcoPJZxf5X2TFPXrFmpQwKgdjFinek1QTBW2SjSE2e4LcWgioz1htxfXEoP-m837GYJqCrje7NZanRKrTGsElVwuqdLDeUxCyKHcks5nrl1wiFdYJsESE2HZe2t8vG69e"
                />
                <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold uppercase text-primary backdrop-blur dark:bg-slate-900/90">
                  Politics
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>02 Mei 2024</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                  Forum Dialektika Kebijakan
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Diskusi kritis mengenai peran pemuda dalam mengawal kebijakan publik demi transparansi dan keadilan
                  sosial.
                </p>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white dark:bg-primary/20">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section className="bg-background-light px-6 py-16 dark:bg-background-dark md:px-10 lg:px-20">
        <div className="mx-auto w-full">
          <div className="mb-8 flex items-center gap-4">
            <span className="material-symbols-outlined text-3xl text-primary">campaign</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Pengumuman Terkini</h2>
          </div>
          <div className="flex flex-col gap-4">
            {/* Announcement 1 */}
            <div className="group flex items-center gap-4 rounded-xl border-l-4 border-primary bg-white p-5 shadow-sm transition-all hover:shadow-md dark:bg-slate-800">
              <div className="hidden h-16 min-w-[70px] flex-col items-center justify-center rounded-lg border border-slate-100 bg-slate-50 dark:border-slate-600 dark:bg-slate-700 sm:flex">
                <span className="text-xs font-bold uppercase text-slate-400">Juni</span>
                <span className="text-xl font-black text-primary">01</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                  Pendaftaran 'Future Leaders Cohort 2024' Dibuka
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Kesempatan bagi mahasiswa untuk mengikuti program mentoring eksklusif selama 6 bulan.
                </p>
              </div>
              <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all group-hover:bg-primary group-hover:text-white dark:bg-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">open_in_new</span>
              </button>
            </div>

            {/* Announcement 2 */}
            <div className="group flex items-center gap-4 rounded-xl border-l-4 border-slate-300 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-600 dark:bg-slate-800">
              <div className="hidden h-16 min-w-[70px] flex-col items-center justify-center rounded-lg border border-slate-100 bg-slate-50 dark:border-slate-600 dark:bg-slate-700 sm:flex">
                <span className="text-xs font-bold uppercase text-slate-400">Mei</span>
                <span className="text-xl font-black text-slate-600 dark:text-slate-300">20</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                  Rilis Buku Panduan Keorganisasian Modern
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Download panduan teknis mengelola organisasi yang efektif dan agile di era digital.
                </p>
              </div>
              <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all group-hover:bg-primary group-hover:text-white dark:bg-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
