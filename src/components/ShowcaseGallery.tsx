import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code } from "lucide-react";
import { DemoModal } from "./DemoModal";
import { CodeModal } from "./CodeModal";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  codeSnippet: string;
  imageSrc: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "hero-reveal",
    title: "Hero Reveal Animation",
    description: "GSAP-basierte Scroll-gesteuerte Animation mit ScrollTrigger für beeindruckende Hero-Sektionen.",
    demoUrl: "https://codepen.io/GreenSock/embed/preview/xxpBoME?default-tab=result",
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
    imageSrc: "/placeholder.svg"
  },
  {
    id: "interactive-hover",
    title: "Interactive Hover Boxes",
    description: "Smooth 3D-Transformationen und Parallax-Effekte für interaktive Karten und Grid-Layouts.",
    demoUrl: "https://codepen.io/GreenSock/embed/preview/vYdKOLZ?default-tab=result",
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
    imageSrc: "/placeholder.svg"
  },
  {
    id: "scroll-story",
    title: "Scroll-Triggered Story",
    description: "Narrative Scroll-Erlebnisse mit koordinierten Animationen und Webflow CMS-Integration.",
    demoUrl: "https://codepen.io/GreenSock/embed/preview/NWGjJMP?default-tab=result",
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
    imageSrc: "/placeholder.svg"
  }
];

export const ShowcaseGallery = () => {
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
              Showcase: Technische Möglichkeiten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beispiele für Motion Design, Interactive Experiences und Webflow-Integrationen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="showcase-card overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                  <Code className="h-16 w-16 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-demo flex-1"
                      onClick={() => handleDemoClick(item)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Demo ansehen
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-code flex-1"
                      onClick={() => handleCodeClick(item)}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
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
