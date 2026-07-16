import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://docs.nyxsentinel.com',
    sitemap: 'https://docs.nyxsentinel.com/sitemap.xml',
  };
}
