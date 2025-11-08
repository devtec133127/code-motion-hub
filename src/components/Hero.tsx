import { Button } from "@/components/ui/button";
import {ArrowRight, Check, Circle} from "lucide-react";
import {LaunchPhaseBanner} from "@/components/LaunchPhaseBanner.tsx";
import React from "react";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-24 pb-2 bg-gradient-subtle overflow-hidden">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-full max-w-3xl z-10">
          <LaunchPhaseBanner />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(188,230,243,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(188,230,243,0.1),transparent_50%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in mb-24 mt-24">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl leading-snug font-bold tracking-tight text-foreground mt-24 mb-6">
            Integration & Wartung für gewachsene IT-Landschaften
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Effizienz, Integration, Automatisierung
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Ich halte Ihre individuellen Systeme am Laufen und verbinde sie mit modernen Tools - ohne dass Sie einen Full-Time-Developer einstellen müssen.
        </p>

      <h3 className="text-xl font-semibold text-foreground mb-2 mx-auto">
          Spezialisiert auf:
      </h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <SkillItem text="Custom CRM / ERP - Integrationen" />
          <SkillItem text="Anbindung von legacy Datenbanken" />
          <SkillItem text="REST & SOAP APIs" />
          <SkillItem text="Prozess-Automatisierung" />
      </div>


          <Button
          onClick={onContactClick}
          size="lg"
          className="btn-cta text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300"
        >
            Kostenlose Beratung
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-start gap-3 bg-white border border-slate-100 rounded-lg p-3 shadow-sm">
    <span className="flex-shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-green-600" />
    </span>
        <p className="text-sm text-slate-700">{text}</p>
    </div>
);