"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-brand-secondary"
        >
            {/* Parallax Background Image */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <Image
                    src="/images/hero-placeholder.jpg"
                    alt="Glory Cases - Étui à lunettes premium"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Content Layer */}
            <motion.div
                className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
                style={{ y: textY, opacity: textOpacity }}
            >
                <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                    Fait main à Abidjan
                </p>

                <h1 className="mb-8 text-balance font-serif text-6xl font-medium leading-none text-white mix-blend-overlay md:text-8xl lg:text-9xl">
                    L'Écrin de<br />votre Regard.
                </h1>

                <p className="mb-12 max-w-lg text-lg text-white/90 md:text-xl">
                    L'alliance parfaite entre l'artisanat ivoirien et le design moderne.
                </p>

                <Link href="/collection">
                    <MagneticButton>
                        <Button size="lg" className="bg-white text-brand-secondary hover:bg-gray-100 border-none">
                            Découvrir la Collection
                        </Button>
                    </MagneticButton>
                </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </motion.div>
        </section>
    );
}
