import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {

    return <div className={styles.wrap}>
        <nav className={styles.nav}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/blog">Blog</Link>
        </nav>
    </div>
}