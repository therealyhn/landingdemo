import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Media from '../components/sections/Media'
import Gallery from '../components/sections/Gallery'

function Home() {
    const handleBookClick = () => {
        // Will be connected to booking modal in Section 6
        console.log('Book clicked')
    }

    const handleMediaKitClick = () => {
        // Will be connected to media kit download in Section 6
        console.log('Media Kit clicked')
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
            {/* Other sections will be added below */}
        </div>
    )
}

export default Home
