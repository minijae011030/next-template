import Features from "@/components/home/Features";
import GettingStarted from "@/components/home/GettingStarted";
import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TeckStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero />
      <Features />
      <GettingStarted />
      <TechStack />
    </div>
  );
}
