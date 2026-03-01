import Link from 'next/link';
import styles from './post.module.css';
import type { Post } from '@/src/lib/posts';

export default function PostCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.top}>
                <h3>{post.title}</h3>
                <div>Published: {new Date(post.publishedAt).toLocaleDateString()}</div>
            </div>
            <div className={styles.content}>
                <p>{post.excerpt}</p>
            </div>
        </Link>
    )
}