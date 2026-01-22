import Container from "../ui/Container.jsx"

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Media", href: "#media" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#booking" },
]

function TopBar() {
  return (
    <header className="relative border-b border-border">
      <Container>
        <div className="flex items-center justify-between py-16">
          <div className="flex items-center gap-12">
            <span className="rounded-chip border border-border px-12 py-4 text-label font-medium uppercase text-muted">
              NOVA Demo
            </span>
            <span className="hidden text-label font-medium uppercase text-muted md:inline-flex">
              Premium DJ Booking System
            </span>
          </div>
          <nav className="hidden items-center gap-24 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-label font-medium uppercase text-muted transition-colors duration-300 hover:text-text"
              >
                {item.label}
                <span className="absolute -bottom-4 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default TopBar
