import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section
      id="certifications"
      className="border-b border-border py-20"
      aria-labelledby="certifications-heading"
    >
      <Container>
        <SectionHeading id="certifications-heading" title={t.certifications.heading} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.certifications.items.map((cert) => {
            const isInProgress = cert.status === 'em_preparacao' || cert.status === 'in_progress'
            return (
              <li
                key={cert.name}
                className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5"
              >
                <div>
                  <h3 className="font-semibold text-text">{cert.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-text-muted">{cert.date ?? '—'}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-xs ${
                      isInProgress
                        ? 'border border-dashed border-accent-dim text-accent'
                        : 'bg-accent-dim/30 text-accent'
                    }`}
                  >
                    {t.certifications.statusLabels[cert.status]}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
