"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { deletePost } from "@/lib/actions/posts";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    setLoading(true);
    try {
      await deletePost(id);
      router.refresh();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="border-2 border-slate-900 bg-red-500 p-2 text-white transition-all hover:bg-red-600 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] disabled:opacity-50"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </button>
  );
}
