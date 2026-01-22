import Button from '../ui/Button'

function StickyCTA({ onClick }) {
    return (
        <>
            {/* Mobile: Sticky bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface/95 backdrop-blur-sm border-t border-border-light p-4 animate-fade-up">
                <Button
                    variant="primary"
                    size="md"
                    onClick={onClick}
                    className="w-full"
                >
                    Book NOVA
                </Button>
            </div>

            {/* Desktop: Floating corner button */}
            <button
                onClick={onClick}
                className="hidden lg:flex fixed bottom-8 right-8 z-40 w-16 h-16 bg-accent text-bg rounded-full items-center justify-center shadow-neon hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg group animate-pulse-glow"
                aria-label="Book NOVA"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-2 bg-surface border border-border-light rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <p className="text-label uppercase text-text">Book a Date</p>
                </div>
            </button>
        </>
    )
}

export default StickyCTA
