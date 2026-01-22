import { useState, useEffect } from 'react'

function Navbar({ onBookClick, onMediaKitClick }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrolled])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Media', id: 'media' },
        { label: 'Gallery', id: 'gallery' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${scrolled
                ? 'bg-bg/80 backdrop-blur-md border-border-light py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo / Home Link */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`font-display font-bold text-h3 tracking-tight transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    NOVA
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-body font-medium text-muted hover:text-accent transition-colors uppercase tracking-wider"
                        >
                            {link.label}
                        </button>
                    ))}

                    <div className="w-px h-4 bg-border-light mx-2" />

                    <button
                        onClick={onMediaKitClick}
                        className="text-body font-medium text-muted hover:text-text transition-colors uppercase tracking-wider"
                    >
                        Media Kit
                    </button>

                    <button
                        onClick={onBookClick}
                        className="px-4 py-2 bg-accent/10 border border-accent/50 rounded-sm text-accent hover:bg-accent hover:text-black transition-all uppercase tracking-wider text-sm font-bold"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Icon (Simple version for demo) */}
                <div className="md:hidden">
                    <button
                        onClick={onBookClick}
                        className="text-accent font-medium uppercase tracking-wider text-sm"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
