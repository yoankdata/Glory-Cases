import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import ClientProviders from '@/components/ClientProviders'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// Configuration des polices optimisées
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://glorycases.com'),
    title: {
        template: '%s | Glory Cases',
        default: 'Glory Cases - Étuis à Lunettes Afro-Minimalistes',
    },
    description:
        "Découvrez l'élégance du Wax, du Cuir et du Raphia. Des étuis à lunettes uniques, faits main à Abidjan. Accessoires premium pour l'optique.",
    keywords: [
        'étui lunettes',
        'wax africain',
        'artisanat ivoirien',
        'accessoires optique',
        'fait main Abidjan',
        'cuir premium',
        'raphia naturel',
        'cadeau afro-chic',
        'Glory Cases',
    ],
    authors: [{ name: 'Glory Cases' }],
    creator: 'Glory Cases',
    publisher: 'Glory Cases',
    openGraph: {
        title: 'Glory Cases - L\'Art de l\'Étui Afro-Chic',
        description: 'Étuis à lunettes premium en Wax, Cuir et Raphia. Fabrication artisanale ivoirienne.',
        url: 'https://glorycases.com',
        siteName: 'Glory Cases',
        locale: 'fr_CI',
        type: 'website',
        images: [
            {
                url: '/images/hero-etui.webp',
                width: 1200,
                height: 630,
                alt: 'Glory Cases - Étuis à lunettes artisanaux',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Glory Cases - Étuis à Lunettes Afro-Minimalistes',
        description: 'Étuis à lunettes premium en Wax, Cuir et Raphia. Fabrication artisanale ivoirienne.',
        images: ['/images/hero-etui.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // À remplir après création des comptes
        // google: 'ton-code-google-search-console',
        // yandex: 'ton-code-yandex',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
            <body className="antialiased bg-sand text-petrol selection:bg-gold/30 selection:text-petrol">
                <GoogleAnalytics />
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    )
}
