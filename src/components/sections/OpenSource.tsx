import React from 'react';
import {
  advayaDirectCommits,
  mergedPullRequests,
  openPullRequests,
} from '@/data/openSource';

const repositories = Array.from(
  mergedPullRequests.reduce((groups, pullRequest) => {
    const existing = groups.get(pullRequest.repository) ?? [];
    groups.set(pullRequest.repository, [...existing, pullRequest]);
    return groups;
  }, new Map<string, typeof mergedPullRequests>()),
);

const formatMergedDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

const OpenSource: React.FC = () => {
  return (
    <section id="open-source" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Open Source &amp; Community
        </h2>
        <p className="text-base leading-relaxed text-zinc-400">
          Shipping fixes, features, tests, and developer tooling across open-source projects.
        </p>
      </div>

      <div className="divide-y divide-zinc-800/70 border-y border-zinc-900/60">
        <details className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded px-2 py-4 transition-colors hover:bg-zinc-900/70 [&::-webkit-details-marker]:hidden">
            <div className="min-w-0">
              <span className="block text-sm font-medium text-white">Supabase / supabase-js</span>
              <span className="mt-1 block text-xs text-zinc-600">
                {openPullRequests.length} submitted pull requests · open
              </span>
            </div>
            <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-zinc-300">
              <span className="group-open:hidden">open +</span>
              <span className="hidden group-open:inline">close −</span>
            </span>
          </summary>

          <div className="space-y-1 pb-4 pt-1">
            <a
              href="https://github.com/supabase/supabase-js"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 ml-2 inline-block text-xs text-zinc-600 transition-colors hover:text-white"
            >
              View repository ↗
            </a>
            <div className="mx-2 mb-3 rounded border border-emerald-900/60 bg-emerald-950/20 p-3 text-sm text-zinc-400">
              Active open-source contribution to the Supabase JavaScript client. These PRs are submitted and awaiting review.
            </div>
            {openPullRequests.map((pullRequest) => (
              <a
                key={pullRequest.url}
                href={pullRequest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/pr flex items-start justify-between gap-4 rounded px-2 py-2.5 transition-colors hover:bg-zinc-900/70"
                aria-label={`Open Supabase pull request ${pullRequest.number}: ${pullRequest.title}`}
              >
                <span className="min-w-0 text-sm leading-relaxed text-zinc-400 transition-colors group-hover/pr:text-white">
                  {pullRequest.title}
                </span>
                <span className="shrink-0 text-right text-xs leading-relaxed text-emerald-500">
                  OPEN · #{pullRequest.number} ↗
                </span>
              </a>
            ))}
          </div>
        </details>

        {repositories.map(([repository, pullRequests]) => (
          <details key={repository} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded px-2 py-4 transition-colors hover:bg-zinc-900/70 [&::-webkit-details-marker]:hidden">
              <div className="min-w-0">
                <span className="block text-sm font-medium text-white">
                  {repository === 'Tracer-Cloud/opensre' ? 'Tracer-Cloud / OpenSRE' : repository}
                </span>
                <span className="mt-1 block text-xs text-zinc-600">
                  {repository === 'ritik0506/ADVAYA'
                    ? `${advayaDirectCommits.length} direct commits to main · ${pullRequests.length} merged pull request`
                    : `${pullRequests.length} merged pull requests`}
                </span>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                <span className="group-open:hidden">open +</span>
                <span className="hidden group-open:inline">close −</span>
              </span>
            </summary>

            <div className="space-y-1 pb-4 pt-1">
              <a
                href={`https://github.com/${repository}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 ml-2 inline-block text-xs text-zinc-600 transition-colors hover:text-white"
              >
                View repository ↗
              </a>

              {repository === 'ritik0506/ADVAYA' && (
                <div className="mx-2 mb-3 rounded border border-emerald-900/60 bg-emerald-950/20 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                    Write access · direct to main
                  </span>
                  <h3 className="mt-2 text-sm font-medium text-white">Direct main-branch contributor</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    Granted repository write access and shipped {advayaDirectCommits.length} commits directly to the main branch.
                  </p>
                  <div className="mt-3 space-y-1 border-t border-emerald-900/40 pt-3">
                    {advayaDirectCommits.map((commit) => (
                      <a
                        key={commit.sha}
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 rounded px-2 py-1.5 text-xs text-zinc-500 transition-colors hover:bg-emerald-950/30 hover:text-white"
                      >
                        <span>{commit.title}</span>
                        <span className="shrink-0 font-mono text-emerald-500">{commit.sha} ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {pullRequests.map((pullRequest) => (
                <a
                  key={pullRequest.url}
                  href={pullRequest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/pr flex items-start justify-between gap-4 rounded px-2 py-2.5 transition-colors hover:bg-zinc-900/70"
                  aria-label={`Open pull request ${pullRequest.number}: ${pullRequest.title}`}
                >
                  <span className="min-w-0 text-sm leading-relaxed text-zinc-400 transition-colors group-hover/pr:text-white">
                    {pullRequest.title}
                  </span>
                  <span className="shrink-0 text-right text-xs leading-relaxed text-zinc-600 transition-colors group-hover/pr:text-zinc-300">
                    #{pullRequest.number} ↗
                    <span className="block">{formatMergedDate(pullRequest.mergedAt)}</span>
                  </span>
                </a>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
