"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/business/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { cn } from "@/lib/utils";

// Extended mock data for the grid
const ALL_PRODUCTS = [
    ...PRODUCTS,
    {
        id: "6",
        title: "Le Bassam",
        price: 16000,
        category: "Collection Plage",
        image: "/images/product-1.jpg",
        tag: "Nouveau" as const,
    },
    {
        id: "7",
        title: "L'Executive",
        price: 22000,
        category: "Collection Business",
        image: "/images/product-2.jpg",
    },
    {
        id: "8",
        title: "Wax Spirit",
        price: 13000,
        category: "Collection Tradition",
        image: "/images/product-3.jpg",
    },
];

const FILTERS = [
    { id: "all", label: "Tous" },
    { id: "wax", label: "Wax" },
    { id: "jean", label: "Jean" },
    { id: "raphia", label: "Raphia" },
    { id: "simili", label: "Simili" },
];

export default function CollectionPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    // Simple filter logic (mocking real filtering based on title/category/desc)
    const filteredProducts = ALL_PRODUCTS.filter((product) => {
        if (activeFilter === "all") return true;
        const searchString =
            `${product.title} ${product.category} ${product.description || ""}`.toLowerCase();
        return searchString.includes(activeFilter.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-brand-canvas pb-24 pt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <SectionTitle title="Notre Collection" align="center" />
                    <p className="mt-4 text-lg text-gray-600">
                        Des pièces uniques pour tous les styles
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all",
                                activeFilter === filter.id
                                    ? "bg-brand-secondary text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            tag={product.tag}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-lg text-gray-500">
                            Aucun produit ne correspond à ce filtre pour le moment.
                        </p>
                        <button
                            onClick={() => setActiveFilter("all")}
                            className="mt-4 font-medium text-brand-primary hover:underline"
                        >
                            Voir toute la collection
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
