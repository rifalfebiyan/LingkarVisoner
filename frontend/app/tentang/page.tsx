import Image from 'next/image';
import Link from 'next/link';

export default function TentangKamiPage() {
  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="relative mb-16 flex min-h-[500px] w-full items-center justify-center overflow-hidden border-4 border-slate-900 bg-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJTuI98FLdunphqDds2FFVSkvrmae31KYG7U-5O0-Vljnx1TXyo2y2oYXc8vPqdOiaScVSomcELjQ8kYpt4mMDUFBDKpQ0djFDkAPFqrg8vEAC6bEFtynrTOk9ChqZBFfzrH8ycIuljMJl2ajKeKK4MtafBlRB0LxwALW-c64Z6mE83r09Sh_au792UI4xPNk0sW2qYLNDVbULlMhrvWA9MwH_WeSOHXM0WYaCa_DRubcTo7unsiBu5ias_tjLGrLhUMYP0HNdlarG')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-slate-900/80 to-slate-900"></div>
        <div className="relative z-10 p-8 text-center sm:p-12">
          <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-6xl border-b-8 border-amber-500 pb-4 inline-block">
            Mencetak Pemimpin Masa Depan Indonesia
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-bold leading-relaxed text-slate-200 md:text-xl bg-slate-900/50 p-4 border-l-8 border-teal-500">
            Wadah kolaborasi strategis untuk pengembangan kepemimpinan, organisasi, politik, dan kewirausahaan demi
            kemajuan bangsa.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mb-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div className="border-l-8 border-slate-900 pl-6 dark:border-white">
              <h2 className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                Filosofi Pergerakan
              </h2>
              <h3 className="mb-6 text-4xl font-black uppercase leading-tight text-slate-900 dark:text-white">
                {/* Membangun Ekosistem Visioner yang Tangguh */}
                “Mengeduaksi Generasi Muda Untuk Literasi Digital dan Pola Pikir Fungsional”
              </h3>
              <p className="text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Lingkar Visioner hadir sebagai wadah kolaborasi strategis untuk pengembangan kepemimpinan, organisasi, politik, dan kewirausahaan demi kemajuan bangsa.
              </p>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-6 border-4 border-slate-900 bg-amber-400 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
                <div className="flex h-fit items-center justify-center border-4 border-slate-900 bg-white p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <span className="material-symbols-outlined text-3xl text-slate-900">auto_graph</span>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black uppercase text-slate-900">Visi Kami</h4>
                  <p className="text-base font-bold text-slate-900">
                    Menjadi pelopor dalam penyelenggaraan workshop kepemimpinan, organisasi, dan kewirausahaan di Kabupaten Ketapang untuk membentuk generasi muda yang visioner, berkarakter, dan berdaya saing.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 border-4 border-slate-900 bg-teal-300 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
                <div className="flex h-fit items-center justify-center border-4 border-slate-900 bg-white p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <span className="material-symbols-outlined text-3xl text-slate-900">diversity_3</span>
                </div>
                <div>
                  <h4 className="mb-4 text-2xl font-black uppercase text-slate-900">Misi Kami</h4>
                  <ul className="space-y-4 text-base font-bold text-slate-900">
                    {[
                      "Menyelenggarakan berbagai kegiatan edukatif seperti webinar, talkshow, dan diskusi kepemudaan yang membahas kepemimpinan, organisasi, politik, dan kewirausahaan.",
                      "Menyediakan edukasi melalui media sosial tentang pentingnya personal branding dan pemanfaatan media digital secara bijak dan produktif.",
                      "Berjejaring dan berkolaborasi dengan organisasi di sekolah, kampus, maupun luar kampus untuk berdiskusi dan meningkatkan kesadaran akan pentingnya berorganisasi serta peran pemuda dalam pembangunan.",
                      "Mengembangkan program mentoring dan pelatihan untuk membentuk generasi muda yang berpikir kritis, komunikatif, dan kolaboratif.",
                      "Menjalin kemitraan strategis dengan lembaga pendidikan, komunitas, dan instansi terkait untuk memperluas dampak kegiatan dan pengembangan kapasitas pemuda."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex h-6 w-8 shrink-0 items-center justify-center border-2 border-slate-900 bg-white text-[10px] font-black">
                          {["I", "II", "III", "IV", "V"][i]}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
              <img
                alt="Leadership discussion"
                className="h-[500px] w-full object-cover grayscale transition-transform duration-700 hover:scale-105 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6cGySBnJgSwVji3dKcMUoP72G1BOTjd4Uo845IwEe9l2DYL2VMuYVujLHGLlxEtpAhISEBSlV1yNNagHjJaxxbFAkOGZn9mBPBLgYnPBJqIo1k1-dkHbg1DI0yLmaCapuNDtzz20vcysZlNRU93x4Vd4PwAv1jTBi-DXYDB2k3EyIcIZ1tA-ptxWDxy_KBZjCm4hkBVSIcyUHSDTjgrX6ehqG2jf7--NlH4xMG8cbEeXgdBRs3W1SxDVMGo3EobZ5grMIEULQhgxI"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden max-w-[240px] border-4 border-slate-900 bg-white p-8 text-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] lg:block dark:border-slate-100 dark:bg-slate-900 dark:text-white dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
              <p className="mb-2 text-5xl font-black text-amber-500 decoration-4 underline-offset-4 underline">500+</p>
              <p className="text-sm font-black uppercase tracking-widest leading-snug">Pemimpin Muda Terinkubasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team Gallery */}
      <section className="mb-24 border-t-8 border-slate-900 pt-16 dark:border-slate-100">
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="mb-2 inline-block border-slate-900 bg-amber-400 px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-slate-900 border-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              Dewan Penasehat
            </h2>
            <h3 className="text-4xl font-black uppercase leading-tight tracking-tighter text-slate-900 dark:text-white mt-4">
              Para Penggerak <span className="text-teal-600 dark:text-teal-400">Lingkar Visioner</span>
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Arrijal Firmansyah, S.Kom',
              role: 'Ketua Lingkar Visioner',
              img: '/lead.svg',
            },
            {
              name: 'Muhammad Ikhsan Anugerah, S.Kom',
              role: 'Wakil Ketua Lingkar Visioner',
              img: '/lead2.svg',
            },
            {
              name: 'Nindra Novianti Putri',
              role: 'Bendahara Umum',
              img: '/lead3.svg',
            },
            {
              name: 'Seldy Apriandi, S.H',
              role: 'Sekretaris Umum',
              img: '/lead4.svg',
            },
          ].map((leader, index) => (
            <div key={index} className="group relative">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden border-4 border-slate-900 bg-slate-200 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-800 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] grayscale transition-all duration-300 hover:grayscale-0 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
                <img
                  alt={leader.role}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={leader.img}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900 p-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex gap-4 text-white">
                    <span className="material-symbols-outlined cursor-pointer border-2 border-white bg-slate-900 p-2 transition-colors hover:bg-amber-400 hover:text-slate-900">
                      hub
                    </span>
                    <span className="material-symbols-outlined cursor-pointer border-2 border-white bg-slate-900 p-2 transition-colors hover:bg-teal-400 hover:text-slate-900">
                      alternate_email
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mt-6">
                <h4 className="text-xl font-black uppercase text-slate-900 dark:text-white leading-tight">
                  {leader.name}
                </h4>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-24 px-4 py-16 bg-slate-900 text-white border-4 border-slate-900 dark:border-slate-100 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-teal-400">
            Nilai-Nilai Kami
          </h2>
          <h3 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
            Integritas, Intelektualitas, Impact
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: 'verified',
              title: 'Etika & Integritas',
              desc: 'Menjunjung tinggi nilai moral dalam kepemimpinan dan politik tanpa kompromi.',
              color: 'bg-amber-400',
            },
            {
              icon: 'psychology',
              title: 'Ketajaman Berpikir',
              desc: 'Mengedepankan basis data dan analisis kritis dalam setiap pengambilan keputusan strategis.',
              color: 'bg-teal-400',
            },
            {
              icon: 'rocket_launch',
              title: 'Jiwa Kewirausahaan',
              desc: 'Mendorong inovasi dan kemandirian ekonomi sebagai fondasi kekuatan bangsa.',
              color: 'bg-indigo-400',
            },
            {
              icon: 'public',
              title: 'Dampak Sosial',
              desc: 'Setiap inisiatif diarahkan untuk kemaslahatan masyarakat dan organisasi.',
              color: 'bg-rose-400',
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center border-4 border-white bg-slate-800 p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-transform hover:-translate-y-2 hover:bg-slate-700 hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]"
            >
              <div
                className={`mb-6 flex size-20 items-center justify-center border-4 border-slate-900 ${val.color} text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] group-hover:rotate-6 transition-transform`}
              >
                <span className="material-symbols-outlined text-4xl">{val.icon}</span>
              </div>
              <h4 className="mb-4 text-xl font-black uppercase tracking-wide text-white">
                {val.title}
              </h4>
              <p className="text-sm font-medium leading-relaxed text-slate-300 group-hover:text-white">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-10 px-4">
        <div className="relative overflow-hidden border-4 border-slate-900 bg-teal-500 p-12 text-center text-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] md:p-20 dark:border-slate-100 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
          {/* Abstract Geo Shapes */}
          <div className="absolute -right-10 -top-10 h-64 w-64 border-8 border-slate-900 rotate-12 opacity-20"></div>
          <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full border-8 border-slate-900 opacity-20"></div>

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-black uppercase md:text-6xl tracking-tighter">
              Jadilah Bagian<br />dari Perubahan
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-bold border-y-4 border-slate-900 py-4 bg-teal-400/50">
              Mari berkolaborasi membangun masa depan Indonesia yang lebih inklusif dan progresif.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <button className="border-4 border-slate-900 bg-amber-400 px-10 py-5 text-base font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none">
                Daftar Anggota
              </button>
              <button className="border-4 border-slate-900 bg-white px-10 py-5 text-base font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:bg-slate-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none">
                Unduh Profil
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
