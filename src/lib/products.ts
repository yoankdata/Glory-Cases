// ═══════════════════════════════════════════════════════════════════════════
// GLORY CASES - Données Produits (Mock Data)
// Ces données seront remplacées par Sanity.io ultérieurement
// ═══════════════════════════════════════════════════════════════════════════
// GRILLE TARIFAIRE :
// - 5 000 FCFA : Étui simple
// - 10 000 FCFA : Étui deux tissus / bijou / cauri
// - 15 000 FCFA : Étui personnalisé (gravure)
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
    // ═══════════════════════════════════════════════════════════════════════
    // PRODUITS VEDETTES (featured: true)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '1',
        slug: 'heritage-cowrie',
        title: 'Héritage Cauri',
        subtitle: "L'Étui Signature",
        description: `Une pièce de caractère qui marie l'authenticité du Wax aux lignes graphiques noires et blanches.
La bande ocre structure l'ensemble, sublimée par un cauri naturel posé à la main.
Le mariage parfait entre design contemporain et matière noble.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: ['Noir', 'Blanc', 'Ocre'],
        images: ['/images/products/etui-cowrie-tribal.webp'],
        featured: true,
        new: false,
    },
    {
        id: '2',
        slug: 'geo-lagoon',
        title: 'Lagune Géométrique',
        subtitle: 'Lignes Cinétiques',
        description: `Un jeu visuel captivant où les motifs géométriques bleus rencontrent des touches orangées vibrantes.
Cet étui apporte une note de fraîcheur et de modernité à votre quotidien.
Une esthétique pop et soignée pour les amateurs de couleurs franches.`,
        price: 10000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Textile Graphique',
        colors: ['Bleu Cyan', 'Blanc', 'Orange'],
        images: ['/images/products/etui-geo-blue.webp'],
        featured: true,
        new: false,
    },
    {
        id: '3',
        slug: 'kente-royal',
        title: 'Kente Royal',
        subtitle: "Tissage d'Exception",
        description: `Inspiré par la complexité des tissages Akan, cet étui révèle une richesse de détails colorés.
