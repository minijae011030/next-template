"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import github_logo_white from "../../../public/github-mark-white.png";
import github_logo from "../../../public/github-mark.png";
import next_logo from "../../../public/next.svg";

function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative transition-colors duration-300">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/40 via-indigo-500/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <div className="mb-6 flex justify-center gap-5">
          <Image
            src={next_logo}
            alt="Next.js Logo"
            className="h-7 w-auto brightness-0 dark:invert transition-all"
          />
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
            icon={
              mounted
                ? resolvedTheme === "dark"
                  ? github_logo_white
                  : github_logo
                : github_logo_white
            }
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

export default Hero;
