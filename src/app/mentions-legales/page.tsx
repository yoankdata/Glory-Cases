import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
    title: 'Mentions Légales',
    description: 'Mentions légales et informations juridiques de Glory Cases.',
}

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-sand text-petrol">
            <Navbar />

            <main className="pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl md:text-5xl mb-12 text-center">Mentions Légales</h1>

                    <div className="space-y-12 font-light">
                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">1. Éditeur du Site</h2>
                            <p className="leading-relaxed">
                                Le site <strong>www.glorycases.com</strong> est édité par la société <strong>BLONE</strong>.<br />
                                Siège social : Cocody, Abidjan, Côte d&apos;Ivoire.<br />
                                Téléphone / WhatsApp : +225 07 75 62 97
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">2. Hébergement</h2>
                            <p className="leading-relaxed">
                                Le site est hébergé par <strong>Vercel Inc.</strong><br />
                                340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">3. Propriété Intellectuelle</h2>
                            <p className="leading-relaxed">
                                L&apos;ensemble de ce site relève de la législation ivoirienne et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-mono text-sm uppercase tracking-widest text-terracotta mb-4">4. Protection des Données (RGPD/CDP)</h2>
                            <p className="leading-relaxed">
                                Les informations recueillies sur ce site (via WhatsApp ou formulaires) sont destinées exclusivement à Glory Cases pour le traitement de vos commandes.
                                Conformément à la loi relative à la protection des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de modification, de rectification et de suppression des données qui vous concernent.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
