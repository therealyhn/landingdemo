import Container from "../components/ui/Container.jsx"

function About() {
  return (
    <section id="about" className="py-64">
      <Container>
        <div className="grid gap-48 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative rounded-surface border border-border bg-surface p-32">
            <div className="mb-24 flex flex-wrap items-center gap-12">
              <span className="rounded-chip border border-border px-12 py-4 text-label font-medium uppercase text-muted">
                Artist Profile
              </span>
              <span className="rounded-chip border border-border px-12 py-4 text-label font-medium uppercase text-muted">
                12+ Years
              </span>
            </div>
            <h2 className="mb-16">About NOVA</h2>
            <p className="max-w-xl text-body text-muted">
              NOVA is a precision-focused techno and bigroom artist with a
              reputation for clean transitions, deep crowd reads, and cinematic
              build control. The set design balances high-impact moments with
              sustained groove so promoters can keep energy locked in.
            </p>
            <p className="mt-16 max-w-xl text-body text-muted">
              This demo highlights the booking clarity venues expect in 2026 —
              fast response, formal holds, and a media kit that removes every
              decision blocker.
            </p>
            <div className="mt-32 flex items-center gap-12">
              <span className="h-px w-32 bg-border" />
              <span className="text-label font-medium uppercase text-muted">
                Residency Ready
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <div className="rounded-surface border border-border bg-surface p-32 transition-colors duration-300 hover:border-accent">
              <p className="text-label font-medium uppercase text-muted">
                Sound
              </p>
              <p className="mt-12 text-h3 text-text">Techno / Bigroom / Club</p>
              <p className="mt-12 text-body text-muted">
                Peak-time pressure with a polished narrative arc.
              </p>
            </div>
            <div className="rounded-surface border border-border bg-surface p-32 transition-colors duration-300 hover:border-accent">
              <p className="text-label font-medium uppercase text-muted">
                Focus
              </p>
              <p className="mt-12 text-h3 text-text">Venue-first execution</p>
              <p className="mt-12 text-body text-muted">
                Built to align with lighting, visuals, and promoter cues.
              </p>
            </div>
            <div className="rounded-surface border border-border bg-surface p-32 transition-colors duration-300 hover:border-accent">
              <p className="text-label font-medium uppercase text-muted">
                Promise
              </p>
              <p className="mt-12 text-h3 text-text">No missed details</p>
              <p className="mt-12 text-body text-muted">
                Clear routing, tech rider discipline, and rapid follow-up.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
