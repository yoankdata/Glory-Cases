import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MessageCircle, PenTool, TrendingDown, HeartHandshake } from "lucide-react";

export default function EntreprisePage() {
    const whatsappMessage = encodeURIComponent(
        "Bonjour, je souhaite un devis pour une commande entreprise."
    );
    const whatsappLink = `https://wa.me/22507000000?text=${whatsappMessage}`; // Replace with actual number

    return (
        <div className="min-h-screen bg-brand-canvas">
            {/* Hero B2B */}
            <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-placeholder.jpg" // Ideally a meeting/office image
                        alt="Espace Pro"
                        fill
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 max-w-4xl px-4 text-center text-white">
                    <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
                        Offrez l'excellence artisanale à vos partenaires.
                    </h1>
                    <p className="mb-8 text-xl text-gray-200">
                        Cadeaux d'affaires, événements, dotations : marquez les esprits avec
                        des produits uniques, faits main à Abidjan.
                    </p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-brand-secondary hover:bg-gray-100">
                            Demander un devis Pro
                        </Button>
                    </a>
                </div>
            </section>

            {/* Arguments */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-3">
                        {/* Arg 1 */}
                        <div className="text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                                <PenTool className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-bold text-brand-secondary">
                                Personnalisation Logo
                            </h3>
                            <p className="text-gray-600">
                                Nous gravons ou marquons votre logo sur nos étuis pour une
                                visibilité élégante et durable de votre marque.
                            </p>
                        </div>

                        {/* Arg 2 */}
                        <div className="text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                                <TrendingDown className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-bold text-brand-secondary">
                                Tarifs Dégressifs
                            </h3>
                            <p className="text-gray-600">
                                Profitez de conditions avantageuses sur les commandes en volume.
                                Plus vous commandez, plus vous économisez.
                            </p>
                        </div>

                        {/* Arg 3 */}
                        <div className="text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                                <HeartHandshake className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-bold text-brand-secondary">
                                Soutien Local
                            </h3>
                            <p className="text-gray-600">
                                En choisissant nos produits, vous soutenez directement
                                l'artisanat ivoirien et l'économie locale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="bg-brand-secondary py-16 text-center text-white">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="mb-6 font-serif text-3xl">
                        Prêt à collaborer ?
                    </h2>
                    <p className="mb-8 text-gray-300">
                        Discutons de votre projet directement sur WhatsApp. Réponse rapide garantie.
                    </p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="whatsapp" size="lg" className="gap-2">
                            <MessageCircle className="h-5 w-5" />
                            Demander un devis Pro
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
