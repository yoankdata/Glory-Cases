"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

// Data for the horizontal scroll section
const STEPS = [
    {
        id: "01",
        title: "La Sélection",
        desc: "Le toucher est notre premier guide. Nous ne retenons que les motifs Wax les plus vibrants et les cuirs vegan les plus souples.",
        image: "/images/craft-1.jpg",
    },
    {
        id: "02",
        title: "La Découpe",
        desc: "Une précision chirurgicale pour respecter le droit fil du tissu. Chaque pièce est taillée pour maximiser l'impact visuel du motif.",
        image: "/images/craft-2.jpg",
    },
    {
        id: "03",
        title: "L'Assemblage",
        desc: "Couture main, point par point. La rencontre de la rigidité protectrice et de la douceur du velours intérieur.",
        image: "/images/product-detail-1.jpg",
    },
    {
        id: "04",
        title: "L'Âme",
        desc: "Les finitions au fer chaud, le contrôle qualité rigoureux. C'est ici que l'objet devient une pièce d'exception.",
        image: "/images/product-detail-2.jpg",
    },
];

export default function AtelierPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform vertical scroll to horizontal movement
    // We have 4 items, so we need to move enough to show them all.
    // Adjusting the output range based on the number of items and viewport width.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <div className="bg-brand-canvas">
            {/* Hero Section 'Manifeste' */}
            <HeroManifesto />

            {/* Section 'Le Geste' (Horizontal Scroll) */}
            <section ref={containerRef} className="relative h-[400vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-brand-secondary text-white">
                    <div className="absolute left-12 top-12 z-10 md:left-24">
                        <h2 className="font-serif text-xl font-bold uppercase tracking-widest text-brand-accent">
                            Le Geste
                        </h2>
                    </div>

                    <motion.div style={{ x }} className="flex gap-12 px-12 md:gap-32 md:px-24">
                        {STEPS.map((step) => (
                            <div
                                key={step.id}
                                className="relative h-[70vh] w-[85vw] shrink-0 md:w-[60vw] lg:w-[45vw]"
                            >
                                <div className="group relative h-full w-full overflow-hidden rounded-lg bg-white shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 p-8 md:p-12">
                                        <span className="absolute -top-20 left-4 font-serif text-[12rem] font-bold leading-none text-white/10 md:-top-32 md:left-8 md:text-[16rem]">
                                            {step.id}
                                        </span>
                                        <h3 className="relative font-serif text-4xl font-bold md:text-5xl">
                                            {step.title}
                                        </h3>
                                        <p className="relative mt-6 max-w-md text-lg text-gray-200 md:text-xl">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 'Matières' (Grille Parallaxe) */}
            <ParallaxGrid />

            {/* Footer CTA */}
            <section className="flex min-h-[60vh] flex-col items-center justify-center bg-brand-canvas px-4 text-center">
                <h2 className="mb-12 text-balance font-serif text-5xl text-brand-secondary md:text-7xl">
                    Possédez une pièce d'histoire.
                </h2>
                <Link href="/collection">
                    <MagneticButton>
                        <Button
                            size="lg"
                            className="h-16 rounded-full px-12 text-lg"
                        >
                            Voir la Collection
                        </Button>
                    </MagneticButton>
                </Link>
            </section>
        </div>
    );
}

function HeroManifesto() {
    const sentence = "Dans le silence de l'atelier, chaque geste compte. Nous ne fabriquons pas seulement des étuis, nous façonnons des héritages.";
    const words = sentence.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.2 },
        },
    };

    const child: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="flex min-h-[80vh] items-center justify-center px-6 py-32 md:px-12">
            <div className="max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 font-sans text-sm font-bold uppercase tracking-[0.3em] text-brand-primary"
                >
                    L'Art du Détail
                </motion.p>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-serif text-4xl font-medium leading-tight text-brand-secondary md:text-6xl lg:text-7xl"
                >
                    {words.map((word, index) => (
                        <motion.span key={index} variants={child}>
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>
        </section>
    );
}

function ParallaxGrid() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={ref} className="mx-auto max-w-7xl px-6 py-32 md:px-12">
            <div className="mb-24 text-center">
                <h2 className="font-serif text-4xl text-brand-secondary md:text-5xl">
                    Matières Nobles
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                {/* Column 1 - Cuir */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/product-detail-1.jpg"
                            alt="Cuir Vegan"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <p className="font-serif text-xl italic text-brand-secondary">Cuir Vegan</p>
                </motion.div>

                {/* Column 2 - Wax (Faster parallax) */}
                <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:mt-24">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/product-detail-2.jpg"
                            alt="Wax Hollandais"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <p className="font-serif text-xl italic text-brand-secondary">Wax Hollandais</p>
                </motion.div>

                {/* Column 3 - Raphia */}
                <motion.div style={{ y: y3 }} className="flex flex-col gap-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/product-detail-3.jpg"
                            alt="Raphia Naturel"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <p className="font-serif text-xl italic text-brand-secondary">Raphia Naturel</p>
                </motion.div>
            </div>
        </section>
    );
}
