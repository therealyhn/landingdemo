function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-noise-fade opacity-70" />
      <span className="pointer-events-none absolute left-24 top-24 h-12 w-12 border-l border-t border-border" />
      <span className="pointer-events-none absolute bottom-24 right-24 h-12 w-12 border-b border-r border-border" />
      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  )
}

export default SiteShell
