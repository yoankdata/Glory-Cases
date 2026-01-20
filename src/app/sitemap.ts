import { MetadataRoute } from 'next'
import { products } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://glorycases.com'

    // Pages statiques
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/atelier`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/collection`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pro`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cgv`,
            lastModified: new Date(),
            priority: 0.3,
        },
    ]

    // Pages produits dynamiques
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/product/${product.slug}`,
        lastModified: new Date(),
        priority: 0.7,
    }))

    return [...staticPages, ...productPages]
}
