import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // ═══════════════════════════════════════════════════════════════════════
            // PALETTE "AFRO-MINIMALISME" - Glory Cases Design System
            // ═══════════════════════════════════════════════════════════════════════
            colors: {
                // Couleur primaire - Chaleur de la terre ivoirienne
                terracotta: {
                    DEFAULT: '#8D4024',
                    50: '#F9E8E1',
                    100: '#F3D1C4',
                    200: '#E8A78C',
                    300: '#DC7D54',
                    400: '#C35C2E',
                    500: '#8D4024',
                    600: '#73341D',
                    700: '#592916',
                    800: '#3F1D10',
                    900: '#251109',
                },
                // Couleur secondaire - Contraste luxe/business professionnel
                petrol: {
                    DEFAULT: '#1A2B3C',
                    50: '#E8ECF0',
                    100: '#D1D9E1',
                    200: '#A3B3C3',
                    300: '#758DA5',
                    400: '#476787',
                    500: '#1A2B3C',
                    600: '#152330',
                    700: '#101B24',
                    800: '#0B1318',
                    900: '#060B0C',
                },
                // Fond - Sable chaud / Coquille d'œuf
                sand: {
                    DEFAULT: '#F5F2EB',
                    50: '#FFFFFF',
                    100: '#FAF9F6',
                    200: '#F5F2EB',
                    300: '#EBE5D8',
                    400: '#E1D8C5',
                    500: '#D7CBB2',
                },
                // Accent - Or mat brossé pour CTA et détails fins
                gold: {
                    DEFAULT: '#C5A059',
                    50: '#FCF8F0',
                    100: '#F7EDDA',
                    200: '#EDDBB5',
                    300: '#E3C990',
                    400: '#D4B26B',
                    500: '#C5A059',
                    600: '#A68442',
                    700: '#7D6331',
                    800: '#544221',
                    900: '#2B2110',
                },
            },
            // ═══════════════════════════════════════════════════════════════════════
            // TYPOGRAPHIE - Hiérarchie Radicale
            // ═══════════════════════════════════════════════════════════════════════
            fontFamily: {
                // Titres Display - Serif élégante à fort contraste (Gambetta alternative: Playfair Display)
                display: ['Playfair Display', 'Georgia', 'serif'],
                // Navigation & Labels - Sans-Serif Monospace
                mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
                // Corps - Sans-Serif géométrique lisible
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            // ═══════════════════════════════════════════════════════════════════════
            // ANIMATIONS "LUXE DIGITAL"
            // ═══════════════════════════════════════════════════════════════════════
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'marquee': 'marquee 60s linear infinite',
                'marquee-reverse': 'marquee 60s linear infinite reverse',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            // ═══════════════════════════════════════════════════════════════════════
            // EFFETS & BORDURES
            // ═══════════════════════════════════════════════════════════════════════
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
                'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.12)',
                'glass-xl': '0 24px 64px rgba(0, 0, 0, 0.16)',
                'gold': '0 4px 24px rgba(197, 160, 89, 0.3)',
            },
            // ═══════════════════════════════════════════════════════════════════════
            // ESPACEMENTS CUSTOM
            // ═══════════════════════════════════════════════════════════════════════
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
        },
    },
    plugins: [],
}

export default config
