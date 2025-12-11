import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://glorycases.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/atelier`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/collection`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/pro`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/cgv`,
            lastModified: new Date(),
        },
    ]
}
