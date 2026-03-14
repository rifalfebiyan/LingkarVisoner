import { getPostById } from "@/lib/services/posts";
import BeritaForm from "@/components/BeritaForm";
import { notFound } from "next/navigation";

export default async function EditBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: post, error } = await getPostById(id);

  if (error || !post) {
    return notFound();
  }

  return (
    <div className="p-8">
      <BeritaForm initialData={post} />
    </div>
  );
}
