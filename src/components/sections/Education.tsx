'use client';

import React from 'react';
import { Section, Card, Badge } from '@/components/ui';
import Icon from '@/components/ui/Icon';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  grade: string;
  highlights?: string[];
}

const educationData: EducationItem[] = [
  {
    id: '1',
    institution: 'RV Institute of Technology and Management',
    degree: 'Master of Computer Applications (MCA)',
    location: 'Bangalore, Karnataka',
    duration: '2024 - 2026',
    grade: 'CGPA: 8.6',
    highlights: [
      'Full Stack Web Development',
      'Cloud Computing with AWS',
      'Advanced Database Management',
    ],
  },
  {
    id: '2',
    institution: "St Joseph's University",
    degree: 'Bachelor of Computer Applications (BCA)',
    location: 'Bangalore, Karnataka',
    duration: '2021 - 2024',
    grade: 'CGPA: 7.8',
    highlights: [
      'Programming Fundamentals (C/C++, Python)',
      'Web Development',
      'Database Systems',
    ],
  },
];

const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic journey and qualifications"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <Card
            key={edu.id}
            className="p-6 h-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-accent font-medium text-sm mt-1">
                  {edu.institution}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-muted text-sm">
                <Icon name="location" size={16} />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <Icon name="calendar" size={16} />
                <span>{edu.duration}</span>
              </div>
            </div>

            {/* Grade Badge */}
            <div className="mb-4">
              <Badge variant="accent" className="text-sm font-semibold">
                {edu.grade}
              </Badge>
            </div>

            {/* Highlights */}
            {edu.highlights && (
              <ul className="space-y-2 pt-4 border-t border-border">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check" size={14} className="text-accent mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;
