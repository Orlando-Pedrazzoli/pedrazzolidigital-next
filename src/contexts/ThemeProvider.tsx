'use client'
import { createContext, useState, useEffect, type ReactNode } from 'react'

interface ThemeContextType { isDark: boolean; toggleTheme: () => void }

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('op-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) { root.classList.add('dark') } else { root.classList.remove('dark') }
    localStorage.setItem('op-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('op-theme')) setIsDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(prev => !prev) }}>
      {children}
    </ThemeContext.Provider>
  )
}
