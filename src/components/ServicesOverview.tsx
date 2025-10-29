import { Card } from "@/components/ui/card";
import {Sparkles, Network, MessageSquare} from "lucide-react";
import React from "react";

interface ServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  features: string[];
  priceRange?: string;
  additionalPriceInfo?: string;
  onContactClick: () => void;
}

const ServiceCard = ({ icon: Icon, title, description, description2, description3, features,
                         priceRange, additionalPriceInfo, onContactClick }: ServiceProps) => (
  <Card className="p-8 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col h-full">

      <div className="h-full flex flex-col p-8 shadow-card hover:shadow-soft transition-all duration-300">
          {/* --- Oberer Bereich, dehnt sich --- */}
          <div className="flex-1">
              <div className="flex justify-center">
                  <div className="flex mb-6 p-3 bg-accent/10 rounded-lg items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                  </div>
              </div>

              <h3 className={[
                        'text-2xl',
                         'font-semibold',
                        'text-foreground',
                         features.length === 0 ? 'mb-10' : 'mb-3'
                        ].filter(Boolean).join(' ')}>
                  {title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                  {description}
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                  {description2}
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                  {description3}
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
      title: "CRM-INTEGRATION & LEAD-AUTOMATISIERUNG",
      description: "Leads automatisch von Webflow ins CRM übertragen",
      features: [
        "Webflow-Formulare direkt an HubSpot, Pipedrive, Airtable oder Notion senden",
        "Keine verlorenen Kontakte, volle Übersicht über Leads",
        "Automatische Benachrichtigungen & Lead-Qualifizierung",
      ],
      priceRange: "1.500 - 2.500 €",
      additionalPriceInfo: "Einfache Setups ab 1.000 €"
    },
    {
      icon: Network,
      title: "CUSTOM INTEGRATIONEN & API-ENTWICKLUNG",
      description: "Technische Grenzen von Webflow überwinden",
      features: [
        "Custom APIs und Middleware für komplexe Anforderungen",
        "Mitgliederbereiche, Dashboards oder Content-Automatisierung",
        "Anbindung von externen Drittanbieter-Tools (z.B. Paymentprovider, externe Datenbanken)"
      ],
      priceRange: "ab 2.500 €",
      additionalPriceInfo: "Je nach Komplexität und Umfang"
    },
    {
      icon: MessageSquare,
      title: "PROZESSAUTOMATISIERUNG FÜR AGENTUREN",
      description: "Interne Abläufe digitalisieren - mehr Zeit fürs Wesentliche",
      features: [
        "Projektstatus automatisch tracken und Deadlines überwachen",
        "Feedback-Workflows und Freigaberunden digital steuern",
        "Zentrale Dashboards für Projekte, Tasks und Assets"
      ],
      priceRange: "ab 1.800 €",
      additionalPriceInfo: "Abhängig von der Prozesskomplexität"
    },
      {
          icon: MessageSquare,
          title: "LAUFENDE BETREUUNG",
          description: "Monatlicher Support-Retainer: ab 1.100 € / Monat (10 h)",
          description2: "Stundensatz für Ad-hoc-Anfragen: 110 € / Stunde",
          description3: "Größere Wartungsverträge: Individuelle Vereinbarung",
          features: [],
          priceRange: "ab 500 € / Monat",
          additionalPriceInfo: "Ideal für Agenturen mit wiederkehrenden technischen Anforderungen",
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