Les teintes vertes et or s'entremêlent avec précision pour un rendu visuel sophistiqué.
Plus qu'un accessoire, une pièce d'artisanat qui a du sens.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Type Kente',
        colors: ['Vert', 'Or', 'Rouge'],
        images: ['/images/products/etui-kente-finish.webp'],
        featured: true,
        new: false,
    },
    {
        id: '4',
        slug: 'bijoux-royaux',
        title: 'Bijoux Royaux',
        subtitle: 'Luxe Artisanal',
        description: `Un étui d'exception orné de bijoux traditionnels soigneusement sélectionnés.
Chaque pièce est unique, assemblée à la main pour créer une œuvre d'art portable.
Le summum du raffinement africain.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Bijoux',
        colors: ['Brun', 'Or', 'Bronze'],
        images: ['/images/products/étui avec bijoux 2.webp'],
        featured: true,
        new: false,
    },
    {
        id: '5',
        slug: 'gravure-elite',
        title: 'Gravure Elite',
        subtitle: 'Prestige Personnalisé',
        description: `Votre marque, votre logo, votre identité gravée dans le cuir premium.
Une finition impeccable pour les professionnels exigeants.
L'accessoire qui vous distingue du reste.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: ['Marron', 'Or'],
        images: ['/images/products/étui gravure perso 2.webp'],
        featured: true,
        new: false,
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ÉTUIS SIMPLES (5 000 FCFA)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '6',
        slug: 'midnight-prestige',
        title: 'Midnight Prestige',
        subtitle: 'Le Noir Intemporel',
        description: `L'essentiel, sans superflu. Un noir profond et texturé pour une allure résolument chic.
Le logo doré vient signer cette pièce minimaliste avec subtilité.
L'accessoire ultime pour accompagner toutes vos tenues.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: ['Noir', 'Or'],
        images: ['/images/products/etui-black-minimal.webp'],
        featured: false,
        new: false,
    },
    {
        id: '7',
        slug: 'bleu-marine-classique',
        title: 'Bleu Marine Classique',
        subtitle: "L'Élégance Sobre",
        description: `Un bleu marine profond et intemporel qui s'accorde à toutes les occasions.
La sobriété devient une force avec ce cuir lisse et soigné.
Pour ceux qui privilégient l'élégance discrète.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: ['Bleu Marine'],
        images: ['/images/products/etui-navy-classic.webp'],
        featured: false,
        new: false,
    },
    {
        id: '8',
        slug: 'bleu-azur',
        title: 'Bleu Azur',
        subtitle: 'Simplicité Pure',
        description: `La pureté d'un bleu ciel qui respire la fraîcheur et la légèreté.
Un étui simple mais efficace pour un style décontracté.
L'accessoire parfait pour les beaux jours.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: ['Bleu Azur'],
        images: ['/images/products/etui simple bleu.webp'],
        featured: false,
        new: false,
    },
    {
        id: '9',
        slug: 'bleu-nuit',
        title: 'Bleu Nuit',
        subtitle: 'Nuit Étoilée',
        description: `Un bleu nuit envoûtant qui évoque le mystère des cieux nocturnes.
Profond et sophistiqué, il accompagne vos soirées avec distinction.
L'élégance à l'état pur.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: ['Bleu Nuit'],
        images: ['/images/products/étui simple bleu nuit.webp'],
        featured: false,
        new: false,
    },
    {
        id: '10',
        slug: 'noir-essentiel',
        title: 'Noir Essentiel',
        subtitle: 'Le Classique',
        description: `Le noir dans sa forme la plus pure et la plus polyvalente.
Minimaliste et efficace, il va avec absolument tout.
Le choix évident pour ceux qui aiment l'essentiel.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: ['Noir'],
        images: ['/images/products/étui simple noir.webp'],
        featured: false,
        new: false,
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ÉTUIS DEUX TISSUS / BIJOU / CAURI (10 000 FCFA)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '11',
        slug: 'terra-signature',
        title: 'Terra Signature',
        subtitle: 'Nuances Minérales',
        description: `Une palette chaleureuse dominée par des tons rouille et terre de Sienne.
Le motif abstrait évoque une texture organique, réhaussée par la signature Glory dorée.
Un accessoire sobre et élégant qui traverse les saisons.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Wax',
        colors: ['Rouille', 'Brun', 'Noir'],
        images: ['/images/products/etui-terra-logo.webp'],
        featured: false,
        new: false,
    },
    {
        id: '12',
        slug: 'wax-abstrait',
        title: 'Wax Abstrait',
        subtitle: 'Art Géométrique',
        description: `Une explosion de formes géométriques sur un tissu Wax authentique.
L'art africain contemporain s'invite dans votre quotidien.
Pour les amateurs de pièces uniques et audacieuses.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: ['Multicolore'],
        images: ['/images/products/etui-wax-abstrait.webp'],
        featured: false,
        new: false,
    },
    {
        id: '13',
        slug: 'corail-solaire',
        title: 'Corail Solaire',
        subtitle: "Éclat d'Été",
        description: `Des teintes corail et orangées qui capturent l'énergie du soleil africain.
Un motif Wax joyeux et optimiste pour illuminer votre journée.
L'accessoire qui met de bonne humeur.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: ['Corail', 'Orange', 'Jaune'],
        images: ['/images/products/etui-wax-coral.webp'],
        featured: false,
        new: false,
    },
    {
        id: '14',
        slug: 'wax-ombre',
        title: 'Wax Ombré',
        subtitle: 'Mystère Élégant',
        description: `Des tons sombres et mystérieux pour un Wax qui sort de l'ordinaire.
La profondeur des couleurs crée un effet visuel captivant.
Pour ceux qui aiment l'élégance discrète avec du caractère.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: ['Noir', 'Bordeaux', 'Brun'],
        images: ['/images/products/etui-wax-sombre.webp'],
        featured: false,
        new: false,
    },
    {
        id: '15',
        slug: 'tribal-wax',
        title: 'Tribal Wax',
        subtitle: 'Héritage Ancestral',
        description: `Des motifs tribaux traditionnels revisités avec modernité.
Chaque ligne raconte une histoire, chaque couleur a un sens.
L'Afrique authentique dans votre poche.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Tribal',
        colors: ['Multicolore'],
        images: ['/images/products/etui-wax-tribal.webp'],
        featured: false,
        new: false,
    },
    {
        id: '16',
        slug: 'bleu-ocean-double',
        title: 'Bleu Océan Doublé',
        subtitle: 'Confort Premium',
        description: `Un étui doublé pour une protection maximale de votre téléphone.
Le bleu océan apporte une touche de sérénité à votre quotidien.
Qualité et confort réunis.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Doublé',
        colors: ['Bleu Océan'],
        images: ['/images/products/etui simple bleu doublé.webp'],
        featured: false,
        new: false,
    },
    {
        id: '17',
        slug: 'denim-spirit',
        title: 'Denim Spirit',
        subtitle: 'Style Urbain',
        description: `Le jean revisité façon Glory Cases pour un style résolument urbain.
Un matériau résistant et tendance qui s'améliore avec le temps.
L'esprit street dans votre poche.`,
        price: 10000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Denim',
        colors: ['Bleu Jean'],
        images: ['/images/products/étui en jean.webp'],
        featured: false,
        new: false,
    },
    {
        id: '18',
        slug: 'duo-textile',
        title: 'Duo Textile',
        subtitle: 'Fusion Créative',
        description: `Deux tissus complémentaires assemblés avec savoir-faire pour un rendu unique.
Le mariage des textures crée une harmonie visuelle captivante.
Pour ceux qui aiment les mélanges audacieux.`,
        price: 10000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Double Tissu',
        colors: ['Multicolore'],
        images: ['/images/products/étui double tissu.webp'],
        featured: false,
        new: false,
    },
    {
        id: '19',
        slug: 'rouge-passion',
        title: 'Rouge Passion',
        subtitle: 'Énergie Vibrante',
        description: `Un rouge intense qui pulse avec l'énergie de la passion africaine.
Impossible à ignorer, il fait tourner les têtes.
Pour les personnalités audacieuses et assumées.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: ['Rouge', 'Noir'],
        images: ['/images/products/étui motif rouge.webp'],
        featured: false,
        new: false,
    },
    {
        id: '20',
        slug: 'cauri-naturel',
        title: 'Cauri Naturel',
        subtitle: 'Amulette Protectrice',
        description: `Le cauri, symbole ancestral de richesse et de protection, orne cet étui unique.
Chaque coquillage est sélectionné et posé à la main.
Portez un morceau de tradition africaine.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: ['Multicolore', 'Naturel'],
        images: ['/images/products/étui avec cory.webp'],
        featured: false,
        new: false,
    },
    {
        id: '21',
        slug: 'naturel-cauri',
        title: 'Naturel & Cauri',
        subtitle: 'Essence Africaine',
        description: `L'authenticité à l'état pur avec ce mélange de textures naturelles.
Le cauri ajoute une touche de spiritualité à chaque regard.
Un accessoire chargé de sens.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: ['Naturel', 'Brun'],
        images: ['/images/products/étui avce cory.webp'],
        featured: false,
        new: false,
    },
    {
        id: '22',
        slug: 'geo-cauri',
        title: 'Géo Cauri',
        subtitle: 'Modernité Sacrée',
        description: `Les formes géométriques modernes rencontrent le symbolisme ancestral du cauri.
Une fusion parfaite entre contemporain et tradition.
L'Afrique d'hier et d'aujourd'hui réunies.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Géométrique & Cauri',
        colors: ['Bleu', 'Noir', 'Naturel'],
        images: ['/images/products/étui form géo avec cory.webp'],
        featured: false,
        new: false,
    },
    {
        id: '23',
        slug: 'bijou-dor',
        title: "Bijou d'Or",
        subtitle: 'Parure Précieuse',
        description: `Un bijou doré vient sublimer cet étui en cuir de qualité.
L'alliance du cuir et de l'or pour un résultat raffiné.
L'élégance à l'africaine.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Bijou',
        colors: ['Brun', 'Or'],
        images: ['/images/products/étui avec bijou 2.webp'],
        featured: false,
        new: false,
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ÉTUIS PERSONNALISÉS - GRAVURE (15 000 FCFA)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '24',
        slug: 'gravure-signature',
        title: 'Gravure Signature',
        subtitle: 'Personnalisé',
        description: `Votre nom, votre logo ou votre message gravé dans le cuir premium.
Une finition artisanale pour un résultat unique.
Faites de votre étui une pièce véritablement vôtre.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: ['Marron', 'Or'],
        images: ['/images/products/example étui avec marque gravé.webp'],
        featured: false,
        new: false,
    },
    {
        id: '25',
        slug: 'logo-grave',
        title: 'Logo Gravé',
        subtitle: 'Identité Unique',
        description: `Parfait pour les entreprises et les professionnels.
Votre marque gravée avec précision sur un cuir haut de gamme.
Un cadeau d'entreprise qui marque les esprits.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: ['Marron', 'Or'],
        images: ['/images/products/example étui avec marque gravé 2.webp'],
        featured: false,
        new: false,
    },
    {
        id: '26',
        slug: 'gravure-perso',
        title: 'Gravure Perso',
        subtitle: 'Création Sur-Mesure',
        description: `Libérez votre créativité avec une gravure entièrement personnalisée.
Texte, symbole, motif : tout est possible.
L'accessoire qui vous ressemble vraiment.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: ['Brun', 'Naturel'],
        images: ['/images/products/tui gravure perso.webp'],
        featured: false,
        new: false,
    },
    {
        id: '27',
        slug: 'gravure-premium',
        title: 'Gravure Premium',
        subtitle: "L'Excellence",
        description: `Notre savoir-faire au service de votre vision.
Une gravure d'une finesse exceptionnelle sur notre meilleur cuir.
Le summum de la personnalisation.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Premium Gravé',
        colors: ['Marron Foncé', 'Or'],
        images: ['/images/products/étui gravur perso 3.webp'],
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
