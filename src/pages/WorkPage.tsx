import { stack } from '../data/portfolio'
import { getTechColor, getTechIcon } from '../utils/techIcons'

export function WorkPage() {
  return (
    <section className="grid max-w-[860px] gap-5">
      <p className="max-w-[62ch] leading-8 text-slate-700 dark:text-slate-300">
        Technologies I actively use across day-to-day development, architecture,
        and product delivery.
      </p>

      <div className="flex flex-wrap gap-2" aria-label="Work technologies">
        {stack.map((tech) => (
          <span
            className="inline-flex min-h-7 items-center gap-1.5 rounded-full border border-slate-400/80 bg-white px-2.5 font-mono text-[11px] uppercase tracking-[0.06em] text-slate-950 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100"
            key={tech}
          >
            <span className={getTechColor(tech)}>{getTechIcon(tech)}</span>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
