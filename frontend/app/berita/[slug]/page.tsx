import { getPostBySlug } from "@/lib/services/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);
  
  if (!post) return { title: "Berita Tidak Ditemukan" };

  return {
    title: post.title,
    description: post.summary || post.title,
    openGraph: {
      title: post.title,
      description: post.summary || post.title,
      images: [post.image_url || "/og-image.png"],
    },
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post, error } = await getPostBySlug(slug);

  if (error || !post) {
    return notFound();
  }

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), "dd MMMM yyyy", { locale: id });
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 md:px-12 lg:py-16">
      <Link
        href="/berita"
        className="mb-8 inline-flex items-center gap-2 font-black uppercase tracking-widest text-slate-900 transition-all hover:text-teal-600 dark:text-slate-100"
      >
        <ArrowLeft className="h-5 w-5" />
        Kembali ke Berita
      </Link>

      <div className="mb-8">
        <div className="mb-4 flex flex-wrap gap-3">
          <span className="border-4 border-slate-900 bg-amber-400 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-black uppercase leading-tight tracking-tighter text-slate-900 dark:text-white md:text-6xl">
          {post.title}
        </h1>
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-6 border-y-4 border-slate-900 py-6 dark:border-slate-100">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-teal-600" />
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-slate-100">
              {post.author || "LIVI Editorial"}
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase">{post.author_role}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-teal-600" />
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
            {formatDate(post.published_at || post.created_at)}
          </span>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center border-2 border-slate-900 bg-white transition-all hover:bg-slate-100 dark:border-slate-100 dark:bg-slate-800">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-12 aspect-video w-full border-4 border-slate-900 dark:border-slate-100 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)] overflow-hidden">
        <img
          src={post.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:border-l-8 prose-h2:border-teal-500 prose-h2:pl-4 prose-p:font-medium prose-p:leading-relaxed prose-strong:font-black prose-strong:text-slate-900 dark:prose-strong:text-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-20 border-t-8 border-slate-900 pt-10 dark:border-slate-100">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-md text-center md:text-left">
            <h4 className="text-2xl font-black uppercase italic text-slate-900 dark:text-white">
              Satu Langkah Visioner.
            </h4>
            <p className="mt-2 font-bold text-slate-600 dark:text-slate-400">
              Jadilah bagian dari perubahan dengan menyebarkan gagasan kebermanfaatan ini ke jaringan Anda.
            </p>
          </div>
          <Link
            href="/berita"
            className="border-4 border-slate-900 bg-teal-500 px-8 py-4 font-black uppercase tracking-widest text-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-slate-100"
          >
            Baca Berita Lainnya
          </Link>
        </div>
      </div>
    </main>
  );
}
