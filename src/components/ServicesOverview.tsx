import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Network, MessageSquare } from "lucide-react";

interface ServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  priceRange?: string;
  onContactClick: () => void;
}

const ServiceCard = ({ icon: Icon, title, description, features, priceRange, onContactClick }: ServiceProps) => (
  <Card className="p-8 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col h-full">
    <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-lg self-start">
      <Icon className="h-8 w-8 text-accent" />
    </div>
    <h3 className="text-2xl font-semibold text-foreground mb-3">
      {title}
    </h3>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      {description}
    </p>
    <ul className="space-y-2 mb-6 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="text-sm text-muted-foreground flex items-start">
          <span className="text-accent mr-2 mt-0.5">→</span>
          {feature}
        </li>
      ))}
    </ul>
    {priceRange && (
      <p className="text-lg font-semibold text-foreground mb-4">
        {priceRange}
      </p>
    )}
    <Button onClick={onContactClick} variant="outline" className="w-full">
      Anfragen
    </Button>
  </Card>
);

interface ServicesOverviewProps {
  onContactClick: () => void;
}

export const ServicesOverview = ({ onContactClick }: ServicesOverviewProps) => {
  const services = [
    {
      icon: Sparkles,
      title: "Motion-Integration & GSAP Showcases",
      description: "Professionelle Animationen und interaktive Erlebnisse für moderne Webprojekte.",
      features: [
        "GSAP ScrollTrigger & Timeline Animationen",
        "Webflow Custom Code Integration",
        "Performance-optimierte Motion Design Umsetzung",
        "Responsive Animation Behavior"
      ],
      priceRange: "ab 1.500 €"
    },
    {
      icon: Network,
      title: "Prozess- & Workflow-Integration",
      description: "Nahtlose Verbindung von APIs, Automationen und Webflow CMS.",
      features: [
        "API-Integration (REST, GraphQL)",
        "Webflow CMS & Datenbank-Anbindung",
        "Workflow-Automationen (Make, Zapier, n8n)",
        "Third-Party Tools & Services"
      ],
      priceRange: "ab 2.000 €"
    },
    {
      icon: MessageSquare,
      title: "Technische Beratung & Showcases",
      description: "Support für Pitches, Demos und technische Machbarkeitsanalysen.",
      features: [
        "Technische Machbarkeitsprüfung",
        "Interaktive Demo-Prototypen",
        "Code-Dokumentation & Übergabe",
        "Technischer Support & Optimierung"
      ],
      priceRange: "auf Anfrage"
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
      </div>
    </section>
  );
};
