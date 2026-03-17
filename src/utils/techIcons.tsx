import {
  FiCloud,
  FiCpu,
  FiGitBranch,
  FiGlobe,
} from 'react-icons/fi'
import {
  SiCss,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si'

export function getTechIcon(tech: string) {
  switch (tech) {
    case 'React':
      return <SiReact aria-hidden="true" />
    case 'TypeScript':
      return <SiTypescript aria-hidden="true" />
    case 'JavaScript':
      return <SiJavascript aria-hidden="true" />
    case 'Next.js':
      return <SiNextdotjs aria-hidden="true" />
    case 'Tailwind CSS':
      return <SiTailwindcss aria-hidden="true" />
    case 'Redux':
      return <SiRedux aria-hidden="true" />
    case 'Node.js':
      return <SiNodedotjs aria-hidden="true" />
    case 'GitHub':
      return <SiGithub aria-hidden="true" />
    case 'Docker':
      return <SiDocker aria-hidden="true" />
    case 'GitHub Copilot':
      return <FiCpu aria-hidden="true" />
    case 'Cloud':
      return <FiCloud aria-hidden="true" />
    case 'Jira':
      return <SiJira aria-hidden="true" />
    case 'XState':
      return <FiGitBranch aria-hidden="true" />
    case 'Three.js':
      return <SiThreedotjs aria-hidden="true" />
    case 'HTML':
      return <FiGlobe aria-hidden="true" />
    case 'CSS':
      return <SiCss aria-hidden="true" />
    case 'REST APIs':
      return <FiGlobe aria-hidden="true" />
    default:
      return <FiGlobe aria-hidden="true" />
  }
}

export function getTechColor(tech: string) {
  switch (tech) {
    case 'React':
      return 'text-[#61dafb]'
    case 'JavaScript':
      return 'text-[#f7df1e]'
    case 'TypeScript':
      return 'text-[#3178c6]'
    case 'REST APIs':
      return 'text-[#0ea5a6]'
    case 'Node.js':
      return 'text-[#5fa04e]'
    case 'GitHub':
      return 'text-slate-900 dark:text-slate-100'
    case 'Docker':
      return 'text-[#2496ed]'
    case 'GitHub Copilot':
      return 'text-[#16a34a]'
    case 'Cloud':
      return 'text-[#0ea5e9]'
    case 'Jira':
      return 'text-[#0052cc]'
    case 'Redux':
      return 'text-[#764abc]'
    case 'XState':
      return 'text-[#7f5af0]'
    case 'Tailwind CSS':
      return 'text-[#06b6d4]'
    case 'Next.js':
      return 'text-slate-900 dark:text-slate-100'
    case 'HTML':
      return 'text-[#e34f26]'
    case 'CSS':
      return 'text-[#1572b6]'
    case 'Three.js':
      return 'text-slate-900 dark:text-slate-100'
    default:
      return 'text-slate-900 dark:text-slate-100'
  }
}
