import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductZoom from '@/components/product/ProductZoom'
import { products, getProductBySlug, formatPrice } from '@/lib/products'

// ═══════════════════════════════════════════════════════════════════════════
// FICHE PRODUIT - "L'Objet"
// Layout sticky avec image fixe et contenu défilant
// ═══════════════════════════════════════════════════════════════════════════

// Génération des routes statiques pour tous les produits
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }))
}

// Métadonnées dynamiques basées sur le produit
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        return { title: 'Produit non trouvé' }
    }

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: `${product.title} | Glory Cases`,
            description: product.subtitle,
            images: [product.images[0]],
        },
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        notFound()
    }

    // Message WhatsApp pré-rempli
    const whatsappMessage = encodeURIComponent(
        `Bonjour Glory Cases ! 👋\n\nJe souhaite commander :\n📦 Modèle : ${product.title}\n🎨 Matière : ${product.materialLabel}\n💰 Prix : ${formatPrice(product.price)}\n\nMerci de me confirmer la disponibilité !`
    )
    const whatsappUrl = `https://wa.me/22507756297?text=${whatsappMessage}`

    // Trouver des produits similaires (même matière)
    const similarProducts = products
        .filter((p) => p.material === product.material && p.id !== product.id)
        .slice(0, 3)

    return (
        <div className="min-h-screen">
            {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════════════════ */}
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════════
          BREADCRUMB
          ═══════════════════════════════════════════════════════════════════ */}
            <div className="pt-24 pb-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <nav className="font-mono text-sm text-petrol/60">
                        <Link href="/" className="hover:text-terracotta transition-colors">Accueil</Link>
                        <span className="mx-2">/</span>
                        <Link href="/collection" className="hover:text-terracotta transition-colors">Collection</Link>
                        <span className="mx-2">/</span>
                        <span className="text-petrol">{product.title}</span>
                    </nav>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════
          CONTENU PRODUIT - Layout Sticky
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Image Sticky */}
                        <div className="lg:sticky lg:top-28 lg:h-fit">
                            <ProductZoom
                                src={product.images[0]}
                                alt={product.title}
                                badges={
                                    <>
                                        {product.new && (
                                            <span className="px-4 py-2 bg-gold text-white text-xs font-mono uppercase rounded-full">
                                                Nouveau
                                            </span>
                                        )}
                                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-petrol text-xs font-mono uppercase rounded-full">
                                            {product.materialLabel}
                                        </span>
                                    </>
                                }
                            />


                        </div>

                        {/* Détails Produit */}
                        <div className="space-y-8">
                            {/* En-tête */}
                            <div>
                                <p className="font-mono text-sm uppercase tracking-[0.2em] text-terracotta mb-2">
                                    {product.materialLabel}
                                </p>
                                <h1 className="font-display text-4xl md:text-5xl mb-3">
                                    {product.title}
                                </h1>
                                <p className="text-xl text-petrol/70">
                                    {product.subtitle}
                                </p>
                            </div>

                            {/* Prix */}
                            <div className="flex items-baseline gap-4">
                                <p className="font-display text-4xl text-terracotta">
                                    {formatPrice(product.price)}
                                </p>
                            </div>

                            <div className="divider" />

                            {/* Description */}
                            <div>
                                <h2 className="font-mono text-sm uppercase tracking-wider text-petrol mb-4">
                                    L&apos;Histoire
                                </h2>
                                <p className="text-petrol/80 leading-relaxed whitespace-pre-line">
                                    {product.description}
                                </p>
                            </div>

                            <div className="divider" />

                            {/* Couleurs */}
                            <div>
                                <h2 className="font-mono text-sm uppercase tracking-wider text-petrol mb-4">
                                    Palette de Couleurs
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <span
                                            key={color}
                                            className="px-4 py-2 bg-white/80 border border-petrol/10 rounded-full text-sm text-petrol"
                                        >
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="divider" />

                            {/* Caractéristiques */}
                            <div>
                                <h2 className="font-mono text-sm uppercase tracking-wider text-petrol mb-4">
                                    Caractéristiques
                                </h2>
                                <ul className="space-y-3 text-petrol/80">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        100% Fait main à Abidjan
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        Intérieur doublé en velours
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        Convient à toutes les montures
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        Pièce unique — Motif variable
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Principal */}
                            <div className="pt-4 space-y-4">
                                <Link
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-gold w-full text-center flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Commander via WhatsApp
                                </Link>

                                <p className="text-center text-sm text-petrol/50">
                                    Paiement sécurisé
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          PRODUITS SIMILAIRES
          ═══════════════════════════════════════════════════════════════════ */}
            {similarProducts.length > 0 && (
                <section className="py-20 px-6 bg-sand-300">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-3xl text-center mb-12">
                            Vous aimerez aussi
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {similarProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/product/${p.slug}`}
                                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-glass"
                                >
                                    <Image
                                        src={p.images[0]}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-petrol/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                                        <h3 className="font-display text-xl">{p.title}</h3>
                                        <p className="font-mono text-gold">{formatPrice(p.price)}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════════
          CTA MOBILE FIXE
          ═══════════════════════════════════════════════════════════════════ */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-petrol/10 z-40 lg:hidden">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="font-display text-lg">{product.title}</p>
                        <p className="font-mono text-gold-700">{formatPrice(product.price)}</p>
                    </div>
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        className="btn-gold py-3 px-6 text-sm"
                    >
                        Commander
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
