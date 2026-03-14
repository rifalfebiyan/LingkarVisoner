"use server";

import { createClient } from '@/lib/supabase/server';
import { CreatePostInput, UpdatePostInput } from '@/lib/types/post';
import { revalidatePath } from 'next/cache';

export async function createPost(input: CreatePostInput) {
  const supabase = await createClient();
  const result = await supabase
    .from('posts')
    .insert([input])
    .select()
    .single();
  
  revalidatePath('/berita');
  revalidatePath('/dashboard/admin/berita');
  return result;
}

export async function updatePost(id: string, input: UpdatePostInput) {
  const supabase = await createClient();
  const result = await supabase
    .from('posts')
    .update(input)
    .eq('id', id)
    .select()
    .single();
  
  revalidatePath('/berita');
  revalidatePath(`/berita/${input.slug}`);
  revalidatePath('/dashboard/admin/berita');
  return result;
}

export async function deletePost(id: string) {
  const supabase = await createClient();
  const result = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
  
  revalidatePath('/berita');
  revalidatePath('/dashboard/admin/berita');
  return result;
}
