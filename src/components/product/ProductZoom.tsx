'use client'

import { useState, useRef, MouseEvent } from 'react'
import Image from 'next/image'

interface ProductZoomProps {
    src: string
    alt: string
    badges?: React.ReactNode
}

export default function ProductZoom({ src, alt, badges }: ProductZoomProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const { left, top, width, height } = containerRef.current.getBoundingClientRect()

        // Calculate percentages
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100

        setPosition({ x, y })
        setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    return (
        <div
            ref={containerRef}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-glass-xl cursor-crosshair group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Principale (Base) */}
            <div className={`w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Version Zoomée (Révélée au survol) */}
            {isHovered && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        backgroundSize: '250%', // Niveau de zoom
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}

            {/* Badges (s'affichent toujours, au-dessus du zoom) */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10 pointer-events-none">
                {badges}
            </div>

            {/* Loupe Cursor Custom (Optionnel - Suit la souris) */}
            {isHovered && (
                <div
                    className="fixed w-24 h-24 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-[1px] shadow-xl pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay hidden lg:block"
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                    }}
                />
            )}
        </div>
    )
}
