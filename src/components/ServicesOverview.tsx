import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Network, MessageSquare } from "lucide-react";

interface ServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  priceRange?: string;
  additionalPriceInfo?: string;
  onContactClick: () => void;
}

const ServiceCard = ({ icon: Icon, title, description, features,
                         priceRange, additionalPriceInfo, onContactClick }: ServiceProps) => (
  <Card className="p-8 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col h-full">

      <div className="h-full flex flex-col p-8 shadow-card hover:shadow-soft transition-all duration-300">
          {/* --- Oberer Bereich, dehnt sich --- */}
          <div className="flex-1">
              <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-lg self-start">
                  <Icon className="h-8 w-8 text-accent" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                  {description}
              </p>

              {/* feature-list: kein mb, damit Footer nicht von variablen margins beeinflusst wird */}
              <ul className="space-y-2">
                  {features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-0.5">→</span>
                          {feature}
                      </li>
                  ))}
              </ul>
          </div>

          {/* --- Footer: sitzt dank flex-1 oben immer gleich tief --- */}
          <div className="mt-6">
              {priceRange && (
                  <p className="text-lg font-semibold text-foreground mb-2">
                      {priceRange}
                  </p>
              )}

              {additionalPriceInfo && (
                  <i className="text-sm text-muted-foreground leading-relaxed block">
                      {additionalPriceInfo}
                  </i>
              )}
          </div>
      </div>
  </Card>
);

interface ServicesOverviewProps {
  onContactClick: () => void;
}

export const ServicesOverview = ({ onContactClick }: ServicesOverviewProps) => {
  const services = [
    {
      icon: Sparkles,
      title: "Leads automatisch ins CRM übertragen",
      description: "Professionelle Animationen und interaktive Erlebnisse für moderne Webprojekte.",
      features: [
        "Webflow-Formulare direkt an HubSpot, Pipedrive, Airtable oder Notion senden",
        "Keine verlorenen Kontakte, volle Übersicht über Leads",
        "Automatische Benachrichtigungen & Lead-Qualifizierung",
        "Schnell implementierbare Workflows, ohne dass das Agentur-Team viel Zeit verliert"
      ],
      priceRange: "1.500 - 3.000 €",
      additionalPriceInfo: "Kleinere Setups (z. B. einfache Formular-zu-CRM-Verbindungen) sind oft als Fixpreis ab 1.000 € möglich."
    },
    {
      icon: Network,
      title: "Technische Grenzen von Webflow überwinden",
      description: "Nahtlose Verbindung von APIs, Automationen und Webflow CMS.",
      features: [
        "Custom APIs und Middleware für komplexe Kundenwünsche",
        "Mitgliederbereiche, dynamische Dashboards oder automatisierte Content-Updates",
        "Schnittstellen zu Drittanbieter-Tools (z.B. Zahlungsprovider, externe Datenbanken)",
        "Lösungen, die skalierbar sind und künftiges Wachstum ermöglichen"
      ],
      priceRange: "ab 1.000 €, je nach Komplexität und Integrationsgrad",
      additionalPriceInfo: "Ideal für Agenturen, die regelmäßig kundenspezifische Integrationen benötigen."
    },
    {
      icon: MessageSquare,
      title: "Interne Abläufe automatisieren – mehr Zeit fürs Design",
      description: "Support für Pitches, Demos und technische Machbarkeitsanalysen.",
      features: [
        "Projektstatus automatisch tracken und Deadlines im Blick behalten",
        "Feedback- und Freigaberunden digital steuern, Scope Creep vermeiden",
        "Dashboards für Projekte, Aufgaben und Assets zentralisieren",
        "Effizientere Zusammenarbeit zwischen Design, Entwicklung und Kunde"
      ],
      priceRange: "ab 1.500 €, abhängig von der Prozesskomplexität und Tool-Integration.",
      additionalPriceInfo: "Besonders hilfreich für Agenturen, die wiederkehrende Abläufe digitalisieren möchten."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leistungsübersicht
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maßgeschneiderte technische Lösungen für Ihre Agentur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} onContactClick={onContactClick} />
            </div>
          ))}
        </div>
          <Button onClick={onContactClick} variant="outline" className="w-full mt-4">
              Jetzt anfragen
          </Button>
      </div>
    </section>
  );
};
