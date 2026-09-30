import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center gap-2 text-center font-mono text-xs text-text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>{t.footer.rights}</p>
        <p>{t.footer.builtWith}</p>
      </Container>
    </footer>
  )
}
