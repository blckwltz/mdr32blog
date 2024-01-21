import PostPage from '@/components/pages/PostPage';
import {getAllPosts, getPostById} from '@/lib/api/api';

interface PageParams {
  params: {
    id: string;
  };
}

export async function generateMetadata(params: PageParams) {
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

  return <PostPage post={post} />;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
