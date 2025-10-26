import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  id?: string;
}

export const ContactSection = ({ id = "contact" }: ContactSectionProps) => {
  const handleContact = () => {
    window.location.href = "mailto:kontakt@prozess-integration.de?subject=Projektanfrage";
  };

  return (
    <section id={id} className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-flex p-4 bg-accent/10 rounded-full">
          <Mail className="h-12 w-12 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Bereit für Ihr nächstes Projekt?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Lassen Sie uns über Ihre technischen Anforderungen sprechen. 
          Egal ob GSAP-Integration, Webflow-Automation oder API-Anbindung – wir finden die passende Lösung.
        </p>
        <Button 
          onClick={handleContact}
          size="lg"
          className="btn-cta text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300"
        >
          Jetzt Projekt anfragen
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          Antwort in der Regel innerhalb von 24 Stunden
        </p>
      </div>
    </section>
  );
};
