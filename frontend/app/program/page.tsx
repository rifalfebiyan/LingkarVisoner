import Image from 'next/image';
import Link from 'next/link';

export default function ProgramPage() {
  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Banner: Program Unggulan */}
      <section className="mb-16">
        <div className="group relative flex min-h-[400px] items-center justify-center overflow-hidden border-4 border-slate-900 bg-slate-900 p-8 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 to-blue-900/60 mix-blend-multiply"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_I7JAnNE7WwaimIJNrabsqfKTRiJoKmQ3tkszp9M1jNG7ULv6_tv-yQ3tYkNH_upbTGpHQ-sfRYkTiLm6L9RPImBgBqrsW5M18YpGBdE5h112oxWCR6mBiLVu55shQfwfhpXBhyWOT_BolLUUkKyoaXSWQ4Zjc7DIlUXPWATv0cv22CMYeEola-T_8A5RsiP9LkWPrbQZKDGLCZIFUO3Aeh6tLJO7exSswFhWmyDYk8ziZcn3CjqkAIxgk2IVERgIGW30F1MBQBQH")',
            }}
          ></div>
          <div className="relative z-20 mx-auto max-w-3xl">
            <span className="mb-6 inline-block border-2 border-white bg-blue-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              Pendaftaran Dibuka
            </span>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl tracking-tighter">
              Program Unggulan 2024
            </h1>
            <p className="mb-10 text-lg font-bold leading-relaxed text-slate-200 md:text-xl border-l-4 border-blue-400 pl-4 bg-slate-900/50 py-2">
              Membentuk pemimpin masa depan melalui inovasi sosial, kewirausahaan, dan dampak nyata bagi masyarakat.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="flex items-center gap-3 border-4 border-white bg-blue-600 px-8 py-4 font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-blue-500 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                Daftar Sekarang <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
              <button className="border-4 border-white bg-transparent px-8 py-4 font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white hover:text-slate-900 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                Lihat Kurikulum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Programs Grid */}
      <section className="mb-24">
        <div className="mb-12 flex flex-col items-start justify-between border-b-8 border-slate-900 pb-6 dark:border-slate-100 md:flex-row md:items-end gap-6">
          <div>
            <h2 className="mb-2 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              Program Aktif
            </h2>
            <p className="text-lg font-bold text-slate-600 dark:text-slate-400 border-l-4 border-amber-500 pl-3">
              Pilih jalur yang sesuai dengan visi dan minat Anda.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border-4 border-slate-900 bg-white px-4 py-2 font-black uppercase text-slate-900 transition-all hover:bg-amber-400 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
              <span className="material-symbols-outlined">filter_list</span> Filter
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
            <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
              <img
                alt="Leadership"
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyltqkK4IGPxiuDdiM8LICHkw6ZU0nt7vEA_8mrQnfc9xUEBEQqyWgICBqfCGGRk2qOLg_J7wvhKtwmti3FxYEhKy_rjLkFnFZzdW8FF6w2dOSN-4Y8p2wse0JGszoyldF_mO-x4hLT3vigXeEnqOdRyXq7-qpTfOETkvNNOpfM2xGFHQ7lVujLcA-byaeBl3lx3KW2ta09hQvoYjQvF3xXLdzAOnQtG6CP7iSMs9Ie5d7ck-V4IKFshODIAlxfCh3CDR8a5jLjmWh"
              />
              <div className="absolute left-4 top-4 border-2 border-slate-900 bg-amber-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                Leadership
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline decoration-amber-400">
                Leadership Bootcamp
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Pelatihan kepemimpinan intensif selama 3 bulan untuk mengasah kemampuan manajerial dan kepemimpinan
                strategis.
              </p>
              <div className="mt-auto flex items-center justify-between border-t-4 border-slate-900 pt-4 dark:border-slate-100">
                <span className="font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1">
                  Mulai Sep 2024
                </span>
                <button className="border-4 border-slate-900 bg-slate-900 px-6 py-2 font-black uppercase text-white transition-all hover:bg-amber-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-amber-400">
                  Daftar
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
            <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
              <img
                alt="Social Innovation"
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNKNzbV0S7XoA1GSS-M_fsd68hNCsEYl3kW-6Kp1mJU6OUddwHCGdwAqm2v-AQO-974TJvCgH79eX7L7f-azFDc581Wc9Oj0UnaLWZ5wi6qEKsbe3WiKhp9ZhalbNHptC2BOFafK14TEK4OLry9XJu1CC4dCqROjRu0jrw0-Uv7jqou4OVbOfk1K1HjV7jSiaJW6mgWRLJfmwO9v4TRz_-nnamZJkQ4N35K3J-VuwaJoZiiLshlvW0MLwP6VeUzUQNXPT5-70MuFI"
              />
              <div className="absolute left-4 top-4 border-2 border-slate-900 bg-teal-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                Entrepreneurship
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline decoration-teal-400">
                Social Innovation Hub
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Inkubator proyek sosial yang menggabungkan bisnis dan dampak sosial untuk keberlanjutan masa depan.
              </p>
              <div className="mt-auto flex items-center justify-between border-t-4 border-slate-900 pt-4 dark:border-slate-100">
                <span className="font-black text-teal-600 dark:text-teal-400 uppercase tracking-wider text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1">
                  Batch 5
                </span>
                <button className="border-4 border-slate-900 bg-slate-900 px-6 py-2 font-black uppercase text-white transition-all hover:bg-teal-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-teal-400">
                  Daftar
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]">
            <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
              <img
                alt="Politics"
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnWr7CYPRnhtoNNywmSIQJMO57YZ51prOJjcGIGXZBxKlUB4mrNCWOzb__lO60sol-XsU-4-VSnP2FjHQZFd3EntUK-IKqGckdMJbqn7X3KI-V10NcQbWY6UyMDZMD_tceOSCB_6Y0lw8yzzptCaR_Vm7_O-i1ny0mDYjHuEhgdz6Adf-3_wZhokRkwbSSURqtyKPqxcns17xGpWKI5EK1MR5n7LVR6K1P226Io0KElSTIpjRQALlQCbU2WnpIsUWhBk7N0UoZahXB"
              />
              <div className="absolute left-4 top-4 border-2 border-slate-900 bg-indigo-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                Public Policy
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline decoration-indigo-400">
                Political Discussion Forum
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Wadah diskusi kritis isu politik terkini dengan narasumber ahli dan praktisi pemerintahan.
              </p>
              <div className="mt-auto flex items-center justify-between border-t-4 border-slate-900 pt-4 dark:border-slate-100">
                <span className="font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1">
                  Mingguan
                </span>
                <button className="border-4 border-slate-900 bg-slate-900 px-6 py-2 font-black uppercase text-white transition-all hover:bg-indigo-400 hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] dark:hover:bg-indigo-400">
                  Gabung
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Calendar */}
      <section className="mb-24 px-4 py-16 bg-slate-100 dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-100 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
        <div className="mb-12 text-center border-b-8 border-slate-900 dark:border-slate-100 pb-8 mx-auto max-w-2xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Kalender Kegiatan
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-8">
          {[
            { date: '15', month: 'Agustus', title: 'Seminar Nasional: Ekonomi Kreatif Digital', time: '09:00 - 15:00 WIB', location: 'Jakarta Design Center', color: 'bg-teal-400' },
            { date: '22', month: 'Agustus', title: 'Workshop: Impact Measurement for NGOs', time: '13:00 - 17:00 WIB', location: 'Online (Zoom)', color: 'bg-amber-400' },
            { date: '05', month: 'September', title: 'Lingkar Networking Night', time: '18:30 - 21:00 WIB', location: 'Visionary Hub Bandung', color: 'bg-indigo-400' },
          ].map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]"
            >
              <div
                className={`flex h-24 w-24 shrink-0 flex-col items-center justify-center border-4 border-slate-900 ${event.color} text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]`}
              >
                <span className="text-3xl font-black">{event.date}</span>
                <span className="text-[10px] font-black uppercase tracking-widest">{event.month}</span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="mb-3 text-xl font-black uppercase text-slate-900 dark:text-white">
                  {event.title}
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 border border-slate-300 dark:border-slate-700">
                    <span className="material-symbols-outlined text-base">schedule</span> {event.time}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 border border-slate-300 dark:border-slate-700">
                    <span className="material-symbols-outlined text-base">location_on</span> {event.location}
                  </span>
                </div>
              </div>
              <button className="w-full md:w-auto border-4 border-slate-900 bg-transparent px-6 py-3 font-black uppercase text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:text-white dark:hover:bg-white dark:hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
                Ingatkan Saya
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-10 text-center flex flex-col items-center">
        <h2 className="mb-12 inline-block border-b-8 border-amber-500 pb-2 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
          Apa Kata Mereka?
        </h2>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              name: 'Alya Safira',
              title: 'Alumni Leadership Bootcamp 2023',
              quote: 'Program ini benar-benar mengubah cara pandang saya tentang kepemimpinan. Tidak hanya soal teori, tapi praktik lapangannya sangat menantang.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArF-r5Vp-NzNSTgEtfXMjldliPOOd82nCDvsWoxaR_LVsiyA0PS4cgccWRc44_Yi7pALUEbmaeBfnjF6YP6SIiaKeP98hWJb3eVWXoj2dCx7D3AMA4Cc9s17K-dE6_g4XR2gYQgzbsbSerhMrP0_nN7togH-KhiKwuWfTRHvExS_OIgkvrAi9UherYgjBAxBf4r4bN8G78mtTiikM1n6pYO3bjQktUI1NmYXnWP587vbcLK9y44rcCjb4cdNkei3SPIRTKI9psHX63'
            },
            {
              name: 'Dimas Pratama',
              title: 'Founder of GreenStep (Social Hub Alumni)',
              quote: 'Mendapatkan mentor yang tepat adalah kunci. Social Innovation Hub membantu startup sosial saya berkembang dari ide menjadi realita.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwayBvh2FJB4jJutgEPGM9JeLr1e70b67HnivfF1ak-iDCU27wdto6eJj4fMYBpYjlrdKoCN1r2rsBD7lLYwZCbZ7ZSckCP_TxtCxY9corBxsypD255Lqcy3sIY4PDYjxsbMt0cUHZRMcxw3I--KuPOLzKC-pVYrJCywm7nq6KtBtoYO7_o25-aACZNx0tQHsu_E83dvADGjImGLGOxNRVxoa-D8W3HFDKwxqt3qvp2BRUp48Be--DjlJXoTUrKTZkVOLBIP8n6nxN'
            },
            {
              name: 'Rina Wijaya',
              title: 'Participant of Political Discussion',
              quote: 'Wadah diskusi yang sangat sehat. Di sini saya belajar bahwa perbedaan pendapat adalah kekuatan untuk membangun kebijakan yang lebih baik.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiEAS3Q3gJ-3W4639NLiB6nf4nuW8TjWY3zoDPVeg1BOhgCrDILPdeVYo16nS6fNcVHAdt2xLhiZLIi-YTXDBmqzMyd0EJhlzgLJtPH9FhzWT7ZQrQJyZtwH3BK5XnaMo21nw9tMULl-pNHzJ77hXiWsgfA4zeusVi8dCYP6sSSdQgwNOpFi_VhJnTV2nEcNyhAEPajJtH44voeadd7opWf2GXRJbNg0npVgZ0nZPscaSj4sOPL2L5iKl1aaYsHILPcO5GfF2GJN5a'
            }
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="relative flex flex-col border-4 border-slate-900 bg-teal-50 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-800 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]"
            >
              <span className="material-symbols-outlined absolute right-6 top-6 text-6xl text-slate-900/10 dark:text-white/10 rotate-180 font-serif">
                format_quote
              </span>
              <div className="mb-6 flex items-center gap-4 border-b-4 border-slate-900 dark:border-slate-100 pb-6 relative z-10">
                <div className="h-16 w-16 shrink-0 overflow-hidden border-4 border-slate-900 bg-slate-200 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
                  <img alt="Alumni" className="h-full w-full object-cover grayscale" src={testimonial.img} />
                </div>
                <div>
                  <h5 className="text-xl font-black uppercase text-slate-900 dark:text-slate-100 leading-none mb-1">
                    {testimonial.name}
                  </h5>
                  <p className="text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="flex-1 text-base font-bold italic leading-relaxed text-slate-700 dark:text-slate-300 border-l-4 border-amber-400 pl-4 py-1">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
