import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-brand-primary text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold">GLORY CASES</h3>
                        <p className="text-sm text-gray-300">L'excellence artisanale ivoirienne</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider">
                            Liens Rapides
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/mentions-legales" className="text-sm text-gray-300 hover:text-white">
                                    Mentions Légales
                                </Link>
                            </li>
                            <li>
                                <Link href="/cgv" className="text-sm text-gray-300 hover:text-white">
                                    CGV
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Payments */}
                    <div>
                        <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider">
                            Paiements Sécurisés
                        </h3>
                        <p className="text-sm text-gray-300">
                            Wave, Orange Money, Visa
                        </p>
                        {/* Placeholders for payment icons could go here */}
                        <div className="mt-4 flex gap-2">
                            {/* <div className="h-8 w-12 rounded bg-white/10"></div>
               <div className="h-8 w-12 rounded bg-white/10"></div>
               <div className="h-8 w-12 rounded bg-white/10"></div> */}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-center text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} Glory Cases. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
