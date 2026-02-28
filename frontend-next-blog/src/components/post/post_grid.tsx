import styles from './post.module.css';
import posts from '../../data/blog_posts.json';
import type { Post } from '@/src/lib/posts';
import PostCard from './post_card';

export default function PostGrid({ amount }: { amount?: number }) {
    const slicedPosts = amount ? posts.slice(0, amount) : posts;


    return (
        <div className={styles.grid}>
            {slicedPosts.map((post, index) => (
                <PostCard key={post.id} post={post as Post} />
            ))}
        </div>
    )
}