'use client';

import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import type { Post } from '@/src/lib/posts';
import { updatePostAction } from '@/src/lib/actions';
import styles from '../../page.module.css';

export default function EditPostForm({ post }: { post: Post }) {
  const [val, setValue] = useState(post.content_md);
  const [title, setTitle] = useState(post.title);
  const [excerpt, setExcerpt] = useState(post.excerpt);

  const handleClick = async () => {
    await updatePostAction(post.slug, {
      title,
      excerpt,
      content_md: val,
    });
  }

  return (
    <div className={styles.page}>

      <div className={styles.top}>
        <form className={styles.form}>
          <div className={styles.form_item}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="excerpt">Excerpt</label>
            <input type="text" name="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
          </div>
        </form>
      </div>
      <div className={styles.content}>
        <MDEditor 
            value={val} 
            onChange={(value) => setValue(value || '')} 
            onClick={(e) => handleClick()}
            height={400} 
            style={{
              minWidth: '100%',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-p)',
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--size-base)',
              margin: 'var(--size-base)',
            }}
            />
            <button onClick={() => handleClick()}>Save</button>
      </div>


    </div>
  );
}
