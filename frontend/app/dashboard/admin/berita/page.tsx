import Link from "next/link";
import { Plus, Edit, Calendar, Tag, User } from "lucide-react";
import { Metadata } from "next";
import { getPosts } from "@/lib/services/posts";
import { Post } from "@/lib/types/post";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import DeletePostButton from "@/components/DeletePostButton";

export const metadata: Metadata = {
  title: "Kelola Berita | Admin Dashboard",
};

export default async function AdminBeritaPage() {
  const { data: posts, error } = await getPosts();

  if (error) {
    console.error("Error fetching posts:", error);
  }

  const allPosts: Post[] = posts || [];

  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end border-b-8 border-slate-900 pb-6 dark:border-slate-100">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Kelola Konten Berita
          </h1>
          <p className="mt-2 text-lg font-bold text-slate-600 dark:text-slate-400 border-l-4 border-amber-500 pl-3">
            Tulis, edit, dan publikasikan gagasan terbaik untuk pemuda.
          </p>
        </div>
        <Link
          href="/dashboard/admin/berita/new"
          className="flex items-center gap-2 border-4 border-slate-900 bg-slate-900 px-6 py-3 font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:bg-white dark:text-slate-900 dark:shadow-[6px_6px_0px_0px_rgba(241,245,249,1)]"
        >
          <Plus className="h-5 w-5" />
          Tulis Berita
        </Link>
      </div>

      {allPosts.length === 0 ? (
        <div className="border-4 border-slate-900 bg-slate-100 p-20 text-center dark:border-slate-100 dark:bg-slate-800 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
          <p className="text-2xl font-black uppercase text-slate-400">Belum ada berita yang ditulis.</p>
          <Link href="/dashboard/admin/berita/new" className="mt-4 inline-block font-black text-amber-500 underline decoration-4 underline-offset-4">
            Mulai menulis sekarang →
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col border-4 border-slate-900 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0px_0px_rgba(241,245,249,1)]"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b-4 border-slate-900 dark:border-slate-100">
                {post.image_url ? (
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={post.image_url}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-800">
                    <span className="text-4xl font-black text-slate-300">LIVI</span>
                  </div>
                )}
                <div className="absolute left-4 top-4 border-2 border-slate-900 bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-900">
                  {post.status}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                   <Tag className="h-3 w-3" />
                   {post.category}
                </div>
                <h3 className="mb-4 text-xl font-black uppercase leading-tight text-slate-900 dark:text-slate-100">
                  {post.title}
                </h3>
                
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(post.created_at), "dd MMMM yyyy", { locale: id })}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                    <User className="h-4 w-4" />
                    {post.author || "Admin"}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Link
                      href={`/dashboard/admin/berita/${post.id}`}
                      className="flex-1 border-2 border-slate-900 bg-white py-2 text-center text-xs font-black uppercase text-slate-900 transition-all hover:bg-slate-100 dark:border-slate-100 dark:bg-slate-800 dark:text-white"
                    >
                      <Edit className="mr-2 inline h-4 w-4" />
                      Edit
                    </Link>
                    <DeletePostButton id={post.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
