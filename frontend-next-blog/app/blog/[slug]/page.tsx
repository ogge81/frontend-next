import { useRouter } from 'next/router';

import styles from '../../page.module.css';

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return <div className={styles.page}>
    <h2>Slug</h2>
  </div>
}