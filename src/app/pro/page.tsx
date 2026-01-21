import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ═══════════════════════════════════════════════════════════════════════════
// ESPACE PRO - "Le Cadeau d'Affaires"
// Page B2B sobre sur fond bleu pétrole
// ═══════════════════════════════════════════════════════════════════════════

export const metadata = {
    title: 'Espace Pro',
    description: 'Cadeaux d\'affaires premium personnalisés. Étuis à lunettes avec gravure logo pour vos collaborateurs et clients.',
}

export default function ProPage() {
    const whatsappUrl = `https://wa.me/22507756297?text=${encodeURIComponent(
        "Bonjour Glory Cases ! 👔\n\nJe représente une entreprise et je souhaite en savoir plus sur vos offres de cadeaux d'affaires personnalisés.\n\n📌 Entreprise : \n📦 Quantité estimée : \n📧 Email pro : \n\nMerci de me recontacter."
    )}`

    return (
        <div className="min-h-screen bg-petrol text-white">
            {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════════════════ */}
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-6">
                        Solutions Corporate
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                        Cadeaux d&apos;Affaires<br />
                        <span className="text-gold">Premium</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                        Offrez à vos collaborateurs et clients des étuis artisanaux personnalisés
                        à l&apos;image de votre marque. Une attention unique qui valorise
                        votre identité et vos relations professionnelles.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={whatsappUrl} target="_blank" className="btn-gold">
                            Demander un Devis
                        </Link>
                        <a href="#services" className="btn-outline border-white/30 text-white hover:bg-white hover:text-petrol">
                            Découvrir nos Services
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════════════════════════════════ */}
            <section id="services" className="py-32 px-6 bg-petrol-600">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-4">
                            Notre Offre Corporate
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl">
                            Services sur Mesure
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Personnalisation */}
                        <div className="glass-card bg-white/5 border-white/10 p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center text-3xl">
                                ✨
                            </div>
                            <h3 className="font-display text-2xl text-white mb-4">Personnalisation</h3>
                            <p className="text-white/60">
                                Gravure de votre logo, choix des couleurs corporate,
                                étiquette personnalisée à l&apos;intérieur de l&apos;étui.
                            </p>
                        </div>

                        {/* Packaging */}
                        <div className="glass-card bg-white/5 border-white/10 p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center text-3xl">
                                🎁
                            </div>
                            <h3 className="font-display text-2xl text-white mb-4">Packaging Luxe</h3>
                            <p className="text-white/60">
                                Coffret cadeau premium, ruban satiné, carte de vœux personnalisée.
                                Une présentation à la hauteur de votre image.
                            </p>
                        </div>

                        {/* Volume */}
                        <div className="glass-card bg-white/5 border-white/10 p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center text-3xl">
                                📦
                            </div>
                            <h3 className="font-display text-2xl text-white mb-4">Livraison Internationale</h3>
                            <p className="text-white/60">
                                À partir de 15 étuis, livraison internationale disponible.
                                Délai de fabrication : 1 semaine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          CLIENTS LOGOS
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-8">
                        Ils nous font confiance
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                        <div className="relative w-40 h-24 md:w-48 md:h-28 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
                            <Image
                                loading="lazy"
                                src="/images/partners/optic-bel-vue.webp"
                                alt="Optic Bel Vue - Partenaire Glory Cases"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-40 h-24 md:w-48 md:h-28 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
                            <Image
                                loading="lazy"
                                src="/images/partners/select-optic.webp"
                                alt="Select Optic - Partenaire Glory Cases"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          TARIFS
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-petrol-700">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold mb-4">
                            Commandes Groupées
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl">
                            Nos Formules Pro
                        </h2>
                        <p className="text-white/60 mt-4">
                            À partir de 20 pièces, bénéficiez d&apos;une remise sur l&apos;ensemble de votre commande
                        </p>
                        <p className="text-gold mt-2 font-mono text-sm">Délai de fabrication : 1 semaine</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Formule Standard */}
                        <div className="border border-white/20 rounded-3xl p-8 hover:border-gold/50 transition-colors">
                            <h3 className="font-mono text-sm uppercase tracking-wider text-gold mb-4">Standard</h3>
                            <p className="text-white/70 mb-6">Choisissez parmi notre collection existante</p>

                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Étui au choix dans la collection
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Personnalisation prénom ou message
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Pochon coton Glory Cases
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Livraison internationale (dès 15 pièces)
                                </li>
                            </ul>
                        </div>

                        {/* Formule Premium */}
                        <div className="border-2 border-gold rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-gold text-petrol px-3 py-1 text-xs font-mono uppercase rounded-full">
                                Sur-Mesure
                            </div>

                            <h3 className="font-mono text-sm uppercase tracking-wider text-gold mb-4">Premium</h3>
                            <p className="text-white/70 mb-6">Personnalisation complète à votre image</p>

                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Étui Double Tissu, Bijou ou Gravure
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Gravure logo entreprise
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Coffret cadeau personnalisé
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Carte de vœux incluse
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-gold">✓</span> Livraison internationale incluse
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-center text-white/50 mt-8 text-sm">
                        Contactez-nous pour recevoir un devis personnalisé adapté à vos besoins
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        Prêt à offrir l&apos;exception ?
                    </h2>
                    <p className="text-xl text-white/70 mb-12">
                        Contactez-nous pour discuter de votre projet.
                        Nous vous enverrons un devis personnalisé sous 24h.
                    </p>

                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        className="btn-gold inline-flex items-center gap-3"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Demander un Prototype
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
