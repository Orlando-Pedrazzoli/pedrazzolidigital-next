'use client'
import { createContext, useState, useEffect, useCallback, useContext, type ReactNode } from 'react'

const COOKIE_KEY = 'pd-cookie-consent'

interface CookieConsent { necessary: boolean; analytics: boolean; marketing: boolean; timestamp?: string; version?: string }

interface CookieContextType {
  consent: CookieConsent | null; showBanner: boolean; showPreferences: boolean
  acceptAll: () => void; rejectAll: () => void; saveCustom: (prefs: CookieConsent) => void
  openPreferences: () => void; closePreferences: () => void; resetConsent: () => void
  defaultPrefs: CookieConsent
}

const CookieCtx = createContext<CookieContextType | null>(null)

export function useCookieConsent() {
  const ctx = useContext(CookieCtx)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieProvider')
  return ctx
}

const defaultPrefs: CookieConsent = { necessary: true, analytics: false, marketing: false }

export function CookieProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY)
      if (saved) { setConsent(JSON.parse(saved)); setShowBanner(false) }
      else { const t = setTimeout(() => setShowBanner(true), 1200); return () => clearTimeout(t) }
    } catch { setShowBanner(true) }
  }, [])

  const saveConsent = useCallback((prefs: CookieConsent) => {
    const data = { ...prefs, necessary: true, timestamp: new Date().toISOString(), version: '1.0' }
    setConsent(data); setShowBanner(false); setShowPreferences(false)
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify(data)) } catch { /* noop */ }
  }, [])

  const acceptAll = useCallback(() => saveConsent({ necessary: true, analytics: true, marketing: true }), [saveConsent])
  const rejectAll = useCallback(() => saveConsent({ ...defaultPrefs }), [saveConsent])
  const saveCustom = useCallback((prefs: CookieConsent) => saveConsent(prefs), [saveConsent])
  const openPreferences = useCallback(() => setShowPreferences(true), [])
  const closePreferences = useCallback(() => setShowPreferences(false), [])
  const resetConsent = useCallback(() => {
    try { localStorage.removeItem(COOKIE_KEY) } catch { /* noop */ }
    setConsent(null); setShowBanner(true)
  }, [])

  return (
    <CookieCtx.Provider value={{ consent, showBanner, showPreferences, acceptAll, rejectAll, saveCustom, openPreferences, closePreferences, resetConsent, defaultPrefs }}>
      {children}
    </CookieCtx.Provider>
  )
}
