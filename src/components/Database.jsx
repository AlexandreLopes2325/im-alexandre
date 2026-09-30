import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'
import ErDiagram from './ErDiagram.jsx'

export default function Database() {
  const { t } = useLanguage()

  return (
    <section
      id="database"
      className="reveal border-b border-border bg-surface-2/30 py-20"
      aria-labelledby="database-heading"
    >
      <Container>
        <SectionHeading
          id="database-heading"
          index={4}
          eyebrow={t.database.eyebrow}
          title={t.database.heading}
        />
        <p className="-mt-6 mb-10 max-w-3xl text-text-muted">{t.database.intro}</p>

        <div className="glow-panel rounded-2xl border border-accent/30 bg-surface p-4 sm:p-8">
          <ErDiagram title={t.database.diagramCaption} />
          <p className="mt-4 text-center font-mono text-xs text-text-muted">
            {t.database.diagramCaption}
          </p>
        </div>

        <h3 className="section-heading mt-12 mb-6 text-xl font-semibold text-text">
          {t.database.decisionsHeading}
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.database.decisions.map((decision) => (
            <div
              key={decision.title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <h4 className="font-mono text-sm font-semibold text-accent">{decision.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{decision.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
