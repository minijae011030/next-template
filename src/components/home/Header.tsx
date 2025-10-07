"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import next_logo from "../../../public/next.svg";

function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    document.body.classList.add("theme-transition");
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
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
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )
          ) : (
            <span className="h-4 w-4" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
