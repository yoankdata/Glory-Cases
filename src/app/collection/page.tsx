'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { products, formatPrice, type Product } from '@/lib/products'

// ═══════════════════════════════════════════════════════════════════════════
// 1. COMPOSANTS UI (Cartes, Nav, etc.)
// ═══════════════════════════════════════════════════════════════════════════

// Simplification : Plus besoin de prop 'size', on utilise un ratio standard
function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="group relative block w-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-glass-xl hover:-translate-y-1"
        >
            {/* Conteneur Image avec Ratio standard 3/4 (Portrait) */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand/20">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-petrol/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge Nouveau */}
                {product.new && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-gold text-white text-[10px] font-mono uppercase tracking-widest rounded-sm z-10 shadow-sm">
                        Nouveau
                    </span>
                )}
            </div>

            {/* Informations Produit (En dessous de l'image pour un look plus classique/propre) */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                    <div>
                        <span className="text-xs text-petrol/50 font-mono uppercase tracking-wider mb-1 block">
                            {product.materialLabel}
                        </span>
                        <h3 className="font-display text-xl text-petrol group-hover:text-terracotta transition-colors">
                            {product.title}
                        </h3>
                    </div>
                    <p className="font-mono text-gold font-bold">
                        {formatPrice(product.price)}
                    </p>
                </div>
                <p className="text-sm text-petrol/60 line-clamp-1">
                    {product.subtitle}
                </p>
            </div>
        </Link>
    )
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. LOGIQUE CLIENT (Filtres & Grille)
// ═══════════════════════════════════════════════════════════════════════════

type FilterType = 'all' | 'simple' | 'double' | 'bijou' | 'perso';

function CollectionFeed() {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredProducts = useMemo(() => {
        if (activeFilter === 'all') return products;

        // Filtre par type de produit basé sur le prix et le materialLabel
        switch (activeFilter) {
            case 'simple':
                // Étuis simples à 5000 FCFA
                return products.filter(p => p.price === 5000);
            case 'double':
                // Double tissu / Wax à 10000 FCFA (exclut bijou/cauri)
                return products.filter(p =>
                    p.price === 10000 &&
                    !p.materialLabel.toLowerCase().includes('bijou') &&
                    !p.materialLabel.toLowerCase().includes('cauri')
                );
            case 'bijou':
                // Bijou ou Cauri à 10000 FCFA
                return products.filter(p =>
                    p.price === 10000 &&
                    (p.materialLabel.toLowerCase().includes('bijou') ||
                        p.materialLabel.toLowerCase().includes('cauri'))
                );
            case 'perso':
                // Personnalisation (gravure) à 15000 FCFA
                return products.filter(p => p.price === 15000);
            default:
                return products;
        }
    }, [activeFilter]);

    return (
        <>
            {/* Barre de Filtres Sticky */}
            <section className="sticky top-[70px] z-40 bg-sand/95 backdrop-blur-md border-b border-petrol/5 py-4 mb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-petrol/40 mr-2 hidden md:inline">
                            Catégorie :
                        </span>

                        <FilterButton
                            label="Tout voir"
                            isActive={activeFilter === 'all'}
                            onClick={() => setActiveFilter('all')}
                        />
                        <FilterButton
                            label="Étui Simple"
                            colorClass="from-slate-400 to-slate-300"
                            isActive={activeFilter === 'simple'}
                            onClick={() => setActiveFilter('simple')}
                        />
                        <FilterButton
                            label="Double Tissu"
                            colorClass="from-terracotta to-gold"
                            isActive={activeFilter === 'double'}
                            onClick={() => setActiveFilter('double')}
                        />
                        <FilterButton
                            label="Bijou & Cauri"
                            colorClass="from-amber-500 to-yellow-400"
                            isActive={activeFilter === 'bijou'}
                            onClick={() => setActiveFilter('bijou')}
                        />
                        <FilterButton
                            label="Personnalisation"
                            colorClass="from-amber-800 to-amber-600"
                            isActive={activeFilter === 'perso'}
                            onClick={() => setActiveFilter('perso')}
                        />
                    </div>
                </div>
            </section>

            {/* Grille Produits Conventionnelle */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-32 text-center">
                            <p className="font-display text-2xl text-petrol/30">Aucune pièce disponible dans cette matière.</p>
                            <button
                                onClick={() => setActiveFilter('all')}
                                className="mt-4 text-terracotta underline hover:text-gold transition-colors font-mono text-sm"
                            >
                                Voir toute la collection
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

function FilterButton({ label, colorClass, isActive, onClick }: { label: string, colorClass?: string, isActive: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`group flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-wider rounded-full transition-all duration-300 border
                ${isActive
                    ? 'bg-petrol border-petrol text-white shadow-md transform scale-105'
                    : 'bg-white border-petrol/10 text-petrol/70 hover:border-terracotta hover:text-terracotta'
                }`}
        >
            {colorClass && (
                <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${colorClass} ${isActive ? 'ring-2 ring-white/30' : ''}`}></span>
            )}
            {label}
        </button>
    )
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. PAGE PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════

export default function CollectionPage() {
    return (
        <div className="min-h-screen bg-sand">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-12 px-6 bg-sand">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-terracotta mb-6">
                        Artisanat d'exception
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl mb-8 text-petrol">
                        La Collection
                    </h1>
                    <p className="text-lg text-petrol/70 max-w-2xl mx-auto leading-relaxed">
                        Découvrez nos créations uniques, façonnées à la main.
                        Une fusion entre tradition artisanale et design contemporain.
                    </p>
                </div>
            </section>

            <CollectionFeed />

            <CtaSection />
            <Footer />
        </div>
    )
}

function CtaSection() {
    return (
        <section className="py-24 px-6 bg-petrol text-white text-center rounded-t-[3rem] mx-2 lg:mx-6 shadow-2xl shadow-petrol/20">
            <h2 className="font-display text-3xl md:text-5xl mb-6">Coup de cœur ?</h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto text-lg">
                Nous sommes disponibles pour vous conseiller et personnaliser votre commande.
            </p>
            <Link
                href="https://wa.me/22507756297"
                target="_blank"
                className="inline-block bg-gold text-petrol px-10 py-4 font-mono font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 rounded-sm"
            >
                Commander sur WhatsApp
            </Link>
        </section>
    )
}