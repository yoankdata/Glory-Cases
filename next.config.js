/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimisation des images
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [],
    },
    // Activer le mode strict React pour détecter les problèmes
    reactStrictMode: true,
}

module.exports = nextConfig
