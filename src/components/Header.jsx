import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Container from './Container.jsx'
import LanguageToggle from './LanguageToggle.jsx'

export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#database', label: t.nav.database },
    { href: '#experience', label: t.nav.experience },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#main-content" className="section-heading text-lg font-semibold text-text">
          Alexandre Lopes
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border text-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="font-mono text-lg leading-none">
              {open ? '×' : '≡'}
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
