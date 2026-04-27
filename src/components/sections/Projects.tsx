"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { projects } from '@/data/portfolio';

type ProjectFilter = 'all' | 'ai' | 'full-stack' | 'tools';

const projectCategories: Record<string, Exclude<ProjectFilter, 'all'>> = {
  '7': 'tools',
  '8': 'ai',
  '6': 'ai',
  '4': 'ai',
  '1': 'full-stack',
  '2': 'full-stack',
  '3': 'tools',
  '5': 'ai',
  '9': 'tools',
};

const filterLabels: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'all' },
  { value: 'ai', label: 'ai' },
  { value: 'full-stack', label: 'full-stack' },
  { value: 'tools', label: 'tools' },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const getDomainLabel = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return 'open project';
    }
  };

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const category = projectCategories[project.id];
        return activeFilter === 'all' || category === activeFilter;
      }),
    [activeFilter],
  );

  useEffect(() => {
    if (openProjectId && !visibleProjects.some((project) => project.id === openProjectId)) {
      setOpenProjectId(null);
    }
  }, [openProjectId, visibleProjects]);

  return (
    <section id="projects" className="space-y-5">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">projects</h2>
      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-zinc-600">
        {filterLabels.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`transition-colors duration-200 hover:text-zinc-300 ${
                isActive ? 'text-zinc-200' : ''
              }`}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <div className="divide-y divide-zinc-800/70 border-y border-zinc-900/60">
        {visibleProjects.map((project) => {
          const isOpen = openProjectId === project.id;
          const category = projectCategories[project.id];

          return (
            <article key={project.id} className="py-3">
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setOpenProjectId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  className="flex min-w-0 flex-1 items-center justify-between gap-4 text-left group"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-white transition-colors duration-200 group-hover:text-zinc-200">
                      {project.title}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                      {category}
                    </div>
                  </div>
                  <div className="shrink-0 text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">
                    {isOpen ? 'close' : 'open'}
                  </div>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live site for ${project.title}`}
                    className="group inline-flex shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500 transition-colors duration-200 hover:text-zinc-200"
                  >
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/25 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.55)]" />
                    </span>
                    <span className="transition-colors duration-200 group-hover:text-zinc-200">view site</span>
                  </a>
                )}
              </div>

              <div
                className={`grid overflow-hidden transition-all duration-200 ease-out ${
                  isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 space-y-3">
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400 marker:text-zinc-500">
                    {project.description.map((point, index) => (
                      <li key={`${project.id}-${index}`}>{point}</li>
                    ))}
                  </ul>
                  <p className="text-xs leading-relaxed text-zinc-600">
                    {project.techStack.join(' · ')}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-zinc-200"
                      >
                        github
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-zinc-200"
                      >
                        live · {getDomainLabel(project.liveUrl)}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
