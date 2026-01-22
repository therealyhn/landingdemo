import Button from "../components/ui/Button.jsx"
import Container from "../components/ui/Container.jsx"

const heroImage =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80"

const heroImageSrcSet = [
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=480&q=80 480w",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=768&q=80 768w",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1024&q=80 1024w",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80 1200w",
].join(", ")

function Hero() {
  return (
    <section id="hero" className="py-64">
      <Container>
        <div className="grid items-center gap-48 md:grid-cols-2">
          <div className="flex flex-col gap-32">
            <div className="flex flex-wrap items-center gap-12">
              <span className="rounded-chip border border-border px-12 py-4 text-label font-medium uppercase text-muted">
                Live Club Specialist
              </span>
              <span className="rounded-chip border border-border px-12 py-4 text-label font-medium uppercase text-muted">
                Tech Rider Ready
              </span>
            </div>
            <div className="flex flex-col gap-16">
              <p className="text-label font-medium uppercase text-muted">
                DJ Booking Demo
              </p>
              <h1>NOVA (Demo DJ)</h1>
              <p className="max-w-xl text-body text-muted">
                Techno / Bigroom / Club
              </p>
              <p className="max-w-xl text-body text-muted">
                Cinematic peak-time sets, controlled energy arcs, and a clean
                booking funnel built for venues that want zero friction.
              </p>
            </div>
            <div className="flex flex-wrap gap-16">
              <Button size="lg">Book a Date</Button>
              <Button variant="secondary" size="lg">
                View Media Kit
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-24 top-24 hidden h-full w-px bg-border md:block" />
            <div className="group relative overflow-hidden rounded-surface border border-border bg-surface shadow-soft">
              <img
                src={heroImage}
                srcSet={heroImageSrcSet}
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                alt="Crowd lit by stage lights at a NOVA show"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-16 left-16 right-16 flex flex-col gap-8 text-text">
                <span className="text-label font-medium uppercase text-muted">
                  Next Availability
                </span>
                <span className="text-h3 text-text">
                  Saturday, 22:00 — 02:00
                </span>
              </div>
              <div className="absolute right-16 top-16 translate-y-8 text-label font-medium uppercase text-text opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Stage Preview
              </div>
            </div>
            <div className="mt-24 flex items-center justify-between gap-16 rounded-surface border border-border bg-surface px-24 py-16">
              <div>
                <p className="text-label font-medium uppercase text-muted">
                  Booking Response
                </p>
                <p className="text-h3 text-text">Under 24 hours</p>
              </div>
              <span className="rounded-chip border border-border px-12 py-4 text-label font-medium uppercase text-muted">
                Worldwide
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
