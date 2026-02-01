import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import PortfolioHighlights from './sections/PortfolioHighlights'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <main className="mx-auto max-w-4xl space-y-14 px-6 py-10">
        <PortfolioHighlights />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
