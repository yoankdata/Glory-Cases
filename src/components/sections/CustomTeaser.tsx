"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton"; // Assurez-vous d'avoir créé ce composant (Étape 2)

export function CustomTeaser() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Suivi du scroll pour l'effet parallaxe
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Le contenu monte légèrement plus vite que le scroll pour un effet de "détachement"
    const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
    // L'opacité diminue légèrement en sortant de l'écran vers le haut
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-brand-secondary py-32 lg:py-48"
        >
            {/* Fond Atmosphérique (Glow Effect) */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <div className="h-[500px] w-[500px] rounded-full bg-brand-accent blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6">
                <motion.div
                    style={{ y, opacity }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Titre Éditorial */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                        className="font-serif text-5xl font-medium leading-[1.1] text-white md:text-7xl lg:text-8xl"
                    >
                        L&apos;Unique, <br />
                        <span className="italic text-brand-accent">c&apos;est vous.</span>
                    </motion.h2>

                    {/* Sous-titre */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="mt-8 max-w-xl text-lg font-light leading-relaxed text-gray-300 md:text-xl"
                    >
                        Devenez l&apos;architecte de votre style. Sélectionnez vos cuirs,
                        vos motifs et gravez vos initiales pour un objet qui ne ressemble qu&apos;à vous.
                    </motion.p>

                    {/* CTA Magnétique */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12"
                    >
                        <Link href="/atelier">
                            <MagneticButton>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group h-auto border-white/20 bg-transparent px-8 py-6 text-base text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-brand-secondary"
                                >
                                    Personnaliser mon étui
                                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Button>
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}