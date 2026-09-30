import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import Avatar from './Avatar.jsx'

const LINKEDIN_URL = 'https://www.linkedin.com/in/alexandre-lopes-821055227/'
const GITHUB_URL = 'https://github.com/AlexandreLopes2325'

export default function Hero() {
  const { t, lang } = useLanguage()
  const cvHref = lang === 'pt' ? '/cv-alexandre-lopes-pt.pdf' : '/cv-alexandre-lopes-en.pdf'

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl text-center sm:text-left">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
            {t.hero.eyebrow}
          </p>
          <h1 className="section-heading text-4xl font-bold text-text sm:text-5xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 text-base text-text-muted sm:text-lg">{t.hero.title}</p>
          <p className="mt-6 text-lg text-text">{t.hero.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
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

        <Avatar size={144} />
      </Container>
    </section>
  )
}
