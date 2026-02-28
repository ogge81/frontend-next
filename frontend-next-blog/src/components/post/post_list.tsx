import type { Post } from "@/src/lib/posts";
import posts from '../../data/blog_posts.json';
import styles from './post.module.css';

export default function PostList({ amount }: { amount?: number }) {
    const trimmedPosts = amount ? posts.slice(0, amount) : posts;

    return (
        <div className={styles.list}>
            {trimmedPosts.map((post) => (
                <div key={post.id} className={styles.item}>
                    <h3>{post.title} - {new Date(post?.publishedAt as string).toLocaleDateString()}</h3>
                </div>
            ))}
        </div>
    )
}