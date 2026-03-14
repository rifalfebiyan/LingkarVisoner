export type PostStatus = 'draft' | 'published';
export type PostType = 'feature' | 'regular' | 'trending' | 'editorial';

export interface Post {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  content: string;
  image_url: string | null;
  category: string;
  type: PostType;
  author: string | null;
  author_role: string | null;
  status: PostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export type CreatePostInput = Omit<Post, 'id' | 'created_at' | 'updated_at'>;
export type UpdatePostInput = Partial<CreatePostInput>;
