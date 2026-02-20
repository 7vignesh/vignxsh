import { Project, Skill, Experience, SocialLink, NavItem, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Vignesh',
  role: 'Full Stack Developer',
  tagline: 'Building next-generation web applications with Node.js and React',
  bio: `I code, I build things, I vibe-code when I'm lazy — but I love getting my hands dirty and shipping real projects.`,
  email: 'vigneshgopikrishnan.7@gmail.com',
  location: 'Bangalore, India',
  resumeUrl: '/resume.pdf',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend', proficiency: 90 },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', proficiency: 90 },
  { name: 'HTML5', icon: 'html', category: 'frontend', proficiency: 95 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', proficiency: 85 },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'backend', proficiency: 90 },
  { name: 'REST APIs', icon: 'api', category: 'backend', proficiency: 90 },
  { name: 'Python', icon: 'python', category: 'backend', proficiency: 80 },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend', proficiency: 85 },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'backend', proficiency: 80 },
  { name: 'Supabase', icon: 'supabase', category: 'backend', proficiency: 85 },
  
  // Tools
  { name: 'Git', icon: 'git', category: 'tools', proficiency: 85 },
  { name: 'AWS', icon: 'aws', category: 'tools', proficiency: 75 },
  { name: 'VS Code', icon: 'vscode', category: 'tools', proficiency: 95 },
  { name: 'Linux', icon: 'linux', category: 'tools', proficiency: 80 },
];

export const projects: Project[] = [
  {
    id: '4',
    title: 'TraceAI',
    description: 'AI-powered code execution explainer that visualizes logic flow line-by-line. Features a modern monorepo architecture with Turborepo, high-performance Bun runtime, and Hono backend, integrating OpenAI/Groq compatible APIs for intelligent code analysis.',
    techStack: ['React', 'Tailwind CSS', 'Bun', 'Hono', 'OpenAI', 'Turborepo'],
    githubUrl: 'https://github.com/7vignesh/Trace_AI',
    featured: true,
  },
  {
    id: '1',
    title: 'BlogPost',
    description: 'A full-stack blog platform with JWT authentication featuring access/refresh token rotation and role-based authorization. Includes RESTful APIs for CRUD operations with search, pagination, tag filtering, and user-specific content management with ownership-based access control.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Markdown'],
    githubUrl: 'https://github.com/7vignesh/blogpost',
    featured: true,
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    description: 'A real-time full-stack chat application enabling seamless user communication with Socket.io. Features secure JWT authentication, Zustand for efficient global state management, optimized API performance, and production-grade deployment configurations.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Zustand'],
    githubUrl: 'https://github.com/7vignesh/chat',
    featured: true,
  },
  {
    id: '3',
    title: 'Sorting Visualizer',
    description: 'A dynamic visualization tool for sorting algorithms including Bubble, Selection, Insertion, Merge, and Quick Sort. Features real-time visualization to effectively demonstrate and compare algorithm performance with a responsive design.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    githubUrl: 'https://github.com/7vignesh/sorting-visualizer',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Mantarlee Social Innovations Federation',
    role: 'Web Developer Intern',
    duration: 'Oct 2024 - Nov 2024',
    startDate: '2024-10',
    endDate: '2024-11',
    description: 'Engineered backend services and collaborated with the development team to build scalable applications.',
    highlights: [
      'Engineered and accelerated backend services using Node.js, Express.js, and MySQL, achieving 15% improvement in server response time',
      'Partnered with a 3-member development team to provide robust backend support, ensuring seamless API integration with frontend components',
      'Architected and optimized MySQL database schema, resulting in 20% increase in data retrieval efficiency',
      'Developed and refined RESTful API endpoints, enhancing system efficiency and backend functionality',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/7vignesh',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vignesh-gopikrishnan-3851a1217/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:vigneshgopikrishnan.7@gmail.com',
    icon: 'email',
  },
];
