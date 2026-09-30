import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-b border-border py-20" aria-labelledby="about-heading">
      <Container>
        <SectionHeading id="about-heading" title={t.about.heading} />
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  )
}
