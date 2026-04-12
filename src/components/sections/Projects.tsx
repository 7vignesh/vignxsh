import React from 'react';
import { projects } from '@/data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-accent underline decoration-zinc-700"
                >
                  {project.title}
                </a>
              ) : (
                <span className="text-sm font-medium text-white">{project.title}</span>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-accent"
                >
                  live ↗
                </a>
              )}
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400 marker:text-zinc-500">
              {project.description.map((point, index) => (
                <li key={`${project.id}-${index}`}>{point}</li>
              ))}
            </ul>
            <p className="text-xs text-zinc-600">{project.techStack.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
