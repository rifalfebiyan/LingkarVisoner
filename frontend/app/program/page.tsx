import { createClient } from "@/lib/supabase/server";
import type { Program } from "@/lib/types/program";

export default async function ProgramPage() {
  const supabase = await createClient();

  // Fetch active programs from database
  const { data: programs } = await supabase
    .from("programs")
    .select("*")
    .eq("status", "active")
    .order("start_date", { ascending: true });

  const activePrograms: Program[] = programs || [];

  // Programs for calendar - sorted by most recent start_date
  const calendarPrograms = [...activePrograms]
    .filter((p) => p.start_date)
    .sort((a, b) => new Date(b.start_date!).getTime() - new Date(a.start_date!).getTime());

  // Category colors mapping
  const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
    Leadership: { bg: "bg-amber-400", text: "text-slate-900", accent: "decoration-amber-400" },
    Entrepreneurship: { bg: "bg-teal-400", text: "text-slate-900", accent: "decoration-teal-400" },
    "Public Policy": { bg: "bg-indigo-400", text: "text-slate-900", accent: "decoration-indigo-400" },
    Digital: { bg: "bg-blue-400", text: "text-slate-900", accent: "decoration-blue-400" },
    Mentoring: { bg: "bg-rose-400", text: "text-slate-900", accent: "decoration-rose-400" },
    Webinar: { bg: "bg-purple-400", text: "text-slate-900", accent: "decoration-purple-400" },
    Workshop: { bg: "bg-emerald-400", text: "text-slate-900", accent: "decoration-emerald-400" },
  };

  const getColors = (category: string) =>
    categoryColors[category] || { bg: "bg-amber-400", text: "text-slate-900", accent: "decoration-amber-400" };

  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Banner */}
      <section className="mb-16">
        <div className="group relative flex min-h-[400px] items-center justify-center overflow-hidden border-4 border-slate-900 bg-slate-900 p-8 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 to-blue-900/60 mix-blend-multiply"></div>
          <div className="relative z-20 mx-auto max-w-3xl">
            <span className="mb-6 inline-block border-2 border-white bg-blue-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              {activePrograms.length > 0 ? "Pendaftaran Dibuka" : "Segera Hadir"}
            </span>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl tracking-tighter">
              Program Komunitas 2026
            </h1>
            <p className="mb-10 text-lg font-bold leading-relaxed text-slate-200 md:text-xl border-l-4 border-blue-400 pl-4 bg-slate-900/50 py-2">
              Membentuk pemimpin masa depan melalui inovasi sosial, kewirausahaan, dan dampak nyata bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
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
        </div>

        {activePrograms.length === 0 ? (
          <div className="border-4 border-slate-900 bg-slate-100 p-16 text-center shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-800 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]">
            <p className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-4">
              Belum Ada Program Aktif
            </p>
            <p className="text-lg font-bold text-slate-600 dark:text-slate-400">
              Program baru akan segera ditambahkan. Pantau terus halaman ini!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {activePrograms.map((program) => {
              const colors = getColors(program.category);
              return (
                <div
                  key={program.id}
                  className="group flex h-full flex-col border-4 border-slate-900 bg-white transition-transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(241,245,249,1)]"
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                    {program.image_url ? (
                      <img
                        alt={program.title}
                        className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={program.image_url}
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-500 flex items-center justify-center">
                        <span className="text-4xl font-black text-slate-500/30 dark:text-slate-300/30 uppercase">
                          {program.category}
                        </span>
                      </div>
                    )}
                    <div className={`absolute left-4 top-4 border-2 border-slate-900 ${colors.bg} px-3 py-1.5 text-[10px] font-black uppercase tracking-widest ${colors.text} shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]`}>
                      {program.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`mb-4 text-2xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100 decoration-4 underline-offset-4 group-hover:underline ${colors.accent}`}>
                      {program.title}
                    </h3>
                    {program.description && (
                      <p className="mb-8 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                        {program.description}
                      </p>
                    )}
                    <div className="mt-4 flex flex-col gap-2 border-t-4 border-slate-900 pt-4 dark:border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className={`font-black uppercase tracking-wider text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 ${colors.text.replace("text-slate-900", "text-amber-600")} dark:text-amber-400`}>
                          {program.start_date
                            ? `Mulai ${new Date(program.start_date).toLocaleDateString("id-ID", { month: "short", year: "numeric" })}`
                            : "Segera Hadir"}
                        </span>
                        <a
                          href={program.registration_url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <button className={`w-full border-4 border-slate-900 bg-slate-900 px-6 py-2 font-black uppercase text-white transition-all hover:${colors.bg} hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]`}>
                            Daftar
                          </button>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                        {program.location && (
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            <span className="truncate">{program.location}</span>
                          </div>
                        )}
                        {program.time_range && (
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <span>{program.time_range}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Program Calendar */}
      <section className="mb-24 px-4 py-16 bg-slate-100 dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-100 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
        <div className="mb-12 text-center border-b-8 border-slate-900 dark:border-slate-100 pb-8 mx-auto max-w-2xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Kalender Kegiatan
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-8">
          {calendarPrograms.length === 0 ? (
            <div className="border-4 border-slate-900 bg-white p-12 text-center dark:border-slate-100 dark:bg-slate-900">
              <p className="text-lg font-black uppercase text-slate-500 dark:text-slate-400">
                Belum ada kegiatan terjadwal
              </p>
            </div>
          ) : (
            calendarPrograms.map((program) => {
              const colors = getColors(program.category);
              const startDate = new Date(program.start_date!);
              const day = startDate.getDate().toString().padStart(2, '0');
              const month = startDate.toLocaleDateString('id-ID', { month: 'long' });
              return (
                <div
                  key={program.id}
                  className="flex flex-col md:flex-row items-center gap-6 border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]"
                >
                  <div
                    className={`flex h-24 w-24 shrink-0 flex-col items-center justify-center border-4 border-slate-900 ${colors.bg} text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]`}
                  >
                    <span className="text-3xl font-black">{day}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{month}</span>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h4 className="mb-3 text-xl font-black uppercase text-slate-900 dark:text-white">
                      {program.title}
                    </h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 border border-slate-300 dark:border-slate-700">
                        <span className="material-symbols-outlined text-base">category</span> {program.category}
                      </span>
                      {program.time_range && (
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 border border-slate-300 dark:border-slate-700">
                          <span className="material-symbols-outlined text-base">schedule</span> {program.time_range}
                        </span>
                      )}
                      {program.location && (
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 border border-slate-300 dark:border-slate-700">
                          <span className="material-symbols-outlined text-base">location_on</span> {program.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <a
                    href={program.registration_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <button className="w-full border-4 border-slate-900 bg-transparent px-6 py-3 font-black uppercase text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:text-white dark:hover:bg-white dark:hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
                      Daftar
                    </button>
                  </a>
                </div>
              );
            })
          )}
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
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
