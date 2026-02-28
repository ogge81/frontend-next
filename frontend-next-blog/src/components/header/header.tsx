import Nav from '../nav/nav';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>

            </div>

            <div className={styles.center}>
                <h1>The Blog</h1>
                <Nav />
            </div>

            <div className={styles.right}>

            </div>
        </header>
    )
}