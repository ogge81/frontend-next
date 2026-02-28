import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/src/lib/posts';
import PostCard from '@/src/components/post/post_card';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostCard post={post} />
}