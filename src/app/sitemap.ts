import type {MetadataRoute} from 'next';
import {getAllPosts} from '@/lib/api/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    {
      url: 'https://mdr32.ru',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...posts.map(({id, date}) => ({
      url: `https://mdr32.ru/posts/${id}`,
      lastModified: date,
      priority: 0.7,
    })),
  ];
}
