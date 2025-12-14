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
                                La validation de la commande s&apos;effectue via WhatsApp (+225 07 75 62 97). La vente n&apos;est considérée comme définitive qu&apos;après confirmation de la disponibilité du produit et réception du paiement.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">4. Délai de Fabrication & Livraison</h2>
                            <p className="leading-relaxed mb-4">
                                Le <strong>délai de fabrication est d&apos;environ 1 semaine</strong> à compter de la validation de la commande.
                            </p>
                            <p className="leading-relaxed mb-4">
                                Les livraisons sont assurées sur Abidjan. Les frais de livraison sont à la charge du client et communiqués avant validation.
                            </p>
                            <p className="leading-relaxed">
                                Pour les <strong>livraisons internationales</strong> : disponibles à partir de 15 étuis. Les frais et délais seront communiqués sur devis.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">5. Personnalisation</h2>
                            <p className="leading-relaxed">
                                La personnalisation (prénom, message ou logo gravé) est disponible sur demande.
                                Les produits personnalisés ne sont ni repris ni échangés, sauf défaut de fabrication avéré.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">6. Retours & Échanges</h2>
                            <p className="leading-relaxed">
                                Le client dispose d&apos;un délai de 7 jours après réception pour signaler un défaut de fabrication.
                                En cas de défaut avéré, un échange ou remboursement sera proposé.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
