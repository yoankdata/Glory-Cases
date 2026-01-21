import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ═══════════════════════════════════════════════════════════════════════════
// L'ATELIER - "Le Savoir-Faire"
// Page narrative sur le processus de fabrication
// ═══════════════════════════════════════════════════════════════════════════

export const metadata = {
    title: "L'Atelier",
    description: 'Découvrez notre atelier à Abidjan et le savoir-faire artisanal derrière chaque étui Glory Cases.',
}

export default function AtelierPage() {
    return (
        <div className="min-h-screen">
            {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════════════════ */}
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="min-h-[80vh] flex items-center justify-center px-6 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-terracotta mb-6">
                        Notre Histoire
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                        L&apos;Art de<br />
                        <span className="text-gradient">l&apos;Artisanat</span>
                    </h1>
                    <p className="text-xl text-petrol/70 max-w-2xl mx-auto">
                        Chaque étui Glory Cases naît dans notre atelier d&apos;Abidjan,
                        où tradition ivoirienne et design contemporain se rencontrent
                        pour créer des pièces uniques.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          PHILOSOPHY
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="font-mono text-sm uppercase tracking-[0.2em] text-terracotta mb-4">
                                Notre Philosophie
                            </p>
                            <h2 className="font-display text-4xl md:text-5xl mb-6">
                                L&apos;Afro-Minimalisme
                            </h2>
                            <p className="text-petrol/70 text-lg leading-relaxed mb-6 font-light">
                                L&apos;Afro-Minimalisme n&apos;est pas qu&apos;un style, c&apos;est une conversation.
                                C&apos;est le dialogue silencieux entre la flamboyance du Wax — héritage vibrant de nos mères —
                                et la rigueur absolue du design contemporain.
                            </p>
                            <p className="text-petrol/70 text-lg leading-relaxed font-light">
                                Chez Glory Cases, nous refusons de choisir entre tradition et modernité.
                                Nous sculptons des objets qui portent la mémoire d&apos;Abidjan tout en s&apos;intégrant
                                parfaitement dans une esthétique urbaine et mondiale.
                                <br /><br />
                                <span className="text-terracotta font-medium">L&apos;audace dans la retenue. L&apos;histoire dans le détail.</span>
                            </p>
                        </div>

                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-glass-xl">
                            <Image
                                loading="lazy"
                                src="/images/products/etui-wax-tribal.webp"
                                alt="Étui Glory Cases - Détail du travail artisanal"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-terracotta/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          PROCESSUS
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-petrol text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-4">
                            Le Processus
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl">
                            De la Matière à l&apos;Objet
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Étape 1 */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-display text-2xl text-gold group-hover:bg-gold group-hover:text-petrol transition-colors duration-500">
                                1
                            </div>
                            <h3 className="font-display text-xl mb-3 text-gold">Le Sourcing</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Nous sillonnons les marchés de Treichville et d&apos;Adjamé à la recherche de pagnes rares.
                                Seuls les motifs qui racontent une histoire sont retenus.
                            </p>
                        </div>

                        {/* Étape 2 */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-display text-2xl text-gold group-hover:bg-gold group-hover:text-petrol transition-colors duration-500">
                                2
                            </div>
                            <h3 className="font-display text-xl mb-3 text-gold">La Coupe</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Le placement du motif est étudié au millimètre. Rien n&apos;est aléatoire.
                                Chaque découpe vise à sublimer la géométrie naturelle du tissu.
                            </p>
                        </div>

                        {/* Étape 3 */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-display text-2xl text-gold group-hover:bg-gold group-hover:text-petrol transition-colors duration-500">
                                3
                            </div>
                            <h3 className="font-display text-xl mb-3 text-gold">L&apos;Assemblage</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Dans notre atelier de Cocody, nos artisans maroquiniers assemblent patiemment
                                la coque rigide, le velours de protection et l&apos;habillage extérieur.
                            </p>
                        </div>

                        {/* Étape 4 */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-display text-2xl text-gold group-hover:bg-gold group-hover:text-petrol transition-colors duration-500">
                                4
                            </div>
                            <h3 className="font-display text-xl mb-3 text-gold">La Signature</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Chaque pièce reçoit l&apos;emblème Glory doré à chaud.
                                L&apos;ultime sceau de qualité avant de rejoindre votre collection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          MATÉRIAUX
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-terracotta mb-4">
                            Nos Matières
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl">
                            L&apos;Excellence des Textures
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Wax */}
                        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md cursor-pointer">
                            <Image
                                loading="lazy"
                                src="/images/materials/wax.webp"
                                alt="Wax africain authentique"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-3xl mb-2">Le Wax</h3>
                                <p className="text-white/80">
                                    Tissu emblématique de l&apos;Afrique de l&apos;Ouest, aux motifs vibrants et uniques.
                                </p>
                            </div>
                        </div>

                        {/* Cuir */}
                        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md cursor-pointer">
                            <Image
                                loading="lazy"
                                src="/images/materials/cuir.webp"
                                alt="Cuir véritable artisanal"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-3xl mb-2">Le Cuir</h3>
                                <p className="text-white/80">
                                    Tanné naturellement, il gagne en caractère et en souplesse avec le temps.
                                </p>
                            </div>
                        </div>

                        {/* Raphia */}
                        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md cursor-pointer">
                            <Image
                                loading="lazy"
                                src="/images/materials/raphia.webp"
                                alt="Raphia naturel tressé"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-3xl mb-2">Le Raphia</h3>
                                <p className="text-white/80">
                                    Fibre tressée à la main, héritée du savoir-faire des artisans ivoiriens.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          VALEURS
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-sand-300">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-terracotta mb-4">
                            Nos Engagements
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl">
                            Plus qu&apos;un Accessoire
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-card p-8">
                            <h3 className="font-display text-2xl mb-4 text-terracotta">🌍 Local & Éthique</h3>
                            <p className="text-petrol/70">
                                100% fabriqué en Côte d&apos;Ivoire, nos artisans sont rémunérés
                                justement et travaillent dans des conditions dignes.
                            </p>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="font-display text-2xl mb-4 text-terracotta">♻️ Durable</h3>
                            <p className="text-petrol/70">
                                Matériaux naturels, packaging recyclable, objets conçus
                                pour durer des années.
                            </p>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="font-display text-2xl mb-4 text-terracotta">✨ Unique</h3>
                            <p className="text-petrol/70">
                                Grâce aux variations naturelles du Wax, chaque étui
                                est une pièce unique au monde.
                            </p>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="font-display text-2xl mb-4 text-terracotta">🤝 Humain</h3>
                            <p className="text-petrol/70">
                                Chaque commande est un échange. Nous vous accompagnons
                                personnellement de A à Z.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 text-center">
                <h2 className="font-display text-4xl md:text-5xl mb-6">
                    Découvrez nos Créations
                </h2>
                <p className="text-petrol/70 text-lg max-w-md mx-auto mb-8">
                    Chaque pièce est le fruit de ce savoir-faire unique.
                </p>
                <Link href="/collection" className="btn-gold">
                    Voir la Collection
                </Link>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
