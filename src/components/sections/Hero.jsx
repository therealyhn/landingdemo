import Container from '../layout/Container'
import Button from '../ui/Button'

function Hero({ onBookClick, onMediaKitClick }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/2.jpg)' }}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg/80" />

            {/* Background glow */}
            <div className="absolute inset-0 bg-radial-glow opacity-30" />
            <div className="absolute inset-0 bg-noise" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[80vh] items-center">
                    {/* DJ Name - Top Left */}
                    <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
                        <div className="relative inline-block">
                            {/* Corner marks (repeated motif) */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-accent" />
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-accent" />

                            <h1 className="text-[48px] sm:text-[72px] lg:text-[96px] font-display font-bold leading-none tracking-tight text-text animate-fade-up">
                                NOVA
                            </h1>
                            <p className="text-h3 sm:text-h2 font-display text-muted mt-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
                                (Demo DJ)
                            </p>
                        </div>
                    </div>

                    {/* Tagline - Bottom Right */}
                    <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:justify-self-end">
                        <p className="text-h3 font-display text-accent uppercase tracking-wider animate-fade-up" style={{ animationDelay: '200ms' }}>
                            Techno / Bigroom / Club
                        </p>
                    </div>

                    {/* CTAs - Center */}
                    <div className="lg:col-span-6 lg:col-start-4 lg:row-start-3 flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={onBookClick}
                            className="w-full sm:w-auto"
                        >
                            Book a Date
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={onMediaKitClick}
                            className="w-full sm:w-auto"
                        >
                            View Media Kit
                        </Button>
                    </div>
                </div>

                {/* Scroll indicator */}
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
                    <div className="w-6 h-10 border-2 border-border-light rounded-chip flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
                    </div>
                </div> */}
            </Container>
        </section>
    )
}

export default Hero
