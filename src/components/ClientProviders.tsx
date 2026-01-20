'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

// Dynamic imports pour composants lourds (optimisation mobile Abidjan)
const SmoothScrolling = dynamic(() => import('@/components/layout/SmoothScrolling'), {
    ssr: false,
})

const MagneticCursor = dynamic(() => import('@/components/ui/MagneticCursor'), {
    ssr: false,
})

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <SmoothScrolling>
            <MagneticCursor />
            {children}
        </SmoothScrolling>
    )
}
