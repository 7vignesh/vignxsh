'use client';

import React from 'react';
import { Section, Card, Badge } from '@/components/ui';
import Icon from '@/components/ui/Icon';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card
      className="group p-6 h-full flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-accent/10 text-accent">
          <Icon name="code" size={24} />
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="View on GitHub"
            >
              <Icon name="github" size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="View live demo"
            >
              <Icon name="externalLink" size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

const Projects: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work and side projects"
      className="bg-gradient-to-b from-background via-card/30 to-background"
    >
      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 stagger-children">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
};

export default Projects;
