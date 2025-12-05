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

    // Configuration des animations d'entrée
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Délai entre chaque élément
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.215, 0.61, 0.355, 1] as const // Courbe "Power3.out" pour un feeling premium
            },
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-brand-primary"
        >
            {/* Parallax Background Image with Cinematic Reveal */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
                initial={{ scale: 1.15 }} // Zoom initial
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
            >
                <Image
                    src="/images/hero-placeholder.jpg"
                    alt="Glory Cases - Étui à lunettes premium"
                    fill
                    className="object-cover opacity-90"
                    priority
                    sizes="100vw"
                />
                {/* Gradient sophistiqué pour lisibilité parfaite */}
                <div className="absolute inset-0 bg-black/30" /><div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
            </motion.div>

            {/* Content Layer */}
            <motion.div
                className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
                style={{ y: textY, opacity: textOpacity }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge "Fait main" */}
                <motion.div variants={itemVariants}>
                    <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/90">
                            Fait main à Abidjan
                        </span>
                    </div>
                </motion.div>

                {/* Titre Impactant */}
                <motion.h1
                    variants={itemVariants}
                    className="mb-8 text-balance font-serif text-5xl font-medium leading-[0.9] text-white md:text-7xl lg:text-9xl tracking-tight"
                >
                    <span className="block text-white">L&apos;Écrin de</span>
                    <span className="block text-brand-accent italic">votre Regard.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="mb-12 max-w-lg text-lg font-light leading-relaxed text-gray-200 md:text-xl"
                >
                    L&apos;alliance parfaite entre l&apos;artisanat ivoirien d&apos;exception et le design contemporain.
                </motion.p>

                {/* CTA */}
                <motion.div variants={itemVariants}>
                    <Link href="/collection">
                        <MagneticButton>
                            <Button
                                size="lg"
                                className="h-14 bg-white px-8 text-base text-brand-primary shadow-2xl shadow-black/20 hover:bg-brand-canvas border-none transition-transform hover:scale-105"
                            >
                                Découvrir la Collection
                            </Button>
                        </MagneticButton>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </section>
    );
}
