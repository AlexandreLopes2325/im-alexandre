import { useLanguage } from '../hooks/useLanguage.jsx'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-surface p-1 font-mono text-sm"
      role="group"
      aria-label={t.nav.langToggleLabel}
    >
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'pt' ? 'bg-accent text-bg' : 'text-text-muted hover:text-text'
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'en' ? 'bg-accent text-bg' : 'text-text-muted hover:text-text'
        }`}
      >
        EN
      </button>
    </div>
  )
}
