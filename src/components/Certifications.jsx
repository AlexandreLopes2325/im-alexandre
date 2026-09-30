import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section
      id="certifications"
      className="reveal border-b border-border py-20"
      aria-labelledby="certifications-heading"
    >
      <Container>
        <SectionHeading id="certifications-heading" index={6} title={t.certifications.heading} />
        <ol className="space-y-6 border-l border-border pl-6">
          {t.certifications.items.map((cert) => {
            const isInProgress = cert.status === 'em_preparacao' || cert.status === 'in_progress'
            return (
              <li key={cert.name} className="relative">
                <span
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_var(--color-accent-soft)]"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-text">{cert.name}</h3>
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
                <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-text-muted">
                  {cert.date ?? '—'}
                </p>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
