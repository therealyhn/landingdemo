import { useRef } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import CornerMarks from './CornerMarks'

function MediaKitModal({ isOpen, onClose }) {
    const stats = [
        { label: 'Years Active', value: '7+' },
        { label: 'Events', value: '250+' },
        { label: 'Cities', value: '15+' },
        { label: 'Instagram', value: '45k' },
    ]

    const handleDownload = () => {
        alert("Downloading NOVA_MediaKit_2026.pdf...")
    }

    return (
        <div
            className={`fixed inset-0 z-50 bg-bg transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            aria-hidden={!isOpen}
        >
            <div className="flex flex-col h-full p-4 lg:p-8 overflow-hidden">

                {/* Header (Fixed Height) */}
                <div className="flex justify-between items-center mb-6 shrink-0">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <h1 className="text-h1 font-display text-text leading-none">NOVA</h1>
                            <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-chip">
                                <span className="text-tiny text-accent uppercase tracking-wider font-bold">EPK 2026</span>
                            </div>
                        </div>
                        <p className="text-body text-muted">Techno / Bigroom / Club</p>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="primary" size="md" onClick={handleDownload} className="hidden md:flex">
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Full Kit
                            </span>
                        </Button>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="p-2 bg-surface rounded-full border border-border-light hover:border-accent text-muted hover:text-text transition-all group"
                        >
                            <svg className="w-8 h-8 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dashboard Grid (Flex grow to fill space) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 flex-1 min-h-0">

                    {/* COLUMN 1: Bio & Stats (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 h-full min-h-0">
                        {/* Bio Card - Scrollable internally */}
                        <div className="bg-surface-highlight border border-border-light rounded-surface p-6 flex-1 flex flex-col relative group min-h-0">
                            <CornerMarks size="sm" className="opacity-30" />
                            <h2 className="text-h3 font-display text-text mb-4 shrink-0">Biography</h2>
                            <div className="prose prose-invert prose-sm text-muted leading-relaxed overflow-y-auto custom-scrollbar pr-2">
                                <p className="mb-4">
                                    Emerging from the underground scene, NOVA has established a reputation for high-energy sets that blend driving techno rhythms with melodic bigroom elements.
                                </p>
                                <p className="mb-4">
                                    With a unique ability to read the crowd and curate an immersive sonic journey, NOVA transforms every venue into a pulsating ecosystem of sound and light. From intimate club rooms to festival main stages, the connection is always electric.
                                </p>
                                <p>
                                    His latest EP "Midnight Shift" garnered support from industry heavyweights and secured top positions on global techno charts, marking him as a pivotal figure in the next generation of electronic artists.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid - Fixed Height */}
                        <div className="grid grid-cols-2 gap-3 shrink-0">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-surface-highlight p-4 rounded-surface border border-border-light text-center">
                                    <p className="text-h3 font-display text-accent mb-0 leading-none">{stat.value}</p>
                                    <p className="text-tiny text-muted uppercase mt-1 tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: Photos (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6 h-full min-h-0">
                        <div className="bg-surface-highlight border border-border-light rounded-surface p-1 flex-1 relative group overflow-hidden flex flex-col">
                            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur rounded-chip pointer-events-none">
                                <span className="text-tiny text-white uppercase tracking-wider">Press Photos</span>
                            </div>

                            <div className="grid grid-rows-3 h-full gap-1 flex-1">
                                {/* Photo 1 - Top (Big) - Takes 2/3 space */}
                                <div className="row-span-2 relative bg-bg/50 rounded-sm overflow-hidden group/photo">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <Button variant="ghost" size="sm">Download Hi-Res</Button>
                                    </div>
                                </div>

                                {/* Photo Grid - Bottom - Takes 1/3 space */}
                                <div className="grid grid-cols-2 gap-1 row-span-1">
                                    <div className="relative bg-bg/50 rounded-sm overflow-hidden group/photo">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-tiny text-muted">Action Shot</div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        </div>
                                    </div>
                                    <div className="relative bg-bg/50 rounded-sm overflow-hidden group/photo">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-tiny text-muted">Crowd Shot</div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3: Tech & Logos (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6 h-full min-h-0">
                        {/* Tech Rider */}
                        <div className="bg-surface-highlight border border-border-light rounded-surface p-6 flex-1 relative overflow-y-auto">
                            <h2 className="text-h3 font-display text-text mb-4">Tech Rider</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">●</span>
                                    <div>
                                        <p className="text-body font-medium text-text">3x CDJ-3000</p>
                                        <p className="text-tiny text-muted">Must be linked via LAN hub</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">●</span>
                                    <div>
                                        <p className="text-body font-medium text-text">DJM-900NXS2</p>
                                        <p className="text-tiny text-muted">Or DJM-V10 / A9</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">●</span>
                                    <div>
                                        <p className="text-body font-medium text-text">Monitors</p>
                                        <p className="text-tiny text-muted">L/R booth monitors with independent volume</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">●</span>
                                    <div>
                                        <p className="text-body font-medium text-text">Mic</p>
                                        <p className="text-tiny text-muted">1x Shure SM58</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Logos */}
                        <div className="bg-surface-highlight border border-border-light rounded-surface p-6 shrink-0 flex flex-col justify-center gap-3">
                            <div className="text-center">
                                <span className="text-tiny text-muted uppercase tracking-wider block mb-2">Assets</span>
                            </div>
                            <button className="w-full py-2 bg-bg border border-border-light rounded-sm text-tiny text-text hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2">
                                Download Logos (PNG/SVG)
                            </button>
                            <button className="w-full py-2 bg-bg border border-border-light rounded-sm text-tiny text-text hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2">
                                Download Technical Rider
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MediaKitModal
