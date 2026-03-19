import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiBriefcase, FiDownload, FiHome, FiMenu, FiTrendingUp, FiX } from 'react-icons/fi'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative mb-0 border-b border-slate-300 pb-2 dark:border-slate-800 lg:mb-6 lg:pb-4">
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <button
          type="button"
          className={`${navItemBase} cursor-pointer`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-main-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" className="text-sm" /> : <FiMenu aria-hidden="true" className="text-sm" />}
          Menu
        </button>
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-[1px] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-main-nav"
            className="absolute left-0 right-0 top-full z-40 mt-2 grid gap-3 rounded-xl border border-slate-300 bg-slate-50/95 p-3 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95 lg:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.65 }}
          >
            <nav className="flex flex-col gap-2.5" aria-label="Main navigation">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${navItemBase} w-full justify-start ${isActive ? navItemActive : ''}`.trim()
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome aria-hidden="true" className="text-sm" />
                Home
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `${navItemBase} w-full justify-start ${isActive ? navItemActive : ''}`.trim()
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <FiBriefcase aria-hidden="true" className="text-sm" />
                Work
              </NavLink>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `${navItemBase} w-full justify-start ${isActive ? navItemActive : ''}`.trim()
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <FiTrendingUp aria-hidden="true" className="text-sm" />
                Experience
              </NavLink>
              <a
                href="/CV Dimitar Gluharski.pdf"
                target="_blank"
                rel="noreferrer"
                className={`${navItemBase} w-full justify-start`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FiDownload aria-hidden="true" className="text-sm" />
                Download CV
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="hidden lg:flex lg:items-start lg:justify-between xl:items-center">
        <nav className="flex flex-col gap-2.5 lg:flex-row lg:flex-wrap" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navItemBase} lg:w-auto lg:justify-center ${isActive ? navItemActive : ''}`.trim()
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <FiHome aria-hidden="true" className="text-sm" />
            Home
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${navItemBase} lg:w-auto lg:justify-center ${isActive ? navItemActive : ''}`.trim()
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <FiBriefcase aria-hidden="true" className="text-sm" />
            Work
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `${navItemBase} lg:w-auto lg:justify-center ${isActive ? navItemActive : ''}`.trim()
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <FiTrendingUp aria-hidden="true" className="text-sm" />
            Experience
          </NavLink>
          <a
            href="/CV Dimitar Gluharski.pdf"
            target="_blank"
            rel="noreferrer"
            className={`${navItemBase} lg:w-auto lg:justify-center`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FiDownload aria-hidden="true" className="text-sm" />
            Download CV
          </a>
        </nav>

        <div>
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  )
}
