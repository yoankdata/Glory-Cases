// ═══════════════════════════════════════════════════════════════════════════
// GLORY CASES - Constantes Centralisées
// Modifiez ces valeurs à un seul endroit pour tout le site
// ═══════════════════════════════════════════════════════════════════════════

// WhatsApp
export const WHATSAPP_NUMBER = '22507756297'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

// Fonctions helper pour créer des messages WhatsApp pré-remplis
export function createWhatsAppUrl(message: string): string {
    return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

// Informations de l'entreprise
export const COMPANY = {
    name: 'Glory Cases',
    legalName: 'BLONE',
    phone: '+225 07 75 62 97',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    url: 'https://glorycases.com',
}
