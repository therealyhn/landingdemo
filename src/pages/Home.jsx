import { useState } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Media from '../components/sections/Media'
import Gallery from '../components/sections/Gallery'
import Proof from '../components/sections/Proof'
import BookingModal from '../components/shared/BookingModal'
import StickyCTA from '../components/shared/StickyCTA'

function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false)

    const handleBookClick = () => {
        setIsBookingOpen(true)
    }

    const handleMediaKitClick = () => {
        // Placeholder - would link to actual media kit PDF
        alert('Media kit download would trigger here')
    }

    return (
        <div className="min-h-screen bg-bg text-text">
            <Hero
                onBookClick={handleBookClick}
                onMediaKitClick={handleMediaKitClick}
            />
            <About />
            <Media />
            <Gallery />
            <Proof />

            <StickyCTA onClick={handleBookClick} />

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />
        </div>
    )
}

export default Home
