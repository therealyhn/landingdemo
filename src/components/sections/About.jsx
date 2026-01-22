import Container from '../layout/Container'
import CornerMarks from '../shared/CornerMarks'

function About() {
    const stats = [
        { label: 'Years Active', value: '8+' },
        { label: 'Events Played', value: '200+' },
        { label: 'Cities', value: '50+' },
    ]

    return (
        <section className="relative py-24 lg:py-32 bg-surface border-t border-border">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Bio Text - Left */}
                    <div className="space-y-6">
                        <h2 className="text-h2 font-display text-text">
                            About NOVA
                        </h2>
                        <div className="space-y-4 text-body text-muted leading-relaxed">
                            <p>
                                NOVA is a high-energy DJ specializing in techno, bigroom, and club music.
                                With over 8 years of experience, NOVA has performed at major festivals and
                                clubs across Europe and beyond.
                            </p>
                            <p>
                                Known for seamless mixing, powerful track selection, and an ability to
                                read the crowd, NOVA creates unforgettable experiences on the dancefloor.
                                From intimate club nights to massive festival stages, every set is crafted
                                to move the crowd.
                            </p>
                            <p>
                                Available for bookings worldwide. Let's create something special together.
                            </p>
                        </div>
                    </div>

                    {/* Stats - Right */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="relative bg-surface-highlight border border-border-light rounded-surface p-6 hover:-translate-y-1 transition-transform duration-300 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CornerMarks size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="text-center space-y-2">
                                    <div className="text-h2 font-display text-accent">
                                        {stat.value}
                                    </div>
                                    <div className="text-label uppercase text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
