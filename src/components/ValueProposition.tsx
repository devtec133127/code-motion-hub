import { Zap, Code2, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Zuverlässige Automatisierungen",
    description: "Workflows laufen stabil, ohne manuelle Eingriffe oder doppelte Dateneingaben. So bleibt Ihr Team fokussiert auf Kreativität statt Routineaufgaben."
  },
  {
    icon: Workflow,
    title: "Nahtlose CRM-Integration",
    description: "Leads aus Webflow, Typeform oder anderen Quellen werden automatisch ins CRM übertragen – sauber, sicher und nachvollziehbar."
  },
  {
    icon: Code2,
    title: "Erweiterbare technische Basis",
    description: "Meine Integrationen wachsen mit Ihren Anforderungen. Ob neue Tools, APIs oder Automatisierungen – das Fundament bleibt stabil."
  }
];

export const ValueProposition = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum technische Umsetzung durch Spezialisten?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Konzentrieren Sie sich auf Design und Kundenprojekte – ich sorge dafür, dass Ihre Prozesse,
              Datenflüsse und Integrationen reibungslos funktionieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-soft transition-all duration-300 border border-border animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="mb-8 w-16 h-16 flex items-center justify-center bg-accent/10 rounded-lg mx-auto">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-left">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-left">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
