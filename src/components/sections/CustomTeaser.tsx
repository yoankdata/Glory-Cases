import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CustomTeaser() {
    return (
        <section className="bg-brand-secondary py-24 text-center">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
                    Envie d'unique ? Créez votre étui sur-mesure.
                </h2>
                <p className="mb-10 text-lg text-gray-300">
                    Choisissez vos matériaux, vos couleurs et ajoutez vos initiales pour un accessoire qui vous ressemble vraiment.
                </p>
                <Link href="/atelier">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-secondary">
                        Personnaliser mon étui
                    </Button>
                </Link>
            </div>
        </section>
    );
}
