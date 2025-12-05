"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

interface CraftBlockProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    isReversed?: boolean;
    index: number;
}

function CraftBlock({
    title,
    description,
    imageSrc,
    imageAlt,
    isReversed = false,
    index,
}: CraftBlockProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Hook pour suivre le scroll relative à ce bloc spécifique
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Effet Parallaxe : l'image bouge verticalement à l'intérieur de son cadre
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    // Effet de zoom subtil au scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "flex flex-col gap-12 lg:items-center",
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
        >
            {/* Image Section avec Masque de Reveal */}
            <div className="relative w-full lg:w-1/2">
                {/* Numéro Décoratif en Arrière-plan */}
                <span className={cn(
                    "absolute -top-16 z-0 font-serif text-[120px] leading-none font-bold text-brand-primary/10 select-none hidden lg:block",
                    isReversed ? "-right-12" : "-left-12"
                )}>
                    0{index}
                </span>

                <motion.div
                    className="relative z-10 overflow-hidden rounded-card"
                    style={{ aspectRatio: "4/5" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Conteneur animé pour la parallaxe */}
                    <motion.div
                        style={{ y, scale, height: "130%", top: "-15%" }}
                        className="absolute inset-0 w-full"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h3 className="mb-6 font-serif text-3xl text-brand-secondary md:text-4xl lg:text-5xl">
                        {title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600 md:text-xl font-light">
                        {description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export function Craftsmanship() {
    return (
        <section className="bg-brand-canvas py-24 lg:py-40 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-24 lg:mb-40 flex justify-center">
                    <SectionTitle title="Savoir-Faire d'Exception" align="center" />
                </div>

                <div className="space-y-32 lg:space-y-48">
                    <CraftBlock
                        index={1}
                        title="Cousu main à Cocody"
                        description="Chaque étui est assemblé à la main par nos artisans qualifiés à Abidjan. Nous portons une attention obsessionnelle aux détails, des coutures renforcées aux finitions en Raphia tressé, pour garantir une durabilité exceptionnelle."
                        imageSrc="/images/craft-1.jpg"
                        imageAlt="Artisan cousant un étui à la main"
                    />

                    <CraftBlock
                        index={2}
                        isReversed
                        title="Doublure velours"
                        description="L'intérieur de nos étuis est doublé d'un velours doux et protecteur. Il préserve vos verres des rayures et de la poussière, offrant un écrin de douceur à vos lunettes précieuses."
                        imageSrc="/images/craft-2.jpg"
                        imageAlt="Intérieur en velours doux"
                    />
                </div>
            </div>
        </section>
    );
}