export interface MergedPullRequest {
  repository: string;
  number: number;
  title: string;
  url: string;
  mergedAt: string;
}

export const mergedPullRequests: MergedPullRequest[] = [
  { repository: 'Agent-Field/agentfield', number: 812, title: 'chore(sdk/python): enable ruff ASYNC lint rules to gate async/blocking hazards (#620)', url: 'https://github.com/Agent-Field/agentfield/pull/812', mergedAt: '2026-08-05' },
  { repository: 'Agent-Field/agentfield', number: 796, title: 'feat(sdk/typescript): trigger system parity — dispatch, sugar, testing, demo', url: 'https://github.com/Agent-Field/agentfield/pull/796', mergedAt: '2026-07-19' },
  { repository: 'Agent-Field/agentfield', number: 794, title: 'test(sdk/python): expand verification.py coverage to 100% (#398)', url: 'https://github.com/Agent-Field/agentfield/pull/794', mergedAt: '2026-07-18' },
  { repository: 'Agent-Field/agentfield', number: 790, title: 'fix(security): SSRF protection for approval callback_url (#435)', url: 'https://github.com/Agent-Field/agentfield/pull/790', mergedAt: '2026-07-19' },
  { repository: 'Agent-Field/agentfield', number: 743, title: 'feat(sdk/ts): add trigger types, factories, and registration plumbing', url: 'https://github.com/Agent-Field/agentfield/pull/743', mergedAt: '2026-07-15' },
  { repository: 'Agent-Field/agentfield', number: 724, title: 'fix(sdk/go): rewrite max_tokens to max_completion_tokens for newer OpenAI models', url: 'https://github.com/Agent-Field/agentfield/pull/724', mergedAt: '2026-07-15' },
  { repository: 'Agent-Field/agentfield', number: 717, title: 'fix(control-plane): add timestamp freshness checks to prevent webhook replay attacks', url: 'https://github.com/Agent-Field/agentfield/pull/717', mergedAt: '2026-07-09' },
  { repository: 'Agent-Field/agentfield', number: 716, title: 'fix(control-plane): flush SSE headers immediately in memory events handler', url: 'https://github.com/Agent-Field/agentfield/pull/716', mergedAt: '2026-07-06' },
  { repository: 'Agent-Field/agentfield', number: 715, title: 'fix(control-plane): implement graceful shutdown on SIGTERM/SIGINT', url: 'https://github.com/Agent-Field/agentfield/pull/715', mergedAt: '2026-07-04' },
  { repository: 'Agent-Field/agentfield', number: 701, title: 'fix(control-plane): prevent structured logs from leaking execution payloads', url: 'https://github.com/Agent-Field/agentfield/pull/701', mergedAt: '2026-07-03' },
  { repository: 'Tracer-Cloud/opensre', number: 3821, title: 'fix(delivery): align error shapes across messaging delivery modules', url: 'https://github.com/Tracer-Cloud/opensre/pull/3821', mergedAt: '2026-07-07' },
  { repository: 'Tracer-Cloud/opensre', number: 2222, title: 'feat(scheduler): add cron-driven scheduled deliveries to messaging providers', url: 'https://github.com/Tracer-Cloud/opensre/pull/2222', mergedAt: '2026-05-22' },
  { repository: 'Tracer-Cloud/opensre', number: 1714, title: 'feat(messaging): add identity model, DM pairing, and tool approval metadata', url: 'https://github.com/Tracer-Cloud/opensre/pull/1714', mergedAt: '2026-05-12' },
  { repository: 'Tracer-Cloud/opensre', number: 1570, title: 'fix(synthetic-tests): skip E2E tests gracefully when LLM credentials are missing', url: 'https://github.com/Tracer-Cloud/opensre/pull/1570', mergedAt: '2026-05-08' },
  { repository: 'Tracer-Cloud/opensre', number: 1404, title: 'feat(interactive-shell): run_cli_command supports full opensre subcommand surface', url: 'https://github.com/Tracer-Cloud/opensre/pull/1404', mergedAt: '2026-05-08' },
  { repository: 'Tracer-Cloud/opensre', number: 1037, title: 'refactor(tools): centralize code-host unavailable payload for code-host tools', url: 'https://github.com/Tracer-Cloud/opensre/pull/1037', mergedAt: '2026-04-28' },
  { repository: 'Tracer-Cloud/opensre', number: 1017, title: 'test(tools): add unit tests for Bitbucket tools', url: 'https://github.com/Tracer-Cloud/opensre/pull/1017', mergedAt: '2026-04-29' },
  { repository: 'Tracer-Cloud/opensre', number: 1015, title: 'test(cli): add direct unit tests for CLI layout renderers', url: 'https://github.com/Tracer-Cloud/opensre/pull/1015', mergedAt: '2026-04-28' },
  { repository: 'Tracer-Cloud/opensre', number: 1007, title: 'test(tools): add unit tests for Azure Monitor Logs tool', url: 'https://github.com/Tracer-Cloud/opensre/pull/1007', mergedAt: '2026-04-27' },
  { repository: 'Tracer-Cloud/opensre', number: 977, title: 'feat(alerts): normalize incoming payloads to OpenSRE canonical format', url: 'https://github.com/Tracer-Cloud/opensre/pull/977', mergedAt: '2026-05-01' },
  { repository: 'Tracer-Cloud/opensre', number: 958, title: 'refactor(wizard): split integration health validators into grouped modules', url: 'https://github.com/Tracer-Cloud/opensre/pull/958', mergedAt: '2026-04-29' },
  { repository: 'Tracer-Cloud/opensre', number: 957, title: 'refactor(wizard): migrate Slack webhook validation from requests to httpx', url: 'https://github.com/Tracer-Cloud/opensre/pull/957', mergedAt: '2026-04-25' },
  { repository: '7vignesh/stackforge', number: 8, title: 'ci: add GitHub Actions workflow for typecheck, test, and build', url: 'https://github.com/7vignesh/stackforge/pull/8', mergedAt: '2026-06-24' },
  { repository: '7vignesh/stackforge', number: 7, title: 'Chore/UI landing parity', url: 'https://github.com/7vignesh/stackforge/pull/7', mergedAt: '2026-04-10' },
  { repository: '7vignesh/stackforge', number: 6, title: 'Feat/token optimizer openrouter', url: 'https://github.com/7vignesh/stackforge/pull/6', mergedAt: '2026-04-01' },
  { repository: '7vignesh/stackforge', number: 5, title: 'Feat/web dashboard', url: 'https://github.com/7vignesh/stackforge/pull/5', mergedAt: '2026-04-01' },
  { repository: '7vignesh/stackforge', number: 4, title: 'Core logicReal OpenRouter Agent Pipeline + Per-Agent Token Optimizer, Telemetry, and Validation Hardening', url: 'https://github.com/7vignesh/stackforge/pull/4', mergedAt: '2026-03-26' },
  { repository: '7vignesh/stackforge', number: 3, title: 'add CODEOWNERS', url: 'https://github.com/7vignesh/stackforge/pull/3', mergedAt: '2026-03-25' },
  { repository: 'ritik0506/ADVAYA', number: 1, title: 'DB URI', url: 'https://github.com/ritik0506/ADVAYA/pull/1', mergedAt: '2026-02-10' },
];

