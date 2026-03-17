export type Theme = 'light' | 'dark' | 'system'

export interface Skill {
  title: string
  description: string
}

export interface ExperienceProject {
  id: string
  title: string
  summary: string[]
  highlights: string[]
}

export interface Experience {
  role: string
  company: string
  type: string
  period: string
  location: string
  summary: string[]
  responsibilities: string[]
}
