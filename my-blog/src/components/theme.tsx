"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import styles from "./theme.module.css";

type ThemeProps = React.ComponentProps<typeof NextThemeProvider>;

export default function Theme({children, ...props}: ThemeProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}     