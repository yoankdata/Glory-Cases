"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
    children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,           // Smoothness factor (0.1 = very smooth, heavy feel)
            duration: 1.5,       // Scroll duration in seconds
            smoothWheel: true,   // Enable smooth wheel scrolling

            wheelMultiplier: 1,  // Scroll speed multiplier
            touchMultiplier: 2,  // Touch scroll speed
            infinite: false,     // No infinite scroll
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
