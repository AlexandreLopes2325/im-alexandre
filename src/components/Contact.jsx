import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

const LINKEDIN_URL = 'https://www.linkedin.com/in/alexandre-lopes-821055227/'
const GITHUB_URL = 'https://github.com/AlexandreLopes2325'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading id="contact-heading" title={t.contact.heading} />
        <p className="-mt-6 mb-8 max-w-xl text-text-muted">{t.contact.intro}</p>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">
              {t.contact.emailLabel}
            </dt>
            <dd className="mt-2 font-mono text-sm text-accent">{t.contact.emailTodo}</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">
              {t.contact.linkedinLabel}
            </dt>
            <dd className="mt-2 text-sm">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-text hover:text-accent"
              >
                {LINKEDIN_URL.replace('https://www.', '')}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">
              {t.contact.githubLabel}
            </dt>
            <dd className="mt-2 text-sm">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-text hover:text-accent"
              >
                {GITHUB_URL.replace('https://', '')}
              </a>
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
