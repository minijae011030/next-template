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

export default Footer;
