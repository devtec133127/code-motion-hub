import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import {useState} from "react";
import {ContactForm} from "@/components/ContactForm.tsx";

interface ContactSectionProps {
  id?: string;
}

export const ContactSection = ({ id = "contact" }: ContactSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section id={id} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-flex p-4 bg-accent/10 rounded-full">
          <Mail className="h-12 w-12 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schauen wir kurz auf Ihre Prozesse.
        </h2>
          <p className="text-lg mb-4">
              Lassen Sie uns über Ihre technischen Anforderungen sprechen.
              Ich finde eine passende Lösung für Sie.
          </p>

          <div className="bg-muted rounded-xl p-6 text-left space-y-3">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                  Kostenloser 20-Min-Prozess-Check
              </h3>
              <p className="text-sm text-muted-foreground">So läuft’s ab:</p>
              <ul className="space-y-2">
                  <li className="flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      Sie zeigen mir kurz Ihr aktuelles Setup
                  </li>
                  <li className="flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      Ich identifiziere 2–3 konkrete Optimierungspotenziale
                  </li>
                  <li className="flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      Sie bekommen Quick-Wins zum sofort Umsetzen
                  </li>
              </ul>
          </div>

          <p className="mt-6 text-sm italic text-muted-foreground">
              Kein Verkaufsgespräch. Keine leeren Versprechen. Nur echte Insights.
          </p>
        <Button 
          onClick={() => setIsModalOpen(true)}
          size="lg"
          className="btn-cta text-lg px-8 py-6 mt-6 shadow-soft hover:shadow-lg transition-all duration-300"
        >
            Kostenlose Beratung
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
       <ContactForm open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </section>
  );
};
