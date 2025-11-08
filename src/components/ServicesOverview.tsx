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
                        'text-lg',
                        'md:text-xl',
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
                  <p className="text-lg font-semibold text-foreground mb-2" style={{ whiteSpace: "pre-line" }}>
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
            title: "INTEGRATION & ANBINDUNG",
            description: "Sie nutzen verschiedene Systeme, die miteinander kommunizieren müssen? Ich verbinde Ihre gewachsene IT-Landschaft mit modernen Tools – unabhängig von Technologie oder Altersunterschied der Systeme. Von Legacy-Datenbanken bis Cloud-Services.",
            features: [
                "Custom ERP-Integrationen",
                "Legacy-Datenbank-Anbindungen",
                "REST & SOAP API-Entwicklung",
                "Cloud-Service-Integration",
                "Third-Party-System-Verbindungen",
            ]
        },
        {
            icon: Network,
            title: "WARTUNG & SUPPORT",
            description: "Ihre Systeme laufen – aber wer kümmert sich um Updates, Fehler oder Performance-Probleme? Ich übernehme die laufende technische Betreuung, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
            features: [
                "Laufende System-Wartung",
                "Bug-Fixes & Updates",
                "Performance-Optimierung",
                "Monitoring & Fehler-Tracking",
                "Emergency-Support"
            ]
        },
        {
            icon: MessageSquare,
            title: "AUTOMATISIERUNG",
            description: "Manuelle Datenübertragungen, Excel-Imports oder wiederkehrende Tasks kosten Zeit und sind fehleranfällig. Ich automatisiere diese Prozesse, damit Ihr Team effizienter arbeiten kann.",
            features: [
                "Prozess-Automatisierung",
                "Daten-Synchronisation",
                "Report-Generierung",
                "Workflow-Optimierung",
                "Manuelle Tasks eliminieren"
            ]
        },
        {
            icon: MessageSquare,
            title: "BERATUNG & ANALYSE",
            description: "Unsicher, ob eine Integration machbar ist oder was die beste Lösung wäre? Ich analysiere Ihre IT-Landschaft, bewerte technische Machbarkeit und entwickle pragmatische Konzepte – bevor Sie investieren.",
            features: [
                "IT-Landschaft-Analyse",
                "Integrations-Konzepte",
                "Technische Machbarkeit",
                "Kosten-Nutzen-Bewertung",
                "Langfristige Roadmap"
            ]
        }
    ];
  /*const services = [
    {
      icon: Sparkles,
      title: "Integration & Anbindung",
      description: "Ich verbinde Ihre Systeme um ",
      features: [
        "Custom ERP-Integrationen",
        "Legacy-Datenbank-Anbindungen",
        "REST & SOAP API-Entwicklung",
          "Cloud-Service-Integration",
          "Third-Party-System-Verbindungen",
      ],
      priceRange: "1.000 - 1.800 € \nLaunch-Preis: 850 - 1.530 €",
      additionalPriceInfo: "Einfache Setups ab 700 €"
    },
    {
      icon: Network,
      title: "Wartung & Support",
      description: "Technische Grenzen von Webflow überwinden",
      features: [
        "Laufende System-Wartung",
        "Bug-Fixes & Updates",
        "Performance-Optimierung",
          "Monitoring & Fehler-Tracking",
          "Emergency-Support"
      ],
      priceRange: "ab 2.000 € \nLaunch-Preis: ab 1.700 €",
      additionalPriceInfo: "Je nach Komplexität und Umfang"
    },
    {
      icon: MessageSquare,
      title: "AUTOMATISIERUNG",
      description: "Interne Abläufe digitalisieren - mehr Zeit fürs Wesentliche",
      features: [
        "Prozess-Automatisierung",
        "Daten-Synchronisation",
        "Report-Generierung",
          "Workflow-Optimierung",
          "Manuelle Tasks eliminieren"
      ],
      priceRange: "ab 1.500 € \nLaunch-Preis: ab 1.275 €",
      additionalPriceInfo: "Abhängig von der Prozesskomplexität"
    },
      {
          icon: MessageSquare,
          title: "BERATUNG & ANALYSE",
          description: "Monatlicher Support-Retainer: ab 900 € / Monat (10 h) (Launch-Preis: ab 765 € / Monat)",
          description2: "Stundensatz für Ad-hoc-Anfragen: 90 € / Stunde (Launch-Preis: 77 € / Stunde)",
          description3: "Größere Wartungsverträge: Individuelle Vereinbarung",
          features: [],
          priceRange: "ab 450 € / Monat \nLaunch-Preis: ab 383 € / Monat",
          additionalPriceInfo: "Ideal für Agenturen mit wiederkehrenden technischen Anforderungen",
      }
  ];*/

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leistungsübersicht
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meine Leistungen im Überblick
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
