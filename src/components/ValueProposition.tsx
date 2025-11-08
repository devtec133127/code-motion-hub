import { Zap, Code2, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Legacy-System-Wartung",
    description: "Ihre individuellen ERPs, Custom-CRMs oder Legacy-Datenbanken laufen weiter – ich übernehme Updates, Bugfixes und sorge dafür, dass bestehende Integrationen stabil bleiben.\n"
  },
  {
    icon: Workflow,
    title: "API-Integration (REST & SOAP)",
    description: "Ich verbinde Ihre gewachsenen Systeme mit modernen Tools – ob Cloud-Dienste, neue Software oder externe Partner-Schnittstellen."
  },
  {
    icon: Code2,
    title: "Prozess-Automatisierung",
    description: "Manuelle Datenübertragungen, Excel-Imports oder wiederkehrende Tasks automatisiere ich – Ihre Mitarbeiter sparen Zeit, Fehler werden reduziert."
  },
    {
        icon: Code2,
        title: "Flexibler Support ohne Festanstellung",
        description: "Sie zahlen nur für tatsächlich geleistete Arbeit. Kein Full-Time-Developer nötig – ich springe ein, wenn Sie mich brauchen."
    }
];

export const ValueProposition = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Warum ich als externe Unterstützung für Ihr Entwickler Team von Nutzen bin?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ihre gewachsenen Systeme laufen – aber Wartung, Updates und Integrationen bleiben liegen,
              weil Ihr internes Dev-Team auf höher priorisierte Tätigkeiten angesetzt ist,
              Ihr Team aufgrund zeitlicher Vorgaben Entwicklungsunterstützung benötigt oder
              Sie für Spezialthemen Expertise benötigen.
              Hier komme ich ins Spiel, ohne langfristige Verpflichtung, direkt Einsatzbereit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
