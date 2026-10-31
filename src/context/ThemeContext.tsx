import { createContext, useContext, useLayoutEffect, useRef, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const storageKey = 'mahmoud-portfolio-theme'

function isTheme(value: string | null | undefined): value is Theme {
  return value === 'light' || value === 'dark'
}

function getInitialTheme(): Theme {
  const preloadedTheme = document.documentElement.dataset.theme
  if (isTheme(preloadedTheme)) return preloadedTheme

  try {
    const savedTheme = window.localStorage.getItem(storageKey)
    if (isTheme(savedTheme)) return savedTheme
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const transitionTimer = useRef<number | undefined>(undefined)

  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0c1220' : '#f8fafc',
    )

    try {
      window.localStorage.setItem(storageKey, theme)
    } catch {
      // The theme still works for this visit if storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.add('theme-transition')
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

    if (transitionTimer.current !== undefined) window.clearTimeout(transitionTimer.current)
    transitionTimer.current = window.setTimeout(() => {
      root.classList.remove('theme-transition')
      transitionTimer.current = undefined
    }, 280)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
