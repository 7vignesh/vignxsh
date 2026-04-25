import { Project, Skill, Experience, SocialLink, NavItem, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Vignesh',
  role: 'Full Stack Developer',
  tagline: 'Building next-generation web applications with Node.js and React',
  bio: `I code, I build things, I vibe-code when I'm lazy — but I love getting my hands dirty and shipping real projects.`,
  email: 'vigneshgopikrishnan.7@gmail.com',
  location: 'Bangalore, India',
  resumeUrl: '/resume.pdf',
  birthDate: '2003-01-01',
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
  { name: 'TypeScript', icon: 'typescript', category: 'frontend', proficiency: 88 },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', proficiency: 90 },
  { name: 'HTML5', icon: 'html', category: 'frontend', proficiency: 95 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', proficiency: 85 },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'backend', proficiency: 90 },
  { name: 'Express.js', icon: 'express', category: 'backend', proficiency: 88 },
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
    id: '7',
    title: 'Folio',
    description: [
      'Browser-based PDF workspace for viewing, annotating, form filling, merge/split, and text search/copy.',
      'Built as a fast client-side editor with React, TypeScript, and Vite for a responsive editing flow.',
      'Uses pdf.js and Fabric.js overlays so files stay local in the browser for privacy-first document editing.',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'pdf.js', 'Fabric.js'],
    githubUrl: 'https://github.com/7vignesh/folio',
    liveUrl: 'https://folio-delta-seven.vercel.app/',
    featured: true,
  },
  {
    id: '8',
    title: 'gymApp (calorieX)',
    description: [
      'AI-powered calorie tracker for logging meals via free-text, image uploads, and structured nutrition entries.',
      'Monorepo architecture with Next.js web app, Bun + Hono API, and Prisma/PostgreSQL data layer.',
      'Includes auth, macro trends, and AI insights with graceful fallback behavior when AI services are unavailable.',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Bun', 'Hono', 'Prisma', 'PostgreSQL', 'Zod', 'OpenAI', 'Turborepo'],
    githubUrl: 'https://github.com/7vignesh/gymApp',
    featured: true,
  },
  {
    id: '6',
    title: 'StackForge',
    description: [
      'AI agent orchestration platform that turns plain-English product ideas into structured full-stack blueprints.',
      'Built as a TypeScript monorepo with Bun + Turborepo, Express APIs, and strict schema validation using Zod.',
      'Streams live generation progress via SSE and integrates OpenRouter with token budget optimization for efficient runs.',
    ],
    techStack: ['TypeScript', 'Bun', 'Turborepo', 'Express', 'Zod', 'SSE', 'OpenRouter'],
    githubUrl: 'https://github.com/7vignesh/stackforge',
    liveUrl: 'https://stackforge-web.vercel.app/',
    featured: true,
  },
  {
    id: '4',
    title: 'TraceAI',
    description: [
      'AI-powered code execution explainer that visualizes program logic step-by-step.',
      'Designed with a monorepo setup using Turborepo and a high-performance Bun runtime.',
      'Uses a Hono backend with OpenAI and Groq-compatible APIs for intelligent code analysis.',
    ],
    techStack: ['React', 'Tailwind CSS', 'Bun', 'Hono', 'OpenAI', 'Turborepo'],
    githubUrl: 'https://github.com/7vignesh/Trace_AI',
    featured: true,
  },
  {
    id: '1',
    title: 'BlogPost',
    description: [
      'Full-stack blog platform with JWT authentication, refresh token rotation, and role-based authorization.',
      'Provides REST APIs for CRUD operations with search, pagination, and tag-based filtering.',
      'Implements ownership-based permissions for secure user-specific content management.',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Markdown'],
    githubUrl: 'https://github.com/7vignesh/blogpost',
    featured: true,
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    description: [
      'Real-time full-stack chat platform built with Socket.io for low-latency messaging.',
      'Secures user access with JWT-based authentication and authorization flows.',
      'Uses Zustand for state management and includes production-ready deployment optimizations.',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Zustand'],
    githubUrl: 'https://github.com/7vignesh/chat',
    featured: true,
  },
  {
    id: '3',
    title: 'Sorting Visualizer',
    description: [
      'Interactive visualization tool for Bubble, Selection, Insertion, Merge, and Quick Sort algorithms.',
      'Animates each sorting step in real time to help users understand algorithm behavior clearly.',
      'Responsive UI that makes side-by-side comparison and learning accessible across devices.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    githubUrl: 'https://github.com/7vignesh/sorting-visualizer',
    featured: true,
  },
  {
    id: '5',
    title: 'MedExplain',
    description: [
      'Full-stack app where users upload medical reports (PDF/image) for automated analysis.',
      'Extracts key health parameters using OCR and interprets them with AI/NLP pipelines.',
      'Includes authentication, report history, and an interactive dashboard with privacy-focused handling.',
    ],
    techStack: [
      'Next.js', 'TailwindCSS', 'TypeScript', 'Chart.js', 'Recharts', 'Tesseract.js', 'Firebase Auth',
      'Node.js', 'Express', 'MongoDB Atlas', 'LangChain', 'OpenAI', 'Multer', 'PDF-parse'
    ],
    githubUrl: 'https://github.com/7vignesh/medxplain',
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
    {
      name: 'X',
      url: 'https://x.com/Vignesh7123',
      icon: 'x',
    },
];
