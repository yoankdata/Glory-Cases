"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Material {
    id: string;
    name: string;
    image?: string;
    color?: string;
}

interface MaterialSelectorProps {
    materials: Material[];
    selectedId: string;
    onSelect: (id: string) => void;
}

export function MaterialSelector({
    materials,
    selectedId,
    onSelect,
}: MaterialSelectorProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {materials.map((material) => (
                <button
                    key={material.id}
                    onClick={() => onSelect(material.id)}
                    className={cn(
                        "relative h-12 w-12 overflow-hidden rounded-full transition-all hover:scale-110 focus:outline-none",
                        selectedId === material.id
                            ? "ring-2 ring-brand-primary ring-offset-2"
                            : "ring-1 ring-gray-200"
                    )}
                    title={material.name}
                >
                    {material.image ? (
                        <Image
                            src={material.image}
                            alt={material.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div
                            className="h-full w-full"
                            style={{ backgroundColor: material.color }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
