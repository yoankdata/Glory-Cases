export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-sand">
            <div className="flex flex-col items-center gap-4">
                {/* Logo Animation Pulse */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-2 border-petrol/20 rounded-full"></div>
                    <div className="absolute inset-0 border-t-2 border-gold rounded-full animate-spin"></div>
                    <div className="absolute inset-4 bg-petrol rounded-full flex items-center justify-center text-gold font-display text-xl animate-pulse">
                        G.
                    </div>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-petrol/60 animate-pulse">
                    Chargement...
                </p>
            </div>
        </div>
    )
}
