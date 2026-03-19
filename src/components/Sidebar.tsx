import { FiMail, FiMapPin } from 'react-icons/fi'

export function Sidebar() {
  return (
    <aside className="border-b border-slate-300 px-4 py-2 dark:border-slate-800 sm:px-6 sm:py-3 md:py-4 lg:border-b-0 lg:border-r lg:px-7 lg:py-9">
      <div className="grid content-start gap-5">
        <div className="grid gap-2 sm:gap-2.5">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <p
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-slate-400/80 font-serif text-2xl text-slate-950 dark:border-slate-700 dark:text-slate-100 sm:h-18.5 sm:w-18.5 sm:text-3xl"
              aria-hidden="true"
            >
              DG
            </p>
            <h1 className="min-w-0 break-normal text-2xl leading-tight tracking-tight text-slate-950 dark:text-slate-100 sm:text-3xl lg:text-3xl xl:text-4xl">
              Dimitar Gluharski
            </h1>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-400 sm:text-base">Software Engineer at Descartes Systems Group</p>
          <a
            className="group inline-flex min-w-0 items-center gap-2 break-words text-sm text-slate-700 underline-offset-4 transition-colors duration-200 hover:text-slate-900 hover:underline hover:drop-shadow-[0_0_8px_rgba(15,23,42,0.22)] dark:text-slate-400 dark:hover:text-slate-100 dark:hover:drop-shadow-[0_0_10px_rgba(148,163,184,0.28)] sm:text-base"
            href="mailto:dimitargluharski@gmail.com"
          >
            <FiMail aria-hidden="true" className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5" />
            dimitargluharski@gmail.com
          </a>
          <p className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400 sm:text-base">
            <FiMapPin aria-hidden="true" className="text-sm" />
            Sofia, Bulgaria
          </p>
        </div>
      </div>
    </aside>
  )
}
