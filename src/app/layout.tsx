import type { Metadata } from 'next'
import SmoothScrolling from '@/components/layout/SmoothScrolling'
import MagneticCursor from '@/components/ui/MagneticCursor'
import '@/styles/globals.css'

// ═══════════════════════════════════════════════════════════════════════════
// MÉTADONNÉES SEO GLOBALES - Glory Cases
// ═══════════════════════════════════════════════════════════════════════════
export const metadata: Metadata = {
    title: {
        default: 'Glory Cases | Étuis à Lunettes Artisanaux d\'Abidjan',
        template: '%s | Glory Cases',
    },
    description:
        'Étuis à lunettes artisanaux faits main à Abidjan. Wax, Cuir, Raphia - L\'Afro-Minimalisme au service de votre regard.',
    keywords: [
        'étuis à lunettes',
        'artisanat africain',
        'Wax',
        'Abidjan',
        'Côte d\'Ivoire',
        'fait main',
        'mode éthique',
        'accessoires premium',
    ],
    authors: [{ name: 'Glory Cases' }],
    creator: 'Glory Cases',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://glorycases.com',
        siteName: 'Glory Cases',
        title: 'Glory Cases | Étuis à Lunettes Artisanaux d\'Abidjan',
        description:
            'L\'Afro-Minimalisme — Étuis à lunettes faits main avec des matières ivoiriennes d\'exception.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Glory Cases',
        description: 'Étuis à lunettes artisanaux d\'Abidjan',
    },
    robots: {
        index: true,
        follow: true,
    },
}

// ═══════════════════════════════════════════════════════════════════════════
// LAYOUT PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
            {/* Chargement des fonts Google */}
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased font-sans text-petrol bg-sand selection:bg-gold selection:text-white overflow-x-hidden">
                <SmoothScrolling>
                    <MagneticCursor />
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    )
}
