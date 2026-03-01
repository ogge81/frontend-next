import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/src/lib/posts';
import { mdToHtml } from '@/src/lib/markdown';
import styles from '../../page.module.css';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <div className={styles.page}>
    <div className={styles.top}>
      <div className={styles.left}>
        <h2>{post.title}</h2>
        <p>{post.publishedAt}</p>
      </div>
    </div>
    <div className={styles.content}>
        <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: await mdToHtml(post.content_md) }} />
        <Link href={`/edit/${post.slug}`}>Edit post</Link>
    </div>
    <div className={styles.bottom}>
    </div>

    </div>
}