import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import pt from '../content/pt.js'
import en from '../content/en.js'

const STORAGE_KEY = 'site-lang'
export const LANGUAGES = { pt, en }

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    // localStorage unavailable (private mode, disabled storage, etc.) — ignore.
  }
  return null
}

function readQueryLang() {
  try {
    const params = new URLSearchParams(window.location.search)
    const lang = params.get('lang')
    if (lang === 'pt' || lang === 'en') return lang
  } catch {
    // ignore
  }
  return null
}

function detectInitialLang() {
  const fromQuery = readQueryLang()
  if (fromQuery) return fromQuery

  const stored = readStoredLang()
  if (stored) return stored

  const browserLang = typeof navigator !== 'undefined' ? navigator.language || '' : ''
  return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  const setLang = useCallback((next) => {
    if (next !== 'pt' && next !== 'en') return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write failures
    }
    try {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', next)
      window.history.replaceState({}, '', url)
    } catch {
      // ignore history/URL failures
    }
  }, [])

  useEffect(() => {
    const content = LANGUAGES[lang]
    document.documentElement.lang = lang

    if (content?.meta?.title) {
      document.title = content.meta.title
    }

    if (content?.meta?.description) {
      let descTag = document.querySelector('meta[name="description"]')
      if (!descTag) {
        descTag = document.createElement('meta')
        descTag.setAttribute('name', 'description')
        document.head.appendChild(descTag)
      }
      descTag.setAttribute('content', content.meta.description)

      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', content.meta.description)
      const twitterDesc = document.querySelector('meta[name="twitter:description"]')
      if (twitterDesc) twitterDesc.setAttribute('content', content.meta.description)
    }

    if (content?.meta?.title) {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', content.meta.title)
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) twitterTitle.setAttribute('content', content.meta.title)
      const ogLocale = document.querySelector('meta[property="og:locale"]')
      if (ogLocale) ogLocale.setAttribute('content', lang === 'pt' ? 'pt_BR' : 'en_US')
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: LANGUAGES[lang],
      toggle: () => setLang(lang === 'pt' ? 'en' : 'pt'),
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
