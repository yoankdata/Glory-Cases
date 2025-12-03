"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-40 w-full border-b transition-all duration-500 ${isScrolled
                    ? "border-gray-200/50 bg-white/70 backdrop-blur-xl shadow-sm"
                    : "border-transparent bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="text-brand-secondary hover:text-brand-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Menu</span>
                    </button>
                </div>

                {/* Logo */}
                <div className="flex flex-1 justify-center md:justify-start">
                    <Link
                        href="/"
                        className="font-serif text-2xl font-bold text-brand-secondary"
                    >
                        GLORY CASES
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:gap-x-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-brand-secondary hover:text-brand-primary"
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/collection"
                        className="text-sm font-medium text-brand-secondary hover:text-brand-primary"
                    >
                        Collection
                    </Link>
                    <Link
                        href="/atelier"
                        className="text-sm font-medium text-brand-secondary hover:text-brand-primary"
                    >
                        L'Atelier
                    </Link>
                    <Link
                        href="/pro"
                        className="text-sm font-medium text-brand-secondary hover:text-brand-primary"
                    >
                        Pro
                    </Link>
                </div>

                {/* Cart */}
                <div className="flex justify-end md:flex-1">
                    <button className="group -m-2 flex items-center p-2">
                        <ShoppingBag
                            className="h-6 w-6 flex-shrink-0 text-brand-secondary group-hover:text-brand-primary"
                            aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-brand-secondary group-hover:text-brand-primary">
                            0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            href="/"
                            className="block rounded-md px-3 py-2 text-base font-medium text-brand-secondary hover:bg-gray-50 hover:text-brand-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/collection"
                            className="block rounded-md px-3 py-2 text-base font-medium text-brand-secondary hover:bg-gray-50 hover:text-brand-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Collection
                        </Link>
                        <Link
                            href="/atelier"
                            className="block rounded-md px-3 py-2 text-base font-medium text-brand-secondary hover:bg-gray-50 hover:text-brand-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            L'Atelier
                        </Link>
                        <Link
                            href="/pro"
                            className="block rounded-md px-3 py-2 text-base font-medium text-brand-secondary hover:bg-gray-50 hover:text-brand-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pro
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
