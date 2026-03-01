import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/src/lib/posts';
import EditPostForm from './edit_form';

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <EditPostForm post={post} />;
}
