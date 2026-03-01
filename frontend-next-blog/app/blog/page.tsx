import styles from '../page.module.css';

import PostGrid from '@/src/components/post/post_grid';
import PostList from '@/src/components/post/post_list';
import PostBanner from '@/src/components/post/post_banner';


export default function BlogPage() {

  return <div className={styles.page}>

      <div className={styles.top}>
        <div className={styles.left}>
          <h2>Blog</h2>
        </div>
        <div className={styles.right}>
          {/* <PostBanner/> */}
        </div>
      </div>

      <div className={styles.content}>
        <PostGrid />
        {/* <PostList /> */}
      </div>
  </div>
}