import SiteShell from "../components/layout/SiteShell.jsx"
import TopBar from "../components/layout/TopBar.jsx"

function Home() {
  return (
    <SiteShell>
      <TopBar />
      <main id="main" className="flex-1" />
    </SiteShell>
  )
}

export default Home
