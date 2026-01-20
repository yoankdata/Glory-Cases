import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-petrol/10 bg-sand">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="font-display text-3xl text-petrol">
                            Glory<span className="text-gold">.</span>
                        </Link>
                        <p className="mt-4 text-petrol/60 max-w-sm">
                            Étuis à lunettes artisanaux faits main à Abidjan.
                            L&apos;Afro-Minimalisme au service de votre regard.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-mono text-sm uppercase tracking-wider text-petrol mb-4">Navigation</h4>
                        <ul className="space-y-2 text-petrol/70">
                            <li><Link href="/collection" className="hover:text-terracotta transition-colors">Collection</Link></li>
                            <li><Link href="/atelier" className="hover:text-terracotta transition-colors">L&apos;Atelier</Link></li>
                            <li><Link href="/pro" className="hover:text-terracotta transition-colors">Espace Pro</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-mono text-sm uppercase tracking-wider text-petrol mb-4">Contact</h4>
                        <ul className="space-y-2 text-petrol/70">
                            <li>Abidjan, Côte d&apos;Ivoire</li>
                            <li>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-petrol/5 flex flex-col md:flex-row justify-between items-center text-sm text-petrol/40">
                    <p>© 2025 Glory Cases. Tous droits réservés.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/mentions-legales" className="hover:text-petrol">Mentions Légales</Link>
                        <Link href="/cgv" className="hover:text-petrol">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
