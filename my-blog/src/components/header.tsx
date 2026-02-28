"use client";

import styles from "./header.module.css";
import { useTheme } from "next-themes";
import Nav from "./nav";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return <header className={styles.header}>
      <div className={styles.left}>
        <h1>Pod <span>stalker</span></h1>
      </div>
      <Nav />
      <div className={styles.right}>
        <button className={styles.button} onClick={toggleTheme}>{theme === "light" ? "🌑" : "☀️"}</button>
        {/* <button className={styles.button}>Login</button> */}
      </div>
    </header>
}