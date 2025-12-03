"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-canvas">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2 md:px-12 lg:px-24">
                {/* Left: Content */}
                <motion.div
                    className="relative z-20 space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-sans text-sm font-bold uppercase tracking-widest text-brand-primary">
                        Fait main à Abidjan
                    </p>

                    <h1 className="text-balance font-serif text-5xl font-medium leading-[0.95] tracking-tight text-brand-secondary md:text-7xl lg:text-8xl">
                        L'Écrin de votre Regard.
                    </h1>

                    <p className="max-w-md text-lg leading-relaxed text-gray-600 md:text-xl">
                        L'alliance parfaite entre l'artisanat ivoirien et le design moderne.
                    </p>

                    <div className="pt-4">
                        <Link href="/collection">
                            <Button size="lg">Découvrir la Collection</Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Image with organic shape */}
                <motion.div
                    className="relative z-10 md:-ml-12"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-brand-secondary/20 blur-3xl" />

                        {/* Image */}
                        <Image
                            src="/images/hero-placeholder.jpg"
                            alt="Glory Cases - Étui à lunettes premium"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                </motion.div>
            </div>

            {/* Decorative element - Abstract shape */}
            <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />
        </section>
    );
}
