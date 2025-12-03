"use client";

export function TextMarquee() {
    const text = "LIVRAISON PARTOUT À ABIDJAN • PAIEMENT À LA LIVRAISON • ARTISANAT PREMIUM";

    return (
        <div className="relative overflow-hidden bg-brand-secondary py-2 text-white">
            <div className="flex animate-marquee whitespace-nowrap">
                <span className="mx-4 text-sm font-medium tracking-wider">
                    {text} • {text} • {text}
                </span>
            </div>
        </div>
    );
}
