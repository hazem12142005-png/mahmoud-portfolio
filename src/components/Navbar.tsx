import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { navigation } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Mahmoud Hassan home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-name">Mahmoud<span>Hassan</span></span>
        </a>

        <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>

        <a className="nav-cta desktop-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
