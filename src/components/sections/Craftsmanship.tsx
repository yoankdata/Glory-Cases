import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Craftsmanship() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <SectionTitle title="Savoir-Faire d'Exception" align="center" />
                </div>

                <div className="space-y-24">
                    {/* Block 1: Finitions Main */}
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                        <div className="relative h-64 w-full overflow-hidden rounded-card lg:h-96 lg:w-1/2">
                            <Image
                                src="/images/craft-1.jpg"
                                alt="Couture main"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12">
                            <h3 className="mb-4 font-serif text-2xl text-brand-secondary">
                                Cousu main à Cocody
                            </h3>
                            <p className="text-lg text-gray-600">
                                Chaque étui est assemblé à la main par nos artisans qualifiés à Abidjan.
                                Nous portons une attention obsessionnelle aux détails, des coutures renforcées
                                aux finitions en Raphia tressé, pour garantir une durabilité exceptionnelle.
                            </p>
                        </div>
                    </div>

                    {/* Block 2: Protection Velours */}
                    <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
                        <div className="relative h-64 w-full overflow-hidden rounded-card lg:h-96 lg:w-1/2">
                            <Image
                                src="/images/craft-2.jpg"
                                alt="Doublure velours"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pr-12">
                            <h3 className="mb-4 font-serif text-2xl text-brand-secondary">
                                Doublure velours anti-rayures
                            </h3>
                            <p className="text-lg text-gray-600">
                                L'intérieur de nos étuis est doublé d'un velours doux et protecteur.
                                Il préserve vos verres des rayures et de la poussière, offrant un écrin
                                de douceur à vos lunettes précieuses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
