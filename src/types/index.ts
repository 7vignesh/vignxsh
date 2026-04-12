// Types and interfaces for the portfolio website

export interface Project {
  id: string;
  title: string;
  description: string[];
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency?: number; // 0-100
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  techStack?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location?: string;
  avatar?: string;
  resumeUrl?: string;
  birthDate?: string;
}