export const openSourceOrganizations = [
  { name: 'Agent-Field', url: 'https://github.com/Agent-Field', repository: 'agentfield' },
  { name: 'Tracer-Cloud', url: 'https://github.com/Tracer-Cloud/opensre', repository: 'OpenSRE' },
  { name: 'Supabase', url: 'https://github.com/supabase/supabase-js', repository: 'supabase-js' },
];

export interface DirectCommit {
  sha: string;
  title: string;
  url: string;
  committedAt: string;
}

export const advayaDirectCommits: DirectCommit[] = [
  { sha: 'b830607', title: 'Optimized frontend and backend', url: 'https://github.com/ritik0506/ADVAYA/commit/b830607c4ff34879fce5c668258aa63c12ffd9ee', committedAt: '2026-02-15' },
  { sha: '2d5e422', title: 'Sorted team registration flow', url: 'https://github.com/ritik0506/ADVAYA/commit/2d5e4226000cd7e5f68514a8c25686946fc64c3b', committedAt: '2026-02-15' },
  { sha: '70368dc', title: 'Optimized the mobile view', url: 'https://github.com/ritik0506/ADVAYA/commit/70368dcaacdb547e823f37be08e2a65538dd3b38', committedAt: '2026-02-15' },
  { sha: '2853ae0', title: 'Optimized overall performance', url: 'https://github.com/ritik0506/ADVAYA/commit/2853ae09e97ef4ff8db42aeda339d997e6aed45f', committedAt: '2026-02-15' },
  { sha: '1ec3de3', title: 'Testing and verification', url: 'https://github.com/ritik0506/ADVAYA/commit/1ec3de3df05d063c906178fa7e342323b40da907', committedAt: '2026-02-15' },
  { sha: 'e63476b', title: 'Completed backend setup', url: 'https://github.com/ritik0506/ADVAYA/commit/e63476bfa494cc7de345d7c206a5115762ac2575', committedAt: '2026-02-15' },
];

export interface OpenPullRequest {
  repository: string;
  number: number;
  title: string;
  url: string;
}

export const openPullRequests: OpenPullRequest[] = [
  { repository: 'supabase/supabase-js', number: 2573, title: 'feat(auth): add maxAutoRefreshFailures option', url: 'https://github.com/supabase/supabase-js/pull/2573' },
  { repository: 'supabase/supabase-js', number: 2445, title: 'fix(postgrest): add typed column inference for order() with referencedTable', url: 'https://github.com/supabase/supabase-js/pull/2445' },
];