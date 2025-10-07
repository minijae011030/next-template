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

export default Features;
