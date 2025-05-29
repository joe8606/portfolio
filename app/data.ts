type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'AWESUNG TECH',
    title: 'Data Analyst Intern',
    start: 'May 2025',
    end: 'Aug 2025',
    link: '#',
    id: 'work-awesung',
  },
  {
    company: 'ALLIANCE HEALTH SYSTEM',
    title: 'Data Analyst Intern',
    start: 'Nov 2024',
    end: 'Jan 2025',
    link: '#',
    id: 'work-alliance',
  },
  {
    company: 'Taiwan CDC',
    title: 'Data Analyst',
    start: 'Oct 2022',
    end: 'Mar 2024',
    link: '#',
    id: 'work-cdc',
  },
  {
    company: 'PICASSO TILES',
    title: 'Logistics & IT Specialist',
    start: 'Apr 2024',
    end: 'Jul 2024',
    link: '#',
    id: 'work-picasso',
  },
  {
    company: 'ELAND INFORMATION COMPANY',
    title: 'Social Media Data Analytics Intern',
    start: 'Feb 2021',
    end: 'Apr 2021',
    link: '#',
    id: 'work-eland',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Let ChatGPT Generate a Technical Question for Me – Day 1',
    description: 'Exploring how ChatGPT helps simulate technical interviews, starting from day one.',
    link: 'https://medium.com/@joe528491/let-chatgpt-generate-a-technical-question-for-me-on-day-1-f5c886c62af0',
    uid: 'blog-1',
  },
  {
    title: 'I Completed a Data Science Assessment, Got a Verbal Offer, and Walked Away – Part 2',
    description: 'Why I turned down a verbal offer after completing a data science assessment – part two of my journey.',
    link: 'https://medium.com/@joe528491/i-completed-a-data-science-assessment-got-a-verbal-offer-and-walked-away-part-2-7005243a40b1',
    uid: 'blog-2',
  },
  {
    title: 'I Completed a Data Science Assessment, Got a Verbal Offer, and Walked Away – Part 1',
    description: 'Part one of my experience with a data science interview process, assessment, and decision.',
    link: 'https://medium.com/@joe528491/i-completed-a-data-science-assessment-got-a-verbal-offer-and-walked-away-part-1-869698f19032',
    uid: 'blog-3',
  },
  {
    title: 'Let ChatGPT Generate a Technical Question for Me – Day 2',
    description: 'Continuing my experiment with ChatGPT-generated technical interview questions on day two.',
    link: 'https://medium.com/@joe528491/let-chatgpt-generate-a-technical-question-for-me-on-day-2-60eace5de62c',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/joe8606',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joe-lin-728725262/',
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@joe528491',
  },
]


export const EMAIL = 'isshangyi.lin@gmail.com'
