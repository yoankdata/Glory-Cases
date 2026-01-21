// ═══════════════════════════════════════════════════════════════════════════
// GOOGLE ANALYTICS 4 - Composant de tracking
// Remplace 'G-XXXXXXXXXX' par ton vrai ID de mesure Google Analytics
// ═══════════════════════════════════════════════════════════════════════════

import Script from 'next/script'

export default function GoogleAnalytics() {
    // ⚠️ IMPORTANT : Remplace cette valeur par ton vrai ID Google Analytics
    // Tu le trouveras dans Google Analytics > Admin > Flux de données
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

    // Ne pas charger Analytics en développement
    if (process.env.NODE_ENV !== 'production') {
        return null
    }

    return (
        <>
            {/* Script principal Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />

            {/* Configuration Google Analytics */}
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    )
}
