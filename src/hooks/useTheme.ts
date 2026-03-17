import { useEffect, useState } from 'react'
import type { Theme } from '../types'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'system'
    }

    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system'
      ? savedTheme
      : 'system'
  })

  const [prefersDark, setPrefersDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  const resolvedTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersDark(event.matches)
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', theme)
  }, [isDark, theme])

  const cycleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return { isDark, cycleTheme }
}
