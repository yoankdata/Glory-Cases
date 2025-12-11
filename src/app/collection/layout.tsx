import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'La Collection | Étuis à Lunettes Afro-Minimalistes',
    description: 'Explorez notre collection d\'étuis artisanaux. Wax, Cuir et Raphia pour un style unique.',
}

export default function CollectionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
