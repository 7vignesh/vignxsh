import React from 'react';
import { projects } from '@/data/portfolio';

const Projects: React.FC = () => {
  const getDomainLabel = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return 'open project';
    }
  };

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
                  aria-label={`Open live preview for ${project.title}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-zinc-700/90 bg-zinc-900/80 px-3 py-1.5 text-sm leading-none text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-zinc-800/90 hover:text-white"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-medium">Live Preview</span>
                  <span className="text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">
                    {getDomainLabel(project.liveUrl)}
                  </span>
                  <span className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                    ↗
                  </span>
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
