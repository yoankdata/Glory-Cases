'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const linkClasses = (path: string) => `
        transition-colors duration-300 relative
        ${pathname === path ? 'text-terracotta' : 'text-petrol hover:text-terracotta'}
    `

    return (
        <nav className="fixed top-0 left-0 right-0 z-nav px-4 py-4 md:px-12 bg-sand/80 backdrop-blur-md border-b border-petrol/5 transition-all duration-300">
            <div className="relative z-50 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-display text-2xl md:text-3xl text-petrol hover:text-terracotta transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Glory<span className="text-gold">.</span>
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
                    <Link href="/atelier" className={linkClasses('/atelier')}>
                        L&apos;Atelier
                    </Link>
                    <Link href="/collection" className={linkClasses('/collection')}>
                        Collection
                    </Link>
                    <Link href="/pro" className={linkClasses('/pro')}>
                        Espace Pro
                    </Link>
                    <Link
                        href={WHATSAPP_URL}
                        target="_blank"
                        className="btn-gold btn-sm"
                    >
                        Commander
                    </Link>
                </div>

                {/* Menu Burger Mobile */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-petrol transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-4 h-0.5 bg-petrol transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-petrol transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-overlay bg-sand/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300 md:hidden">
                    <Link href="/" className="font-display text-4xl text-petrol hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        Accueil
                    </Link>
                    <Link href="/atelier" className="font-display text-4xl text-petrol hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        L&apos;Atelier
                    </Link>
                    <Link href="/collection" className="font-display text-4xl text-petrol hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        Collection
                    </Link>
                    <Link href="/pro" className="font-display text-4xl text-petrol hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        Espace Pro
                    </Link>
                </div>
            )}
        </nav>
    )
}
