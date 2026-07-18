import { Project, Skill, Experience, SocialLink, NavItem, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Vignesh',
  role: 'Full Stack AI Engineer',
  tagline: 'Building production apps at 10x speed with AI coding agents and engineered workflows',
  bio: `I build full-stack apps with ReactJS, Node, and TypeScript and I ship faster by designing the AI workflows around them. Skill files, MCP protocols, agent orchestration. I treat AI tooling as a first-class engineering skill, not a shortcut.`,
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
  // Languages
  { name: 'Python', icon: 'python', category: 'frontend', proficiency: 80 },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend', proficiency: 90 },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', proficiency: 90 },
  { name: 'C/C++', icon: 'cpp', category: 'frontend', proficiency: 70 },

  // Backend & APIs
  { name: 'Node.js', icon: 'nodejs', category: 'backend', proficiency: 90 },
  { name: 'Express.js', icon: 'express', category: 'backend', proficiency: 88 },
  { name: 'REST APIs', icon: 'api', category: 'backend', proficiency: 90 },
  { name: 'WebSockets', icon: 'api', category: 'backend', proficiency: 85 },

  // Async & Messaging

  // Databases
  { name: 'PostgreSQL', icon: 'postgresql', category: 'backend', proficiency: 85 },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend', proficiency: 85 },
  { name: 'MySQL', icon: 'postgresql', category: 'backend', proficiency: 80 },
  { name: 'Redis', icon: 'postgresql', category: 'backend', proficiency: 75 },

  // AI / Agent Systems
  { name: 'MCP', icon: 'api', category: 'tools', proficiency: 85 },
  { name: 'RAG-aware Tooling', icon: 'api', category: 'tools', proficiency: 75 },

  // Cloud & DevOps
  { name: 'AWS', icon: 'aws', category: 'tools', proficiency: 75 },
  { name: 'Vercel', icon: 'vscode', category: 'tools', proficiency: 90 },
  { name: 'Docker', icon: 'linux', category: 'tools', proficiency: 80 },
  { name: 'GitHub Actions', icon: 'git', category: 'tools', proficiency: 85 },

  // Frontend
  { name: 'ReactJS', icon: 'react', category: 'frontend', proficiency: 90 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', proficiency: 85 },

  // Testing & Tooling
  { name: 'Git', icon: 'git', category: 'tools', proficiency: 85 },
];

