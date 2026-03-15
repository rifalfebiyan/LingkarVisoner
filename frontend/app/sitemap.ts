import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/services/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lingkarvisioner.com';
  
  // Fetch dynamic posts
  const { data: posts } = await getPublishedPosts();
  const postUrls = (posts || []).map((post) => ({
    url: `${baseUrl}/berita/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : new Date(post.published_at || post.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/program`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/aspirasi/semua`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
  ];

  return [...staticUrls, ...postUrls];
}
