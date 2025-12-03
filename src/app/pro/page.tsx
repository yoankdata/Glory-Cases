"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Mail, MessageCircle, Gift, Users, PenTool } from "lucide-react";

export default function ProPage() {
    return (
        <div className="bg-brand-canvas">
            <HeroBusiness />
            <TrustMarquee />
            <ServicesExpanding />
            <ImpactSection />
            <ContactVIP />
        </div>
    );
}

// --- Hero Section 'Business Class' ---
function HeroBusiness() {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 40; // Movement range
        const yPos = (clientY / innerHeight - 0.5) * 40;
        x.set(xPos);
        y.set(yPos);
    }

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-secondary text-white"
        >
            <div className="relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.3em] text-brand-accent"
                >
                    Glory Cases Corporate
                </motion.p>

                <motion.h1
                    style={{ x: mouseX, y: mouseY }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 font-serif text-6xl font-medium md:text-8xl lg:text-9xl"
                >
                    L'Art d'Offrir
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="https://wa.me/22507000000?text=Bonjour,%20je%20souhaite%20contacter%20le%20service%20conciergerie.">
                        <MagneticButton>
                            <Button
                                size="lg"
                                className="bg-white text-brand-secondary hover:bg-gray-100 border-none px-8 py-6 text-lg"
                            >
                                Contacter le Service Conciergerie
                            </Button>
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/noise.png')" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-secondary/50 to-brand-secondary" />
        </section>
    );
}

// --- Section 'Confiance' (Infinite Marquee) ---
function TrustMarquee() {
    const companies = ["ORANGE", "MTN", "CANAL+", "SOCIÉTÉ GÉNÉRALE", "WAVE", "AIR CÔTE D'IVOIRE", "CIE", "SODECI"];

    return (
        <section className="border-b border-gray-100 bg-white py-12">
            <p className="mb-8 text-center font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
                Ils nous font confiance
            </p>
            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    className="flex whitespace-nowrap"
                >
                    {[...companies, ...companies].map((company, index) => (
                        <span
                            key={index}
                            className="mx-12 font-serif text-2xl font-bold text-gray-200 md:text-4xl"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// --- Section 'Services' (Expanding Cards) ---
const SERVICES = [
    {
        id: 1,
        title: "Cadeaux d'Affaires",
        desc: "Remerciez vos partenaires avec une pièce d'exception qui restera sur leur bureau.",
        icon: Gift,
        image: "/images/product-detail-1.jpg",
    },
    {
        id: 2,
        title: "Événements",
        desc: "Séminaires, galas, lancements. Offrez un souvenir tangible de vos moments forts.",
        icon: Users,
        image: "/images/product-detail-2.jpg",
    },
    {
        id: 3,
        title: "Personnalisation",
        desc: "Gravure laser, marquage à chaud. Votre logo sublimé sur nos cuirs et bois.",
        icon: PenTool,
        image: "/images/product-detail-3.jpg",
    },
];

function ServicesExpanding() {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="font-serif text-4xl text-brand-secondary md:text-5xl">
                    Services Exclusifs
                </h2>
            </div>

            <div className="flex flex-col gap-4 md:h-[600px] md:flex-row">
                {SERVICES.map((service) => (
                    <motion.div
                        key={service.id}
                        layout
                        onClick={() => setActiveId(service.id)}
                        onHoverStart={() => setActiveId(service.id)}
                        className={`relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 ease-out ${activeId === service.id ? "md:flex-[3]" : "md:flex-[1]"
                            } h-[400px] md:h-auto`}
                    >
                        {/* Background Image */}
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className={`object-cover transition-transform duration-700 ${activeId === service.id ? "scale-100 grayscale-0" : "scale-110 grayscale"
                                }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="relative p-8 text-white">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 font-serif text-2xl font-bold md:text-3xl">
                                {service.title}
                            </h3>
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: activeId === service.id ? 1 : 0,
                                    height: activeId === service.id ? "auto" : 0
                                }}
                                className="overflow-hidden text-gray-200"
                            >
                                {service.desc}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// --- Section 'Impact' (Split Screen) ---
function ImpactSection() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Image with Reveal */}
                <div className="relative h-[60vh] md:h-auto">
                    <motion.div
                        initial={{ scaleX: 1 }}
                        whileInView={{ scaleX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="absolute inset-0 z-20 origin-right bg-brand-canvas"
                    />
                    <Image
                        src="/images/craft-1.jpg"
                        alt="Artisanat Local"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center px-8 py-24 md:px-24 md:py-32">
                    <p className="mb-6 font-sans text-sm font-bold uppercase tracking-widest text-brand-primary">
                        Impact RSE
                    </p>
                    <h2 className="mb-8 font-serif text-4xl leading-tight text-brand-secondary md:text-5xl">
                        Soutenez l'excellence locale.
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        Choisir Glory Cases pour vos cadeaux d'entreprise, c'est faire le choix d'un impact direct.
                        Chaque commande soutient nos artisans à Abidjan, valorise le savoir-faire ivoirien
                        et utilise des matériaux sourcés localement.
                    </p>
                    <div className="flex gap-8">
                        <div>
                            <span className="block font-serif text-4xl font-bold text-brand-secondary">100%</span>
                            <span className="text-sm text-gray-500">Made in Abidjan</span>
                        </div>
                        <div>
                            <span className="block font-serif text-4xl font-bold text-brand-secondary">0%</span>
                            <span className="text-sm text-gray-500">Plastique</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Section 'Contact VIP' ---
function ContactVIP() {
    return (
        <section className="flex min-h-[70vh] flex-col items-center justify-center bg-brand-secondary px-4 text-center text-white">
            <div className="max-w-2xl">
                <h2 className="mb-8 font-serif text-5xl md:text-6xl">
                    Parlons de votre projet.
                </h2>
                <p className="mb-12 text-xl text-gray-300">
                    Notre équipe Conciergerie est dédiée aux professionnels.
                    Réponse garantie sous 2 heures.
                </p>

                <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                    <Link href="https://wa.me/22507000000">
                        <MagneticButton>
                            <Button size="lg" className="h-16 gap-3 rounded-full bg-[#25D366] px-8 text-lg hover:bg-[#20bd5a] border-none text-white">
                                <MessageCircle className="h-6 w-6" />
                                WhatsApp Direct
                            </Button>
                        </MagneticButton>
                    </Link>

                    <Link href="mailto:pro@glorycases.com">
                        <MagneticButton>
                            <Button variant="outline" size="lg" className="h-16 gap-3 rounded-full border-white/20 px-8 text-lg text-white hover:bg-white/10">
                                <Mail className="h-6 w-6" />
                                pro@glorycases.com
                            </Button>
                        </MagneticButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
