"use client";

import { useRef, useEffect } from "react";
import styles from "./main.module.css";

export default function Main({ children }: { children: React.ReactNode }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) video.playbackRate = 0.2; // 0.5 = half speed
    }, []);

    return <main className={styles.main}>
        <div className={styles.hero}>
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className={styles.bgVideo}
            >
                <source src="/video/back.mp4" type="video/mp4" />
            </video>


            <div className={styles.wrap}>
                {children}
            </div>

        </div>
    </main>
}