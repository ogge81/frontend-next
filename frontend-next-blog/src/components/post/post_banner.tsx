'use client';

import posts from "../../data/blog_posts.json";
import type {Post} from "@/src/lib/posts"
import styles from './post.module.css';
import { useEffect, useState } from "react";

export default function PostBanner() {
    const [num, setNum] = useState(0);
    const [post, setPost] = useState<Post | null>(posts[0] as Post);
    useEffect(() => {
        setPost(posts[num] as Post);
    }, [num]);

    const postLength = posts.length;

    if (!post) {
        setNum(num - 1);
    }

    return (
        <div className={styles.banner}>
            <h2>{post?.title}</h2>
            <p>{post?.excerpt}</p>
            <button onClick={() => setNum(num - 1)} disabled={num === 0}>Prev</button>
            <button onClick={() => setNum(num + 1)} disabled={num === postLength - 1}>Next</button>
        </div>
    )
}