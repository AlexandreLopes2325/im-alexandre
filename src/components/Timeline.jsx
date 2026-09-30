import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

function TimelineGroup({ heading, items, renderTitle }) {
  return (
    <div>
      <h3 className="section-heading mb-6 text-xl font-semibold text-text">{heading}</h3>
      <ol className="space-y-6 border-l border-border pl-6">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span
              className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-wide text-text-muted">{item.period}</p>
            <h4 className="mt-1 font-semibold text-text">{renderTitle(item)}</h4>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Timeline() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="border-b border-border py-20" aria-labelledby="experience-heading">
      <Container>
        <SectionHeading id="experience-heading" title={t.experience.heading} />
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <TimelineGroup
            heading={t.experience.heading}
            items={t.experience.items}
            renderTitle={(item) => `${item.role} · ${item.company}`}
          />
          <TimelineGroup
            heading={t.education.heading}
            items={t.education.items}
            renderTitle={(item) => `${item.degree} · ${item.institution}`}
          />
        </div>
      </Container>
    </section>
  )
}
