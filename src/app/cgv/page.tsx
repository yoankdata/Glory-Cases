import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
    title: 'Conditions Générales de Vente',
    description: 'Conditions régissant les ventes de produits Glory Cases.',
}

export default function CGV() {
    return (
        <div className="min-h-screen bg-sand text-petrol">
            <Navbar />

            <main className="pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl md:text-5xl mb-12 text-center">Conditions Générales de Vente</h1>

                    <div className="space-y-12 font-light text-sm md:text-base">
                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">1. Objet</h2>
                            <p className="leading-relaxed">
                                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Glory Cases et ses clients.
                                Toute commande passée via notre site ou par contact direct implique l&apos;acceptation sans réserve de ces conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">2. Produits Artisanaux</h2>
                            <p className="leading-relaxed">
                                Nos produits sont <strong>fabriqués à la main</strong> à Abidjan.
                                En raison de la nature artisanale de notre production et des motifs variables du tissu Wax (qui changent selon la coupe),
                                chaque pièce est unique. Les photos présentées sur le site sont non contractuelles : le placement exact des motifs peut varier légèrement d&apos;un article à l&apos;autre.
                                C&apos;est ce qui fait le charme et l&apos;exclusivité de votre Glory Case.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">3. Commandes & Prix</h2>
                            <p className="leading-relaxed mb-4">
                                Les prix sont indiqués en FCFA (XOF). Glory Cases se réserve le droit de modifier ses prix à tout moment.
                            </p>
                            <p className="leading-relaxed">
                                La validation de la commande s&apos;effectue actuellement via WhatsApp ou email. La vente n&apos;est considérée comme définitive qu&apos;après confirmation de la disponibilité du produit et, le cas échéant, réception du paiement.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">4. Livraison</h2>
                            <p className="leading-relaxed">
                                Les livraisons sont assurées principalement sur Abidjan dans un délai de 24h à 72h ouvrables après validation de la commande.
                                Pour les expéditions nationales ou internationales, les frais et délais seront communiqués au client avant validation.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">5. Retours & Échanges</h2>
                            <p className="leading-relaxed">
                                Le client dispose d&apos;un délai de 7 jours après réception pour signaler un défaut de fabrication.
                                Les produits personnalisés ou sur-mesure ne sont ni repris ni échangés, sauf défaut avéré.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