export const projects: Project[] = [
  {
    id: '6',
    title: 'StackForge — AI Agent Orchestration System',
    description: [
      'Engineered a multi-agent orchestration system in TypeScript/Express.js that scaffolds full-stack project blueprints from plain-English prompts via 6 coordinated sub-agents.',
      'Implemented real-time Server-Sent Events (SSE) streaming for live agent progress updates with OpenRouter API integration; applied per-agent token optimisation including input compression, output caps, and budget guardrails.',
      'Built a Turborepo monorepo with Zod schema validation, strict TypeScript, automated typecheck/test pipelines, and Husky pre-commit hooks to enforce production-grade code quality across all packages.',
      'Deployed on Vercel with CI/CD linked to GitHub; managed 2 tracked production deployments with zero-downtime release patterns.',
    ],
    techStack: ['TypeScript', 'Express.js', 'Turborepo', 'Zod', 'SSE', 'OpenRouter', 'Bun', 'Vercel'],
    githubUrl: 'https://github.com/7vignesh/stackforge',
    liveUrl: 'https://stackforge-web.vercel.app/',
    featured: true,
  },
  {
    id: '9',
    title: 'Fossel — Local-First MCP Memory Server',
    description: [
      'Built a TypeScript/SQLite (FTS5) MCP memory server for open-source contributors, enabling persistent full-text search of repo-specific context; published to npm as fossel (v1.0.6) with 4 tool endpoints exposed via a stdio interface compatible with AI coding tools like Cursor and Claude Desktop.',
      'Designed an efficient data storage layer leveraging SQLite FTS5 for fast indexed retrieval, applying scalable, maintainable data storage principles for AI agent memory and context systems.',
      'Automated builds and releases with GitHub Actions CI/CD; maintained a clean ESM TypeScript codebase bundled with tsup and deployed the companion site on Vercel.',
    ],
    techStack: ['TypeScript', 'Node.js', 'SQLite (FTS5)', 'MCP Protocol', 'tsup', 'npm', 'GitHub Actions', 'Vercel'],
    githubUrl: 'https://github.com/7vignesh/fossel',
    liveUrl: 'https://www.fossel.app/',
    featured: true,
  },
  {
    id: '7',
    title: 'Folio — Browser-Based PDF Workspace',
    description: [
      'Built a fully client-side PWA in React, TypeScript, and Vite supporting page viewing, annotation, form editing, merge/split, and full-text search; zero backend footprint.',
      'Integrated pdf.js and Fabric.js for rich PDF rendering and canvas-based overlay annotations; configured Workbox service workers for offline-ready performance.',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'pdf.js', 'Fabric.js', 'Workbox'],
    githubUrl: 'https://github.com/7vignesh/folio',
    liveUrl: 'https://folio-delta-seven.vercel.app/',
    featured: true,
  },
  {
    id: '8',
    title: 'Skannr — Universal AI Code Analyzer',
    description: [
      'Built a TypeScript-based universal code analysis engine that scans large codebases and generates compressed structural "skeletons," cutting token usage by ~96.5% versus full-file scans for AI agent context.',
      'Designed a hybrid file-ranking system combining lexical matching, import/export graph structure, and dependency-graph centrality with a cross-rerank pass, achieving ~75% top-1 keyword coverage on real-world queries.',
      'Shipped both a CLI and an MCP (Model Context Protocol) server integration for Gemini CLI, exposing a scan_codebase tool with grounded, evidence-cited responses and a hybrid in-memory/disk cache layer.',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Vite', 'MCP Protocol', 'CLI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/7vignesh/code-analyzer',
    liveUrl: 'https://skannr-ten.vercel.app/',
    featured: true,
  },
  {
    id: '11',
    title: 'PgPulse',
    description: [
      'Production-grade, multi-tenant API analytics platform built on PostgreSQL 16 for tracking endpoint performance.',
      'Ingests API request events per tenant and provides overview, endpoint, latency, error, and timeseries analytics — all isolated via Row-Level Security.',
      'Scales with RANGE partitioning, a streaming read replica, PgBouncer connection pooling, and a materialized view refreshed by pg_cron.',
      'Includes an in-database alert system that evaluates threshold rules every minute and delivers webhooks on breach.',
    ],
    techStack: ['Node.js', 'Fastify', 'TypeScript', 'PostgreSQL 16', 'PgBouncer', 'pg_cron', 'Docker', 'Vitest'],
    githubUrl: 'https://github.com/7vignesh/pgpulse',
    featured: true,
  },
  {
    id: '10',
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
    id: '2',
    company: 'Open Source Contributer',
    role: 'Independent Developer',
    duration: 'Jan 2025 - Present',
    startDate: '2025-01',
    description: 'Building and shipping AI-native developer tools, durable systems, and production products end-to-end.',
    highlights: [
      'Built StackForge — a multi-agent orchestration system with SSE streaming and per-agent token budget guardrails',
      'Created Fossel — a local MCP memory server published to npm with FTS5 full-text search',
      'Shipped Skannr — a universal code analyzer cutting token usage by ~96.5% for AI agent context',
      'Built PgPulse — a multi-tenant API analytics platform on PostgreSQL 16 with RLS, partitioning, and pg_cron alerts',
      'Shipped Folio — a privacy-first browser-based PDF workspace as a fully client-side PWA',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Fastify', 'Docker', 'SQLite', 'MCP'],
  },
  {
    id: '1',
    company: 'Mantarlee Social Innovations Federation',
    role: 'Backend Engineer Intern',
    duration: 'Oct 2024 - Nov 2024',
    startDate: '2024-10',
    endDate: '2024-11',
    description: 'Engineered backend services and collaborated with the development team to build scalable applications.',
    highlights: [
      'Engineered backend services using Node.js, Express.js, and MySQL; achieved a 15% improvement in server response time',
      'Architected and optimised the MySQL database schema, resulting in a 20% increase in data retrieval efficiency',
      'Developed and refined RESTful API endpoints and collaborated with a 3-member team to deliver seamless API-to-frontend integration with full data consistency',
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
