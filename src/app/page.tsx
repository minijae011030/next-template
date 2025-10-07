"use client";
import { Copy, Moon, Sun } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { useTheme } from "next-themes";
import github_logo_white from "../../public/github-mark-white.png";
import github_logo from "../../public/github-mark.png";
import next_logo from "../../public/next.svg";
import next_logo2 from "../../public/next2.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <Hero />
      <Features />
      <GettingStarted />
      <TechStack />
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    document.body.classList.add("theme-transition");
    setTheme(theme === "dark" ? "light" : "dark");

    setTimeout(() => document.body.classList.remove("theme-transition"), 300);
  };

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/70 backdrop-blur transition-colors duration-300 supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-primary">
          <Image
            src={next_logo}
            alt="Next.js Logo"
            className="h-5 w-auto brightness-0 dark:invert transition-all"
          />
          <span className="font-semibold">Next.js Starter</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#getting-started" className="hover:text-foreground">
            Getting Started
          </a>
          <a href="#stack" className="hover:text-foreground">
            Tech Stack
          </a>
        </nav>

        <button
          onClick={handleToggle}
          className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent"
          title="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative transition-colors duration-300">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/40 via-indigo-500/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <div className="mb-6 flex justify-center gap-5">
          <Image src={next_logo2} alt="vite" className="h-12 w-auto" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build faster with Next.js.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A batteries-included starter focused on speed, accessibility, and DX.
          Designed for real-world apps—from prototypes to production.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
          {[
            "Next.js 15",
            "TypeScript 5",
            "TanStack Query",
            "Zustand",
            "Tailwind 3",
            "shadcn/ui",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent px-3 py-1 text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <HeroButton href="https://nextjs.org/docs" text="Next.js Docs" />
          <HeroButton href="https://react.dev/" text="React Docs" />
          <HeroButton
            href="https://github.com/minijae011030/next-template"
            text="GitHub"
            icon={theme === "dark" ? github_logo_white : github_logo}
          />
        </div>
      </div>
    </section>
  );
}

function HeroButton({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon?: StaticImageData;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-medium transition-colors hover:bg-accent"
    >
      {icon && <Image src={icon} alt="" className="-ml-2 h-6 w-6" />}
      {text}
    </Link>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const features = [
    {
      title: "App Router",
      desc: "Modern file-system based routing with SSR, SSG, and RSC support.",
    },
    {
      title: "Type-Safe by Default",
      desc: "Pre-configured TypeScript for safer development.",
    },
    {
      title: "Utility-First Styling",
      desc: "TailwindCSS and shadcn/ui preset for rapid UI building.",
    },
    {
      title: "Data Fetching",
      desc: "Powerful caching, retry, and refetch control with TanStack Query.",
    },
    {
      title: "State Management",
      desc: "Lightweight global UI state powered by Zustand.",
    },
    {
      title: "Lint & Format",
      desc: "ESLint, Prettier, and automatic Tailwind class sorting built in.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CODE BLOCK ---------------- */
function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <pre className="mt-2 w-max min-w-full rounded-lg bg-muted p-4 font-mono text-sm">
        {code}
      </pre>
    </div>
  );
}

/* ---------------- GETTING STARTED ---------------- */
function GettingStarted() {
  const code1 = `git clone https://github.com/minijae011030/next-template.git
cd next-template
pnpm i
pnpm dev`;

  const code2 = `pnpm build      # production build
pnpm start      # start server
pnpm lint       # ESLint
pnpm format     # Prettier + Tailwind sort`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast("Copied to clipboard!");
  };

  return (
    <section id="getting-started" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Getting Started</h2>
      <div className="grid min-w-0 gap-6">
        <CodeCard title="Use this template" code={code1} onCopy={handleCopy} />
        <CodeCard title="Common Scripts" code={code2} onCopy={handleCopy} />
      </div>
    </section>
  );
}

function CodeCard({
  title,
  code,
  onCopy,
}: {
  title: string;
  code: string;
  onCopy: (code: string) => void;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <button
          onClick={() => onCopy(code)}
          className="rounded-md bg-accent p-1 transition-colors hover:bg-accent/80"
        >
          <Copy className="h-4 w-4 text-accent-foreground" />
        </button>
      </div>
      <CodeBlock code={code} />
    </div>
  );
}

/* ---------------- TECH STACK ---------------- */
function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        {/* {[vite_logo, react_logo].map((logo, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2"
          >
            <Image src={logo} alt="logo" className="h-5 w-auto" />
          </span>
        ))} */}
        {[
          "TypeScript 5",
          "TanStack Query",
          "Zustand",
          "TailwindCSS 3",
          "shadcn/ui",
          "App Router",
        ].map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Next.js Starter</p>
        <p>Powered by Next.js, Tailwind, shadcn/ui</p>
      </div>
    </footer>
  );
}
