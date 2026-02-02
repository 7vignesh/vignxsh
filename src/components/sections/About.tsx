'use client';

import React from 'react';
import { Section } from '@/components/ui';
import TechIcon from '@/components/ui/TechIcon';
import { personalInfo, skills } from '@/data/portfolio';

const About: React.FC = () => {
  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolsSkills = skills.filter((s) => s.category === 'tools');

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me and my journey in software development"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Bio Section */}
        <div className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass-card rounded-xl p-4">
              <span className="text-3xl font-bold gradient-text-accent">8.6</span>
              <p className="text-sm text-muted mt-1">MCA CGPA</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <span className="text-3xl font-bold gradient-text-accent">20+</span>
              <p className="text-sm text-muted mt-1">Projects Built</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <span className="text-3xl font-bold gradient-text-accent">4+</span>
              <p className="text-sm text-muted mt-1">Certifications</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <span className="text-3xl font-bold gradient-text-accent">1</span>
              <p className="text-sm text-muted mt-1">Internship</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <TechIcon key={skill.name} name={skill.icon} size={24} showLabel />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <TechIcon key={skill.name} name={skill.icon} size={24} showLabel />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolsSkills.map((skill) => (
                <TechIcon key={skill.name} name={skill.icon} size={24} showLabel />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
