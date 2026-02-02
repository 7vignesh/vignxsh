# Portfolio Website - Copilot Instructions

## Project Overview
This is a modern, minimal, black-theme personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS 4.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist Sans & Geist Mono

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── layout/             # Layout components (Navigation, Footer)
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   └── ui/                 # Reusable UI components
├── data/
│   └── portfolio.ts        # Portfolio data (projects, skills, etc.)
├── hooks/
│   └── useScrollReveal.ts  # Custom hooks for animations
└── types/
    └── index.ts            # TypeScript interfaces
```

## Development Guidelines

### Component Pattern
- Use functional components with TypeScript
- Client components use 'use client' directive
- Props interfaces defined inline or in types/
- Export components from index.ts barrel files

### Styling Conventions
- Use Tailwind utility classes
- Custom CSS variables in globals.css
- Class naming: glass-card, gradient-text, etc.
- Animations defined in CSS with @keyframes

### Data Management
- Portfolio data in src/data/portfolio.ts
- Update personalInfo, skills, projects, experiences
- Types defined in src/types/index.ts

## Running the Project
```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Customization
1. Update `src/data/portfolio.ts` with your information
2. Replace placeholder URLs with actual links
3. Customize colors in `globals.css` CSS variables
4. Add your own projects and experiences
