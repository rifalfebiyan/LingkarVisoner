import Image from 'next/image';

export default function AspirasiPage() {
  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Section: Aspirasi & Gagasan */}
      {/* Stitch Reference: Screen ID 61dfae0e567b4cf7b54c57d2f8be6088 */}
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
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                  Nama Lengkap
                </label>
                <input
                  type="text"
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
                  className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                  Kategori Aspirasi
                </label>
                <select className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700 appearance-none">
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
                  className="w-full border-4 border-slate-900 p-4 font-bold outline-none focus:bg-teal-50 dark:border-slate-100 dark:bg-slate-800 dark:focus:bg-slate-700"
                  placeholder="Tuliskan gagasan atau aspirasi Anda di sini..."
                ></textarea>
              </div>
              <button className="w-full border-4 border-slate-900 bg-teal-600 py-4 font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-teal-500 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100">
                Kirim Aspirasi
              </button>
            </form>
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
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-4 border-teal-600 pl-4 py-2">
                  <p className="mb-2 text-sm font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                    #KebijakanPublik
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300">
                    "Perlu adanya platform khusus untuk mentoring mahasiswa di daerah tertinggal..."
                  </p>
                  <p className="mt-2 text-xs font-bold text-slate-500">
                    - Anonim, 2 jam yang lalu
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full border-4 border-slate-900 bg-slate-900 py-3 font-black uppercase tracking-widest text-white transition-all hover:bg-slate-800 dark:border-slate-100 dark:bg-white dark:text-slate-900">
              Lihat Semua Suara
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
