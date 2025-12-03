"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
    { href: "/", label: "Accueil" },
    { href: "/collection", label: "Collection" },
    { href: "/atelier", label: "L'Atelier" },
    { href: "/pro", label: "Pro" },
];

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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
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
                            onClick={() => setIsMenuOpen(true)}
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
                        {menuLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
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
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1], // Custom Bézier curve
                        }}
                        className="fixed inset-0 z-50 bg-brand-secondary md:hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute right-6 top-6 text-white hover:text-brand-accent transition-colors"
                        >
                            <X className="h-8 w-8" />
                            <span className="sr-only">Fermer le menu</span>
                        </button>

                        {/* Menu Content */}
                        <div className="flex h-full flex-col items-center justify-center">
                            <nav className="space-y-8">
                                {menuLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.1 + index * 0.1, // Staggered animation
                                            duration: 0.5,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block font-serif text-5xl font-bold text-white hover:text-brand-accent transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="absolute bottom-12 text-center"
                            >
                                <p className="text-sm text-white/60">
                                    Fait main à Abidjan
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
