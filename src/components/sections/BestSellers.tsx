"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/business/ProductCard";
import { PRODUCTS } from "@/lib/products";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Délai entre chaque carte
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1], // Cubic bezier pour un effet "lourd" et premium
        },
    },
};

export function BestSellers() {
    const ref = useRef(null);
    // L'animation se déclenche quand 20% de la section est visible, une seule fois
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="bg-brand-canvas py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* En-tête de section avec animation simple */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row"
                >
                    <div className="w-full text-center md:w-auto md:text-left">
                        <SectionTitle title="Nos Incontournables" />
                        <p className="mt-4 max-w-md text-gray-500 font-sans text-sm leading-relaxed mx-auto md:mx-0">
                            Les favoris de notre communauté. Une sélection d&apos;étuis alliant
                            protection optimale et esthétique artisanale.
                        </p>
                    </div>

                    {/* Lien "Voir tout" Desktop - Discret et élégant */}
                    <Link
                        href="/collection"
                        className="group hidden items-center gap-2 border-b border-transparent pb-1 text-xs font-bold uppercase tracking-widest text-brand-secondary transition-all hover:border-brand-primary hover:text-brand-primary md:flex"
                    >
                        Voir la collection
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Grille Produits avec Animation Cascade */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {PRODUCTS.slice(0, 4).map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <ProductCard
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                tag={product.tag}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bouton Mobile uniquement */}
                <div className="mt-12 flex justify-center md:hidden">
                    <Link href="/collection">
                        <button className="text-sm font-bold uppercase tracking-widest text-brand-secondary underline decoration-gray-300 underline-offset-4 transition-colors hover:text-brand-primary">
                            Voir toute la collection
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}