export const WHATSAPP_NUMBER = "+22507000000"; // Placeholder

export function generateWhatsAppLink(
    productName?: string,
    price?: number,
    ref?: string
): string {
    let message = "Bonjour ! 👋 J'ai une question sur vos étuis.";

    if (productName && price) {
        const formattedPrice = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "XOF",
            minimumFractionDigits: 0,
        }).format(price);

        message = `Bonjour ! 👋 Je suis intéressé par le modèle *${productName}*${ref ? ` (Réf: ${ref})` : ""
            } à *${formattedPrice}*. Est-il dispo pour livraison à Abidjan ?`;
    }

    return `https://wa.me/${WHATSAPP_NUMBER.replace(
        /[^0-9]/g,
        ""
    )}?text=${encodeURIComponent(message)}`;
}
