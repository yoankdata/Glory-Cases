import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-brand-secondary md:text-5xl">
                Oups, cette page s'est égarée.
            </h1>
            <p className="mb-8 text-lg text-gray-600">
                Il semble que le chemin que vous avez emprunté n'existe plus.
            </p>
            <Link href="/">
                <Button size="lg">Retour à l'accueil</Button>
            </Link>
        </div>
    );
}
