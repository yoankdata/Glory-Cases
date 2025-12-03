import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/business/ProductCard";
import { PRODUCTS } from "@/lib/products";

export function BestSellers() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
                <SectionTitle title="Nos Incontournables" align="center" />
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {PRODUCTS.slice(0, 4).map((product) => (
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
        </section>
    );
}
