import Link from 'next/link';
import { getAllPosts } from '@/src/lib/posts';
import styles from '../page.module.css';

export default function BlogPage() {
  const posts = getAllPosts();

  return <div className={styles.page}>
    {/* <h2>Blog</h2> */}
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.id} className={styles.item}>
          <h3>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <div>{new Date(post.createdAt).toLocaleDateString()}</div>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  </div>
}