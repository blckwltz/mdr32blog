import type {Metadata} from 'next';
import type {BlogPosting, WithContext} from 'schema-dts';
import PostPage from '@/components/pages/PostPage';
import {getAllPosts, getPostById} from '@/lib/api/api';

interface PageParams {
  params: {
    id: string;
  };
}

export async function generateMetadata(params: PageParams): Promise<Metadata> {
  const {
    params: {id},
  } = params;
  const {title, description} = await getPostById(id);

  return {
    title,
    description,
  };
}

export default async function Page(props: PageParams) {
  const {
    params: {id},
  } = props;
  const post = await getPostById(id);

  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    name: post.title,
    description: post.description,
  };

  return <PostPage post={post} schemaOrgData={jsonLd} />;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
