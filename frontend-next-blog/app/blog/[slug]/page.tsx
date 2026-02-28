import { notFound } from 'next/navigation';
import { getPostBySlug, markdownToHtml } from '@/src/lib/posts';

import styles from '../../page.module.css';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content_md);

  return <div className={styles.page}>
    <h2>{post.title}</h2>
    <div>Published: {new Date(post.publishedAt).toLocaleDateString()}</div>
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: content }} />
  </div>
}