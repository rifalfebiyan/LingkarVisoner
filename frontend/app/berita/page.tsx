import Link from 'next/link';
import { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/services/posts';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export const metadata: Metadata = {
  title: "Berita & Gagasan",
  description: "Update terbaru, artikel kepemimpinan, dan opini seputar isu terkini dari Lingkar Visioner.",
};

export default async function BeritaPage() {
  const { data: posts, error } = await getPublishedPosts();
  const allPosts = posts || [];

  // Filter posts based on types for different sections
  const featurePost = allPosts.find(p => p.type === 'feature') || allPosts[0];
  const regularPosts = allPosts.filter(p => p.type === 'regular' || (p.type === 'feature' && p.id !== featurePost?.id)).slice(0, 4);
  const trendingPosts = allPosts.filter(p => p.type === 'trending').slice(0, 3);
  const editorialPosts = allPosts.filter(p => p.type === 'editorial').slice(0, 1);

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), "dd MMM yyyy", { locale: id });
  };

  return (
    <main className="mx-auto max-w-none px-6 py-10 md:px-12 lg:px-24">
      {/* Hero Feature */}
      {featurePost && (
        <div className="mb-12">
          <Link href={`/berita/${featurePost.slug}`} className="block group">
            <div className="flex flex-col overflow-hidden rounded-none border-4 border-slate-900 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] lg:flex-row">
              <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 lg:aspect-auto lg:w-[60%] lg:border-b-0 lg:border-r-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${featurePost.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'}")`,
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
                  {featurePost.category}
                </span>
                <h1 className="text-3xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-4xl uppercase tracking-tighter group-hover:text-teal-600 transition-colors">
                  {featurePost.title}
                </h1>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium border-l-4 border-amber-500 pl-4">
                  {featurePost.summary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  <span className="flex items-center gap-1.5 border-2 border-slate-900 px-3 py-1.5 bg-white dark:bg-slate-800 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(241,245,249,1)]">
                    <span className="material-symbols-outlined text-base">calendar_month</span> {formatDate(featurePost.published_at || featurePost.created_at)}
                  </span>
                  <span className="flex items-center gap-1.5 border-2 border-slate-900 px-3 py-1.5 bg-white dark:bg-slate-800 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(241,245,249,1)]">
                    <span className="material-symbols-outlined text-base">edit_note</span> {featurePost.author || "LIVI Team"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Secondary Categories & Trending */}
      <div className="mb-12 flex flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between border-b-4 border-slate-900 pb-4 dark:border-slate-100 gap-4">
            <h3 className="border-l-8 border-teal-600 pl-4 text-2xl font-black uppercase tracking-widest text-slate-900 dark:text-white">
              Gagasan Terbaru
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/berita/${post.slug}`} className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-100 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{
                      backgroundImage: `url("${post.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'}")`,
                    }}
                  ></div>
                  <div className="absolute left-4 top-4">
                    <span className="border-2 border-slate-900 bg-teal-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="mb-3 text-xl font-black uppercase leading-tight text-slate-900 decoration-4 underline-offset-4 group-hover:underline dark:text-slate-100 decoration-teal-600">
                    {post.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-400 mt-auto">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))}
            
            {regularPosts.length === 0 && (
              <p className="font-bold text-slate-400">Belum ada berita terbaru.</p>
            )}
          </div>
        </div>

        {/* Trending Sidebar */}
        <aside className="w-full lg:w-96">
          <div className="border-4 border-slate-900 bg-slate-900 p-8 text-white shadow-[8px_8px_0px_0px_rgba(15,118,110,1)] dark:border-slate-100 dark:shadow-[8px_8px_0px_0px_rgba(15,118,110,1)]">
            <h3 className="mb-8 flex items-center gap-3 border-b-4 border-teal-400 pb-4 text-xl font-black uppercase tracking-widest text-white">
              <span className="material-symbols-outlined text-teal-400 text-3xl">trending_up</span> Trending
            </h3>
            <div className="space-y-8">
              {trendingPosts.map((post, idx) => (
                <Link key={post.id} href={`/berita/${post.slug}`} className="group cursor-pointer border-l-4 border-transparent hover:border-teal-400 pl-4 transition-all block">
                  <span className="text-4xl font-black text-slate-700 block mb-2 group-hover:text-teal-400 transition-colors">0{idx + 1}</span>
                  <div>
                    <h5 className="text-base font-black uppercase leading-tight transition-colors group-hover:text-teal-400">
                      {post.title}
                    </h5>
                    <p className="mt-2 text-[10px] font-black text-slate-400 tracking-widest bg-slate-800 inline-block px-2 py-1 uppercase">
                      {formatDate(post.published_at || post.created_at)}
                    </p>
                  </div>
                </Link>
              ))}
              {trendingPosts.length === 0 && (
                <p className="text-slate-500 font-bold">Tidak ada berita viral saat ini.</p>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Editorial Section */}
      {editorialPosts.map((post) => (
        <div key={post.id} className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
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
                  backgroundImage: `url("${post.image_url || 'https://images.unsplash.com/photo-1455390582262-044cdead277a'}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="flex-1 flex flex-col justify-center h-full">
                <h4 className="mb-6 text-2xl md:text-3xl font-black uppercase italic leading-tight text-slate-900 dark:text-white relative z-10">
                  <span className="absolute -left-4 -top-4 text-7xl text-teal-200 dark:text-teal-900/50 -z-10 font-serif">"</span>
                  {post.title}
                </h4>
                <div className="mb-6 flex flex-wrap items-center gap-4 border-l-4 border-teal-600 pl-4 py-1">
                  <span className="font-black uppercase tracking-widest text-slate-900 dark:text-slate-100 bg-teal-200 dark:bg-teal-900/50 px-2 py-1">
                    {post.author}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase">{post.author_role}</span>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                  {post.summary}
                </p>
                <Link
                  href={`/berita/${post.slug}`}
                  className="inline-flex w-fit items-center gap-2 border-4 border-slate-900 bg-white dark:bg-slate-900 dark:border-slate-100 px-6 py-3 font-black uppercase tracking-widest text-slate-900 dark:text-slate-100 transition-all hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          
          {/* Static Newsletter box remained as per user request not to change template */}
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
      ))}

      {/* Topic Tags - Keep static for now */}
      <div className="mt-16 border-t-8 border-slate-900 pt-10 dark:border-slate-100 text-center flex flex-col items-center">
        <h3 className="mb-6 inline-block border-b-4 border-amber-500 pb-2 text-xl font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
          Jelajahi Topik Terpopuler
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
