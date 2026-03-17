import { FiMoon, FiSun } from 'react-icons/fi'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const nextThemeLabel = isDark ? 'Light' : 'Dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="ml-auto inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-400/80 bg-slate-50 px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-100 focus-visible:border-slate-500 focus-visible:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 dark:focus-visible:border-slate-600 dark:focus-visible:bg-slate-800/70 lg:ml-0"
      aria-label="Switch theme"
      title="Switch theme"
    >
      {isDark ? <FiSun aria-hidden="true" className="text-sm" /> : <FiMoon aria-hidden="true" className="text-sm" />}
      <span className="leading-none">
        {nextThemeLabel}
      </span>
    </button>
  )
}
