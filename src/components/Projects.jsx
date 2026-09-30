import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  const { t, lang } = useLanguage()
  const problemLabel = lang === 'pt' ? 'Problema' : 'Problem'
  const solutionLabel = lang === 'pt' ? 'Solução' : 'Solution'

  return (
    <section id="projects" className="reveal border-b border-border py-20" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading id="projects-heading" index={3} title={t.projects.heading} />
        <p className="-mt-6 mb-10 max-w-2xl text-text-muted">{t.projects.intro}</p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {t.projects.items.map((project, i) => {
            const featured = i === 0
            return (
              <article
                key={project.name}
                className={`group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_50px_-25px_var(--color-accent-soft)] ${
                  featured ? 'lg:col-span-2 lg:p-8' : ''
                }`}
              >
                <h3 className="section-heading text-xl font-semibold text-text">{project.name}</h3>

                <dl className={`mt-4 space-y-3 text-sm ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0' : ''}`}>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wide text-accent-2">
                      {problemLabel}
                    </dt>
                    <dd className="mt-1 text-text-muted">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wide text-accent-2">
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
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                    >
                      {t.projects.linkLabel}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
