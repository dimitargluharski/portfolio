import { useState } from 'react'
import { currentExperience, experienceProjects } from '../data/portfolio'

const tabBase =
  'inline-flex min-h-9 cursor-pointer items-center justify-center rounded-full border border-slate-400/80 bg-slate-50 px-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-950 transition-colors hover:border-slate-500 hover:bg-white focus-visible:border-slate-500 focus-visible:bg-white dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 dark:focus-visible:border-slate-600 dark:focus-visible:bg-slate-800/70'

const tabActive =
  '!border-slate-900 !bg-slate-900 !text-slate-100 ring-1 ring-slate-900/35 dark:!border-slate-100 dark:!bg-slate-100 dark:!text-slate-900 dark:ring-slate-100/35'

export function ExperiencePage() {
  const [experienceView, setExperienceView] = useState<'overview' | 'projects'>('overview')
  const [activeProjectId, setActiveProjectId] = useState(experienceProjects[0].id)
  const activeProject =
    experienceProjects.find((project) => project.id === activeProjectId) ??
    experienceProjects[0]

  return (
    <section className="grid w-full gap-5 lg:max-w-215">
      <h2 className="w-full max-w-80 font-serif text-3xl leading-tight tracking-tight text-slate-950 dark:text-slate-100 sm:max-w-96 sm:text-4xl">
        {currentExperience.role}
      </h2>

      <article className="grid gap-3 border-y border-slate-300 py-4 dark:border-slate-800 sm:flex sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-100">{currentExperience.company}</h3>
          <p className="mt-1 text-slate-700 dark:text-slate-300">{currentExperience.type}</p>
        </div>
        <div className="grid gap-1 text-left font-mono text-xs tracking-[0.08em] text-slate-700 dark:text-slate-400 sm:text-right">
          <span>{currentExperience.period}</span>
          <span>{currentExperience.location}</span>
        </div>
      </article>

      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Experience views">
        <button
          type="button"
          role="tab"
          className={`${tabBase} ${experienceView === 'overview' ? tabActive : ''}`}
          aria-selected={experienceView === 'overview'}
          onClick={() => setExperienceView('overview')}
        >
          Overview
        </button>
        <button
          type="button"
          role="tab"
          className={`${tabBase} ${experienceView === 'projects' ? tabActive : ''}`}
          aria-selected={experienceView === 'projects'}
          onClick={() => setExperienceView('projects')}
        >
          Products
        </button>
      </div>

      {experienceView === 'overview' ? (
        <article className="grid gap-3" role="tabpanel">
          <div className="grid gap-3.5">
            {currentExperience.summary.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="grid list-disc gap-2 pl-5 text-slate-700 dark:text-slate-300">
            {currentExperience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ) : (
        <article className="grid gap-3" role="tabpanel">
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Experience projects">
            {experienceProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                className={`${tabBase} ${activeProjectId === project.id ? tabActive : ''}`}
                aria-selected={activeProjectId === project.id}
                onClick={() => setActiveProjectId(project.id)}
              >
                {project.title}
              </button>
            ))}
          </div>

          <div className="grid gap-3.5">
            {activeProject.summary.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="font-mono text-xs font-extrabold uppercase tracking-[0.14em] text-slate-900 dark:text-slate-100">
            Key contributions
          </p>
          <ul className="grid list-disc gap-2 pl-5 text-slate-700 dark:text-slate-300">
            {activeProject.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      )}
    </section>
  )
}
