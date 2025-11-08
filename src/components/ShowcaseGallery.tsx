import {ReactElement, ReactNode, useState} from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Eye,
    Code,
    ShoppingCartIcon,
    Zap,
    Workflow,
    LayersIcon,
    ClockArrowDownIcon,
    LightbulbIcon,
    LucideFormInput, UserIcon, LucideIcon
} from "lucide-react";
import { DemoModal } from "./DemoModal";
import { CodeModal } from "./CodeModal";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  codeSnippet: string;
  imageSrc: string;
  icon: LucideIcon;
  advantage: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "hero-reveal",
    title: "Legacy-System-Wartung & Updates",
    description: "Ihr individuelles ERP oder Custom-CRM läuft seit Jahren stabil – aber Updates, Bugfixes oder Anpassungen bleiben liegen, weil das Know-how fehlt. Ich übernehme die Wartung.",
    demoUrl: "",
    codeSnippet: `gsap.from(".hero-element", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power3.out"
});`,
    imageSrc: "/placeholder.svg",
      icon: ShoppingCartIcon,
      advantage: "Spart ca. 5-8 Stunden/Woche für IT-Notfall-Management + verhindert System-Ausfälle"
  },
  {
    id: "interactive-hover",
    title: "API-Integration zwischen Alt & Neu",
    description: "Sie wollen moderne Tools (z.B. Cloud-Services, neue Software) mit Ihren bestehenden Systemen verbinden. Ich baue die Bridge – egal ob REST, SOAP oder proprietäre Schnittstellen.",
    demoUrl: "",
    codeSnippet: `const cards = gsap.utils.toArray('.card');
cards.forEach(card => {
  gsap.to(card, {
    scale: 1.05,
    rotationY: 5,
    ease: "power2.out",
    duration: 0.3,
    paused: true
  });
});`,
    imageSrc: "/placeholder.svg",
      icon: ClockArrowDownIcon,
      advantage: "Neue Tools nutzen, ohne alte Systeme ersetzen zu müssen"
  },
  {
    id: "scroll-story",
    title: "Datenbank-Synchronisation & Datenmigration",
    description: "Daten zwischen verschiedenen Systemen synchronisieren, alte Datenbanken migrieren oder regelmäßige Datenabgleiche automatisieren.\n",
    demoUrl: "",
    codeSnippet: `gsap.timeline({
  scrollTrigger: {
    trigger: ".story-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
})
.from(".story-text", { opacity: 0, x: -100 })
.from(".story-image", { opacity: 0, scale: 0.8 });`,
    imageSrc: "/placeholder.svg",
      icon: LightbulbIcon,
      advantage: "Spart ca. 4-6 Stunden/Woche für manuelle Datenübertragung + reduziert Fehlerquote um 95%"
  },
  {
    id: "automation",
    title: "CRM-Integration & Lead-Automatisierung",
    description: "Leads aus verschiedenen Quellen (Website, Formulare, externe Systeme) werden automatisch in Ihr CRM übertragen – sauber strukturiert und nachvollziehbar.\n",
    demoUrl: "",
    codeSnippet: `gsap.timeline({
  scrollTrigger: {
    trigger: ".story-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
})
.from(".story-text", { opacity: 0, x: -100 })
.from(".story-image", { opacity: 0, scale: 0.8 });`,
    imageSrc: "/placeholder.svg",
      icon: LucideFormInput,
      advantage: "Spart ca. 3-5 Stunden/Woche + keine verlorenen Leads mehr"
  },
  {
    id: "personalizing",
    title: "Prozess-Automatisierung für Routine-Tasks",
    description: "Wiederkehrende manuelle Aufgaben (Excel-Imports, Datenübertragungen, Report-Generierung) werden automatisiert.",
    demoUrl: "",
    codeSnippet: `gsap.timeline({
  scrollTrigger: {
    trigger: ".story-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
})
.from(".story-text", { opacity: 0, x: -100 })
.from(".story-image", { opacity: 0, scale: 0.8 });`,
    imageSrc: "/placeholder.svg",
      icon: UserIcon,
      advantage: "Spart ca. 6-10 Stunden/Woche für administrative Aufgaben + Mitarbeiter können sich auf Kernaufgaben fokussieren"
  }
];

interface ShowcaseGalleryProps {
    onContactClick: () => void;
}

export const ShowcaseGallery = ({ onContactClick }: ShowcaseGalleryProps) => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  const handleDemoClick = (item: ShowcaseItem) => {
    setSelectedItem(item);
    setDemoModalOpen(true);
  };

  const handleCodeClick = (item: ShowcaseItem) => {
    setSelectedItem(item);
    setCodeModalOpen(true);
  };

  return (
    <>
      <section className="py-24 px-6 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Use-Cases: Wo meine Unterstützung Mehrwert schafft
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Praxisnahe Anwendungsfälle rund um Integration, Wartung und Automatisierung gewachsener IT-Landschaften
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="showcase-card overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-24 bg-secondary/50 flex items-center justify-center">
                    <div className="h-16 w-16 text-muted-foreground/30" >
                        <item.icon size={64} />
                    </div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md max-w-full min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 break-words break-all md:break-normal">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed break-words">
                    {item.description}
                  </p>
                    <p className="text-accent text-sm leading-relaxed break-words mt-2">
                        {item.advantage}
                    </p>
                </div>
              </Card>
            ))}
          </div>
            <div className="btn-cta text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300 flex justify-center">
            <Button
              size="lg"
              className="btn-demo mt-4 flex-none"
              onClick={onContactClick}
            >
              <Eye className="mr-2 h-4 w-4" />
                Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {selectedItem && (
        <>
          <DemoModal
            open={demoModalOpen}
            onOpenChange={setDemoModalOpen}
            title={selectedItem.title}
            demoUrl={selectedItem.demoUrl}
          />
          <CodeModal
            open={codeModalOpen}
            onOpenChange={setCodeModalOpen}
            title={selectedItem.title}
            codeSnippet={selectedItem.codeSnippet}
          />
        </>
      )}
    </>
  );
};
