'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const containerRef = useRef(null)

    useEffect(() => {
        // Animation d'entrée simple et élégante
        // On part d'un peu plus bas avec une opacité 0
        gsap.fromTo(containerRef.current,
            {
                y: 20,
                opacity: 0,
                filter: 'blur(10px)'
            },
            {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'all' // Nettoyer après l'animation pour ne pas gêner les interactions
            }
        )
    }, [pathname])

    return (
        <div ref={containerRef} className="min-h-screen">
            {children}
        </div>
    )
}
