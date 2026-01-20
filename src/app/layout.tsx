import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import ClientProviders from '@/components/ClientProviders'

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
    title: {
        template: '%s | Glory Cases',
        default: 'Glory Cases - Étuis à Lunettes Afro-Minimalistes',
    },
    description:
        "Découvrez l'élégance du Wax, du Cuir et du Raphia. Des étuis à lunettes uniques, faits main à Abidjan. Accessoires premium pour l'optique.",
    openGraph: {
        title: 'Glory Cases - L\'Art de l\'Étui Afro-Chic',
        description: 'Étuis à lunettes premium en Wax, Cuir et Raphia. Fabrication artisanale ivoirienne.',
        url: 'https://glorycases.com',
        siteName: 'Glory Cases',
        locale: 'fr_CI',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
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
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    )
}
