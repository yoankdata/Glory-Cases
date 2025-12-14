'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const linkClasses = (path: string) => `
        transition-colors duration-300 relative
        ${pathname === path ? 'text-terracotta' : 'text-petrol hover:text-terracotta'}
    `

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 bg-sand/80 backdrop-blur-md border-b border-petrol/5 transition-all duration-300">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-display text-2xl md:text-3xl text-petrol hover:text-terracotta transition-colors"
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
                        href="https://wa.me/22507756297"
                        target="_blank"
                        className="btn-gold text-xs py-2 px-4"
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

            {/* Mobile Menu Dropdown (Basic Implementation) */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-sand border-b border-petrol/10 p-6 flex flex-col gap-4 shadow-xl animate-fade-in">
                    <Link href="/" className={linkClasses('/')} onClick={() => setIsMobileMenuOpen(false)}>
                        Accueil
                    </Link>
                    <Link href="/atelier" className={linkClasses('/atelier')} onClick={() => setIsMobileMenuOpen(false)}>
                        L&apos;Atelier
                    </Link>
                    <Link href="/collection" className={linkClasses('/collection')} onClick={() => setIsMobileMenuOpen(false)}>
                        Collection
                    </Link>
                    <Link href="/pro" className={linkClasses('/pro')} onClick={() => setIsMobileMenuOpen(false)}>
                        Espace Pro
                    </Link>
                </div>
            )}
        </nav>
    )
}
