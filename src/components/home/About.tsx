"use client";

import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { ExternalLink, GitFork, RefreshCw, Star } from "lucide-react";
import Link from "next/link";

type Repo = {
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
  language: string | null;
  updated_at: string;
  owner: { login: string };
};

const repos = [
  {
    key: ["repo", "vercel", "next.js"],
    url: "https://api.github.com/repos/vercel/next.js",
    title: "Next.js (vercel/next.js)",
  },
  {
    key: ["repo", "minijae011030", "next-template"],
    url: "https://api.github.com/repos/minijae011030/next-template",
    title: "Your Starter (minijae011030/next-template)",
  },
];

async function getRepo(url: string): Promise<Repo> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`GitHub API ${res.status} ${res.statusText}: ${msg}`);
  }
  return res.json();
}

function About() {
  const results = useQueries({
    queries: repos.map(({ key, url }) => ({
      queryKey: key,
      queryFn: () => getRepo(url),
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
    })),
  }) as UseQueryResult<Repo, Error>[];

  const isLoading = results.some((r) => r.isLoading);
  const isError = results.some((r) => r.isError);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold">About this Starter</h2>
        <p className="mt-2 text-muted-foreground">
          This page demonstrates{" "}
          <span className="font-medium">TanStack Query</span> fetching data from
          the GitHub REST API. It shows loading, error, caching, and manual
          refetch.
        </p>
      </header>

      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => results.forEach((r) => r.refetch())}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-accent"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      {isLoading && <RepoGridSkeleton />}

      {!isLoading && isError && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          Failed to load repository data. (Rate limit or network?) Try Refresh.
        </div>
      )}

      {!isLoading && !isError && (
        <div className="grid gap-6 sm:grid-cols-2">
          {results.map(
            (r, i) => r.data && <RepoCard key={repos[i].url} repo={r.data} />
          )}
        </div>
      )}
    </div>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{repo.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {repo.description ?? "No description provided."}
          </p>
        </div>
        <Link
          href={repo.html_url}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
        >
          GitHub <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Star className="h-4 w-4" /> {repo.stargazers_count.toLocaleString()}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-4 w-4" /> {repo.forks_count.toLocaleString()}
        </span>
        <span className="inline-flex items-center gap-1">
          Issues: {repo.open_issues_count.toLocaleString()}
        </span>
        {repo.language && <span>Lang: {repo.language}</span>}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Updated at {new Date(repo.updated_at).toLocaleString()}
      </p>
    </article>
  );
}

function RepoGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <div className="h-5 w-40 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-full animate-pulse rounded bg-muted" />
          <div className="mt-1 h-4 w-3/4 animate-pulse rounded bg-muted" />
          <div className="mt-4 flex gap-3">
            <div className="h-5 w-16 animate-pulse rounded bg-muted" />
            <div className="h-5 w-16 animate-pulse rounded bg-muted" />
            <div className="h-5 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
