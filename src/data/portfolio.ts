import type { Experience, ExperienceProject, Skill } from '../types'

export const experienceProjects: ExperienceProject[] = [
  {
    id: 'sellercloud-delta',
    title: 'SellerCloud Delta',
    summary: [
      'As a Software Engineer at Descartes, I contribute to advanced cloud-based solutions for e-commerce by optimizing front-end interfaces, improving user experience, and supporting seamless integration of new features and technologies.',
      'SellerCloud Delta is a next-generation cloud platform enabling online retailers to manage sales across multiple channels (Amazon, eBay, Walmart, etc.). I focused on creating intuitive and efficient user interfaces to support automation of inventory, fulfillment, logistics, pricing, and analytics.',
    ],
    highlights: [
      'Developed and optimized modern, user-friendly front-end interfaces',
      'Collaborated with designers to integrate evolving UI/UX concepts and functionality',
      'Enhanced performance, accessibility, and responsiveness across multiple products',
    ],
  },
  {
    id: 'skustack-lens',
    title: 'SkuStack Lens',
    summary: [
      'My work is centered on building intuitive, scalable, and high-performance applications that help online retailers streamline operations and logistics workflows.',
      'SkuStack Lens is a warehouse management solution providing real-time visibility into inventory movements. I improved UI components and optimized user workflows using React, XState, and TailwindCSS.',
      'I also worked on the research, development, and testing of 3D warehouse visualization, focusing on spatial representation of warehouse layouts, storage zones, and inventory flows, plus performance and usability evaluation.',
    ],
    highlights: [
      'Improved workflows for warehouse operations and inventory movement tracking',
      'Built and refined interfaces with React, XState, and TailwindCSS',
      'Contributed to 3D visualization initiatives for warehouse mapping and analysis',
    ],
  },
  {
    id: 'skublox-hub',
    title: 'Skublox Hub',
    summary: [
      'Skublox Hub is a sorting and fulfillment platform designed to eliminate errors and improve efficiency in order processing.',
      'I enhanced the user experience through responsive, well-structured front-end design with a strong focus on clarity in high-volume operational flows.',
    ],
    highlights: [
      'Reduced friction in sorting and fulfillment workflows',
      'Improved UX quality through responsive and structured front-end implementation',
      'Supported operational efficiency with clearer task-driven interfaces',
    ],
  },
]

export const skills: Skill[] = [
  {
    title: 'Product UX thinking',
    description:
      'I turn dense workflows into interfaces that feel structured, predictable, and easy to move through.',
  },
  {
    title: 'Performance-minded front-end',
    description:
      'I care about fast rendering, responsive interactions, and front ends that stay reliable as products scale.',
  },
  {
    title: 'Scalable UI systems',
    description:
      'I enjoy building components and interface systems that stay coherent as products become larger and more complex.',
  },
]

export const currentExperience: Experience = {
  role: 'Software Engineer',
  company: 'Descartes Systems Group',
  type: 'Full-time',
  period: 'Nov 2022 - Present · 3 yrs 5 mos',
  location: 'Sofia, Sofia City, Bulgaria',
  summary: [
    'As a Software Engineer at Descartes, I am part of a global team focused on developing and enhancing advanced cloud-based solutions for e-commerce. I contribute to the continuous evolution of multiple integrated platforms by optimizing front-end interfaces, improving user experience, and ensuring seamless integration of new features and technologies.',
    'I work collaboratively across teams to deliver intuitive, scalable, and high-performance applications that help online retailers streamline their operations and logistics workflows.',
  ],
  responsibilities: [
    'Developing and optimizing modern, user-friendly front-end interfaces',
    'Collaborating with designers to integrate evolving UI/UX concepts and functionality',
    'Enhancing performance, accessibility, and responsiveness across multiple products',
    'Working with technologies such as React, XState, Redux, TailwindCSS, JavaScript, TypeScript, C#, VB, CSS3, and browser-based 3D technologies (WebGL / Three.js)',
  ],
}

export const focusAreas: string[] = [
  'Commerce and marketplace interfaces',
  'Operational dashboards and warehouse flows',
  'Responsive front-end systems',
  '3D and WebGL-driven product experiences',
]

export const stack: string[] = [
  'React',
  'JavaScript',
  'TypeScript',
  'REST APIs',
  'Node.js',
  'GitHub',
  'Docker',
  'GitHub Copilot',
  'Cloud',
  'Jira',
  'Redux',
  'XState',
  'Tailwind CSS',
  'Next.js',
  'HTML',
  'CSS',
  'Three.js',
]
