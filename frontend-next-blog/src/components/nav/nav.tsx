'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';

export default function Nav({ items }: { items: { href: string, label: string }[] }) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/' || pathname === '/blog' || pathname.startsWith('/blog/');
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={isActive(item.href) ? styles.active : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
