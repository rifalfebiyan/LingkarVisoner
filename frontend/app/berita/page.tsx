import Link from 'next/link';
import Image from 'next/image';

export default function BeritaPage() {
  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Feature */}
      <div className="mb-12">
        <div className="flex flex-col overflow-hidden rounded-none border-4 border-slate-900 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] lg:flex-row">
          <div className="group relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 lg:aspect-auto lg:w-[60%] lg:border-b-0 lg:border-r-4">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEAmxm1alJOaePYqBYGeIdaKENssN6DWoIonwrNFEb7zvZibecnunYVNkRyH-dhyR4G8kIdm8iJAGv5RlxB2on7MAd7MG5HvvNwI13tk2mjugK1zeg-IVkORzAZYkbzVQHATVHLmLqHnRgZXzMPCkHAAN84cV4yfW8O1amU9on2DQjC3O-9tl4jCwz75_edd9anVKALiUlWqYh37jsWgi6FQwc9NqtBRZ8R9e8-bYuk2Kk_NCFscbafv-kWJ-DsGXi6Y6RsFSCpcSZ")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="rounded-none bg-amber-500 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                Utama
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-5 p-8 lg:w-[40%] lg:p-12">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400 font-display">
              Visi Kepemimpinan 2024
            </span>
            <h1 className="text-3xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-4xl uppercase tracking-tighter mix-blend-difference">
              Melahirkan Pemimpin Visioner di Tengah Gejolak Politik Global
            </h1>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium border-l-4 border-amber-500 pl-4">
              Bagaimana integritas dan kecerdasan emosional menjadi fondasi krusial bagi tokoh-tokoh muda dalam
              menavigasi masa depan bangsa.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              <span className="flex items-center gap-1.5 border-2 border-slate-900 px-3 py-1.5 bg-white dark:bg-slate-800 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(241,245,249,1)]">
                <span className="material-symbols-outlined text-base">calendar_month</span> 24 Okt 2023
              </span>
              <span className="flex items-center gap-1.5 border-2 border-slate-900 px-3 py-1.5 bg-white dark:bg-slate-800 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(241,245,249,1)] hover:bg-teal-500 hover:text-white transition-colors cursor-pointer dark:hover:bg-teal-600">
                <span className="material-symbols-outlined text-base">edit_note</span> Dewan Pakar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Categories & Trending */}
      <div className="mb-12 flex flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between border-b-4 border-slate-900 pb-4 dark:border-slate-100 gap-4">
            <h3 className="border-l-8 border-teal-600 pl-4 text-2xl font-black uppercase tracking-widest text-slate-900 dark:text-white">
              Gagasan Terbaru
            </h3>
            <div className="flex gap-2 border-2 border-slate-900 bg-slate-100 dark:border-slate-100 dark:bg-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] p-1">
              <button className="bg-slate-900 px-6 py-2 text-xs font-black text-white dark:bg-white dark:text-slate-900 uppercase">
                Semua
              </button>
              <button className="px-6 py-2 text-xs font-black text-slate-900 transition-colors hover:bg-slate-300 dark:text-slate-100 dark:hover:bg-slate-800 uppercase">
                Viral
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* News Card 1 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-100 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAzvHYQ_JwngYfmyCUxb6TaMN3jKc5KNe-Ae3YZE2wNzCjaya0UJUiLHgpK4LCfPxKJL4fp9FiYj3hF92n0Eq5dE3qQv50uHhzpX5YeRnJoZnRbxGfhfYMdqLNj-TbY0lbA-1Dt3bzaajDttE2uVEDGvyAz9PKRFzMIGd08zfiLpqDq7HS6YRk_G-ljNPYJjBppPw5Sajo_H-JJjDGed7hVSiWj-boitG1o2rVdBxZTgwXaJPtcBG3ReuwTQCvomjnAY25omY-Wk6_")',
                  }}
                ></div>
                <div className="absolute left-4 top-4">
                  <span className="border-2 border-slate-900 bg-teal-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                    Entrepreneurship
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="mb-3 text-xl font-black uppercase leading-tight text-slate-900 decoration-4 underline-offset-4 group-hover:underline dark:text-slate-100 decoration-teal-600">
                  Ekosistem Startup Lokal: Membangun Resiliensi dari Akar Rumput
                </h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-400 mt-auto">
                  Strategi wirausaha muda dalam menghadapi disrupsi pasar dan tantangan pendanaan di era suku bunga
                  tinggi.
                </p>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-100 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuodryB2HEt0D7haY-pcKIowjSGSUxo6zC2nLkH5a9SBJQDXaFUHEIoQCePXwujbbrlysBjBhbhl9Hm8NyyIZV4NA_bG65MPrk7q2L6x0zkhjBjT3FkuC4yb13tnV2KzTnafYqTmm6h719R2GAEf1uMwoy0LfifPLijFB0W0WcpwEPG7Ny8qpa4rW-cYm761LOhJ3MwThK9yNmUfGk--vcRO0T7JVCx6C94xvPLWTGMsIIiMhSq1YmrPoumajCL1jrhAmLkW6w6Of-")',
                  }}
                ></div>
                <div className="absolute left-4 top-4">
                  <span className="border-2 border-slate-900 bg-amber-500 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                    Sosial
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="mb-3 text-xl font-black uppercase leading-tight text-slate-900 decoration-4 underline-offset-4 group-hover:underline dark:text-slate-100 decoration-amber-500">
                  Inisiatif Komunitas: Transformasi Sosial Melalui Pendidikan Digital
                </h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-400 mt-auto">
                  Gerakan kerelawanan yang berhasil menjembatani kesenjangan literasi di pelosok daerah terpencil.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="w-full lg:w-96">
          <div className="border-4 border-slate-900 bg-slate-900 p-8 text-white shadow-[8px_8px_0px_0px_rgba(15,118,110,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(15,118,110,1)]">
            <h3 className="mb-8 flex items-center gap-3 border-b-4 border-teal-400 pb-4 text-xl font-black uppercase tracking-widest text-white">
              <span className="material-symbols-outlined text-teal-400 text-3xl">trending_up</span> Index Politik
            </h3>
            <div className="space-y-8">
              <div className="group cursor-pointer border-l-4 border-transparent hover:border-teal-400 pl-4 transition-all">
                <span className="text-4xl font-black text-slate-700 block mb-2 group-hover:text-teal-400 transition-colors">01</span>
                <div>
                  <h5 className="text-base font-black uppercase leading-tight transition-colors group-hover:text-teal-400">
                    Arah Koalisi Strategis Menjelang Kontestasi 2024
                  </h5>
                  <p className="mt-2 text-[10px] font-black text-slate-400 tracking-widest bg-slate-800 inline-block px-2 py-1">4 JAM YANG LALU</p>
                </div>
              </div>
              <div className="group cursor-pointer border-l-4 border-transparent hover:border-teal-400 pl-4 transition-all">
                <span className="text-4xl font-black text-slate-700 block mb-2 group-hover:text-teal-400 transition-colors">02</span>
                <div>
                  <h5 className="text-base font-black uppercase leading-tight transition-colors group-hover:text-teal-400">
                    Analisis Kebijakan Luar Negeri dan Dampaknya pada Ekonomi
                  </h5>
                  <p className="mt-2 text-[10px] font-black text-slate-400 tracking-widest bg-slate-800 inline-block px-2 py-1">12 JAM YANG LALU</p>
                </div>
              </div>
              <div className="group cursor-pointer border-l-4 border-transparent hover:border-teal-400 pl-4 transition-all">
                <span className="text-4xl font-black text-slate-700 block mb-2 group-hover:text-teal-400 transition-colors">03</span>
                <div>
                  <h5 className="text-base font-black uppercase leading-tight transition-colors group-hover:text-teal-400">
                    Debat Terbuka Gagasan Ekonomi Kreatif di Parlemen
                  </h5>
                  <p className="mt-2 text-[10px] font-black text-slate-400 tracking-widest bg-slate-800 inline-block px-2 py-1">1 HARI LALU</p>
                </div>
              </div>
            </div>
            <button className="mt-10 w-full border-4 border-teal-400 bg-transparent py-4 text-sm font-black uppercase tracking-widest text-teal-400 transition-all hover:bg-teal-400 hover:text-slate-900 shadow-[6px_6px_0px_0px_rgba(45,212,191,1)] hover:shadow-[2px_2px_0px_0px_rgba(45,212,191,1)] hover:translate-x-[4px] hover:translate-y-[4px]">
              Eksplorasi Lengkap
            </button>
          </div>
        </aside>
      </div>

      {/* Editorial Section */}
      <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="col-span-1 border-4 border-slate-900 bg-teal-50 p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-800 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] lg:col-span-2">
          <div className="mb-8 flex items-center gap-4 border-b-4 border-slate-900 dark:border-slate-100 pb-4">
            <div className="bg-slate-900 dark:bg-slate-100 p-2 text-white dark:text-slate-900 rotate-3">
              <span className="material-symbols-outlined text-4xl">edit_document</span>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-widest text-slate-900 dark:text-white">
              Esai &amp; Opini
            </h3>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            <div
              className="aspect-[3/4] w-full border-4 border-slate-900 dark:border-slate-100 overflow-hidden bg-slate-300 md:w-[250px] shrink-0 grayscale shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD676HsGzyy5XaBuA3RdOhPB7HCJvn2lz6w_RFDr8doi9XluPZ3dsKxhAzBEjkD3LmFgje54G3Zc8hs3l1Bpq-V8gGAHvKDkQODeSIxZPZsT0bOySTCQQYoXXRzFbCzty98Wzg0oE94TUcGFKxcRwhulArHZBqBTgAxEbh8uYoHhXTp6gN4WDlRx7AEw_s1pYrwGwUls9Cs8AUGRAWSbr8CEIvlgypMKAhw6VmQ_HHKpwaewVwjCPsUwIJl4CLqWuYpJVbDYFfMYNWL")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="flex-1 flex flex-col justify-center h-full">
              <h4 className="mb-6 text-2xl md:text-3xl font-black uppercase italic leading-tight text-slate-900 dark:text-white relative z-10">
                <span className="absolute -left-4 -top-4 text-7xl text-teal-200 dark:text-teal-900/50 -z-10 font-serif">"</span>
                Kepemimpinan bukanlah tentang jabatan, melainkan tentang jejak kebaikan yang kita tinggalkan di setiap
                langkah.
              </h4>
              <div className="mb-6 flex flex-wrap items-center gap-4 border-l-4 border-teal-600 pl-4 py-1">
                <span className="font-black uppercase tracking-widest text-slate-900 dark:text-slate-100 bg-teal-200 dark:bg-teal-900/50 px-2 py-1">
                  Bapak Arya Wijaya, Ph.D
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">Pengamat Sosio-Politik</span>
              </div>
              <p className="mb-8 text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Membahas secara mendalam fenomena kepemimpinan otentik di era pasca-kebenaran dan bagaimana masyarakat
                harus mulai memilah antara citra dan substansi demi keberlangsungan demokrasi.
              </p>
              <Link
                href="#"
                className="inline-flex w-fit items-center gap-2 border-4 border-slate-900 bg-white dark:bg-slate-900 dark:border-slate-100 px-6 py-3 font-black uppercase tracking-widest text-slate-900 dark:text-slate-100 transition-all hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center border-4 border-slate-900 bg-amber-400 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-amber-500 opacity-50 rotate-12">
            <span className="material-symbols-outlined text-[150px]">mail</span>
          </div>
          <div className="relative z-10 w-full">
            <div className="mb-6 inline-flex size-16 items-center justify-center border-4 border-slate-900 bg-white text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <span className="material-symbols-outlined text-4xl">forward_to_inbox</span>
            </div>
            <h3 className="mb-4 text-3xl font-black uppercase leading-none text-slate-900">
              Warta<br/>Visioner
            </h3>
            <p className="mb-8 text-sm font-bold leading-relaxed text-slate-900 bg-white/50 p-3 border-l-4 border-slate-900">
              Dapatkan kurasi berita dan gagasan terbaik langsung di inbox Anda setiap hari Senin. Bebas spam.
            </p>
            <div className="w-full space-y-4">
              <input
                className="w-full border-4 border-slate-900 bg-white px-4 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                placeholder="Alamat Email Anda"
                type="email"
              />
              <button className="w-full border-4 border-slate-900 bg-slate-900 py-4 font-black uppercase tracking-widest text-white transition-all hover:bg-slate-800 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Tags */}
      <div className="mt-16 border-t-8 border-slate-900 pt-10 dark:border-slate-100 text-center flex flex-col items-center">
        <h3 className="mb-6 inline-block border-b-4 border-amber-500 pb-2 text-xl font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
          Jelajahi Topik Terselia Parameter
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            'Kebijakan Publik',
            'Ekonomi Muda',
            'Seni Kepemimpinan',
            'Etika Digital',
            'Ketahanan Sosial',
            'Inovasi Daerah',
            'Diplomasi Global'
          ].map((tag) => (
            <Link
              key={tag}
              href="#"
              className="group flex items-center gap-2 border-4 border-slate-900 bg-white px-5 py-3 text-sm font-black uppercase text-slate-900 transition-all hover:-translate-y-1 hover:bg-teal-500 hover:text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-teal-600 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]"
            >
              <span className="text-teal-500 group-hover:text-white dark:text-teal-400">#</span>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
