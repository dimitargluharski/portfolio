import { FiBriefcase, FiDownload, FiHome, FiTrendingUp } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

interface TopBarProps {
  isDark: boolean
  onThemeToggle: () => void
}

const navItemBase =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-400/80 bg-slate-50 px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-900 no-underline transition-colors hover:border-slate-500 hover:bg-slate-100 focus-visible:border-slate-500 focus-visible:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 dark:focus-visible:border-slate-600 dark:focus-visible:bg-slate-800/70'

const navItemActive =
  '!border-slate-900 !bg-slate-900 !text-slate-100 ring-1 ring-slate-900/30 dark:!border-slate-200 dark:!bg-slate-100 dark:!text-slate-900 dark:ring-slate-100/30'

export function TopBar({ isDark, onThemeToggle }: TopBarProps) {
  return (
    <header className="mb-6 border-b border-slate-300 pb-4 dark:border-slate-800">
      <div className="flex flex-wrap items-start justify-between gap-3 lg:items-center">
        <nav className="flex flex-wrap gap-2.5" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navItemBase} ${isActive ? navItemActive : ''}`.trim()
            }
          >
            <FiHome aria-hidden="true" className="text-sm" />
            Home
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${navItemBase} ${isActive ? navItemActive : ''}`.trim()
            }
          >
            <FiBriefcase aria-hidden="true" className="text-sm" />
            Work
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `${navItemBase} ${isActive ? navItemActive : ''}`.trim()
            }
          >
            <FiTrendingUp aria-hidden="true" className="text-sm" />
            Experience
          </NavLink>
          <a
            href="/CV Dimitar Gluharski.pdf"
            target="_blank"
            rel="noreferrer"
            className={navItemBase}
          >
            <FiDownload aria-hidden="true" className="text-sm" />
            Download CV
          </a>
        </nav>

        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </header>
  )
}
