import { useState } from 'react'
import Container from '../layout/Container'
import CornerMarks from '../shared/CornerMarks'

function Media() {
    const [activeTab, setActiveTab] = useState('mixes')

    const tabs = [
        { id: 'mixes', label: 'Mixes' },
        { id: 'mashups', label: 'Mashups' },
        { id: 'videos', label: 'Videos' },
    ]

    const mediaItems = {
        mixes: [
            { id: 1, title: 'Techno Mix Vol. 1', duration: '60 min', platform: 'SoundCloud' },
            { id: 2, title: 'Bigroom Energy Mix', duration: '45 min', platform: 'SoundCloud' },
            { id: 3, title: 'Club Classics Set', duration: '90 min', platform: 'Mixcloud' },
        ],
        mashups: [
            { id: 1, title: 'Peak Time Mashup', duration: '5 min', platform: 'SoundCloud' },
            { id: 2, title: 'Festival Anthem Edit', duration: '4 min', platform: 'SoundCloud' },
        ],
        videos: [
            { id: 1, title: 'Live at Festival 2024', duration: '12 min', platform: 'YouTube' },
            { id: 2, title: 'Studio Session', duration: '8 min', platform: 'YouTube' },
            { id: 3, title: 'Club Night Highlights', duration: '6 min', platform: 'Instagram' },
        ],
    }

    return (
        <section id="media" className="relative py-24 lg:py-32 bg-bg">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-h2 font-display text-text mb-4">
                        Media
                    </h2>
                    <p className="text-body text-muted max-w-2xl mx-auto">
                        Listen to mixes, mashups, and watch performance videos
                    </p>
                </div>

                {/* Tab Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-chip text-label uppercase font-medium transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-accent text-bg shadow-neon'
                                : 'bg-surface border border-border-light text-muted hover:border-accent hover:text-text'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Media Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mediaItems[activeTab].map((item, index) => (
                        <div
                            key={item.id}
                            className="relative bg-surface-highlight border border-border-light rounded-surface p-6 hover:scale-105 hover:border-accent transition-all duration-300 group cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CornerMarks size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Placeholder for embed */}
                            <div className="aspect-video bg-surface rounded-sm mb-4 flex items-center justify-center border border-border">
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-label uppercase text-muted">{item.platform}</p>
                                </div>
                            </div>

                            {/* Media Info */}
                            <div className="space-y-2">
                                <h3 className="text-h3 font-display text-text group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-between text-label uppercase text-muted">
                                    <span>{item.duration}</span>
                                    <span>{item.platform}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Media
