import styles from '../page.module.css';

import PostGrid from '@/src/components/post/post_grid';
import PostList from '@/src/components/post/post_list';
import PostBanner from '@/src/components/post/post_banner';


export default function BlogPage() {

  return <div className={styles.page}>

    <PostBanner/>
    <PostGrid amount={4} />
    <PostList amount={5} />

  </div>
}