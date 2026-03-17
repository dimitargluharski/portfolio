import { focusAreas, skills, stack } from '../data/portfolio'

const sectionLabel =
  'font-mono text-xs uppercase tracking-[0.14em] text-slate-700 dark:text-slate-400'

export function HomePage() {
  return (
    <section className="grid max-w-215 gap-5">
      <p className={sectionLabel}>About</p>
      <h2 className="max-w-[18ch] font-serif text-4xl leading-[0.98] tracking-[-0.03em] text-slate-950 dark:text-slate-100 sm:text-5xl">
        Front-end engineer building clean products with practical AI workflows.
      </h2>
      <p className="max-w-[62ch] leading-8 text-slate-700 dark:text-slate-300">
        I create fast and reliable interfaces for real operations, then improve
        delivery speed with AI-assisted workflows for coding, prototyping, and
        product iteration. My goal is simple: less friction, clearer UX, and
        better results for the people using the product every day.
      </p>

      <p className={sectionLabel}>Tech stack</p>
      <p className="max-w-[68ch] leading-8 text-slate-700 dark:text-slate-300">
        {stack.map((item, index) => (
          <span key={item}>
            {index > 0 ? ' | ' : ''}
            {item}
          </span>
        ))}
      </p>

      <p className={sectionLabel}>Core strengths</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {skills.map((skill) => (
          <article
            className="grid gap-2 border border-slate-400/70 bg-white p-4 dark:border-slate-700 dark:bg-slate-900/50"
            key={skill.title}
          >
            <h3 className="text-base font-semibold text-slate-950 dark:text-slate-100">{skill.title}</h3>
            <p className="leading-7 text-slate-700 dark:text-slate-300">{skill.description}</p>
          </article>
        ))}
      </div>

      <p className={sectionLabel}>Focus</p>
      <ul className="grid list-none gap-2 pl-0 text-slate-700 dark:text-slate-300">
        {focusAreas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
