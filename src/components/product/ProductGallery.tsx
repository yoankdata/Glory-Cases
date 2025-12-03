"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Mobile: Horizontal Scroll Snap */}
            <div className="relative flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:hidden">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative h-[400px] w-[85vw] flex-shrink-0 snap-center overflow-hidden rounded-card bg-gray-100"
                    >
                        <Image
                            src={src}
                            alt={`Product image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
                {/* Dots Indicator */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-2 w-2 rounded-full transition-colors",
                                index === activeImage ? "bg-brand-primary" : "bg-gray-300"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative overflow-hidden rounded-card bg-gray-100",
                            index === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"
                        )}
                    >
                        <Image
                            src={src}
                            alt={`Product image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
