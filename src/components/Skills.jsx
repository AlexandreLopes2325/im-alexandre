import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-b border-border py-20" aria-labelledby="skills-heading">
      <Container>
        <SectionHeading id="skills-heading" title={t.skills.heading} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="section-heading text-sm font-semibold uppercase tracking-wide text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-3 py-1 font-mono text-sm text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
