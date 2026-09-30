import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  const { t, lang } = useLanguage()
  const problemLabel = lang === 'pt' ? 'Problema' : 'Problem'
  const solutionLabel = lang === 'pt' ? 'Solução' : 'Solution'

  return (
    <section id="projects" className="border-b border-border py-20" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading id="projects-heading" title={t.projects.heading} />
        <p className="-mt-6 mb-10 max-w-2xl text-text-muted">{t.projects.intro}</p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {t.projects.items.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="section-heading text-xl font-semibold text-text">{project.name}</h3>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-accent">
                    {problemLabel}
                  </dt>
                  <dd className="mt-1 text-text-muted">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-accent">
                    {solutionLabel}
                  </dt>
                  <dd className="mt-1 text-text-muted">{project.solution}</dd>
                </div>
              </dl>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {!project.linkIsTodo && (
                <div className="mt-6 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    {t.projects.linkLabel} →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
