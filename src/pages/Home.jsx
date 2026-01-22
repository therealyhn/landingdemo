import { useState } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Media from '../components/sections/Media'
import Gallery from '../components/sections/Gallery'
import Proof from '../components/sections/Proof'
import BookingModal from '../components/shared/BookingModal'
import StickyCTA from '../components/shared/StickyCTA'
import MediaKitModal from '../components/shared/MediaKitModal'
import Navbar from '../components/layout/Navbar'

function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [isMediaKitOpen, setIsMediaKitOpen] = useState(false)

    const handleBookClick = () => {
        setIsBookingOpen(true)
    }

    const handleMediaKitClick = () => {
        setIsMediaKitOpen(true)
        // Also close booking modal if it's open (e.g. from success screen)
        setIsBookingOpen(false)
    }

    return (
        <div className="min-h-screen bg-bg text-text">
            <Navbar
                onBookClick={handleBookClick}
                onMediaKitClick={handleMediaKitClick}
            />
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
                onMediaKitClick={handleMediaKitClick}
            />

            <MediaKitModal
                isOpen={isMediaKitOpen}
                onClose={() => setIsMediaKitOpen(false)}
            />
        </div>
    )
}

export default Home
