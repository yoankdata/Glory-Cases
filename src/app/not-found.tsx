import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-sand text-petrol flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-6">
                <div className="text-center max-w-lg">
                    {/* 404 stylisé */}
                    <p className="font-display text-[12rem] md:text-[16rem] leading-none text-petrol/10 select-none">
                        404
                    </p>

                    {/* Contenu */}
                    <div className="-mt-20 relative z-10">
                        <h1 className="font-display text-4xl md:text-5xl mb-4">
                            Page introuvable
                        </h1>
                        <p className="text-petrol/60 mb-8">
                            Oups ! Cette page semble s&apos;être égarée...
                            Comme nos étuis, chaque chemin est unique.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/" className="btn-gold">
                                Retour à l&apos;accueil
                            </Link>
                            <Link href="/collection" className="btn-outline">
                                Voir la Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
