import { LanguageProvider } from './hooks/useLanguage.jsx'
import SkipLink from './components/SkipLink.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Database from './components/Database.jsx'
import Timeline from './components/Timeline.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <div className="min-h-screen bg-bg text-text antialiased">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Database />
          <Timeline />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
