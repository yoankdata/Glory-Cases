// ═══════════════════════════════════════════════════════════════════════════
// GLORY CASES - Données Produits (Mock Data)
// Ces données seront remplacées par Sanity.io ultérieurement
// ═══════════════════════════════════════════════════════════════════════════

export interface Product {
    id: string
    slug: string
    title: string
    subtitle: string
    description: string
    price: number
    currency: string
    material: 'wax' | 'cuir' | 'raphia' | 'textile'
    materialLabel: string
    colors: string[]
    images: string[]
    featured: boolean
    new: boolean
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'heritage-cowrie',
        title: 'Héritage Cauri',
        subtitle: 'L\'Étui Signature',
        description: `Une pièce de caractère qui marie l'authenticité du Wax aux lignes graphiques noires et blanches.
La bande ocre structure l'ensemble, sublimée par un cauri naturel posé à la main.
Le mariage parfait entre design contemporain et matière noble.`,
        price: 35000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: ['Noir', 'Blanc', 'Ocre'],
        images: ['/images/products/etui-cowrie-tribal.jpg'],
        featured: true,
        new: true,
    },
    {
        id: '2',
        slug: 'geo-lagoon',
        title: 'Lagune Géométrique',
        subtitle: 'Lignes Cinétiques',
        description: `Un jeu visuel captivant où les motifs géométriques bleus rencontrent des touches orangées vibrantes.
Cet étui apporte une note de fraîcheur et de modernité à votre quotidien.
Une esthétique pop et soignée pour les amateurs de couleurs franches.`,
        price: 28000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Textile Graphique',
        colors: ['Bleu Cyan', 'Blanc', 'Orange'],
        images: ['/images/products/etui-geo-blue.jpg'],
        featured: true,
        new: true,
    },
    {
        id: '3',
        slug: 'kente-royal',
        title: 'Kente Royal',
        subtitle: 'Tissage d\'Exception',
        description: `Inspiré par la complexité des tissages Akan, cet étui révèle une richesse de détails colorés.
Les teintes vertes et or s'entremêlent avec précision pour un rendu visuel sophistiqué.
Plus qu'un accessoire, une pièce d'artisanat qui a du sens.`,
        price: 32000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Type Kente',
        colors: ['Vert', 'Or', 'Rouge'],
        images: ['/images/products/etui-kente-finish.jpg'],
        featured: true,
        new: true,
    },
    {
        id: '4',
        slug: 'terra-signature',
        title: 'Terra Signature',
        subtitle: 'Nuances Minérales',
        description: `Une palette chaleureuse dominée par des tons rouille et terre de Sienne.
Le motif abstrait évoque une texture organique, réhaussée par la signature Glory dorée.
Un accessoire sobre et élégant qui traverse les saisons.`,
        price: 30000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Wax',
        colors: ['Rouille', 'Brun', 'Noir'],
        images: ['/images/products/etui-terra-logo.jpg'],
        featured: false,
        new: false,
    },
    {
        id: '5',
        slug: 'midnight-prestige',
        title: 'Midnight Prestige',
        subtitle: 'Le Noir Intemporel',
        description: `L'essentiel, sans superflu. Un noir profond et texturé pour une allure résolument chic.
Le logo doré vient signer cette pièce minimaliste avec subtilité.
L'accessoire ultime pour accompagner toutes vos tenues.`,
        price: 25000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: ['Noir', 'Or'],
        images: ['/images/products/etui-black-minimal.jpg'],
        featured: false,
        new: false,
    },
]

// Fonction pour formater le prix en FCFA
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
}

// Fonction pour obtenir un produit par son slug
export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug)
}

// Fonction pour obtenir les produits vedettes
export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured)
}

// Fonction pour filtrer par matière
export function getProductsByMaterial(material: Product['material']): Product[] {
    return products.filter((p) => p.material === material)
}
