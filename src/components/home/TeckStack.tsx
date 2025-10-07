function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        {[
          "Next.js 15",
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

export default TechStack;
