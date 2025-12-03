import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/product/ProductGallery";
import { MaterialSelector } from "@/components/business/MaterialSelector";
import { MessageCircle, Truck, ShieldCheck, Info } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

// Mock Data
// Mock Data
const PRODUCT = {
    name: "L'Assinie",
    price: 15000,
    description:
        "Tressage naturel et cauris véritable. L'accessoire indispensable de vos week-ends balnéaires. Inspiré par les plages dorées d'Assinie, cet étui allie la robustesse du cuir vegan à la douceur du velours.",
    images: [
        "/images/product-1.jpg",
        "/images/product-detail-1.jpg",
        "/images/product-detail-2.jpg",
        "/images/product-detail-3.jpg",
    ],
    materials: [
        { id: "1", name: "Terracotta", color: "#C06C54" },
        { id: "2", name: "Indigo", color: "#2C3E50" },
        { id: "3", name: "Sable", color: "#E5D3B3" },
    ],
};

export default function ProductPage() {
    const whatsappLink = generateWhatsAppLink(PRODUCT.name, PRODUCT.price);

    return (
        <div className="min-h-screen pb-24 md:pb-12">
            <div className="mx-auto max-w-7xl px-0 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                    {/* Left Column: Gallery */}
                    <div className="px-4 md:px-0">
                        <ProductGallery images={PRODUCT.images} />
                    </div>

                    {/* Right Column: Info (Sticky on Desktop) */}
                    <div className="px-4 md:sticky md:top-24 md:h-fit md:px-0">
                        <div className="mb-6 space-y-2">
                            <Badge variant="new">Nouveau</Badge>
                            <h1 className="text-balance font-serif text-3xl text-brand-secondary md:text-4xl">
                                {PRODUCT.name}
                            </h1>
                            <p className="font-sans text-xl font-bold text-brand-primary">
                                {new Intl.NumberFormat("fr-FR", {
                                    style: "currency",
                                    currency: "XOF",
                                    minimumFractionDigits: 0,
                                }).format(PRODUCT.price)}
                            </p>
                        </div>

                        {/* Material Selector */}
                        <div className="mb-8">
                            <h3 className="mb-3 text-sm font-medium text-gray-900">
                                Couleur
                            </h3>
                            <MaterialSelector
                                materials={PRODUCT.materials}
                                selectedId="1"
                                onSelect={() => { }}
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-8 space-y-4 border-t border-gray-100 pt-6">
                            <h3 className="font-serif text-lg text-brand-secondary">
                                Le mot de l'artisan
                            </h3>
                            <p className="text-gray-600">{PRODUCT.description}</p>
                        </div>

                        {/* Accordions (Simplified) */}
                        <div className="space-y-4 border-t border-gray-100 pt-6">
                            <div className="flex items-start gap-3">
                                <Truck className="mt-1 h-5 w-5 text-brand-primary" />
                                <div>
                                    <h4 className="font-medium text-gray-900">Livraison</h4>
                                    <p className="text-sm text-gray-500">
                                        Expédition sous 24h à Abidjan.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="mt-1 h-5 w-5 text-brand-primary" />
                                <div>
                                    <h4 className="font-medium text-gray-900">Garantie</h4>
                                    <p className="text-sm text-gray-500">
                                        Satisfait ou remboursé sous 7 jours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Action Button */}
                        <div className="mt-8 hidden md:block">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <Button variant="whatsapp" className="w-full gap-2" size="lg">
                                    <MessageCircle className="h-5 w-5" />
                                    Commander sur WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Action Bar */}
            <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-100 bg-white p-4 shadow-lg md:hidden">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" className="w-full gap-2" size="lg">
                        <MessageCircle className="h-5 w-5" />
                        Commander sur WhatsApp
                    </Button>
                </a>
            </div>
        </div>
    );
}
