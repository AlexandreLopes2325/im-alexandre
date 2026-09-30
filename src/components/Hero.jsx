import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import TerminalCard from './TerminalCard.jsx'

const LINKEDIN_URL = 'https://www.linkedin.com/in/alexandre-lopes-821055227/'
const GITHUB_URL = 'https://github.com/AlexandreLopes2325'

export default function Hero() {
  const { t, lang } = useLanguage()
  const cvHref = lang === 'pt' ? '/cv-alexandre-lopes-pt.pdf' : '/cv-alexandre-lopes-en.pdf'

  return (
    <section className="relative overflow-hidden border-b border-border bg-dot-grid bg-glow py-20 sm:py-28">
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
            {t.hero.eyebrow}
          </p>
          <h1 className="section-heading text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-base text-text-muted sm:text-lg">{t.hero.title}</p>
          <p className="mt-6 text-lg text-text">{t.hero.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              {t.hero.ctaLinkedin}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              {t.hero.ctaGithub}
            </a>
            <a
              href={cvHref}
              download
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              {t.hero.ctaCv}
            </a>
          </div>
        </div>

        <TerminalCard />
      </Container>
    </section>
  )
}
