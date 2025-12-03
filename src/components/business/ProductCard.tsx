import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    category: string;
    tag?: "Nouveau" | "Best-Seller";
    className?: string;
}

export function ProductCard({
    title,
    price,
    image,
    category,
    tag,
    className,
}: ProductCardProps) {
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "XOF",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className={cn("group cursor-pointer", className)}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {tag && (
                    <div className="absolute left-3 top-3 z-10">
                        <Badge variant={tag === "Best-Seller" ? "bestseller" : "new"}>
                            {tag}
                        </Badge>
                    </div>
                )}
            </div>
            <div className="mt-4 space-y-1">
                <p className="text-sm text-gray-500">{category}</p>
                <h3 className="font-serif text-lg text-brand-secondary">{title}</h3>
                <p className="font-sans font-bold text-brand-primary">
                    {formatPrice(price)}
                </p>
            </div>
        </div>
    );
}
