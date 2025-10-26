import { Zap, Code2, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Performance & saubere Umsetzung",
    description: "Optimierter Code für schnelle Ladezeiten und reibungslose Animationen auf allen Geräten."
  },
  {
    icon: Workflow,
    title: "Skalierbare Automationen",
    description: "Integration von Prozessen und Workflows, die mit Ihrem Projekt wachsen."
  },
  {
    icon: Code2,
    title: "Integration von Webflow & GSAP",
    description: "Nahtlose Verbindung von Webflow-CMS, APIs und hochperformanten GSAP-Animationen."
  }
];

export const ValueProposition = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum technische Umsetzung?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Konzentrieren Sie sich auf Strategie und Design – wir kümmern uns um die technische Perfektion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-soft transition-all duration-300 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-lg">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
