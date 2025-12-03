"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
    children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,           // Smoothness factor (0.1 = very smooth, heavy feel)
                duration: 1.5,       // Scroll duration in seconds
                smoothWheel: true,   // Enable smooth wheel scrolling
                smoothTouch: false,  // Disable on touch devices (better for mobile)
                wheelMultiplier: 1,  // Scroll speed multiplier
                touchMultiplier: 2,  // Touch scroll speed
                infinite: false,     // No infinite scroll
            }}
        >
            {children}
        </ReactLenis>
    );
}
