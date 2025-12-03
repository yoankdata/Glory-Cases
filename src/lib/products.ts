export interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    image: string;
    tag?: "Nouveau" | "Best-Seller";
    description?: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        title: "L'Assinie",
        price: 15000,
        category: "Collection Plage",
        image: "/images/product-1.jpg",
        tag: "Best-Seller",
        description: "Tressage naturel et cauris véritable. L'accessoire indispensable de vos week-ends balnéaires. Inspiré par les plages dorées d'Assinie, cet étui allie la robustesse du cuir vegan à la douceur du velours.",
    },
    {
        id: "2",
        title: "Le Plateau Chic",
        price: 18000,
        category: "Collection Business",
        image: "/images/product-2.jpg",
        tag: "Nouveau",
        description: "Un cuir vegan texturé, sobre et élégant. Conçu pour les professionnels qui exigent l'excellence au quotidien.",
    },
    {
        id: "3",
        title: "Wax Original",
        price: 12000,
        category: "Collection Tradition",
        image: "/images/product-3.jpg",
        description: "L'authenticité du Wax ivoirien. Des motifs vibrants pour ceux qui portent fièrement leur héritage.",
    },
    {
        id: "4",
        title: "Le Babi",
        price: 14000,
        category: "Collection Urbaine",
        image: "/images/product-4.jpg",
        description: "L'énergie d'Abidjan dans un design moderne. Robuste, stylé et prêt pour l'aventure urbaine.",
    },
    {
        id: "5",
        title: "Le Diplomate",
        price: 20000,
        category: "Collection Prestige",
        image: "/images/product-5.jpg",
        description: "Un denim brut rehaussé d'une bande Wax discrète. Idéal pour vos rendez-vous au Plateau.",
    },
];
