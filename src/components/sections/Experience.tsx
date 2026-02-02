'use client';

import React from 'react';
import { Section, Badge } from '@/components/ui';
import Icon from '@/components/ui/Icon';
import { experiences } from '@/data/portfolio';
import { Experience as ExperienceType } from '@/types';

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isLast }) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-accent via-border to-transparent" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-card border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      {/* Content */}
      <div
        className="glass-card rounded-2xl p-6 ml-4 hover:border-white/20 transition-all duration-300 animate-fade-in"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
            <p className="text-accent font-medium">{experience.company}</p>
          </div>
          <div className="flex items-center gap-2 text-muted text-sm">
            <Icon name="calendar" size={16} />
            <span>{experience.duration}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted mb-4">{experience.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <Icon name="check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        {experience.techStack && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {experience.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and career highlights"
    >
      <div className="max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
