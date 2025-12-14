import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { products, getFeaturedProducts, formatPrice } from '@/lib/products'

// ═══════════════════════════════════════════════════════════════════════════
// HOMEPAGE - "L'Immersion"
// Concept: Scrollytelling luxueux avec hero vidéo, manifeste, et teaser collection
// ═══════════════════════════════════════════════════════════════════════════

export default function HomePage() {
    const featuredProducts = getFeaturedProducts()

    return (
        <div className="relative">
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION - Centré & Minimaliste (Stable)
           ═══════════════════════════════════════════════════════════════════ */}
            {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION - Centré & Minimaliste (Stable)
           ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">

                {/* Décoration d'arrière-plan subtile */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-terracotta/5 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl opacity-30" />
                </div>

                {/* Contenu Principal */}
                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    {/* En-tête Textuel */}
                    <div className="mb-12 animate-fade-up">
                        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-terracotta mb-6">
                            Artisanat d&apos;Abidjan
                        </p>
                        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-petrol mb-8 leading-none">
                            Habillons<br />
                            <span className="text-gradient">votre regard</span>
                        </h1>
                        <p className="font-light text-lg md:text-2xl text-petrol/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                            L&apos;élégance de l&apos;Afro-Minimalisme.
                            <span className="hidden md:inline"> Des étuis à lunettes uniques, façonnés à la main entre tradition et modernité.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/collection" className="btn-gold w-full sm:w-auto min-w-[200px]">
                                Découvrir
                            </Link>
                            <Link href="/atelier" className="btn-outline w-full sm:w-auto min-w-[200px]">
                                Le Savoir-Faire
                            </Link>
                        </div>
                    </div>

                    {/* Image Hero Stable */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <Image
                            src="/images/hero-etui.jpg"
                            alt="Collection Glory Cases - Étui en Wax"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 90vw"
                        />
                        {/* Overlay léger pour l'ambiance */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-petrol/20 to-transparent" />
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          MANIFESTE - Texte révélé au scroll
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
                        <span className="text-petrol">Nous ne fabriquons pas des étuis.</span>
                        <br />
                        <span className="text-terracotta">Nous habillons votre regard.</span>
                    </h2>

                    <div className="divider my-12 max-w-xs mx-auto" />

                    <p className="text-lg md:text-xl text-petrol/70 max-w-2xl mx-auto leading-relaxed">
                        Chaque étui Glory Cases est une pièce unique, confectionnée à la main
                        dans notre atelier d&apos;Abidjan. Nous sélectionnons les plus beaux Wax,
                        les cuirs les plus nobles, pour créer des accessoires qui racontent
                        l&apos;histoire de tout un continent.
                    </p>

                    <p className="mt-6 text-base text-terracotta/80 font-medium">
                        ✨ Personnalisation disponible : prénom, message ou logo gravé sur demande.
                    </p>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 font-mono text-sm">
                        <div className="text-center">
                            <p className="text-4xl font-display text-terracotta">7 jours</p>
                            <p className="text-petrol/60 uppercase tracking-wider">Délai de fabrication</p>
                        </div>
                        {/* Divider: Horizontal on mobile, vertical on desktop */}
                        <div className="w-16 h-px bg-petrol/10 md:w-px md:h-16" />
                        <div className="text-center">
                            <p className="text-4xl font-display text-terracotta">100%</p>
                            <p className="text-petrol/60 uppercase tracking-wider">Fait Main</p>
                        </div>
                        <div className="w-16 h-px bg-petrol/10 md:w-px md:h-16" />
                        <div className="text-center">
                            <p className="text-4xl font-display text-terracotta">Unique</p>
                            <p className="text-petrol/60 uppercase tracking-wider">Chaque Pièce</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          TEASER COLLECTION - Marquee Horizontal
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 overflow-hidden bg-petrol">
                <div className="mb-12 text-center">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-4">
                        Nos Créations
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl text-white">
                        La Collection
                    </h2>
                </div>

                {/* Marquee infini */}
                <div className="relative flex overflow-x-hidden">
                    <div className="flex animate-marquee">
                        {[...featuredProducts, ...featuredProducts, ...featuredProducts, ...featuredProducts].map((product, index) => (
                            <Link
                                key={`${product.id}-${index}`}
                                href={`/product/${product.slug}`}
                                className="group relative flex-shrink-0 w-[280px] md:w-[350px] mr-8"
                            >
                                <div className="relative aspect-product rounded-2xl overflow-hidden">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay au hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-petrol/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Badge Nouveau */}
                                    {product.new && (
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-mono uppercase rounded-full">
                                            Nouveau
                                        </span>
                                    )}

                                    {/* Info produit */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-display text-xl">{product.title}</h3>
                                        <p className="font-mono text-sm text-gold">{formatPrice(product.price)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link href="/collection" className="btn-gold">
                        Voir Toute la Collection
                    </Link>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          SECTION MATIÈRES
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-terracotta mb-4">
                            L&apos;Excellence des Matériaux
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl">
                            Nos Matières Nobles
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Wax */}
                        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                            <Image
                                src="/images/materials/wax.jpg"
                                alt="Wax africain"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-2xl mb-2">Le Wax</h3>
                                <p className="text-white/80 text-sm">
                                    Tissu emblématique aux motifs vibrants, chaque pièce raconte une histoire unique.
                                </p>
                            </div>
                        </div>

                        {/* Cuir */}
                        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                            <Image
                                src="/images/materials/cuir.jpg"
                                alt="Cuir véritable"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-2xl mb-2">Le Cuir</h3>
                                <p className="text-white/80 text-sm">
                                    Cuir tanné traditionnellement, souple et résistant pour une durabilité exceptionnelle.
                                </p>
                            </div>
                        </div>

                        {/* Raphia */}
                        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                            <Image
                                src="/images/materials/raphia.jpg"
                                alt="Raphia naturel"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-2xl mb-2">Le Raphia</h3>
                                <p className="text-white/80 text-sm">
                                    Fibre naturelle tressée à la main, légère et écologique pour un style bohème.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          ILS NOUS FONT CONFIANCE - Logos Partenaires
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-24 px-6 bg-sand-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-terracotta mb-4">
                            Nos Partenaires
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl text-petrol">
                            Ils nous font confiance
                        </h2>
                    </div>

                    {/* Logos des partenaires */}
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                        <div className="relative w-40 h-24 md:w-48 md:h-28 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
                            <Image
                                src="/images/partners/optic-bel-vue.jpg"
                                alt="Optic Bel Vue - Partenaire Glory Cases"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-40 h-24 md:w-48 md:h-28 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
                            <Image
                                src="/images/partners/select-optic.png"
                                alt="Select Optic - Partenaire Glory Cases"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          ESPACE PRO TEASER
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-petrol text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-4">
                        Pour les Entreprises
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        Cadeaux d&apos;Affaires Premium
                    </h2>
                    <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                        Offrez à vos collaborateurs et clients des étuis personnalisés à l&apos;image de votre marque.
                        Gravure logo, packaging luxe, livraison internationale.
                    </p>
                    <Link href="/pro" className="btn-gold">
                        Demander un Devis
                    </Link>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════ */}
            <Footer />
        </div>
    )
}
