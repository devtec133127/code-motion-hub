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
          Bereit für Ihr nächstes Projekt?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Lassen Sie uns über Ihre technischen Anforderungen sprechen. 
          Ich find eine passende Lösung für Sie.
        </p>
        <Button 
          onClick={() => setIsModalOpen(true)}
          size="lg"
          className="btn-cta text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300"
        >
            Kostenlose Beratung
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
       <ContactForm open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </section>
  );
};
