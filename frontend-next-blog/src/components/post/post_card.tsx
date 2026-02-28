import styles from './post.module.css';
import type { Post } from '@/src/lib/posts';

export default function PostCard({ post }: { post: Post }) {

    return (
        <div className={styles.card}>
            <h3>{post.title}</h3>
            <div>Published: {new Date(post.publishedAt).toLocaleDateString()}</div>
            <p>{post.excerpt}</p>
        </div>
    )
}