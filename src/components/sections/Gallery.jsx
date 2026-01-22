import { useState } from 'react'
import Container from '../layout/Container'
import Modal from '../ui/Modal'
import CornerMarks from '../shared/CornerMarks'

function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'solo', label: 'Solo Sets' },
        { id: 'b2b', label: 'B2B' },
    ]

    // Placeholder gallery items
    const galleryItems = [
        { id: 1, category: 'solo', alt: 'Solo performance at club', caption: 'Club Night - Berlin' },
        { id: 2, category: 'b2b', alt: 'B2B set with another DJ', caption: 'B2B with DJ Shadow' },
        { id: 3, category: 'solo', alt: 'Festival main stage', caption: 'Festival Main Stage' },
        { id: 4, category: 'solo', alt: 'Underground club set', caption: 'Underground Session' },
        { id: 5, category: 'b2b', alt: 'B2B festival performance', caption: 'B2B at Summer Festival' },
        { id: 6, category: 'solo', alt: 'Rooftop party', caption: 'Rooftop Sunset Set' },
    ]

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter)

    const openModal = (index) => {
        setCurrentIndex(index)
        setSelectedImage(filteredItems[index])
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % filteredItems.length
        setCurrentIndex(nextIndex)
        setSelectedImage(filteredItems[nextIndex])
    }

    const goToPrev = () => {
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
        setCurrentIndex(prevIndex)
        setSelectedImage(filteredItems[prevIndex])
    }

    return (
        <section id="gallery" className="relative py-24 lg:py-32 bg-surface border-y border-border">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-h2 font-display text-text mb-4">
                        Gallery
                    </h2>
                    <p className="text-body text-muted max-w-2xl mx-auto">
                        Moments from performances around the world
                    </p>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-3 rounded-chip text-label uppercase font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-accent text-bg shadow-neon'
                                : 'bg-surface-highlight border border-border-light text-muted hover:border-accent hover:text-text'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => openModal(index)}
                            className="relative aspect-[4/3] bg-surface-highlight rounded-surface overflow-hidden cursor-pointer group"
                        >
                            <CornerMarks size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                            {/* Placeholder image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-highlight flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-label uppercase text-muted">Image Placeholder</p>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-h3 font-display text-accent mb-2">{item.caption}</p>
                                    <p className="text-label uppercase text-muted">Click to view</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Fullscreen Modal Carousel */}
            {selectedImage && (
                <GalleryModal
                    image={selectedImage}
                    currentIndex={currentIndex}
                    total={filteredItems.length}
                    onClose={closeModal}
                    onNext={goToNext}
                    onPrev={goToPrev}
                />
            )}
        </section>
    )
}

// Separate modal component for carousel
function GalleryModal({ image, currentIndex, total, onClose, onNext, onPrev }) {
    // Keyboard navigation
    useState(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') onNext()
            if (e.key === 'ArrowLeft') onPrev()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose, onNext, onPrev])

    return (
        <div
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4 animate-reveal"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm p-2 z-50"
                aria-label="Close gallery"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Image container */}
            <div
                className="relative max-w-6xl w-full animate-fade-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Placeholder image */}
                <div className="aspect-video bg-surface rounded-surface flex items-center justify-center border border-border-light">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                            <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-h3 font-display text-text mb-2">{image.caption}</p>
                        <p className="text-body text-muted">{image.alt}</p>
                    </div>
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface border border-border-light rounded-full flex items-center justify-center text-text hover:bg-accent hover:text-bg hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface border border-border-light rounded-full flex items-center justify-center text-text hover:bg-accent hover:text-bg hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-sm border border-border-light rounded-chip px-4 py-2">
                    <p className="text-label uppercase text-muted">
                        {currentIndex + 1} / {total}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gallery
