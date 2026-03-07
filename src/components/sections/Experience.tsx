import React from 'react';
import { experiences } from '@/data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-1">
            <div className="flex items-baseline justify-between gap-4">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-accent underline decoration-zinc-700"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="text-sm font-medium text-white">{exp.company}</span>
              )}
              <span className="text-xs text-muted whitespace-nowrap shrink-0">{exp.duration}</span>
            </div>
            <p className="text-xs text-zinc-500">{exp.role}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
