/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-canvas": "#FAF9F6",
                "brand-primary": "#C06C54",
                "brand-secondary": "#2C3E50",
                "brand-accent": "#D4AF37",
                "text-main": "#333333",
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-montserrat)", "sans-serif"],
            },
            borderRadius: {
                card: "8px",
                btn: "4px",
            },
            boxShadow: {
                "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [],
};
