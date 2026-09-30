import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

const LINKEDIN_URL = 'https://www.linkedin.com/in/alexandre-lopes-821055227/'
const GITHUB_URL = 'https://github.com/AlexandreLopes2325'
const EMAIL = 'alexandre230506@gmail.com'
const PHONE = '(11) 93293-9007'
const PHONE_DIGITS = '+5511932939007'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading id="contact-heading" title={t.contact.heading} />
        <p className="-mt-6 mb-8 max-w-xl text-text-muted">{t.contact.intro}</p>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">
              {t.contact.emailLabel}
            </dt>
            <dd className="mt-2 text-sm">
              <a href={`mailto:${EMAIL}`} className="break-all text-text hover:text-accent">
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">
              {t.contact.phoneLabel}
            </dt>
            <dd className="mt-2 text-sm">
              <a href={`tel:${PHONE_DIGITS}`} className="text-text hover:text-accent">
                {PHONE}
              </a>
            </dd>
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
