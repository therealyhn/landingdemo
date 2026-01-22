import SiteShell from "../components/layout/SiteShell.jsx"
import TopBar from "../components/layout/TopBar.jsx"
import Hero from "../sections/Hero.jsx"
import About from "../sections/About.jsx"

function Home() {
  return (
    <SiteShell>
      <TopBar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
      </main>
    </SiteShell>
  )
}

export default Home
