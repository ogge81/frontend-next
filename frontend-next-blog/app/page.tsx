import PostBanner from '@/src/components/post/post_banner';
import styles from './page.module.css';

export default function Home() {

  return <div className={styles.page}>
    <h2>Welcome to 'the' blog</h2>
    <PostBanner />
  </div>
}
