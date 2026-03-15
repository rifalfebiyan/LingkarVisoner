import { createClient } from '@/lib/supabase/server';

export async function getPosts() {
  const supabase = await createClient();
  return supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
}

export async function getPublishedPosts() {
  const supabase = await createClient();
  return supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
}

export async function getPostBySlug(slug: string) {
  const supabase = await createClient();
  return supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();
}

export async function getPostById(id: string) {
  const supabase = await createClient();
  return supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
}

export async function incrementViews(postId: string) {
  const supabase = await createClient();
  return supabase.rpc('increment_post_views', { post_id: postId });
}
