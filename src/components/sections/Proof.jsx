import Container from '../layout/Container'
import CornerMarks from '../shared/CornerMarks'

function Proof() {
    return (
        <section className="relative py-24 lg:py-32 bg-bg border-t border-border">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-h2 font-display text-text mb-4">
                        Why This Matters
                    </h2>
                    <p className="text-body text-muted max-w-2xl mx-auto">
                        Traditional booking processes lose opportunities. Here's how this system solves it.
                    </p>
                </div>

                {/* Before/After Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* BEFORE - Problem */}
                    <div className="relative bg-surface-highlight border border-border-light rounded-surface p-8 group">
                        <CornerMarks size="sm" className="opacity-50" />

                        <div className="mb-6">
                            <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-chip mb-4">
                                <p className="text-label uppercase text-red-400">Before</p>
                            </div>
                            <h3 className="text-h3 font-display text-text mb-4">
                                The Problem
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Bookings lost in DMs</p>
                                    <p className="text-label text-muted">Instagram/email threads get buried</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">No calendar holds</p>
                                    <p className="text-label text-muted">Double bookings and missed dates</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Incomplete information</p>
                                    <p className="text-label text-muted">Back-and-forth to get details</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Unprofessional process</p>
                                    <p className="text-label text-muted">No clear next steps for clients</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* AFTER - Solution */}
                    <div className="relative bg-surface-highlight border border-accent/30 rounded-surface p-8 group">
                        <CornerMarks size="sm" className="border-accent" />

                        <div className="mb-6">
                            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-chip mb-4">
                                <p className="text-label uppercase text-accent">After</p>
                            </div>
                            <h3 className="text-h3 font-display text-text mb-4">
                                The Solution
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Structured booking funnel</p>
                                    <p className="text-label text-muted">All details captured in one form</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Instant calendar hold</p>
                                    <p className="text-label text-muted">Download .ics file to block the date</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Pre-filled email</p>
                                    <p className="text-label text-muted">One-click to send formatted inquiry</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-body text-text font-medium">Professional experience</p>
                                    <p className="text-label text-muted">Clear next steps build trust</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-body text-muted mb-6">
                        This is a front-end demo. No backend, no database, no payments.
                    </p>
                    <p className="text-h3 font-display text-accent">
                        Ready to implement this for your artist?
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default Proof
