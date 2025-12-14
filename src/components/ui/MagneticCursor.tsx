'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

export default function MagneticCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        // Désactiver sur mobile/tablette
        if (window.matchMedia("(pointer: coarse)").matches) return

        const cursor = cursorRef.current
        const follower = followerRef.current

        if (!cursor || !follower) return

        gsap.set(cursor, { xPercent: -50, yPercent: -50 })
        gsap.set(follower, { xPercent: -50, yPercent: -50 })

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" })
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" })
        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" })
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" })

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xToFollower(e.clientX)
            yToFollower(e.clientY)
        }

        window.addEventListener('mousemove', onMouseMove)

        // Effet Magnétique / Hover sur les liens
        const hoverables = document.querySelectorAll('a, button, .magnetic')

        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 0, duration: 0.3 })
            gsap.to(follower, { scale: 1.5, borderColor: '', backgroundColor: 'rgba(255, 255, 255, 0.1)', duration: 0.3 })
        }

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 })
            gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 })
        }

        hoverables.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter)
            el.addEventListener('mouseleave', onMouseLeave)
        })

        // Re-attacher les écouteurs lors du changement de page (pour les nouveaux liens)
        // Note: C'est une solution basique, l'idéal serait un MutationObserver

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter)
                el.removeEventListener('mouseleave', onMouseLeave)
            })
        }
    }, [pathname]) // Re-run effect on path change to attach listeners to new page elements

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block mix-blend-difference">
            <div ref={cursorRef} className="absolute w-2 h-2 bg-white rounded-full bg-blend-difference" />
            <div ref={followerRef} className="absolute w-8 h-8 border border-white/50 rounded-full bg-blend-difference transition-colors duration-300" />
        </div>
    )
}
