import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lingkarvisioner.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/login', '/auth/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
