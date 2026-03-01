import styles from '../page.module.css';

export default function About() {

  return <div className={styles.page}>
    <div className={styles.top}>
      <h2>About</h2>
    </div>
    <div className={styles.content}>
      <p>Content here</p>
    </div>
  </div>
}