import { FiMail, FiMapPin } from 'react-icons/fi'

export function Sidebar() {
  return (
    <aside className="border-b border-slate-300 px-4 py-5 dark:border-slate-800 sm:px-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-9">
      <div className="grid content-start gap-5">
        <div>
          <p
            className="mb-5 grid h-[74px] w-[74px] place-items-center rounded-full border border-slate-400/80 font-serif text-[1.75rem] text-slate-950 dark:border-slate-700 dark:text-slate-100"
            aria-hidden="true"
          >
            DG
          </p>
          <h1 className="text-4xl leading-[1.05] tracking-[-0.03em] text-slate-950 dark:text-slate-100 lg:text-5xl">
            Dimitar Gluharski
          </h1>
          <p className="mt-3 text-slate-700 dark:text-slate-400">Software Engineer at Descartes Systems Group</p>
          <a
            className="mt-2 inline-flex items-center gap-2 text-slate-700 no-underline dark:text-slate-400"
            href="mailto:dimitargluharski@gmail.com"
          >
            <FiMail aria-hidden="true" className="text-sm" />
            dimitargluharski@gmail.com
          </a>
          <p className="mt-2 inline-flex items-center gap-2 text-slate-700 dark:text-slate-400">
            <FiMapPin aria-hidden="true" className="text-sm" />
            Sofia, Bulgaria
          </p>
        </div>
      </div>
    </aside>
  )
}
