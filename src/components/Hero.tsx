import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(188,230,243,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(188,230,243,0.1),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Technische Umsetzung für Agenturen
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Animation, Integration, Automation
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Professionelle technische Umsetzung Ihrer Webflow-Projekte mit GSAP-Animationen, 
          API-Integrationen und skalierbaren Automationen – ohne Design-Leistungen.
        </p>
        
        <Button 
          onClick={onContactClick}
          size="lg"
          className="btn-cta text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300"
        >
          Jetzt Projekt anfragen
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
