import styles from "./mdx-layout.module.css";

export default function MDXLayout(props: { children: React.ReactNode }) {   
    return <div className={styles.mdxLayout}>{props.children}</div>
}